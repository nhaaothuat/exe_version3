import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SubjectCard from "../page/SubjectCard";
// import TeamSection from "../page/TeamSection";
// import { FaPlay } from "react-icons/fa6";
// import { SlideRight } from "../../utility/animation";
// import test from "/test.jpg";
const testimonials = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/68/Logo_FPT_Education.png", // URL logo đầu tiên
    quote:
      "Nhờ vào trang web tôi đã tìm được gia sư toán cho con mình, có đầy đủ thông tin của gia sư và tôi có thể yên tâm hơn cho con mình học, đây là trang web các phụ huynh có thể tham khảo.",
    name: "Thanh Thảo",
    title: "Giáo viên môn Toán",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/68/Logo_FPT_Education.png", // URL logo thứ hai
    quote:
      "Các đánh giá từ học viên khác mà tôi đã chọn được gia sư phù hợp với mình. Có nhiều lớp học phù hợp với thời gian của tôi. Trang web này phải gọi là chân ái của cuộc đờii.  ",
    name: "Bảo Ngọc",
    title: "Giáo viên môn Vật lý",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/68/Logo_FPT_Education.png", // URL logo thứ ba
    quote:
      "Cảm ơn nền tảng đã kết nối với gia sư chất lượng, trong vòng 1 tháng tôi đã có thể cải thiện và học tốt được tiếng anh cơ bản nhờ sự tận tình của giảng viên.",
    name: "Minh Nhật ",
    title: "Giáo viên môn Hóa học",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/68/Logo_FPT_Education.png", // URL logo thứ tư
    quote:
      "Tôi đã biết thêm được nhiều gia sư hơn và trang web đã giúp tôi có thể biết được tổng quát về chất lượng dạy của gia sư và có thể dễ dàng cân nhắc trong việc chọn được gia sư phù hợp cho mình.  ",
    name: "Thanh Nhi",
    title: "Giáo viên môn Văn",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/68/Logo_FPT_Education.png", // URL logo thứ năm
    quote: "Hay quá!!!!!.",
    name: "Lê Ngọc ",
    title: "Giáo viên môn Tiếng anh",
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 1500);

    return () => clearInterval(interval); // Dọn dẹp interval khi component bị unmount
  }, []);

  return (
    <>
      {/* Banner  */}

      <div className="mb-16 ">
        <div className="bg-gray-100 ">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-green-400">
                  Nền tảng mới
                </p>
              </div>

              <h2 className="max-w-lg mb-6 font-sans text-5xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span className="relative ">Nền</span>
                </span>{" "}
                tảng tìm kiếm gia sư hiệu quả nhất.
              </h2>

              <p className="text-base text-gray-700 md:text-lg">
                Bạn cần gia sư hoặc muốn trở thành gia sư? StarHub là một nền
                tảng giúp bạn tiếp cận và hỗ trợ nhanh chóng.
              </p>
            </div>
            <div className="flex items-center sm:justify-center">
              <Link to="/about">
                {" "}
                <Button
                  className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide  transition duration-200 rounded shadow-md   focus:shadow-outline focus:outline-none"
                  variant="outline"
                >
                  Tìm hiểu
                </Button>
              </Link>
              <Link to="/product">
                <Button
                  className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide transition duration-200 rounded shadow-md   focus:shadow-outline focus:outline-none"
                  variant="outline"
                >
                  Tìm kiếm
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative px-4 sm:px-0">
          <div className="absolute inset-0 bg-gray-100 h-1/2" />
          <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
            <div className="inline-block p-8 text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <p className="font-bold tracking-wide text-gray-800">
                Dễ dàng kết nối gia sư, tiết kiệm chi phí
              </p>
            </div>
            <div className="inline-block p-8 text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <p className="font-bold tracking-wide text-gray-800">
                Tiết kiệm thời gian tiềm kiếm
              </p>
            </div>
            <div className="inline-block p-8 text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <p className="font-bold tracking-wide text-gray-800">
                Gia sư uy tín, chất lượng
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* End */}

      {/* Testiminal */}
      {/* <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-4">What our customers think</h2>
      <p className="text-lg text-gray-500 mb-8">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus commodi sint, similique cupiditate possimus suscipit delectus illum eos iure magnam!
      </p>

      <div className="flex items-start">
        <div className="w-1/2">
          <div className="h-2 bg-gray-200 rounded-full mb-8">
            <div
              className="h-2 bg-black rounded-full"
              style={{
                width: `${((currentIndex + 1) / testimonials.length) * 100}%`
              }}
            ></div>
          </div>
        </div>

        <div className="w-1/2 pl-8">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <img src={testimonials[currentIndex].logo} alt="Logo" className="h-10 mb-4"/>
            <p className="text-lg italic mb-4">
            &quot;{testimonials[currentIndex].quote}&quot;
            </p>
            <p className="font-semibold">{testimonials[currentIndex].name}</p>
            <p className="text-gray-500">{testimonials[currentIndex].title}</p>
          </div>
        </div>
      </div>
    </div> */}

      {/* Card */}
      <SubjectCard />
      {/* end */}

      {/* Blog */}

      {/* <section className="text-gray-600 body-font overflow-hidden">
        <div className="container py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-4 flex flex-wrap md:flex-nowrap">
              <Link to="/blog">
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

            <div className="py-4 flex flex-wrap md:flex-nowrap">
              <Link to="/blog">
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
                        Cẩm Nang Ôn Thi IELTS - Chiến Lược Đạt Band 7.0+
                      </h3>

                      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                        IELTS là một trong những chứng chỉ tiếng Anh phổ biến
                        nhất trên thế giới, đòi hỏi sự chuẩn bị kỹ lưỡng. Dưới
                        đây là các chiến lược giúp học viên đạt được band 7.0+
                        trong kỳ thi IELTS…
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
            <div className="py-4 flex flex-wrap md:flex-nowrap">
              <Link to="/blog">
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
                        Tài Liệu Vật Lý Lớp 12
                      </h3>

                      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                        Hệ Thống Lý Thuyết Và Bài Tập Môn Vật Lý Lớp 12, StarHub
                        Education chuyên cung cấp tài liệu tham khảo cho Sinh
                        Viên và Học Sinh tham khảo học tập chất lượng, hiệu quả…
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

      {/* End */}

      {/* Testimial */}
      <div className="container mx-auto px-4 py-8">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Khách hàng nhận xét về nền tảng chúng tôi
        </motion.h2>
        <motion.p
          className="text-lg text-gray-500 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        ></motion.p>

        <div className="flex items-start">
          <div className="w-1/2">
            <Progress
              value={((currentIndex + 1) / testimonials.length) * 100}
              className="bg-gray-200 rounded-full mb-8"
            />
          </div>

          <div className="w-1/2 pl-8">
            <motion.div
              className="bg-white shadow-lg rounded-lg p-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={testimonials[currentIndex].logo}
                alt="Logo"
                className="h-10 mb-4"
              />
              <p className="text-lg italic mb-4">
                &quot;{testimonials[currentIndex].quote}&quot;
              </p>
              <p className="font-semibold">{testimonials[currentIndex].name}</p>
              <p className="text-gray-500">
                {testimonials[currentIndex].title}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      {/* End */}

      <div className="bg-gradient-to-r from-blue-700 to-[#B06AB3] font-sans px-6 py-12">
        <div className="container mx-auto flex flex-col justify-center items-center text-center">
          <h2 className="text-white sm:text-4xl text-3xl font-bold mb-4">
            Tin tức Và Tài liệu
          </h2>
          <p className="text-white text-base text-center mb-8">
            Hiểu biết rõ hơn về STARHUB và tài liệu miễn phí. Hãy nhanh tay tìm hiểu và tận hưởng các ưu đãi độc quyền!
          </p>
          <Link to="/blog">
            <button
              type="button"
              className="bg-white text-sm text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-slate-100"
            >
              Xem thêm
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
