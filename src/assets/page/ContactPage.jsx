import React, { useState } from "react";
import img from "/contact.jpg";
import { doc, setDoc } from "firebase/firestore";
import { data } from "../../../src/utility/firebase.js";
import { v4 } from "uuid";
import { motion } from "framer-motion";
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
    setLoading(true);
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

      toast.success("Bạn đã thành công giành sự chú ý của chúng tôi");
    } catch (error) {
      toast.error("Ahihi!!Hình như lỗi rồi!");
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false); // Đảm bảo đặt lại loading về false
    }
  };

  return (
    <>
      {/* Banner */}

      {/* <div className="relative">
        <div className="absolute inset-0 bg-white bg-opacity-50 flex flex-col justify-center items-center text-center">
          <span className="text-lg md:text-xl text-black">
            Liên hệ với chúng tôi
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-black">
            Đội ngũ hỗ trợ và tư vấn nhiệt tình
          </h1>
        </div>
        <img src={img} alt="" className="w-full h-48 md:h-64 object-cover" />
      </div> */}

      {/* End */}

      {/* Information */}
     
      {/* End */}

      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex items-center justify-center p-6">
        <motion.div
          className="text-center max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 4 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
          Đội ngũ hỗ trợ và tư vấn nhiệt tình
          </h1>
          <p className="text-lg text-gray-600 mb-12">
           Thông tin liên hệ
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone Number Card */}
            <motion.div
              className="bg-white p-8 shadow-xl rounded-xl transition-transform transform"
              whileHover={{ scale: 1.03 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}
            >
              <div className="flex justify-center items-center mb-6">
                <span className="text-blue-600 text-5xl">🖁</span>
              </div>
              <h2 className="font-semibold text-2xl text-gray-800 mb-4">
               Số điện thoại
              </h2>
              <p className="text-gray-600 mb-2">+84 085 342 6516</p>
              
            </motion.div>

            {/* Email Address Card */}
            <motion.div
              className="bg-white p-8 shadow-xl rounded-xl transition-transform transform"
              whileHover={{ scale: 1.03 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}
            >
              <div className="flex justify-center items-center mb-6">
                <span className="text-blue-600 text-5xl">📧</span>
              </div>
              <h2 className="font-semibold text-2xl text-gray-800 mb-4">
                Email
              </h2>
              <p className="text-gray-600 mb-2">starhub@gmail.com</p>
              
            </motion.div>

            {/* Location Card */}
            <motion.div
              className="bg-white p-8 shadow-xl rounded-xl transition-transform transform"
              whileHover={{ scale: 1.03 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}
            >
              <div className="flex justify-center items-center mb-6">
                <span className="text-blue-600 text-5xl">🗺️</span>
              </div>
              <h2 className="font-semibold text-2xl text-gray-800 mb-4">
                Địa Chỉ
              </h2>
              <p className="text-gray-600 mb-2">R639+HM2, Khu đô thị mới, Thành phố Qui Nhơn, Bình Định 55117</p>
            
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Contact Form */}

      {/* <section className=" contact mb-10">
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
                value={name}
                required
              />
              <input
                type="text"
                placeholder="Email"
                className="border p-2 rounded w-full"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
            <input
              type="text"
              placeholder="Môn học"
              className="border p-2 rounded w-full mt-4"
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
              required
            />
            <input
              type="text"
              placeholder="Số điện thoại"
              className="border p-2 rounded w-full mt-4"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              required
            />
            <textarea
              className="border p-2 rounded w-full   mt-4"
              rows="5"
              placeholder="Nhập tin nhắn ở đây"
              required
              onChange={(e) => setMess(e.target.value)}
              value={mess}  
              disabled={loading}
            ></textarea>
            <button disabled={loading} className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600 transition-all">
              {loading ? (
                <AiOutlineLoading className="animate-spin text-2xl mx-auto" />
              ) : (
                "Gửi đi"
              )}
            </button>
            <ToastContainer />
          </form>
        </div>
      </section> */}

      <section className="contact mb-10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Hình ảnh bên trái */}
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <img
                src="https://via.placeholder.com/500"
                alt="Contact Illustration"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>

            {/* Form liên hệ bên phải */}
            <div className="w-full md:w-1/2 md:pl-8">
              <form
                className="bg-white shadow-lg rounded-lg p-6 md:p-8"
                onSubmit={handleSubmit}
              >
                {/* Tiêu đề */}
                <h4 className="text-lg md:text-xl font-semibold mb-4 text-blue-500">
                  Liên hệ với chúng tôi ngay hôm nay để được hỗ trợ!
                </h4>
                <p className="text-gray-600 mb-4">
                  Vui lòng điền đầy đủ thông tin vào mẫu bên dưới, chúng tôi sẽ
                  liên hệ lại với bạn trong thời gian sớm nhất.
                </p>

                {/* Các trường input */}
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Họ và tên"
                    className="border p-2 rounded w-full"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="border p-2 rounded w-full"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                </div>

                <input
                  type="text"
                  placeholder="Môn học"
                  className="border p-2 rounded w-full mt-4"
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  required
                />
                <input
                  type="text"
                  placeholder="Số điện thoại"
                  className="border p-2 rounded w-full mt-4"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  required
                />
                <textarea
                  className="border p-2 rounded w-full mt-4"
                  rows="5"
                  placeholder="Nhập tin nhắn ở đây"
                  required
                  onChange={(e) => setMess(e.target.value)}
                  value={mess}
                  disabled={loading}
                ></textarea>

                {/* Button gửi */}
                <button
                  disabled={loading}
                  className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600 transition-all w-full"
                >
                  {loading ? (
                    <AiOutlineLoading className="animate-spin text-2xl mx-auto" />
                  ) : (
                    "Gửi đi"
                  )}
                </button>

                <ToastContainer />
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* End */}
    </>
  );
};

export default ContactPage;
