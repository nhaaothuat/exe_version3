import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { data } from "../../../src/utility/firebase";
import { Link, useParams } from "react-router-dom";
import Loading from "../component/Loading/Loading";

const DetailNews = () => {
  const { id } = useParams(); // Lấy id của bài viết từ URL
  const [blog, setBlog] = useState(null); // State để lưu trữ dữ liệu bài viết
  const [loading, setLoading] = useState(true); // State để xử lý loading

  // Hàm lấy dữ liệu bài viết từ Firebase
  const fetchBlogDetail = async () => {
    try {
      const docRef = doc(data, "posts", id); // Truy vấn dựa trên id
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setBlog(docSnap.data()); // Lưu dữ liệu vào state blog
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching document:", error);
    } finally {
      setLoading(false); // Đặt loading thành false khi hoàn tất
    }
  };

  useEffect(() => {
    fetchBlogDetail(); // Gọi hàm fetchBlogDetail khi component mount
  }, [id]);

  return (
    
<div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {loading ? (
          <Loading />
        ) : !blog ? (
          <p className="text-center py-10">Blog not found</p> // Hiển thị nếu không tìm thấy blog
        ) : (
          <>
            {/* Image */}
            <div className="relative">
              <img
                className="w-full h-64 object-cover"
                src={blog.imageUrl}
                alt="News"
              />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white px-4 py-2">
                Published on:{" "}
                <span className="font-semibold">
                  {blog.createdAt
                    ? blog.createdAt.toDate().toLocaleDateString()
                    : "Unknown date"}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>

              {/* Author */}
              <p className="text-sm text-gray-500 mb-4">
                By: <span className="font-medium">{blog.theme}</span>
              </p>

              {/* <p className="text-gray-700 mb-4"  >{blog.content}</p> */}
              <div
                className="text-gray-700 mb-4"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
              {/* Back to Home button */}
              <div className="mt-6">
                <Link to="/blog">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                    Back to Home
                  </button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>

  );
};

export default DetailNews;
