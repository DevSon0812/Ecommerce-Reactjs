import React from "react";
import Product from "./Product";
import imgProduct from "../assets/img/product0.jfif";
import Title from "./Title";

const NewArivals = () => {
  return (
    <section className="newarivals">
      <Title className="newarivals-title">NEW ARRIALS</Title>
      {/* <h2 className="newarivals-title">NEW ARRIVAls</h2> */}
      <div className="product-list">
        <Product
          image={imgProduct}
          name="Ex-Boyfriend Trucker Jacket"
          price="$98.00"
        />
        <Product
          image={imgProduct}
          name="Ex-Boyfriend Trucker Jacket"
          price="$98.00"
        />
        <Product
          image={imgProduct}
          name="Ex-Boyfriend Trucker Jacket"
          price="$98.00"
        />
        <Product
          image={imgProduct}
          name="Ex-Boyfriend Trucker Jacket"
          price="$98.00"
        />
        <Product
          image={imgProduct}
          name="Ex-Boyfriend Trucker Jacket"
          price="$98.00"
        />
        <Product
          image={imgProduct}
          name="Ex-Boyfriend Trucker Jacket"
          price="$98.00"
        />
        <Product
          image={imgProduct}
          name="Ex-Boyfriend Trucker Jacket"
          price="$98.00"
        />
        <Product
          image={imgProduct}
          name="Ex-Boyfriend Trucker Jacket"
          price="$98.00"
        />
        <Product
          image={imgProduct}
          name="Ex-Boyfriend Trucker Jacket"
          price="$98.00"
        />
      </div>
    </section>
  );
};

export default NewArivals;
