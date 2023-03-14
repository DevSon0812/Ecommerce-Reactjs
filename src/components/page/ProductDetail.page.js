import React, { useState } from "react";
import imgDetail from "../../assets/img/detail0.avif";
import imgDetail2 from "../../assets/img/pd2.avif";
import Styles from "./../Styles";

const displaySize = [
  {
    id: 1,
    display: "xs",
  },
  {
    id: 2,
    display: "s",
  },
  {
    id: 3,
    display: "m",
  },
  {
    id: 4,
    display: "l",
  },
  {
    id: 5,
    display: "xl",
  },
];

const ProductDetail = () => {
  const [activeItemId, setActiveItemId] = useState(null);
  // const [activeImgId, setActiveImg] = useState(1);

  const handleItemClick = (itemId) => {
    setActiveItemId(itemId);
  };
  // const hanldeItemClick = (itemId) => {
  //   setActiveImg(itemId);
  // };
  return (
    <section className="page-detail-group container">
      <div className="page-detail-box">
        <div className="page-detail-primary">
          <div className="page-detail-img-small">
            <div>
              <img src={imgDetail2} alt="" />
            </div>
            <div>
              <img src={imgDetail2} alt="" />
            </div>
            <div>
              <img src={imgDetail2} alt="" />
            </div>
            <div>
              <img src={imgDetail2} alt="" />
            </div>
          </div>
          <div className="page-detail-img">
            <img src={imgDetail} alt="" />
            <img src={imgDetail2} alt="" />
          </div>
        </div>
        <div className="page-detail-secound">
          <div className="page-detail-desc">
            <h6 className="page-detail-trademark">SonKhan's® Premium</h6>
            <h4 className="page-detail-name">BABY BLUE SWEATER VEST</h4>
            <p className="page-detail-price">$79.05</p>
            <p className="page-detail-sale">30% Off Applied at Checkout</p>
            <div className="page-detail-size">
              <h6>Size</h6>
              <div className="page-detail-size-lists">
                {displaySize.map((item) => (
                  <button
                    key={item.id}
                    className={activeItemId === item.id ? "active-size" : ""}
                    onClick={() => handleItemClick(item.id)}
                  >
                    {item.display}
                  </button>
                ))}
              </div>
            </div>
            <div className="page-detail-payment">
              <div className="page-detail-item">
                <p>Pickup In-Store</p>
                <span>Select size to see if item in stock</span>
              </div>
              <div className="page-detail-item">
                <p>Ship</p>
                <span>Select size to see if item in stock</span>
              </div>
            </div>
            <div className="page-detail-btn">
              <button className="page-detail-btn-items">Add to Bag</button>
              <div className="page-detail-qty">
                <div>-</div>
                <div>1</div>
                <div>+</div>
              </div>
            </div>
            <div className="page-detail-bottom">
              Free Shipping and Returns for SonKhan's® Red Tab™ Members
            </div>
          </div>
        </div>
      </div>
      <div className="page-detail-description">
        <div className="page-detail-description-primary">
          A modern take on a vintage staple, this Baby Blue Sweater Vest will
          see you through seasonal transitions with ease. Wear it on its own to
          stay warm on summer nights, then layer it with a long sleeve T-shirt
          once colder weather sneaks back in. It's semi-tailored, like a
          button-up vest, and yet soft, like a sweatshirt. Win-win.
          <p>A modern take on a vintage staple for a sleeveless open knit</p>
          <p>A layering piece you can also wear on its own Soft yet tailored</p>
          <p>Amber yellow Style # A42470001 Color: Amber Yellow</p>
        </div>
        <div className="page-detail-description-secound">
          <div className="page-detail-description-items">
            <h6>How it fit</h6>
            <ul>
              <li>Slim fit</li>
            </ul>
          </div>
          <div className="page-detail-description-items">
            <h6>How it fit</h6>
            <ul>
              <li>Knit</li>
              <li>Crewneck</li>
              <li>Imported</li>
            </ul>
          </div>
        </div>
      </div>
      <Styles />
    </section>
  );
};

export default ProductDetail;
