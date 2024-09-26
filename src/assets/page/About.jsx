import React from "react";
import Feature from "./Feature";
import test from "/image.png";
import Testimonial from "./Testimonial";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { FadeUp } from "../../utility/animation";
import { motion } from "framer-motion";

import TeamSection from "./TeamSection";

const About = () => {
  return (
    <>
      {/* Banner */}

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-pink-200 flex flex-col justify-center items-center text-center">
          <span className="text-lg md:text-xl text-black">Contact Us</span>
          <h1 className="text-3xl md:text-5xl font-bold text-black">
            Get Helps & Friendly Support
          </h1>
        </div>
        <img
          src="https://channel.mediacdn.vn/428462621602512896/2023/7/14/photo-1-1689302121228313858070.jpg"
          alt=""
          className="w-full h-48 md:h-64 object-cover relative z-0"
        />
      </div>

      

      {/*End  */}

      <Feature />

      {/* Test2 */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-20">
      {/* Hình ảnh */}
      <motion.div
        className="w-full md:w-1/2 mb-6 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={test} // Thay đường dẫn này bằng ảnh của bạn
          alt="Văn phòng"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Nội dung */}
      <motion.div
        className="w-full md:w-1/2 md:pl-12"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">VỀ CHÚNG TÔI</h2>
        <p className="text-gray-600 mb-6">
          StarHub mang đến dịch vụ gia sư chuyên nghiệp, giúp học sinh đạt
          được mục tiêu học tập và phát triển bản thân một cách tốt nhất. Chúng
          tôi tự hào về đội ngũ gia sư chất lượng cao và phương pháp giảng dạy
          tiên tiến.
        </p>
        <p className="text-gray-600 mb-6">
          Mỗi gia sư tại StarHub đều được tuyển chọn kỹ càng, có trình độ
          chuyên môn cao và kinh nghiệm giảng dạy phong phú. Chúng tôi cam kết
          mang lại sự hài lòng và tiến bộ vượt bậc cho học sinh.
        </p>

        {/* Why Choose Us */}
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Tại sao chọn chúng tôi?
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600">
          {[
            "Gia sư giàu kinh nghiệm",
            "Phương pháp giảng dạy tiên tiến",
            "Hỗ trợ học tập liên tục",
            "Cam kết tiến bộ",
            "Linh hoạt thời gian",
            "Đội ngũ tư vấn tận tình",
            "Giá cả hợp lý",
            "Đánh giá chất lượng định kỳ",
          ].map((item, index) => (
            <motion.li
              key={index}
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="text-blue-500 mr-2">✔</span> {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>

     

      <TeamSection />

      {/* Feedback */}
      <Testimonial />
      {/* End */}
    </>
  );
};

export default About;
