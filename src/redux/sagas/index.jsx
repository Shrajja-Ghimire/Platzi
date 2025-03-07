// sagas/index.js
import { takeEvery, put, call } from "redux-saga/effects";
import * as actions from "../actions/product";
import * as action from "../actions/category";

// Simulate an API call
const fetchProductsFromAPI = async () => {
  try {
    const response = await fetch(
      "https://api.escuelajs.co/api/v1/products?limit=20&offset=0"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

function* fetchProducts() {
  try {
    const data = yield call(fetchProductsFromAPI);
    yield put(actions.fetchProductsSuccess(data));
  } catch (error) {
    yield put(actions.fetchProductsFailure(error.message));
  }
}

//fetch category
const fetchCategoryFromAPI = async () => {
  try {
    const response = await fetch(
      "https://api.escuelajs.co/api/v1/categories?limit=5"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
function* fetchCategory() {
  try {
    const data = yield call(fetchCategoryFromAPI);
    yield put(action.fetchCategorySuccess(data));
  } catch (error) {
    yield put(action.fetchCategoryFailure(error.message));
  }
}

export function* watchFetchProducts() {
  yield takeEvery("FETCH_PRODUCTS_REQUEST", fetchProducts);
  yield takeEvery("FETCH_CATEGORY_REQUEST", fetchCategory);
}
