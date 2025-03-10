import React, { useEffect, useState } from "react";
import { Link } from "react-router";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryRequest } from "../../redux/actions/category";

const Category = () => {
  // const [category, setCategory] = useState([]);

  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(fetchCategoryRequest()); // Fetch products from Redux
  }, [dispatch]);

  return (
    <>
      <h1 className="text-2xl font-extrabold text-center mt-10 ">
        Shop by Category
      </h1>
      <div className="mt-10 mx-10 flex justify-evenly flex-wrap">
        {category &&
          category.map((data) => {
            return (
              <div
                key={data.id}
                className="w-50 h-80 max-w-sm bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 flex-shrink-0"
              >
                <Link to={`/category/${data.id}`}>
                  <div className="relative overflow-hidden rounded-t-lg h-3/4">
                    <img
                      src={data.image}
                      alt="category"
                      className=" h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black opacity-40"></div>
                  </div>
                  <div className="p-4">
                    <p className="text-xl font-semibold text-center text-gray-900 transition-colors duration-300 hover:text-amber-800">
                      {data.name}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Category;
