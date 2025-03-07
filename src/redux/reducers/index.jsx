import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "./product";
import categoryReducer from "./category";
import cartReducer from "./cart";
export const rootReducer = combineReducers({
  product: productReducer,
  category: categoryReducer,
  cart: cartReducer,
});
