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
      <div className="font-sans bg-gradient-to-b from-white to-blue-100">
        <div className="p-4 lg:max-w-7xl max-w-4xl mx-auto">
          {/* Main Profile Section */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Cover Photo Section */}
            <div className="h-40 bg-blue-500"></div>
  
            {/* Profile Info Section */}
            <div className="p-6 flex items-center">
              {/* Avatar */}
              <div className="relative w-24 h-24 border-4 border-white rounded-full overflow-hidden shadow-lg -mt-16">
                <img
                  src={`https://starhubapi-enc8fuaqgahsd8dr.eastus-01.azurewebsites.net/${product.avatarURL}`}
                  alt="Product"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* User Info */}
              <div className="ml-6">
                <h2 className="text-2xl font-bold text-gray-800">{product.fullName}</h2>
                <p className="text-gray-600">{product.education}</p>
                <p className="text-gray-600">{product.hometown}</p>
                <p className="text-gray-600">{product.livingAt}</p>
              </div>
            </div>
  
            
            {/* Details Section */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Thông tin thêm</h3>
              <ul className="space-y-4 text-gray-800">
                <li className="flex justify-between text-sm">
                  <span>Kinh nghiệm:</span>
                  <span>{product.experience}</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span>Môn học:</span>
                  <span>
                    {product.mainSubjects.map((subject) => subject.name).join(', ')}
                  </span>
                </li>
                <li className="flex justify-between text-sm">
                  <span>Hình thức dạy học:</span>
                  <span>
                    {product.formOfWorks.map((work) => work.form).join(', ')}
                  </span>
                </li>
                <li className="flex justify-between text-sm">
                  <span>Phí dạy:</span>
                  <span>{numeral(product.tuitionFee).format("0,0")} VNĐ/buổi</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
  

  );
};

export default Detail;
