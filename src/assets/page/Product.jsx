import axios from "axios";
import numeral from "numeral";
import React, { useEffect, useRef, useState } from "react";
import Loading from "../component/Loading/Loading";
import { Link } from "react-router-dom";
import test from "/logo2.png";
import { IoIosSearch } from "react-icons/io";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(6);
  const [searchTerm, setSearchTerm] = useState("");
  const [options, setOptions] = useState([]); // Renamed from 'option' to 'options'
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          "https://starhubapi-enc8fuaqgahsd8dr.eastus-01.azurewebsites.net/api/Tutor"
        );
        setProducts(res.data);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const res = await axios.get(
          "https://starhubapi-enc8fuaqgahsd8dr.eastus-01.azurewebsites.net/api/MainSubject"
        );
        setOptions(res.data);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    };

    fetchOptions();
  }, []);

  // Filter the products based on searchTerm and selectedOption
  const filteredProducts = products.filter((product) => {
    // Filter by search term in the full name
    const matchesSearchTerm = product.fullName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    // Filter by selected subject option if any
    const matchesSelectedOption =
      selectedOption === "" ||
      product.mainSubjects.some(
        (subject) => subject.id === parseInt(selectedOption)
      );

    return matchesSearchTerm && matchesSelectedOption;
  });

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
        <div className="relative bg-gradient-to-b from-blue-100 to-white text-gray-800 py-16 md:py-24 px-6 md:px-16 lg:px-32 flex flex-col md:flex-row items-center justify-between rounded-xl shadow-lg overflow-hidden">
          <div className="relative z-10 flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-blue-700">
              Tìm Gia Sư Tốt Nhất Cho Bạn
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-600 leading-relaxed">
              Kết nối với những gia sư giỏi và nhận ngay những bài học phù hợp
              với nhu cầu của bạn.
            </p>
            <button
              onClick={scrollToSearch}
              className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition duration-300 transform hover:-translate-y-1"
            >
              Tìm kiếm ngay
            </button>
          </div>

          <div className="relative z-10 mt-8 md:mt-0 md:ml-12 flex-shrink-0">
            <img
              src={test}
              alt="Gia Sư Minh Họa"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-xl object-cover border-4 border-blue-600"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="App">
          {isLoading ? (
            <Loading />
          ) : (
            <div className="container mx-auto flex flex-col py-12 px-4 gap-8">
              {/* Search Section */}
              <div ref={searchRef} className="mb-12">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-grow">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Tìm kiếm gia sư..."
                      className="w-full p-4 pr-12 rounded-full border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-300"
                    />
                    <span className="absolute right-4 top-4 text-gray-400">
                      <IoIosSearch size={24} />
                    </span>
                  </div>

                  <select
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="p-4 rounded-full border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-300"
                  >
                    <option value="">Chọn môn học</option>
                    {options.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Tutor List */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts
                  .slice(0, visibleCount)
                  .map((product, index) => (
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
