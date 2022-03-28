const url = "http://localhost:4000/products";

export const fetchProducts = async () => {
  const response = await fetch(url);
  const json = await response.json();

  return json;
};

//json-server -p 4000 --watch ./ecommerceshop/db.json
//https://reactjs.org/warnings/invalid-hook-call-warning.html