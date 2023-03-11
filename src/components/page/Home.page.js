import React from "react";
import Hero from "../Hero";
import NewArivals from "../NewArivals";
import Trending from "../Trending";
import Styles from "../Styles";
import Build from "../Build";
import Contact from "./../Contact";
import Cart from "../Cart";

const Home = () => {
  return (
    <div>
      <Cart />
      <Hero />
      <NewArivals />
      <Trending />
      <Styles />
      <Build />
      <Contact />
    </div>
  );
};

export default Home;
