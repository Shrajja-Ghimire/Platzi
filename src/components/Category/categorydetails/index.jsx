import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router";
import { FaPlus } from "react-icons/fa";

const CategoryDetails = () => {
  const { id } = useParams();
  const [category, setCategory] = useState([]);

  const categorydetails = async () => {
    try {
      const res = await axios.get(
        `https://api.escuelajs.co/api/v1/categories/${id}/products?limit=15&offset=0`
      );
      setCategory(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    categorydetails();
  }, [id]);

  if (!category) return <p>Loading...</p>;
  return (
    <div className="bg-amber-100  py-6 px-4 flex flex-wrap justify-center items-center">
      {category.map((data) => {
        return (
          <Link
            to={`/product/${data.id}`}
            className="w-60 md:w-72 lg:w-80 xl:w-96 px-2 mb-6 py-2"
          >
            <div className="w-70 h-100 bg-white rounded-lg shadow-lg p-3">
              {/* Image */}
              <div className="relative">
                <img
                  src={data.images[1]}
                  alt="product"
                  className="w-60 h-50 object-cover p-2 mx-auto"
                />
              </div>

              {/* Text */}
              <div className="p-4 text-center">
                <div className="flex text-center justify-between items-center mb-2">
                  {/* Price */}
                  <p className="text-xl  font-semibold text-amber-600">
                    ${data.price}
                  </p>
                </div>

                {/* Title */}
                <p className="text-lg font-semibold text-gray-800 ">
                  {data.title}
                </p>
              </div>
              <Link to="/cart" className="group flex items-center space-x-2">
                <div className="w-5 h-5 bg-amber-700 rounded-full flex items-center justify-center hover:bg-amber-800">
                  <FaPlus className="text-white " />
                </div>
                <div className="hidden group-hover:block bg-amber-800 text-white px-2 py-1 rounded-md">
                  Add to Cart
                </div>
              </Link>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryDetails;
