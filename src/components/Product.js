import React from "react";

const Product = ({ id, name, image, price }) => {
  return (
    <div className="product" key={id}>
      <div className="product-img">
        <img src={image} alt={name} />
      </div>
      <div className="product-desc">
        <h4 className="product-name">{name}</h4>
        <p className="product-price">{price}</p>
      </div>
    </div>
  );
};

export default Product;
