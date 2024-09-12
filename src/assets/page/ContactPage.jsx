import React from "react";

const ContactPage = () => {
  return (
    <>
      {/* Banner */}
      <div className="flex items-center justify-center pb-40 p-16 bg-gradient-to-r from-blue-700 to-blue-400 font-sans overflow-hidden">
        <div className="text-center mt-8">
          <h1 className="text-3xl font-bold text-white">
             Liên Hệ Với Chúng Tôi
          </h1>
        </div>
      </div>
      {/* End */}

      {/* Information */}
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto">
          <div className="">
            <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
              Chúng tôi có thể giúp gì được cho bạn?
            </h1>
            <p className="mt-3 text-gray-500 dark:text-gray-400">
              Đội ngũ thân thiện của chúng tôi luôn ở đây để trò chuyện.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-gray-700 hover:shadow-lg transition duration-300">
              <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>
              <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                Email
              </h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Liên hệ với chúng tôi.
              </p>
              <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                starhub@gmail.com
              </p>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-gray-700 hover:shadow-lg transition duration-300">
              <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </span>
              <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                Hỗ trợ trực tuyến
              </h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Liên hệ với chúng tôi qua fanpage Facebook.
              </p>
              <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                Bắt đầu cuộc trò chuyện mới.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-gray-700 hover:shadow-lg transition duration-300">
              <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </span>
              <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                Địa chỉ
              </h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Đại học FPT Quy Nhơn
              </p>
              <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                R639+HM2, Khu đô thị mới, Thành phố Qui Nhơn, Bình Định 55117
              </p>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-gray-700 hover:shadow-lg transition duration-300">
              <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </span>
              <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                Số điện thoại
              </h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Thứ 2 - Thứ 7
              </p>
              <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                +1 (84) 003-0001
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End */}

      {/* Contact Form */}
      <div className="bg-gray-100">
        <div className="container mx-auto py-12">
          <div className="max-w-lg mx-auto px-4">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Liên hệ
            </h2>
            <p className="text-gray-700 mb-8">
            Đừng ngần ngại liên hệ với chúng tôi để được giải đáp thắc mắc!
            </p>
            <form className="bg-white rounded-lg px-6 py-8 shadow-md">
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Họ và tên
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Nguyễn Văn A"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Email
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Tin nhắn
                </label>
                <textarea
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  rows="6"
                  placeholder="Nhập tin nhắn của bạn"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Gửi đi
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* End */}
    </>
  );
};

export default ContactPage;
