import Navbar from "./Navbar";
import Input from "./Input";
import Logo from "./Logo";
import { TbHeart } from "react-icons/tb";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CgSearch } from "react-icons/cg";
import { GrLocationPin } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cart from "./Cart";
import HeaderMobile from "./Header.mobile";
import SignUp from "./FormSingup";
import Login from "./FormLogin";

const Header = () => {
  const [openBagCart, setOpenBagCart] = useState(false);
  const [openModalSignUp, setOpenModalSignup] = useState(false);
  const [openModalLogin, setOpenModalLogin] = useState(false);
  
  // * handle open Bag Cart
  const handleOpenBag = () => {
    setOpenBagCart(true);
  };
  const handleCloseBag = () => {
    setOpenBagCart(false);
  };
  // * handle open modal Form


  const handleOpenModal = () => {
    setOpenModalSignup(true);
  };

  const handleCloseModal = () => {
    setOpenModalSignup(false);
  };
  const handleOpenModalLogin = () => {
    setOpenModalLogin(true);
  };

  const handleCloseModalLogin = () => {
    setOpenModalLogin(false);
  };

  return (
    <>
      <SignUp
        openModal={openModalSignUp}
        onHandleOpen={handleOpenModal}
        onClose={handleCloseModal}
      />
      <Login
        openModalLogin={openModalLogin}
        setOpenModalLogin={handleOpenModalLogin}
        setCloseModalLogin={handleCloseModalLogin}
      />
      <HeaderMobile
        onClose={handleCloseBag}
        onOpen={handleOpenBag}
        openModal={handleOpenModal}
        closeModal={handleCloseModal}
      />
      <div className="header-group">
        {/* Header */}
        <div className="button-group">
          <div className="button-box container">
            <Link className="button" onClick={handleOpenModalLogin}>
              Log in
            </Link>
            <Link className="button" onClick={handleOpenModal}>
              Sign Up
            </Link>
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
              <Input
                className="header-input"
                type="text"
                placeholder="What are you looking for?"
              />
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
