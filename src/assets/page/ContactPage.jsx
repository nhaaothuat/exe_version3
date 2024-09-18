import React, { useEffect, useState } from "react";
import img from "/contact.jpg";
import { doc, setDoc } from "firebase/firestore";
import { data } from "../../utility/firebase";
import { v4 } from "uuid";

import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { AiOutlineLoading } from "react-icons/ai";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");
  const [mess, setMess] = useState("");
  const [loading, setLoading] = useState(false);

  const saveContactToFirestore = async (contactData) => {
    const contactId = v4();
    await setDoc(doc(data, "contacts", contactId), contactData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const contactData = {
        name,
        email,
        subject,
        phone,
        mess,
        createdAt: new Date(),
      };

      await saveContactToFirestore(contactData);

      setName("");
      setEmail("");
      setSubject("");
      setPhone("");
      setMess("");

      toast.success("Post created successfully!");
    } catch (error) {
      toast.error("Error occurred while submitting the post.");
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      {/* Banner */}

      <div className="relative">
        <div className="absolute inset-0 bg-white bg-opacity-50 flex flex-col justify-center items-center text-center">
          <span className="text-lg md:text-xl text-black">
            Liên hệ với chúng tôi
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-black">
            Đội ngũ hỗ trợ và tư vấn nhiệt tình
          </h1>
        </div>
        <img src={img} alt="" className="w-full h-48 md:h-64 object-cover" />
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

      <section className="contact mb-10">
        <div className="container mx-auto px-4 py-8">
          <form
            className="bg-white shadow-lg rounded-lg p-6 md:p-8"
            onSubmit={handleSubmit}
          >
            <h4 className="text-lg md:text-xl font-semibold mb-4">LIÊN HỆ</h4>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Họ và tên"
                className="border p-2 rounded w-full"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Email"
                className="border p-2 rounded w-full"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <input
              type="text"
              placeholder="Môn học"
              className="border p-2 rounded w-full mt-4"
              onChange={(e) => setSubject(e.target.value)}
            />
            <input
              type="text"
              placeholder="Số điện thoại"
              className="border p-2 rounded w-full mt-4"
              onChange={(e) => setPhone(e.target.value)}
            />
            <textarea
              className="border p-2 rounded w-full mt-4"
              rows="5"
              placeholder="Nhập tin nhắn ở đây"
              onChange={(e) => setMess(e.target.value)}
            ></textarea>
            <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600 transition-all">
              {loading ? (
                <AiOutlineLoading className="animate-spin text-2xl mx-auto" />
              ) : (
                "Gửi đi"
              )}
            </button>
            <ToastContainer />
          </form>
        </div>
      </section>
      {/* End */}
    </>
  );
};

export default ContactPage;
