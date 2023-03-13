import React from "react";
import Hero from "../Hero";
import NewArivals from "../NewArivals";
import Trending from "../Trending";
import Styles from "../Styles";
import Build from "../Build";
import Cart from "../Cart";

const Home = () => {
  return (
    <>
      <Cart />
      <Hero />
      <NewArivals />
      <Trending />
      <Styles />
      <Build />
    </>
  );
};

export default Home;
