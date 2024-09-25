import axios from "axios";
import numeral from "numeral";
import React, { useEffect, useState } from "react";
import Loading from "../component/Loading/Loading";
import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";

const Product = () => {
  const [products, setProducts] = useState([]); // Initialize as an empty array
  const [isLoading, setIsLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(1); // Start with 6 visible items
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          "https://starhubapi-enc8fuaqgahsd8dr.eastus-01.azurewebsites.net/api/Tutor"
        );
        setProducts(res.data); // Set products data
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const loadMore = () => {
    setVisibleCount((prevCount) =>
      Math.min(prevCount + 6, filteredProducts.length)
    ); // Load more but not exceed total products
  };

  return (

    <>

<div className="bg-green-500 text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Đăng Ký Ngay Để Nhận Ưu Đãi!
        </h2>
        <p className="mb-6 text-lg md:text-xl">
          Trở thành thành viên của chúng tôi và nhận những lợi ích đặc biệt!
        </p>
        <a
          href="/register"
          className="bg-white text-green-500 px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition duration-300"
        >
          Đăng Ký Ngay
        </a>
      </div>
    </div>

    <div className="App">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container mx-auto flex py-24">
          {/* Phần bộ lọc bên trái */}
          <div className="w-1/4 pr-4">
            <div className="bg-white rounded-lg shadow p-4 mb-4">
              <h2 className="text-lg font-semibold mb-2">Bộ lọc</h2>
              {/* Thêm các bộ lọc tùy ý ở đây */}
              <div className="flex flex-col">
                <label className="mb-1 text-sm">Hình thức:</label>
                <select className="border p-2 rounded">
                  <option value="">Tất cả</option>
                  <option value="Area1">Online</option>
                  <option value="Area2">Offline</option>
                </select>
                {/* Có thể thêm nhiều bộ lọc khác tại đây */}
              </div>
            </div>
          </div>

          {/* Phần nội dung chính */}
          <div className="w-3/4">
            {/* Phần tìm kiếm */}
            <div className="mb-4">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Tìm kiếm gia sư..."
                className="border border-gray-300 p-2 rounded w-full"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.slice(0, visibleCount).map((product, index) => (
                <Link
                  key={index}
                  to={`/detail/${product.id}`}
                  className="relative overflow-hidden rounded-lg shadow-lg bg-white transform transition hover:scale-105 hover:shadow-2xl duration-300"
                >
                  {/* Gradient border */}
                  {/* <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-1 rounded-lg"></div> */}
                  <div className="relative p-4 sm:p-6 lg:p-8 bg-white rounded-lg">
                    {/* Header Section */}
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 sm:text-xl">
                          {product.fullName}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.teachingArea}
                        </p>
                      </div>

                      <div className="shrink-0">
                        <img
                          alt={product.fullName}
                          src={`https://starhubapi-enc8fuaqgahsd8dr.eastus-01.azurewebsites.net/${product.avatarURL}`}
                          className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                        />
                      </div>
                    </div>

                    {/* Subjects Section */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.mainSubjects.map((subject) => (
                        <span
                          key={subject.id}
                          className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {subject.name}
                        </span>
                      ))}
                    </div>

                    {/* Tuition Fee Section */}
                    <div className="flex justify-between items-center mt-4">
                      <div className="text-gray-600">
                        <span className="text-xs">Học phí:</span>
                        <p className="text-lg font-bold text-blue-500">
                          {numeral(product.tuitionFee).format("0,0")} VND
                        </p>
                      </div>

                      {/* Form of Work Section */}
                      <div className="text-gray-600 text-xs flex gap-2">
                        {product.formOfWorks.map((form) => (
                          <span
                            key={form.id}
                            className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full"
                          >
                            {form.form}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Load More Button */}
            {visibleCount < filteredProducts.length && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={loadMore}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Product;
