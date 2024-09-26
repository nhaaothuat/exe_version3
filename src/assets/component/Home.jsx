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

      <section className="min-h-[90vh] flex items-center justify-center px-4 py-20 bg-gradient-to-b from-blue-100 to-white">
  <div className="text-center max-w-2xl max-md:max-w-md mx-auto">
    <div>
      <div className="font-semibold text-base text-blue-600 mb-8 bg-white rounded-full shadow-lg py-2 px-6 inline-block">
        <span className="rotate-90 inline-block mr-2">|</span> NỀN TẢNG
        GIA SƯ DẪN ĐẦU QUY NHƠN
      </div>
      <h2 className="text-gray-800 md:text-6xl text-4xl font-extrabold mb-6 md:!leading-[60px]">
        Đặt lịch học một cách dễ dàng
      </h2>
      <p className="mt-6 text-lg text-gray-500 leading-relaxed">
        Khám phá hành trình học tập thú vị với các gia sư chất lượng, sẵn sàng hỗ trợ bạn mọi lúc. Nâng cao trải nghiệm học tập của bạn ngay hôm nay.
      </p>

      <div className="mt-12 flex gap-x-6 gap-y-4 justify-center max-sm:flex-col">
        <Link
          to="/product"
          className="w-full sm:w-auto from-blue-100 text-blue-600 font-medium px-8 py-3 rounded-lg shadow-lg hover:bg-blue-100 focus:outline-none focus:ring focus:ring-red-300 transition"
        >
          Tìm kiếm 
        </Link>

        <Link
         to="/about"
          className="w-full sm:w-auto bg-white text-red-600 font-medium px-8 py-3 rounded-lg shadow-lg border border-red-600 hover:text-red-700 hover:border-red-700 focus:outline-none focus:ring focus:ring-red-300 transition"
        >
          Tìm hiểu
        </Link>
      </div>
    </div>
  </div>
</section>


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

      <div className="bg-gradient-to-b from-blue-100 to-blue-200 font-sans px-6 py-12">
        <div className="container mx-auto flex flex-col justify-center items-center text-center">
          <h2 className="text-blue-900 sm:text-4xl text-3xl font-bold mb-4">
            Tin tức Và Tài liệu
          </h2>
          <p className="text-blue-700 text-base text-center mb-8">
            Hiểu biết rõ hơn về STARHUB và tài liệu miễn phí. Hãy nhanh tay tìm
            hiểu và tận hưởng các ưu đãi độc quyền!
          </p>
          <Link to="/blog">
            <button
              type="button"
              className="bg-blue-600 text-white text-sm font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
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
