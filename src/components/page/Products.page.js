import React, { useState } from "react";
import { BsFilterLeft } from "react-icons/bs";

import Sidebar from "../Sidebar";
import TypeProducts from "./../TypeProducts";
import ProductsPageItem from "../ProductsPageItem";
import { dataProduct } from "./../../fakedata/data";

const ProductsPage = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleOpenSidebar = () => {
    setOpenSidebar(true);
  };
  const handleCloseSidebar = () => {
    setOpenSidebar(false);
  };

  return (
    <>
      <TypeProducts />
      <div className="product-page-box container">
        <div className="product-page-hero">
          <p
            style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            onClick={handleOpenSidebar}
          >
            <BsFilterLeft size={20} />
            Filter
          </p>
          <span>622 items</span>
        </div>
        <div className="product-page-secound">
          <Sidebar open={openSidebar} close={handleCloseSidebar} />
          <div className="product-page-lists">
            {dataProduct.map((item) => (
              <ProductsPageItem
                key={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
