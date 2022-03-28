//add a product to the cart
export const addItem = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

// delete a product
export const delItem = (product) => {
  return {
    type: "REMITEM",
    payload: product,
  };
};
