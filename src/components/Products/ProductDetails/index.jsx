import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/actions/cart";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  const dispatch = useDispatch();

  // const handleAddToCart = (data) => {
  //   if (data) {
  //     dispatch(addToCart(data));
  //   }
  // };

  const productdetails = async () => {
    try {
      const res = await axios.get(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    productdetails();
  }, [id]);

  return (
    <div className=" mb-30 px-5 p-5 md:px-10 lg:px-20 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20 max-w-6xl mx-auto">
      {/* Image */}
      <span className="w-full md:w-1/2 flex flex-col items-center">
        <img
          src={product?.images[1]}
          alt="details"
          className="w-full sm:w-60 md:w-80 lg:w-96 h-auto rounded-lg shadow-md"
        />
        <span className="flex gap-4 mt-3">
          <img
            src={product?.images[0]}
            alt="details"
            className="w-16 h-20 sm:w-20 sm:h-30 rounded-md shadow"
          />
          <img
            src={product?.images[2]}
            alt="details"
            className="w-16 h-20 sm:w-20 sm:h-30 rounded-md shadow"
          />
        </span>
      </span>

      {/* Product Details  */}
      <span className="w-full md:w-1/2 text-center md:text-left">
        <p className="text-lg sm:text-xl font-bold text-gray-700">
          {product?.category.name}
        </p>
        <p className="text-xl sm:text-2xl font-bold">{product?.title}</p>
        <p className="text-xl sm:text-2xl font-bold text-amber-700">
          ${product?.price}
        </p>
        <p className="text-justify mt-3 text-gray-600">
          <b>Description:</b>
          <br />
          {product?.description}
        </p>

        {/* Buttons  */}
        <div className="sm:flex-row gap-4 items-center mt-5">
          <button
            onClick={() => dispatch(addToCart(product))}
            className="w-full sm:w-auto px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-800 rounded-lg text-white transition hover:opacity-90"
          >
            Add to Cart
          </button>
        </div>
      </span>
    </div>
  );
};

export default ProductDetails;
