import React from "react";
import Slider from "react-slick";
import test1 from '/img1.jpg'
import test2 from '/img2.jpg'
import test3 from '/img3.jpg'
import test4 from '/img4.jpg'
import test from '/test.jpg'
const TestimonialsData = [
  {
    id: 1,
    name: "Phạm Thị Mai Linh",
    school: "Trường THPT Chuyên Lê Quý Đôn",
    text: "Thầy không chỉ dạy kiến thức mà còn giúp em có phương pháp học tập hiệu quả hơn. Nhờ vậy mà em đã đạt điểm cao trong kỳ thi Học sinh giỏi môn Sinh học.",
    img: test1,
    delay: 0.2,
  },
  {
    id: 2,
    name: "Lê Hoàng Anh",
    school: "Trường THCS Lý Tự Trọng",
    text: "Trung tâm đã kết nối em với một gia sư tuyệt vời. Em gặp khó khăn trong việc học Hóa, nhưng thầy đã giúp em hiểu bài hơn và không còn sợ môn này nữa.",
    img: test2,
    delay: 0.5,
  },
  {
    id: 3,
    name: "Trần Thanh Huyền ",
    school: "Trường THPT Trưng Vương",
    text: "Gia sư của trung tâm rất chuyên nghiệp và thân thiện. Nhờ sự giúp đỡ của thầy cô, em đã nắm vững ngữ pháp tiếng Anh và tự tin hơn trong việc giao tiếp.",
    img: test3,
    delay: 0.8,
  },
  {
    id: 5,
    name: "Nguyễn Tuấn Anh",
    school: "Giảng viên Trường Đại Học Quy Nhơn",
    text: "Các em học rất chăm chỉ và có cố gắng. ",
    img: test,
    delay: 1.1,
  },
];
const Testimonial = () => {
  const setting = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    //     autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-14 mb-10 px-10">
      <div className=" ">
        {/* header section */}
        <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-6">
          <h1 className="uppercase font-semibold text-orange-600">Phản hồi</h1>
          <p className="font-semibold text-3xl ">
            Phản hồi khách hàng về chúng tôi
          </p>
        </div>
        {/* Testimonial cards section */}
        <div>
          <Slider {...setting}>
            {TestimonialsData.map((item) => {
              return (
                <div key={item.id} className="pl-25">
                  <div className="flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-secondary/10">
                    {/* upper section */}
                    <div className="flex justify-start items-center gap-5">
                      <img
                        src={item.img}
                        alt=""
                        className="w-16 h-16 rounded-full"
                      />
                      <div>
                        <p className="text-xl font-bold text-black/80">
                          {item.name}
                        </p>
                        <p>{item.school}</p>
                      </div>
                    </div>
                    {/* bottom section */}
                    <div className="py-6 space-y-4">
                      <p className="text-sm text-gray-500">{item.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
