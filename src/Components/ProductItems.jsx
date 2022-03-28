import React from "react";
import { Link } from "react-router-dom";

export const ProductItems = (props) => {
  return (
    <div className="productgallery_card">
      <div className="productgallery_card_container">
        <img src={props.product.image} alt="cookies" className="hero-image" />
        <div className="information">
          <div className="name">{props.product.title}</div>
          <div className="store">Pris: {props.product.price} SEK</div>
          <Link className="storebutton" to={`/products/${props.product.id}`}>
            View this product
          </Link>
        </div>
      </div>
    </div>
  );
};
