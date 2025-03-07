export const addToCart = (data, product) => ({
  type: "ADD_TO_CART",
  payload: data,
  product,
});

export const removeFromCart = (id) => ({
  type: "REMOVE_FROM_CART",
  payload: id,
});
