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

const faqs = [
  {
    question: "Gia sư có cần bằng cấp không?",
    answer:
      "Gia sư cần có ít nhất bằng đại học hoặc đang là sinh viên tại các trường đại học uy tín.",
  },
  {
    question: "Học phí gia sư được tính như thế nào?",
    answer:
      "Học phí được tính theo giờ hoặc theo tháng tùy thuộc vào thỏa thuận giữa phụ huynh và gia sư.",
  },
  {
    question: "Có thể học thử trước khi bắt đầu học chính thức không?",
    answer:
      "Có, chúng tôi cung cấp buổi học thử miễn phí để đánh giá chất lượng gia sư.",
  },
  {
    question: "Làm sao để đảm bảo chất lượng gia sư?",
    answer:
      "Chúng tôi chọn lọc kỹ lưỡng gia sư và luôn theo dõi tiến độ học tập của học sinh.",
  },
];

const steps = [
  {
    title: "Bước 1: Đăng Ký Tài Khoản",
    description: "Tạo tài khoản bằng cách điền thông tin cá nhân và xác nhận email của bạn.",
    image: "/images/signup.png",
  },
  {
    title: "Bước 2: Tìm Kiếm Gia Sư",
    description: "Duyệt qua danh sách các gia sư và chọn người phù hợp với yêu cầu của bạn.",
    image: "/images/search-tutor.png",
  },
  {
    title: "Bước 3: Đặt Lịch Học",
    description: "Liên hệ và thống nhất lịch học với gia sư đã chọn.",
    image: "/images/schedule.png",
  },
  {
    title: "Bước 4: Bắt Đầu Học Tập",
    description: "Tham gia buổi học đầu tiên và trải nghiệm phương pháp giảng dạy hiệu quả.",
    image: "/images/start-learning.png",
  }
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [selected, setSelected] = useState(null);

  const toggleFAQ = (index) => {
    setSelected(selected === index ? null : index);
  };

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
              Khám phá hành trình học tập thú vị với các gia sư chất lượng, sẵn
              sàng hỗ trợ bạn mọi lúc. Nâng cao trải nghiệm học tập của bạn ngay
              hôm nay.
            </p>

            <div className="mt-12 flex gap-x-6 gap-y-4 justify-center max-sm:flex-col">
              <Link
                to="/product"
                className="w-full sm:w-auto from-blue-100 text-blue-600 font-medium px-8 py-3 rounded-lg shadow-lg border border-blue-600 hover:bg-blue-100 focus:outline-none focus:ring focus:ring-red-300 transition"
              >
                Tìm kiếm
              </Link>

              <Link
                to="/about"
                className="w-full sm:w-auto bg-white text-blue-600 font-medium px-8 py-3 rounded-lg shadow-lg border border-blue-600 hover:text-blue-600 hover:border-blue-100 focus:outline-none focus:ring focus:ring-red-300 transition"
              >
                Tìm hiểu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* End */}

      <SubjectCard />

      {/* Testiminal */}
      <div className="max-w-3xl mx-auto p-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Câu Hỏi Thường Gặp
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="border border-gray-300 rounded-lg p-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <motion.div className="flex justify-between items-center">
                <h3 className="text-xl font-medium">{faq.question}</h3>
                <motion.span
                  initial={{ rotate: 0 }}
                  animate={{ rotate: selected === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  &#x25BC;
                </motion.span>
              </motion.div>
              {selected === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4"
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Card */}
      {/* <div className="max-w-5xl mx-auto p-8">
      <h2 className="text-4xl font-bold text-center mb-12">Cách Hoạt Động</h2>
      <div className="space-y-12">
        {steps.map((step, index) => (
          <motion.div 
            key={index} 
            className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <motion.img 
              src={step.image} 
              alt={step.title}
              className="w-full md:w-1/2 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            />
            <div className={`md:w-1/2 md:mx-8 mt-4 md:mt-0 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
              <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div> */}
      {/* end */}

      {/* Blog */}

     

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
