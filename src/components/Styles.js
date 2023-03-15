import React from "react";
import Title from "./Title";
import Product from "./Product";
import { dataProduct } from "./../fakedata/data";

const Styles = () => {
  return (
    <div className="container">
      <Title>STYLES YOU MAY LIKE</Title>
      <div className="product-list">
        {dataProduct.map((item) => (
          <Product
            key={item.id}
            name={item.namePr}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Styles;
