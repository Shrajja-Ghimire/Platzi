// actions/index.js

//get
export const fetchCategoryRequest = () => ({
  type: "FETCH_CATEGORY_REQUEST",
});

export const fetchCategorySuccess = (category) => ({
  type: "FETCH_Category_SUCCESS",
  payload: category,
});

export const fetchCategoryFailure = (error) => ({
  type: "FETCH_CATEGORY_FAILURE",
  payload: error,
});
