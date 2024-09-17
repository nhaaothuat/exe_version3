import React from "react";
import Feature from "./Feature";
import Slider from "react-slick";
import Testimonial from "./Testimonial";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { FadeUp } from "../../utility/animation";
import { motion } from "framer-motion";
import test from "../../../public/test.jpg";
import TeamSection from "./TeamSection";

const About = () => {
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

      <Feature />

      {/* Test */}
      <section>
        <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
          {/* Banner Image */}
          <div className="flex justify-center items-center">
            <motion.img
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              src={test}
              alt=""
              className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
            />
          </div>
          {/* Banner Text */}
          <div className="flex flex-col justify-center">
            <div className="text-center md:text-left space-y-12">
              <motion.h1
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold !leading-snug"
              >
                The World&apos;s Leading Online learning Platform
              </motion.h1>
              <div className="flex flex-col gap-6">
                <motion.div
                  variants={FadeUp(0.2)}
                  initial="initial"
                  whileInView={"animate"}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
                >
                  <FaBookReader className="text-2xl" />
                  <p className="text-lg">10,000+ Courses</p>
                </motion.div>
                <motion.div
                  variants={FadeUp(0.4)}
                  initial="initial"
                  whileInView={"animate"}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
                >
                  <GrUserExpert className="text-2xl" />
                  <p className="text-lg">Expert Instruction</p>
                </motion.div>
                <motion.div
                  variants={FadeUp(0.6)}
                  initial="initial"
                  whileInView={"animate"}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
                >
                  <MdOutlineAccessTime className="text-2xl" />
                  <p className="text-lg">Lifetime Access</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End */}

      <TeamSection />

      {/* Feedback */}
      <Testimonial />
      {/* End */}
    </>
  );
};

export default About;
