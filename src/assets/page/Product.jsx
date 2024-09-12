import axios from "axios";
import numeral from "numeral";
import React, { useEffect, useState } from "react";
import Loading from "../component/Loading/Loading";

const Product = () => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(
        "https://starhubapi-enc8fuaqgahsd8dr.eastus-01.azurewebsites.net/api/Tutor"
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
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {product.map((product, index) => (
              <div className="" key={index}>
                <a
                  href="#"
                  className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
                >
                  <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

                  <div className="sm:flex sm:justify-between sm:gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                        {product.fullName}
                      </h3>

                      <p className="mt-1 text-xs font-medium text-gray-600">
                        {product.teachingArea}
                      </p>
                    </div>

                    <div className="hidden sm:block sm:shrink-0">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                        className="size-16 rounded-lg object-cover shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <ul>
                      {product.mainSubjects.map((subject) => (
                        <li key={subject.id}>{subject.name}</li>
                      ))}
                    </ul>
                  </div>

                  <dl className="mt-6 flex gap-4 sm:gap-6">
                    <div className="flex flex-col-reverse">
                      <dd className="text-xs text-gray-500">
                        {numeral(product.tuitionFee).format("0,0.00")}VNĐ/buổi
                      </dd>
                    </div>

                    <div className="flex flex-col-reverse">
                      <dd className="text-xs text-gray-500">
                        <ul>
                          {product.formOfWorks.map((subject) => (
                            <li key={subject.id}>{subject.form}</li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  </dl>
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
