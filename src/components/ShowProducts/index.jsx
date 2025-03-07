import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cart";

//third
const ShowProduct = () => {
  const [showProduct, setShowProduct] = useState([]);

  const showproduct = async () => {
    try {
      const res = await axios.get(
        "https://api.escuelajs.co/api/v1/products?limit=6&offset=0"
      );
      setShowProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    showproduct();
  }, []);

  //add to cart
  const dispatch = useDispatch();
  return (
    <span>
      <div className="flex flex-col md:flex-row md:justify-center items-center gap-4 text-center">
        <p className="font-bold mt-5 text-2xl">Our Latest Product</p>
      </div>
      <div className="mt-10 ml-30 mr-30  flex justify-center gap-10 flex-wrap ">
        {showProduct.map((data) => {
          return (
            <div
              key={data.id}
              className="w-80 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm"
            >
              <Link to={`/product/${data.id}`}>
                <img
                  className="p-8 rounded-t-lg"
                  src={data.images[0]}
                  alt="product image"
                />
              </Link>
              <div className="px-5 pb-5">
                <h5 className=" font-semibold tracking-tight text-gray-900 dark:text-white">
                  {data.title}
                </h5>

                <p className="tracking-tight text-gray-900 dark:text-white">
                  {data.category.name}
                </p>
                <span className="flex gap-5 mt-5">
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    ${data.price}
                  </p>

                  <button
                    onClick={() => dispatch(addToCart(data))}
                    className=" border-1 px-6 py-2 rounded-lg  bg-gradient-to-r from-amber-500 to-amber-800 text-white transition"
                  >
                    Add to Cart
                  </button>
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <Link to="/product">
        <button className="m-auto active:bg-amber-950 mt-10 flex items-center  gap-5 border-1  border-amber-700 p-4 rounded-lg hover:bg-amber-700  hover:text-white transition">
          See More
          <FaArrowRight className="text-center" />
        </button>
      </Link>
    </span>
  );
};

export default ShowProduct;
