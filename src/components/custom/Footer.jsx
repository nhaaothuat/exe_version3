import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="relative mt-16 bg-gradient-to-b from-blue-50 to-white">
  <svg
    className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-blue-50"
    preserveAspectRatio="none"
    viewBox="0 0 1440 54"
  >
    <path
      fill="currentColor"
      d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
    />
  </svg>
  <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-gray-900">
    <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
      <div className="md:max-w-md lg:col-span-2">
        <Link
          to="/"
          aria-label="Go home"
          title="Company"
          className="inline-flex items-center"
        >
          <img src="/logo2.png" className="h-20 w-20" />
        </Link>
        <div className="mt-4 lg:max-w-sm">
          <p className="text-sm font-bold text-blue-900">
            📌 Địa chỉ: R639+HM2, Khu đô thị mới, Thành phố Qui Nhơn, Bình Định 55117
          </p>
          <p className="mt-4 text-sm font-bold text-blue-900">
            🕕 08h00 - 17h00
          </p>
          <p className="mt-4 text-sm font-bold text-blue-900">
            📞 +84: 085 342 6516
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
        <div>
          <p className="font-semibold tracking-wide text-blue-900">HỖ TRỢ</p>
          <hr className="mt-3" />
          <ul className="mt-2 space-y-2">
            <li>
              <Link
                to="/contact"
                className="transition-colors duration-300 text-gray-700 hover:text-blue-500"
              >
                Liên hệ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold tracking-wide text-blue-900">STARHUB</p>
          <hr className="mt-3" />
          <ul className="mt-2 space-y-2">
            <li>
              <Link
                to="/tutor"
                className="transition-colors duration-300 text-gray-700 hover:text-blue-500"
              >
                Trở thành gia sư
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="transition-colors duration-300 text-gray-700 hover:text-blue-500"
              >
                Về chúng tôi
              </Link>
            </li>
            <li>
              <Link
                to="/product"
                className="transition-colors duration-300 text-gray-700 hover:text-blue-500"
              >
                Tìm gia sư
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="transition-colors duration-300 text-gray-700 hover:text-blue-500"
              >
                Tin tức
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold tracking-wide text-blue-900">
            KẾT NỐI FANPAGE
          </p>
          <hr className="mt-3" />
          <div className="border-none py-4">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61565847414624&tabs=timeline&width=350&height=200&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=true&appId=834360898578517"
              width="350"
              height="200"
              scrolling="no"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </div>

    <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-300 sm:flex-row">
      <p className="text-sm text-gray-500">
        © Copyright 2024 StarHub Center. All rights reserved.
      </p>
      <div className="flex items-center mt-4 space-x-4 sm:mt-0">
        <a
          target="_blank"
          href="https://www.facebook.com/profile.php?id=61565847414624"
          className="transition-colors duration-300 text-gray-700 hover:text-blue-500"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
            <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>

  );
};

export default Footer;
