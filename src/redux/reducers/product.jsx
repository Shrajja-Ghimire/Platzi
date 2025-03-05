// reducers/index.js

const initialState = {
  products: [],
  error: null,
  isLoading: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_REQUEST":
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case "FETCH_PRODUCTS_SUCCESS":
      return {
        ...state,
        products: action.payload,
        isLoading: false,
        error: null,
      };
    case "FETCH_PRODUCTS_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    // case "DELETE_PRODUCT_REQUEST":
    //   return {
    //     ...state,
    //     data: null,
    //     error: null,
    //   };
    default:
      return state;
  }
};

export default productReducer;
