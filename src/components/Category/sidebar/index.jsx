import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Sidebar = () => {
  const [title, setTitle] = useState([]);

  const sidebar = async () => {
    try {
      const res = await axios.get(
        "https://api.escuelajs.co/api/v1/categories?limit=5"
      );
      setTitle(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    sidebar();
  }, []);

  return (
    <div className="hidden md:block bg-gray-200 shadow-lg rounded-lg p-4 w-full max-w-[250px] md:w-60 lg:w-72 h-[400px] mx-auto md:mx-0">
      <h2 className="text-lg font-bold text-gray-800 border-b pb-2">
        Categories
      </h2>
      <div className="mt-3 space-y-2 overflow-y-auto max-h-[320px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {title.map((data) => (
          <Link
            key={data.id}
            to={`/category/${data.id}`}
            className="block p-2 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            <p className="text-gray-700 font-semibold">{data.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
