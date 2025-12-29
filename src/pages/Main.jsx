import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";

const Main = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <h2 className="text-center text-2xl font-bold">Categories</h2>
      <div></div>
    </>
  );
};

export default Main;
