import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    logo: "https://via.placeholder.com/80x40", // URL logo đầu tiên
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita sequi cupiditate harum repellendus ipsum dignissimos.",
    name: "Jane Dodson",
    title: "Marketing Director, Nike",
  },
  {
    logo: "https://via.placeholder.com/80x40", // URL logo thứ hai
    quote:
      "Doloribus voluptate explicabo labore? Assumenda tempore quibusdam dolore maxime cupiditate nisi.",
    name: "John Doe",
    title: "CEO, Adidas",
  },
  {
    logo: "https://via.placeholder.com/80x40", // URL logo thứ ba
    quote:
      "Reprehenderit maiores eveniet voluptas voluptatum qui voluptatem culpa!",
    name: "Alice Smith",
    title: "CTO, Puma",
  },
  {
    logo: "https://via.placeholder.com/80x40", // URL logo thứ tư
    quote: "Illo debitis commodi placeat! Labore porro necessitatibus.",
    name: "Robert Brown",
    title: "CFO, Under Armour",
  },
  {
    logo: "https://via.placeholder.com/80x40", // URL logo thứ năm
    quote: "Explicabo voluptas autem non quod.",
    name: "Mary Johnson",
    title: "COO, Reebok",
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
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
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
                  <span className="relative">The</span>
                </span>{" "}
                quick, brown fox jumps over a lazy dog
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae.
              </p>
            </div>
            <div className="flex items-center sm:justify-center">
              <Button className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md   focus:shadow-outline focus:outline-none" variant="outline">
                Get started
              </Button>
              <Button
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide   text-white transition duration-200 rounded shadow-md   focus:shadow-outline focus:outline-none"
                variant="outline"
              >
                Learn more
              </Button>
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
                Make it better
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
                Do it faster
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
                Working harder
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

      <div className="container mx-auto px-4 py-8">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What our customers think
        </motion.h2>
        <motion.p
          className="text-lg text-gray-500 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </motion.p>

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
    </>
  );
};

export default Home;
