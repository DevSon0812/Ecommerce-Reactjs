import React from "react";
import img from "../assets/img/build0.avif";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

const Cart = ({ open, onClose }) => {
  return (
    <div className="cart-root">
      <div className={`cart ${open ? "openBagCart" : ""}`}>
        <p className="cart-box">
          <h4 className="cart-title">Your Cart</h4>
          <GrClose size={22} onClick={onClose} />
        </p>
        <div className="cart-group">
          <h4 className="cart-ship">Ship</h4>
          {/* product item bag cart here */}
          <div className="cart-product">
            <div className="cart-img">
              <img src={img} alt="" />
            </div>
            <div className="cart-desc">
              <p className="cart-name">Golden Designers Mug</p>
              <p className="cart-decription">Golden Designers Mug</p>
              <p className="cart-price">
                $25.09 <del>89.50</del>
              </p>
              <div className="cart-size">
                <p>Xl</p>
                <p>
                  Quality: <span>1</span>
                </p>
              </div>
              <div className="cart-subtotal">
                <p>
                  Subtotal: <span>$74.09</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-total">
          <div className="cart-total-title">
            Subtotal <span>$438.90</span>
          </div>
          <div className="cart-btn">
            <Link path="/">Continue to checkout</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
