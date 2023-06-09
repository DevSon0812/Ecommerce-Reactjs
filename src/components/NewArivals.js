import React from "react";
import Product from "./Product";
import Title from "./Title";
import { dataProduct } from "./../fakedata/data";
// Default theme
const NewArivals = () => {
  return (
    <section className="newarivals container">
      <Title className="newarivals-title">NEW ARRIALS</Title>
      {/* <h2 className="newarivals-title">NEW ARRIVAls</h2> */}
      <div className="product-list">
        {dataProduct.map((item) => (
          <Product
            key={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
};

export default NewArivals;
