import React from "react";
import { SwiperSlide } from "swiper/react";

const ProductsPageItem = ({ id, name, image, price }) => {
  return (
    <SwiperSlide>
      <a href="/productdetail" className="product-page-item" key={id}>
        <div className="product-page-img">
          <img src={image} alt={name} />
          <div className="product-page-btn">
            <a href="/productdetail">Add to Bag</a>
          </div>
        </div>
        <div className="product-page-desc">
          <h4 className="product-page-name">{name}</h4>
          <p className="product-page-price">{price}</p>
        </div>
      </a>
    </SwiperSlide>
  );
};

export default ProductsPageItem;
