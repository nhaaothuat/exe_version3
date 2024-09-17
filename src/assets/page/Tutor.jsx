import React from "react";
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

const Tutor = () => {
  return (
    <>
      {/* Banner */}

      <div className="relative">
        <div className="absolute inset-0 bg-white bg-opacity-50 flex flex-col justify-center items-center text-center">
          <span className="text-lg md:text-xl text-black">Contact Us</span>
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
                At the same time, the fact that we are wholly owned and totally
                independent from manufacturer and other group control gives you
                confidence that we will only recommend what is right for you.
              </p>

              <div className="mt-8">
                <a href="#" className="text-2xl font-bold text-pink-600">
                  {" "}
                  0151 475 4450{" "}
                </a>

                <address className="mt-2 not-italic">
                  282 Kevin Brook, Imogeneborough, CA 58517
                </address>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="#" className="space-y-4">
                <div>
                  {/* <Label className="sr-only" htmlFor="email">Email</Label> */}
                  <Input
                    type="text"
                    id="name"
                    placeholder="Họ và tên"
                    className="w-full rounded-lg  p-3 text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <Input
                      type="email"
                      id="email"
                      placeholder="Email "
                      className="w-full rounded-lg  p-3 text-sm"
                    />
                  </div>

                  <div>
                    <Input
                      type="tel"
                      id="phone"
                      placeholder="Số điện thoại "
                      className="w-full rounded-lg  p-3 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Trường Đại học"
                    className="w-full rounded-lg  p-3 text-sm"
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <Input
                      type="text"
                      id="subject"
                      placeholder="Môn dạy"
                      className="w-full rounded-lg  p-3 text-sm"
                    />
                  </div>

                  <div>
                    <Select>
                      <SelectTrigger className=" w-full rounded-lg border-gray-200 p-3 text-sm">
                        <SelectValue
                          placeholder=""
                          type="graduate"
                          id="graduate"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="apple">Đã tốt nghiệp</SelectItem>
                        <SelectItem value="banana">
                          Chuẩn bị tốt nghiệp
                        </SelectItem>
                        <SelectItem value="blueberry">Năm 1</SelectItem>
                        <SelectItem value="grapes">Năm 2</SelectItem>
                        <SelectItem value="pineapple">Năm 3</SelectItem>
                        <SelectItem value="pineapple1">Năm 4</SelectItem>
                        <SelectItem value="pineapple2">N/A</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Textarea
                    rows="8"
                    placeholder="Nhập tin nhắn của bạn ở đây."
                    className="w-full rounded-lg  p-3 text-sm"
                  />
                </div>

                <div className="mt-4">
                  <Button
                    variant="outline"
                    className=" w-full rounded-lg  px-4 py-3 font-medium text-black sm:w-auto"
                  >
                    Gửi đi
                  </Button>
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
