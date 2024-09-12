import React from "react";
import Banner from "../components/Banner";
import { category } from "../data/Data";
import Category from "../components/Category";
import FlashSale from "../components/FlashSale";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <FlashSale />
    </div>
  );
};

export default Home;
