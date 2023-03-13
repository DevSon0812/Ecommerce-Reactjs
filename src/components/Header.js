import Navbar from "./Navbar";
import InputItem from "./InputItem";
import Logo from "./Logo";
import { TbHeart } from "react-icons/tb";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CgSearch } from "react-icons/cg";
import { GrLocationPin } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cart from "./Cart";
import HeaderMobile from "./Header.mobile";

const Header = () => {
  // * handle open Bag Cart
  const [openBagCart, setOpenBagCart] = useState(false);

  const handleOpenBag = () => {
    setOpenBagCart(true);
  };
  const handleCloseBag = () => {
    setOpenBagCart(false);
  };

  return (
    <>
      <HeaderMobile onClose={handleCloseBag} onOpen={handleOpenBag} />
      <div className="header-group">
        {/* Header */}
        <div className="button-group">
          <div className="button-box container">
            <Link className="button">Log in</Link>
            <Link className="button">Sign Up</Link>
            <div className="location">
              <GrLocationPin size={12} />
              <p>United States</p>
            </div>
          </div>
        </div>
        {/* NavBar */}
        <nav className="container header">
          <Navbar />
          <Logo />
          <div className="header-box">
            <div className="header-icon">
              <CgSearch size={22} />
              <InputItem />
            </div>
            <div className="header-action ">
              <TbHeart size={24} />
              <HiOutlineShoppingBag size={24} onClick={handleOpenBag} />
            </div>
          </div>
        </nav>
        {/* Bag Cart */}
      </div>
      <Cart open={openBagCart} onClose={handleCloseBag} />
    </>
  );
};

export default Header;
