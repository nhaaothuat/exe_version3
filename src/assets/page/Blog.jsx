import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../../../src/utility/firebase";
import { v4 } from "uuid";
import { toast, ToastContainer } from "react-toastify";
import { AiOutlineLoading } from "react-icons/ai";

const Blog = () => {
  const [blog, setBlog] = useState([]);

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const saveContactToFirestore = async (emailContact) => {
    const emailId = v4();
    await setDoc(doc(data, "email", emailId), emailContact);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const emailContact = { email };

      await saveContactToFirestore(emailContact);

      setEmail(""); // Clear the input
      toast.success("Chúc mừng đã theo dõi thành công!");
    } catch (error) {
      toast.error("Chúc bạn may mắn lần sau!");
      console.log(error);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  const fetchBlog = async () => {
    const querySnapshot = await getDocs(collection(data, "posts"));
    const blogData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setBlog(blogData);
    // console.log(blogData);
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <>
      {/* Banner */}

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-white flex flex-col justify-center items-center text-center p-8 md:p-12">
          <span className="text-xl md:text-2xl lg:text-3xl text-black">
            Chào mừng đến với Blog Gia Sư
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mt-4">
            Khám phá kiến thức & kinh nghiệm dạy học hiệu quả
          </h1>
        </div>
        <img
          src="https://channel.mediacdn.vn/428462621602512896/2023/7/14/photo-1-1689302121228313858070.jpg"
          alt="Blog Gia Sư"
          className="w-full h-64 md:h-80 lg:h-96 object-cover"
        />
      </div>

      {/*End  */}

      <section className="text-gray-600 body-font">
        <div className="container max-w-7xl py-12 px-4 md:px-8 mx-auto">
          <div className="divide-y-2 divide-gray-100">
            {blog.map((blog) => (
              <div
                key={blog.id}
                className="py-8 flex flex-col md:flex-row md:flex-nowrap"
              >
                <Link to={`/detailn/${blog.id}`} className="w-full">
                  <article className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 transition-transform transform hover:scale-105">
                    {/* Blog Image */}
                    <div className="w-full h-56 md:h-auto md:w-1/3 flex items-center justify-center bg-gray-200">
                      {blog.imageUrl ? (
                        <img
                          alt={blog.title}
                          src={blog.imageUrl}
                          className=" object-cover"
                        />
                      ) : (
                        <span className="text-gray-500">
                          No image available
                        </span>
                      )}
                    </div>

                    {/* Blog Content */}
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-lg md:text-xl text-gray-900 hover:text-blue-500 transition">
                          {blog.title}
                        </h3>
                        <p className="text-xs text-gray-500">
                          {blog.createdAt
                            ? blog.createdAt.toDate().toLocaleDateString()
                            : "Unknown date"}
                        </p>
                      </div>
                      <p
                        className="mt-4 text-sm md:text-base text-gray-700 line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                      />

                      {/* Read More Button */}
                      <div className="mt-auto flex justify-end">
                        <Link
                          to={`/detailn/${blog.id}`}
                          className="inline-block bg-gradient-to-r from-blue-400 to-purple-500 px-4 py-2 text-sm font-bold text-white rounded-full shadow-lg transition hover:from-blue-500 hover:to-purple-600"
                        >
                          Read Blog
                        </Link>
                      </div>
                    </div>
                  </article>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
              Chào Mừng!
            </h2>

            <p className="mt-4 text-gray-600 sm:text-lg">
              Hãy đăng ký để nhận thêm thông tin hữu ích mỗi ngày!
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-xl">
            <form onSubmit={handleSubmit} className="sm:flex sm:gap-4">
              <div className="sm:flex-1">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Nhập địa chỉ email"
                  className="w-full rounded-lg border-gray-300 bg-white p-4 text-gray-700 shadow-md transition duration-300 ease-in-out focus:border-rose-500 focus:ring focus:ring-rose-300"
                />
              </div>

              <button
                type="submit"
                className="group mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-rose-600 px-6 py-4 text-white shadow-lg transition duration-300 hover:bg-rose-700 focus:outline-none focus:ring focus:ring-rose-300 sm:mt-0 sm:w-auto"
              >
                {loading ? (
                  <AiOutlineLoading className="animate-spin text-2xl" />
                ) : (
                  <>
                    <span className="text-base font-medium">Gửi đi</span>
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
          <ToastContainer />
        </div>
      </section>
    </>
  );
};

export default Blog;
