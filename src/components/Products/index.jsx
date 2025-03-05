import React from "react";
import ProductList from "./getproduct";
import Sidebar from "../Category/sidebar";

const Products = () => {
  return (
    <div>
      {/* Sidebar and list */}
      <div className="ml-10 flex min-h-screen">
        {/* Sidebar Container */}
        <div className="sticky top-0 h-screen p-4 w-full md:w-60 lg:w-72 overflow-y-auto bg-gray-100 shadow-lg">
          <Sidebar />
        </div>

        {/* Product List */}
        <div className="flex-1 p-2">
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Products;
