import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { doc, setDoc } from "firebase/firestore";
import { data } from "../../../src/utility/firebase";
import { v4 } from "uuid";
import { toast, ToastContainer } from "react-toastify";
import { AiOutlineLoading } from "react-icons/ai";

const Tutor = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [university, setUniversity] = useState("");
  const [current, setCurrent] = useState("");
  const [phone, setPhone] = useState("");
  const [mess, setMess] = useState("");
  const [loading, setLoading] = useState(false);
  
  const saveContactToFirestore = async (tutorData) => {
    const tutorId = v4();
    await setDoc(doc(data, "tutor", tutorId), tutorData);
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
        current,
        university,
        mess,
        
      };

      await saveContactToFirestore(contactData);

      setName("");
      setEmail("");
      setSubject("");
      setCurrent("");
      setUniversity("");
      setPhone("");
      setMess("");

      toast.success("Bước đầu gia nhập StarHub thành công!");
    } catch (error) {
      toast.error("Chúc bạn may mắn lần sau!");
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const scrollToForm = () => {
    const formSection = document.getElementById("register");
    if (formSection) {
      formSection.scrollIntoView({
        behavior: "smooth",
        block: "center", // hoặc 'center' nếu muốn form ở giữa màn hình
      });
    }
  };

  return (
    <>
      {/* Banner */}

      <div className="relative bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 py-16 sm:py-24 lg:py-32">
        {/* Hình nền */}

        {/* Lớp overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
            Bạn Muốn Trở Thành Gia Sư ?
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl drop-shadow-md mb-6">
            Tham gia cộng đồng gia sư của STARHUB để chia sẻ kiến thức và trải
            nghiệm những cơ hội phát triển nghề nghiệp. Đăng ký ngay để bắt đầu
            hành trình của bạn!
          </p>
          <button
            onClick={scrollToForm}
            className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-indigo-600 hover:text-white transition"
          >
            Đăng Ký Ngay
          </button>
        </div>
      </div>

      {/*End  */}

      <section
        id="register"
        className="relative bg-gradient-to-r from-purple-50 to-blue-50 overflow-hidden py-20"
      >
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>

        {/* Form Container */}
        <div className="mx-auto max-w-screen-xl px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Introduction Section */}
            <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-xl transform hover:scale-105 transition duration-300">
              <h2 className="text-3xl font-bold text-purple-800 mb-4">
                Đăng ký làm gia sư cùng STARHUB
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Gia nhập cộng đồng gia sư chuyên nghiệp tại STARHUB và mở rộng
                cơ hội phát triển bản thân. Chúng tôi giúp bạn kết nối với những
                học viên tiềm năng và xây dựng một sự nghiệp vững chắc. Hãy
                nhanh chóng đăng ký để trở thành một phần của STARHUB ngay hôm
                nay!
              </p>
              <p className="text-xl font-semibold text-purple-600 mb-2">
                📞 Liên hệ ngay: +84 085 342 6516
              </p>
              <address className="text-gray-600">
                📌 Địa chỉ: R639+HM2, Khu đô thị mới, Thành phố Qui Nhơn, Bình
                Định 55117
              </address>
            </div>

            {/* Form Section */}
            <div className="lg:col-span-3 bg-white p-10 rounded-lg shadow-2xl transform hover:scale-105 transition duration-300 relative">
              {/* Floating decoration element */}
              <div className="absolute -top-8 -right-8 w-20 h-20 bg-blue-300 rounded-full opacity-50 animate-pulse"></div>

              {/* Form */}
              <form
                
                id="register"
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input
                    type="text"
                    id="name"
                    placeholder="Họ và tên"
                    className="w-full rounded-lg border-gray-300 p-4 text-sm shadow-sm"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <Input
                    type="tel"
                    id="phone"
                    placeholder="Số điện thoại"
                    className="w-full rounded-lg border-gray-300 p-4 text-sm shadow-sm"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="w-full rounded-lg border-gray-300 p-4 text-sm shadow-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Input
                    type="text"
                    id="university"
                    placeholder="Trường Đại học"
                    className="w-full rounded-lg border-gray-300 p-4 text-sm shadow-sm"
                    value={university}
                    onChange={(e) => setUniversity(e.target.value)}
                    required
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input
                    type="text"
                    id="subject"
                    placeholder="Môn dạy"
                    className="w-full rounded-lg border-gray-300 p-4 text-sm shadow-sm"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                  <Select
                    value={current}
                    onValueChange={setCurrent}
                    className="w-full rounded-lg border-gray-300 p-4 text-sm shadow-sm"
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Tình trạng" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Đã tốt nghiệp">
                        Đã tốt nghiệp
                      </SelectItem>
                      <SelectItem value="Chuẩn bị tốt nghiệp">
                        Chuẩn bị tốt nghiệp
                      </SelectItem>
                      <SelectItem value="Năm 1">Năm 1</SelectItem>
                      <SelectItem value="Năm 2">Năm 2</SelectItem>
                      <SelectItem value="Năm 3">Năm 3</SelectItem>
                      <SelectItem value="Năm 4">Năm 4</SelectItem>
                      <SelectItem value="N/A">N/A</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Textarea
                    rows="6"
                    placeholder="Nhập tin nhắn của bạn ở đây."
                    className="w-full rounded-lg border-gray-300 p-4 text-sm shadow-sm"
                    value={mess}
                    onChange={(e) => setMess(e.target.value)}
                    required
                  />
                </div>
                <div className="mt-6">
                  <Button
                    variant="solid"
                    className="w-full rounded-lg bg-purple-600 text-white py-4 font-semibold hover:bg-purple-700 transition"
                    disabled={loading}
                  >
                    {loading ? (
                      <AiOutlineLoading className="animate-spin text-2xl mx-auto" />
                    ) : (
                      "Gửi đi"
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Tutor;
