import React from "react";
import test from "/test.jpg";
const list_blog = [
  {
    id: 1,
    title: "Books",
    createdAt: "5 JAN 2020",
    "sub-title": "Tell me something",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolor voluptas iure delectus nostrum fuga, culpa voluptates suscipit neque maiores error. Delectus itaque, velit maiores maxime optio illum earum mollitia.",
  },
  {
    id: 2,
    title: "Books",
    createdAt: "5 JAN 2020",
    "sub-title": "Tell me something",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolor voluptas iure delectus nostrum fuga, culpa voluptates suscipit neque maiores error. Delectus itaque, velit maiores maxime optio illum earum mollitia.",
  },
  {
    id: 3,
    title: "Books",
    createdAt: "5 JAN 2020",
    "sub-title": "Tell me something",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolor voluptas iure delectus nostrum fuga, culpa voluptates suscipit neque maiores error. Delectus itaque, velit maiores maxime optio illum earum mollitia.",
  },
  {
    id: 4,
    title: "Books",
    createdAt: "5 JAN 2020",
    "sub-title": "Tell me something",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolor voluptas iure delectus nostrum fuga, culpa voluptates suscipit neque maiores error. Delectus itaque, velit maiores maxime optio illum earum mollitia.",
  },
  {
    id: 5,
    title: "Books",
    createdAt: "5 JAN 2020",
    "sub-title": "Tell me something",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolor voluptas iure delectus nostrum fuga, culpa voluptates suscipit neque maiores error. Delectus itaque, velit maiores maxime optio illum earum mollitia.",
  },
];

const Blog = () => {
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

      <div className="flex justify-center items-center min-h-screen bg-Yellow font-FigTree text-base">
        <div className="flex flex-col justify-center bg-white p-5 rounded-xl border-2 border-black h-full max-lg:w-[375px] lg:w-[384px] shadow-[10px_10px_0px_1px_rgba(0,0,0,1)]">
          <img
            src={test}
            alt="illustration"
            className="rounded-tl-xl rounded-tr-xl  "
          />
          <div className="mt-6">
            <button className="bg-Yellow px-4 py-2 rounded-lg font-extrabold cursor-default">
              Learning
            </button>
            <p className="mt-4 font-bold">Published 21 Dec 2023</p>
            <h2 className="font-extrabold text-[20px] mt-4 mb-4 hover:text-Yellow hover:cursor-pointer">
              HTML & CSS foundations
            </h2>
            <p className="text-Grey">
              These languages are the backbone of every website, defining
              structure, content, and presentation.
            </p>
            <div className="mt-4 flex justify-start items-center gap-4">
              {/* <img src={avatar} alt='avatar'
                className='w-10' /> */}
              <p className="font-extrabold text-black">Greg Hooper</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
