import axios from "axios";
import numeral from "numeral";
import React, { useEffect, useRef, useState } from "react";
import Loading from "../component/Loading/Loading";
import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
import { IoIosSearch } from "react-icons/io";
const Product = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(6);
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
  const searchRef = useRef(null);

  const scrollToSearch = () => {
    searchRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div>
      {/* CTA Section */}
      <div className="relative bg-gradient-to-b from-blue-100 to-white text-gray-800 py-16 md:py-24 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between rounded-lg shadow-lg overflow-hidden">
        {/* Nội dung CTA */}
        <div className="relative z-10 flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-700">
            Tìm Gia Sư Tốt Nhất Cho Bạn
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-700">
            Kết nối với những gia sư giỏi và nhận ngay những bài học phù hợp với
            nhu cầu của bạn.
          </p>
          <button
            onClick={scrollToSearch}
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition duration-300 transform hover:-translate-y-1"
          >
            Tìm kiếm ngay
          </button>
        </div>

        <div className="relative z-10 mt-8 md:mt-0 md:ml-12 flex-shrink-0">
          <img
            src="https://source.unsplash.com/random/300x300?teacher"
            alt="Gia Sư Minh Họa"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-lg object-cover border-4 border-blue-600"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="App">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="container mx-auto flex flex-col py-12 px-4 gap-8">
            {/* Phần tìm kiếm */}
            <div ref={searchRef} className="w-full flex justify-center mb-8">
              <div className="relative w-full md:w-2/3">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Tìm kiếm gia sư..."
                  className="border border-gray-300 p-4 rounded-full w-full shadow-lg pl-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="absolute left-4 top-5 text-gray-500">
                  <IoIosSearch />
                </span>
              </div>
            </div>

            {/* Danh sách gia sư */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.slice(0, visibleCount).map((product, index) => (
                <Link
                  key={index}
                  to={`/detail/${product.id}`}
                  className="relative overflow-hidden rounded-3xl shadow-lg bg-white transform transition hover:scale-105 hover:shadow-2xl duration-300 group"
                >
                  {/* Border Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-pink-500 to-red-600 opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl"></div>
                  <div className="relative p-6 bg-white rounded-xl">
                    {/* Header Section */}
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-blue-700 sm:text-xl">
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
                          className="w-16 h-16 rounded-full object-cover border-2 border-blue-600 shadow-md"
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
                        <p className="text-lg font-bold text-blue-600">
                          {numeral(product.tuitionFee).format("0,0")} VND
                        </p>
                      </div>

                      {/* Form of Work Section */}
                      <div className="text-gray-600 text-xs flex gap-2">
                        {product.formOfWorks.map((form) => (
                          <span
                            key={form.id}
                            className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full"
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
              <div className="flex justify-center mt-8">
                <button
                  onClick={loadMore}
                  className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300 shadow-lg transform hover:scale-105"
                >
                  Xem thêm
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default Product;
