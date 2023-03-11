import React from "react";
import { Link } from "react-router-dom";
import Banner from "../assets/img/Banner.avif";
import Logo from "./Logo";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-img">
        <img src={Banner} alt="Banner" />
      </div>
      <div className="hero-decs container">
        <Logo />
        <h2 className="hero-title">The greatest story ever worn</h2>
        <p className="hero-content">
          Celebrating 150 years of the SonKhan's 501 jean.
        </p>
        <div className="hero-nav">
          <Link className="hero-link" path="/">
            Shop men's 501 jeans
          </Link>
          <Link className="hero-link" path="/">
            Shop women's 501 jeans
          </Link>
          <Link className="hero-link" path="/">
            explores 501 stories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
