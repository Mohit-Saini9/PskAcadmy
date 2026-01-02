import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Categories from "./Categories";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div className="">
      <Navbar />
      <Carousel />
      <Categories />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Main;
