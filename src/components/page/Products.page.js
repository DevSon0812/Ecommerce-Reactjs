import React, { useState } from "react";
import Sidebar from "../Sidebar";
import TypeProducts from "./../TypeProducts";
import imgSrc from "../../assets/img/pd1.avif";
import ProductsPageItem from "../ProductsPageItem";

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
          <p onClick={handleOpenSidebar}>Filter</p>
          <span>622 items</span>
        </div>
        <div className="product-page-secound">
          <Sidebar open={openSidebar} close={handleCloseSidebar} />
          <div className="product-page-lists">
            <ProductsPageItem
              image={imgSrc}
              name="501® Original Fit Women's Jeans"
              price="$98.00 - $118.00"
            />
            <ProductsPageItem
              image={imgSrc}
              name="501® Original Fit Women's Jeans"
              price="$98.00 - $118.00"
            />
            <ProductsPageItem
              image={imgSrc}
              name="501® Original Fit Women's Jeans"
              price="$98.00 - $118.00"
            />
            <ProductsPageItem
              image={imgSrc}
              name="501® Original Fit Women's Jeans"
              price="$98.00 - $118.00"
            />
            <ProductsPageItem
              image={imgSrc}
              name="501® Original Fit Women's Jeans"
              price="$98.00 - $118.00"
            />
            <ProductsPageItem
              image={imgSrc}
              name="501® Original Fit Women's Jeans"
              price="$98.00 - $118.00"
            />
            <ProductsPageItem
              image={imgSrc}
              name="501® Original Fit Women's Jeans"
              price="$98.00 - $118.00"
            />
            <ProductsPageItem
              image={imgSrc}
              name="501® Original Fit Women's Jeans"
              price="$98.00 - $118.00"
            />
            <ProductsPageItem
              image={imgSrc}
              name="501® Original Fit Women's Jeans"
              price="$98.00 - $118.00"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
