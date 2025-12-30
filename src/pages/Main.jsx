import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Categories from "./Categories";
import Testimonial from "../components/Testimonial";

const Main = () => {
  return (
    <div className="bg-slate-50">
      <Navbar />
      <Carousel />
      <Categories />
      <Testimonial />
    </div>
  );
};

export default Main;
