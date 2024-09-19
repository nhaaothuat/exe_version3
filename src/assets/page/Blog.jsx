
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { data } from '../../../src/utility/firebase';


const Blog = () => {


  
     const [blog, setBlog] = useState([]);
   
     const fetchBlog = async () => {
       const querySnapshot = await getDocs(collection(data, "posts"));
       const blogData = querySnapshot.docs.map((doc) => ({
         id: doc.id,
         ...doc.data(),
       }));
       setBlog(blogData);
       console.log(blogData);
     };
   
     
     useEffect(() => {
       fetchBlog();
     }, []);

  return (
    <>
      {/* Banner */}

      <div className="relative">
        <div className="absolute inset-0 bg-white bg-opacity-50 flex flex-col justify-center items-center text-center">
          <span className="text-lg md:text-xl text-black">Contact Us</span>
          <h1 className="text-3xl md:text-5xl font-bold text-black">
            Get Helps & Friendly Support
          </h1>
        </div>
        <img
          src="https://channel.mediacdn.vn/428462621602512896/2023/7/14/photo-1-1689302121228313858070.jpg"
          alt=""
          className="w-full h-48 md:h-64 object-cover"
        />
      </div>

      {/*End  */}

      {/* <section className="text-gray-600 body-font overflow-hidden">
        <div className="container py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-4 flex flex-wrap md:flex-nowrap">
              <Link to="/">
                {" "}
                <article className="flex bg-white transition hover:shadow-xl ">
                  <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                    <time
                      dateTime="2022-10-10"
                      className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                    >
                      <span>2022</span>
                      <span className="w-px flex-1 bg-gray-900/10"></span>
                      <span>Oct 10</span>
                    </time>
                  </div>

                  <div className="hidden sm:block sm:basis-48">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                      className="aspect-square h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-4">
                      <h3 className="font-bold uppercase text-gray-900">
                        Gia sư giá rẻ, chất lượng, uy tín tại thành phố Quy Nhơn
                      </h3>

                      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                        Gia sư tại nhà có thật sự hiệu quả? Thuê gia sư dạy kèm
                        cho con, có nên không? Đây là câu hỏi lớn của rất nhiều
                        các bậc phụ huynh và học sinh bận rộn, không có nhiều
                        thời gian dành cho con. Trong ...
                      </p>
                    </div>

                    <div className="sm:flex sm:items-end sm:justify-end">
                      <Link
                        to="/blog"
                        className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                      >
                        Read Blog
                      </Link>
                    </div>
                  </div>
                </article>
              </Link>
            </div>

           
          </div>
        </div>
      </section> */}

<section className="text-gray-600 body-font overflow-hidden">
        <div className="container py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            {blog.map((blog) => (
              <div key={blog.id} className="py-4 flex flex-wrap md:flex-nowrap">
                <Link to={`/detailn/${blog.id}`}>
                  <article className="flex bg-white transition hover:shadow-xl">
                    <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                      <time
                        // dateTime={blog.createdAt }
                        className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                      >
                        {/* <span>{blog.createdAt}</span> */}
                        <span className="w-px flex-1 bg-gray-900/10"></span>
                        {/* <span>{new Date(blog.createdAt).toLocaleString('default', { month: 'short', day: 'numeric' })}</span> */}
                      </time>
                    </div>

                    <div className="hidden sm:block sm:basis-48">
                      <img
                        alt={blog.title}
                        src={blog.imageUrl}
                        className="aspect-square h-full w-full object-cover"
                      />
                    </div>

                    <div className="flex flex-1 flex-col justify-between">
                      <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-4">
                        <h3 className="font-bold uppercase text-gray-900">
                          {blog.title}
                        </h3>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                          {blog.content}
                        </p>
                      </div>

                      <div className="sm:flex sm:items-end sm:justify-end">
                        <Link
                          to={`/detailn/${blog.id}`}
                          className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
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
