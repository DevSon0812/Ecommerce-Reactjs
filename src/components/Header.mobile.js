import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import Logo from "./Logo";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CgSearch } from "react-icons/cg";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

const HeaderMobile = ({ onOpen }) => {
  const [openNav, SetOpenNav] = useState(false);

  const handleOpenNav = () => {
    SetOpenNav(true);
  };
  const handleCloseNav = () => {
    SetOpenNav(false);
  };

  return (
    <div className="header-mb-group">
      {/* Header  */}
      <header className="header-mb container">
        <HiMenuAlt4 onClick={handleOpenNav} />
        <Logo />
        <div className="header-mb-ic">
          <CgSearch />
          <HiOutlineShoppingBag onClick={onOpen} />
        </div>
      </header>
      <div
        className={`header-overlay ${openNav ? "openOverlay" : ""}`}
        onClick={handleCloseNav}
      >
        {/* NavBar  */}
        <nav className="header-mb-nav">
          <div className="header-mb-top">
            <Logo className="header-mb-logo" />
            <div className="header-mb-ic">
              <CgSearch />
              <GrClose onClick={handleCloseNav} />
            </div>
          </div>
          <ul className="header-mb-menu">
            <li>
              <a href="/" className="txt-red">
                New arrivals
              </a>
            </li>

            <li>
              <a href="/">Men</a>
            </li>
            <li>
              <a href="/">Woman</a>
            </li>
            <li>
              <a href="/">Kids</a>
            </li>
            <li>
              <a href="/">Accessories</a>
            </li>
            <li>
              <a href="/">Collections</a>
            </li>
            <li>
              <a href="/" className="txt-red">
                Sale - extra 40% off
              </a>
            </li>
          </ul>
          <div className="button-box header-mb-bottom">
            <Link className="button header-mb-link">Log in</Link>
            <Link className="button header-mb-link">Sign Up</Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default HeaderMobile;
