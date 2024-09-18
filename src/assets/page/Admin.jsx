import React, { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { v4 } from "uuid";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { data, imgDB } from "../../utility/firebase";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { AiOutlineLoading } from "react-icons/ai";

const Admin = () => {
  const contentRef = useRef(null);

  // State for form fields and loading
  const [image, setImage] = useState(""); 
  const [imageFile, setImageFile] = useState(null); 
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [theme, setTheme] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Handle image file selection and preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result); // Preview image
      setImageFile(file);
      reader.readAsDataURL(file); 
    }
    return file
  };

  // Upload image to Firebase Storage
  const uploadImageToFirebase = async () => {
    if (!imageFile) return null; 
    const imageRef = ref(imgDB, `Img/${v4()}`);
    const snapshot = await uploadBytes(imageRef, imageFile);
    return getDownloadURL(snapshot.ref);
  };

  // Save post to Firestore
  const savePostToFirestore = async (postData) => {
    const postId = v4();
    await setDoc(doc(data, "posts", postId), postData);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const uploadedImageUrl = await uploadImageToFirebase();

      const postData = {
        title,
        content,
        imageUrl: uploadedImageUrl || "",
        theme,
        createdAt: new Date(),
      };

      await savePostToFirestore(postData);

      // Reset form
      setTitle("");
      setContent("");
      setImage("");
      setImageFile(null);
      setTheme("");

      
      
      // Success message
      toast.success("Post created successfully!");
    } catch (error) {
      console.error("Error submitting post:", error);
      toast.error("Error occurred while submitting the post.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-3xl font-bold mb-8">Create Post</h1>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-indigo-200"
            placeholder="Enter your post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Content <span className="text-red-500">*</span>
          </label>
          <textarea
            ref={contentRef}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-indigo-200 mt-2 min-h-[200px]"
            placeholder="Write your post content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>

        {/* Theme Selection */}
        <div className="">
          <Select onValueChange={setTheme}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Người tạo" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Admin</SelectLabel>
                <SelectItem value="Thục Nguyên">Thục Nguyên</SelectItem>
                <SelectItem value="Yến Nhi">Yến Nhi</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Featured Image */}
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Picture</Label>
          <Input id="picture" type="file" onChange={handleImageChange} />
          {image && (
            <div className="mt-4">
              <p className="text-sm text-gray-500 mb-2">Preview:</p>
              <img
                src={image}
                alt="Preview"
                className="w-48 h-48 object-cover rounded-lg"
              />
            </div>
          )}
        </div>
        {/* ${isLoading ? "opacity-50 cursor-not-allowed" : ""} */}
        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className={`w-full bg-indigo-600 text-white font-medium py-3 rounded-lg hover:bg-indigo-500 transition 
               
              `}
            disabled={isLoading}
          >
            {isLoading ? <AiOutlineLoading className="animate-spin text-2xl mx-auto" /> : "Gửi đi"}
          </button>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
};

export default Admin;
