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
        createdAt: new Date(),
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
      setLoading(false); // Đảm bảo đặt lại loading về false
    }
  };

  return (
    <>
      {/* Banner */}

      <div className="relative">
        <div className="absolute inset-0 bg-white bg-opacity-50 flex flex-col justify-center items-center text-center">
          <span className="text-lg md:text-xl text-black"></span>
          <h1 className="text-3xl md:text-5xl font-bold text-black">
            Bạn Muốn Trở Thành Gia Sư?
          </h1>
        </div>
        <img
          src="https://channel.mediacdn.vn/428462621602512896/2023/7/14/photo-1-1689302121228313858070.jpg"
          alt=""
          className="w-full h-48 md:h-64 object-cover"
        />
      </div>

      {/*End  */}

      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-lg">
                Việc trở thành gia sư không chỉ giúp bạn kiếm thêm thu nhập mà
                còn là cơ hội để chia sẻ kiến thức và kinh nghiệm của mình.
                STARHUB sẽ là nơi giúp bản trở nên một phiên bản hoàn toàn mới
                của chính bản thân mình. Vậy nên hãy nhanh chóng đăng kí và đồng
                hành cùng chúng tôi! ❤️❤️❤️❤️
              </p>

              <div className="mt-8">
                <a href="#" className="text-2xl font-bold text-pink-600">
                  {" "}
                  📞+84: 085 342 6516{" "}
                </a>

                <address className="mt-2 not-italic">
                  📌Địa chỉ: R639+HM2, Khu đô thị mới, Thành phố Qui Nhơn, Bình
                  Định 55117
                </address>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="#" className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  {/* <Label className="sr-only" htmlFor="email">Email</Label> */}
                  <Input
                    type="text"
                    id="name"
                    placeholder="Họ và tên"
                    className="w-full rounded-lg  p-3 text-sm"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <Input
                      type="email"
                      id="email"
                      placeholder="Email "
                      className="w-full rounded-lg  p-3 text-sm"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Input
                      type="tel"
                      id="phone"
                      placeholder="Số điện thoại "
                      className="w-full rounded-lg  p-3 text-sm"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Trường Đại học"
                    className="w-full rounded-lg  p-3 text-sm"
                    value={university}
                    onChange={(e) => setUniversity(e.target.value)}
                    required
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <Input
                      type="text"
                      id="subject"
                      placeholder="Môn dạy"
                      className="w-full rounded-lg  p-3 text-sm"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Select value={current} onValueChange={setCurrent}>
                      <SelectTrigger className=" w-full rounded-lg border-gray-200 p-3 text-sm">
                        <SelectValue
                          placeholder="Tình trạng"
                          type="graduate"
                          id="graduate"
                        />
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
                </div>

                <div>
                  <Textarea
                    rows="8"
                    placeholder="Nhập tin nhắn của bạn ở đây."
                    className="w-full rounded-lg  p-3 text-sm"
                    value={mess}
                    onChange={(e) => setMess(e.target.value)}
                    required
                  />
                </div>

                <div className="mt-4">
                  <Button
                    variant="outline"
                    className=" w-full rounded-lg  px-4 py-3 font-medium text-black sm:w-auto"
                    disabled={loading}
                  >
                    {loading ? (
                      <AiOutlineLoading className="animate-spin text-2xl mx-auto" />
                    ) : (
                      "Gửi đi"
                    )}
                  </Button>
                  <ToastContainer />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tutor;
