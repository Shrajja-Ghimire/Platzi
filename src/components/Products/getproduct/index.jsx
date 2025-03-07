import React, { useState, useEffect } from "react";
import { Link } from "react-router";
// import axios from "axios";
import Searchbar from "../searchbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsRequest } from "../../../redux/actions/product";
import { addToCart } from "../../../redux/actions/cart";
const ProductList = () => {
  // const [products, setProducts] = useState([]);
  //const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");

  //redux
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProductsRequest()); // Fetch products from Redux
  }, [dispatch]);

  const handleAddToCart = (data) => {
    dispatch(addToCart(data)); // Dispatch addToCart action
  };

  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(search.toLowerCase());
  });

  const productsToDisplay =
    filteredProducts.length > 0 ? filteredProducts : products;

  return (
    <div>
      <Searchbar className="w-screen" search={search} setSearch={setSearch} />
      <div className="mt-5 flex justify-start gap-10 flex-wrap ">
        {isLoading ? (
          <h1>Loading....</h1>
        ) : (
          productsToDisplay.map((data) => {
            return (
              <div
                key={data.id}
                className="w-70 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm"
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
                      onClick={() => handleAddToCart(data)}
                      className=" border-1 px-6 py-2 rounded-lg  bg-gradient-to-r from-amber-500 to-amber-800 text-white transition"
                    >
                      Add to Cart
                    </button>
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ProductList;
