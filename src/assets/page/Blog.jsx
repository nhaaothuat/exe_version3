import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../../../src/utility/firebase";

const Blog = () => {
  const [blog, setBlog] = useState([]);

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
                          className="h-full w-full object-cover"
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
    </>
  );
};

export default Blog;
