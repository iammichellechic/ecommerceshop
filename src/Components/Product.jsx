import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { addItem } from "../redux/action";

export const Product = () => {
  const [product, setSingleItem] = useState([]);

  let params = useParams();
  let { id } = params;

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addItem(product));
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setSingleItem(await response.json());
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          <div className="col-md-6">
            <img
              src={product.image}
              alt={product.title}
              height="500px"
              width="400px"
            />
          </div>
          <div className="col-md-6">
            <h4 className="text-uppercase text-black-50">{product.category}</h4>
            <h1 className="display-5">{product.title}</h1>
            <p className="lead fw-bolder">
              Rating {product.rating && product.rating.rate}
              <i className="fa fa-star"></i>
            </p>
            <h3 className="display-6 fw-bold my-4">
              {" "}
              Price: {product.price} SEK{" "}
            </h3>
            <p className="lead">{product.description}</p>
            <button
              className="btn btn-outline-dark px-4 py-2"
              onClick={() => addProduct(product)}
            >
              Add to Cart
            </button>
            <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
              Go to Cart
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
