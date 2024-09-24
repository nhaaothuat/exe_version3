import React from "react";
import { FaDumbbell } from "react-icons/fa6";
import { GiGymBag } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
import { motion } from "framer-motion";

const WhyChooseData = [
  {
    id: 1,
    title: "Uy tín",
    desc: "Bảng điểm công chứng, hồ sơ lý lịch rõ ràng, minh bạch, uy tín.",
    icon: <GrYoga />,
    bgColor: "#0063ff",
    delay: 0.3,
  },
  {
    id: 2,
    title: "Marketing",
    desc: "Cung cấp, hỗ trợ về marketing cho các cá nhân, trung tâm về mảng giáo dục.",
    icon: <FaDumbbell />,
    bgColor: "#73bc00",
    delay: 0.6,
  },
  {
    id: 3,
    title: "Giao diện",
    desc: "Thiết kế giao diện phù hợp hơn so với người dùng hiện nay.",
    icon: <GiGymBag />,
    bgColor: "#fa6400",
    delay: 0.9,
  },
  {
    id: 4,
    title: "Chất lượng",
    desc: "Liên kết với khoa sư phạm đại học Quy Nhơn và khách hàng có thể chọn gia sư phù hợp hơn.",
    icon: <GiGymBag />,
    bgColor: "#fe6baa",
    delay: 1.2,
  },
];

const SlideLeft = (delay) => ({
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { delay } },
});

const Feature = () => {
  return (
    <div className="bg-gray-100 px-8 py-24">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Vì sao lại chọn chúng tôi?</h1>
        <p className="text-xl text-gray-700">Lợi ích khi chọn các dịch vụ bên chúng tôi</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {WhyChooseData.map((item) => (
          <motion.div
            key={item.id}
            variants={SlideLeft(item.delay)}
            initial="hidden"
            whileInView="visible"
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
          >
            <div
              style={{ backgroundColor: item.bgColor }}
              className="w-12 h-12 rounded-full flex justify-center items-center text-white mb-4"
            >
              <div className="text-3xl">{item.icon}</div>
            </div>
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
