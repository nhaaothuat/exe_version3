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
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src={test} // Thay đường dẫn này bằng ảnh của bạn
            alt="Office"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Nội dung */}
        <div className="w-full md:w-1/2 md:pl-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">ABOUT US</h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Why Choose Us */}
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Why Choose Us?
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600">
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">✔</span> Lorem ipsum dolor
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">✔</span> Aliquip ex ea
              commodo
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">✔</span> Tempor incididunt
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">✔</span> Lorem ipsum dolor
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">✔</span> Lorem ipsum dolor
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">✔</span> Exercitation ullamco
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">✔</span> Incididunt ut labore
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">✔</span> Lorem ipsum dolor
            </li>
          </ul>
        </div>
      </div>

     

      <TeamSection />

      {/* Feedback */}
      <Testimonial />
      {/* End */}
    </>
  );
};

export default About;
