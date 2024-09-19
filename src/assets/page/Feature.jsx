import React from "react";
import { FaDumbbell } from "react-icons/fa6";
import { GiGymBag } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
import { motion } from "framer-motion";
import { SlideLeft } from "../../utility/animation";
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
    title: "Makerting",
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
    delay: 0.9,
  },
];

const Feature = () => {
  return (
    <div className="bg-[#f9fafc] px-8">
      <div className=" py-24 px-8">
        {/* header section */}
        <div className=" p-6 text-center max-w-[500px] mx-auto mb-5">
          <h1 className="uppercase font-semibold text-orange-600">
            Vì sao lại chọn chúng tôi?
          </h1>
          <p className="font-semibold text-3xl">
            Lợi ích khi chọn các dịch vụ bên chúng tôi
          </p>
        </div>
        {/* cards section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {WhyChooseData.map((item) => {
            return (
              <motion.div
                variants={SlideLeft(item.delay)}
                key={item.id}
                initial="hidden"
                whileInView={"visible"}
                className="space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)]"
              >
                {/* icon section */}
                <div
                  style={{ backgroundColor: item.bgColor }}
                  className="w-10 h-10 rounded-lg flex justify-center items-center text-white"
                >
                  <div className="text-2xl">{item.icon}</div>
                </div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Feature;
