import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../../redux/actions/cart";

import { ImCross } from "react-icons/im";
const Cart = () => {
  const { cartItems, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col lg:flex-row justify-center gap-8 p-8  min-h-screen">
      {/* Cart Items Section */}
      <div className="mb-20 w-full lg:w-2/3 xl:w-1/2 bg-white rounded-lg p-6">
        <div>
          <h2 className="flex justify-evenly items-center text-3xl font-semibold text-center mb-6 text-gray-800">
            Your Cart
          </h2>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">
            Your cart is empty.
          </p>
        ) : (
          <div className="max-h-[500px] overflow-y-auto p-2 space-y-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md transition transform "
              >
                {/* Product Image */}
                <img
                  src={item.images}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />

                {/* Product Details */}
                <div className="text-center sm:text-left flex-1 mt-2 sm:mt-0 sm:ml-4">
                  <h3 className="text-lg font-semibold text-gray-700">
                    {item.title}
                  </h3>
                  <p className="text-lg font-bold text-amber-600">
                    ${item.price}
                  </p>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="mt-3 sm:mt-0 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-800 text-white rounded-lg hover:bg-red-700 transition flex items-center gap-2"
                >
                  <ImCross />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Cart Summary & Checkout Section */}
      {cartItems.length > 0 && (
        <div className="w-full lg:w-1/4 bg-white shadow-lg rounded-lg p-6 h-fit">
          <div className="flex justify-between  text-gray-700 mt-4">
            <span>Total Amount:</span>
            <span className="text-amber-600 font-bold">
              ${totalAmount.toFixed(2)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
