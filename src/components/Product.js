import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "./../utils/routes";

const Product = ({ id, name, image, price }) => {
  return (
    <Link to={ROUTES.PRODUCT_DETAIL} className="product" key={id}>
      <div className="product-img">
        <img src={image} alt={name} />
      </div>
      <div className="product-desc">
        <h4 className="product-name">{name}</h4>
        <p className="product-price">{price}</p>
      </div>
    </Link>
  );
};

export default Product;
