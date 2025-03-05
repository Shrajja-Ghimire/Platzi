// reducers/index.js

const initialState = {
  category: [],
  error: null,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CATEGORY_REQUEST":
      return {
        ...state,

        error: null,
      };

    case "FETCH_CATEGORY_SUCCESS":
      return {
        ...state,
        category: action.payload,
        error: null,
      };
    case "FETCH_CATEGORY_FAILURE":
      return {
        ...state,
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

export default categoryReducer;
