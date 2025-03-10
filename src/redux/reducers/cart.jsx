const initialState = {
  cartItems: [],
  totalAmount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const updatedCart = [...state.cartItems, action.payload];

      return {
        ...state,
        // cartItems: [...state.cartItems, action.payload],
        // totalAmount: cartItems.reduce((total, item) => total + item.price, 0),
        cartItems: updatedCart,
        totalAmount: updatedCart.reduce((total, item) => total + item.price, 0),
      };

    case "REMOVE_FROM_CART":
      const updateCart = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        // cartItems: state.cartItems.filter((item) => item.id !== action.payload),
        // totalAmount: cartItems.reduce((total, item) => total + item.price, 0),
        cartItems: updateCart,
        totalAmount: updateCart.reduce((total, item) => total + item.price, 0),
      };

    default:
      return state;
  }
};

export default cartReducer;
