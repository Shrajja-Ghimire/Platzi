import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../../redux/actions/cart";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div className="w-200 h-auto m-auto">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="border-1 w-70 h-70 mt-5">
            <img src={item.images} alt="cart" className="w-40 h-50 p-4" />
            <h3>{item.name}</h3>
            <p className="font-bold text-center">Price: ${item.price}</p>
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="bg-amber-600 ml-30"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
