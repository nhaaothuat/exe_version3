import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../component/Loading/Loading";
import { useParams } from "react-router-dom";
import numeral from "numeral";

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(
        `https://starhubapi-enc8fuaqgahsd8dr.eastus-01.azurewebsites.net/api/Tutor/${id}`
      )
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [id]);
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="font-sans bg-white">
          <div className="p-4 lg:max-w-7xl max-w-4xl mx-auto">
            <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6 rounded-lg">
              <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
                <div className="px-4 py-10 rounded-lg shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative">
                  <img
                    src={`https://starhubapi-enc8fuaqgahsd8dr.eastus-01.azurewebsites.net/${product.avatarURL}`}
                    alt="Product"
                    className="w-3/4 rounded object-cover mx-auto"
                  />

                  {/* <button type="button" className="absolute top-4 right-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      fill="#ccc"
                      className="mr-1 hover:fill-[#333]"
                      viewBox="0 0 64 64"
                    >
                      <path
                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </button> */}
                </div>
              </div>

              <div className="lg:col-span-2">
                <h2 className="text-2xl font-extrabold text-gray-800">
                  {product.fullName} 
                </h2>

                {/* <div className="flex space-x-2 mt-4">
                  <svg
                    className="w-5 fill-blue-600"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-5 fill-blue-600"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-5 fill-blue-600"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-5 fill-blue-600"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-5 fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <h4 className="text-gray-800 text-base">500 Reviews</h4>
                </div> */}

                <div className="flex flex-wrap gap-4 mt-8">
                  <p className="text-gray-800 text-3xl font-bold">
                    {numeral(product.tuitionFee).format("0,0")} VNĐ/buổi
                  
                  </p>
                </div>

                {product.mainSubjects.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-gray-800">
                      Môn học:
                    </h3>
                    <div className="flex flex-wrap gap-3 mt-4">
                      {product.mainSubjects.map((subject, index) => (
                        <button
                          key={index}
                          className="w-full sm:w-auto min-w-[200px] px-4 py-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded text-center"
                        >
                          {subject.name && subject.name.trim()} 
                        </button>
                       ))}
                    </div>
                  </div>
                 )} 

                {product.formOfWorks.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      Hình thức dạy học:
                    </h3>
                    <div className="flex flex-wrap gap-4 justify-start sm:flex-row flex-col">
                      {product.formOfWorks.map((subject) => (
                        <button
                          key={subject.id}
                          className="w-full sm:w-auto min-w-[200px] px-4 py-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded text-center"
                        >
                          {subject.form && subject.form.trim()}
                        </button>
                       ))} 
                    </div>
                  </div>
                )} 
              </div>
            </div>

            <div className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
              <h3 className="text-xl font-bold text-gray-800">
                THÔNG TIN GIA SƯ
              </h3>
              <ul className="mt-4 space-y-6 text-gray-800">
                <li className="text-sm">
                  Giáo dục{" "}
                  <span className="ml-4 float-right">{product.education}</span>
                  {/*  */}
                </li>
                <li className="text-sm">
                  Kinh nghiệm{" "}
                  <span className="ml-4 float-right">{product.experience}</span>
                  {/*  */}
                </li>
                <li className="text-sm">
                  Quê quán{" "}
                  <span className="ml-4 float-right">{product.hometown}</span>
                  {/* {product.hometown} */}
                </li>
                <li className="text-sm">
                  Nơi ở hiện tại{" "}
                  <span className="ml-4 float-right">{product.livingAt}</span>
                  {/* {product.livingAt} */}
                </li>
                {/* <li className="text-sm">
                  PROCESSOR SPEED{" "}
                  <span className="ml-4 float-right">2.3 - 4.7 GHz</span>
                </li>
                <li className="text-sm">
                  DISPLAY SIZE INCH{" "}
                  <span className="ml-4 float-right">16.0</span>
                </li>
                <li className="text-sm">
                  DISPLAY SIZE SM{" "}
                  <span className="ml-4 float-right">40.64 cm</span>
                </li>
                <li className="text-sm">
                  DISPLAY TYPE{" "}
                  <span className="ml-4 float-right">
                    OLED, TOUCHSCREEN, 120 Hz
                  </span>
                </li>
                <li className="text-sm">
                  DISPLAY RESOLUTION{" "}
                  <span className="ml-4 float-right">2880x1620</span>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
       )} 
    </div>
  );
};

export default Detail;
