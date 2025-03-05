import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "./product";
import categoryReducer from "./category";

export const rootReducer = combineReducers({
  product: productReducer,
  category: categoryReducer,
});
