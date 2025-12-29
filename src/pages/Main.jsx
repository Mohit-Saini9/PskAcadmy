import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import { MdArrowRightAlt } from "react-icons/md";

const Main = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <div className="pb-4 min-h-40 max-w-5xl mx-auto">
        <h2 className="text-center text-3xl font-bold mt-4">
          Explore Categories
        </h2>
        <p className="text-center text-xs text-black/50 font-medium">
          Find the perfect course in your field of intrest
        </p>
        <section className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 px-4">
          <div className=" bg-blue-50 rounded min-h-28 p-2 text-center justify-center shadow-md hover:scale-105 transition-all duration-75 ">
            <div className="mt-4">
              <h2 className="font-bold">Programming</h2>
              <p className="text-black/60 text-center text-xs font-semibold">
                120 Courses Avaliable
              </p>
              <div className="flex justify-center items-center gap-1 text-blue-500">
                <button className="text-blue-500 text-sm ">Explore Now</button>
                <MdArrowRightAlt size={20} />
              </div>
            </div>
          </div>
          <div className=" bg-pink-50 rounded min-h-28 p-2 text-center justify-center shadow-md hover:scale-105 transition-all duration-75  ">
            <div className="mt-4">
              <h2 className="font-bold">Design</h2>
              <p className="text-black/60 text-center text-xs font-semibold">
                85 Courses Avaliable
              </p>
              <div className="flex justify-center items-center gap-1 text-pink-500">
                <button className="text-pink-500 text-sm ">Enroll Now</button>
                <MdArrowRightAlt size={20} />
              </div>
            </div>
          </div>
          <div className=" bg-green-50 rounded min-h-28 p-2 text-center justify-center shadow-md hover:scale-105 transition-all duration-75   ">
            <div className="mt-4">
              <h2 className="font-bold">Artificial Intelligence</h2>
              <p className="text-black/60 text-center text-xs font-semibold">
                95 Courses Avaliable
              </p>
              <div className="flex justify-center items-center gap-1 text-green-500">
                <button className="text-green-500 text-sm ">Enroll Now</button>
                <MdArrowRightAlt size={20} />
              </div>
            </div>
          </div>
          <div className=" bg-orange-50 rounded min-h-28 p-2 text-center justify-center shadow-md hover:scale-105 transition-all duration-75   ">
            <div className="mt-4">
              <h2 className="font-bold">Marketing</h2>
              <p className="text-black/60 text-center text-xs ">
                73 Courses Avaliable
              </p>
              <div className="flex justify-center items-center gap-1 text-orange-500">
                <button className="text-orange-500 text-sm ">Enroll Now</button>
                <MdArrowRightAlt size={20} />
              </div>
            </div>
          </div>
          <div className=" bg-purple-50 rounded min-h-28 p-2 text-center justify-center shadow-md hover:scale-105 transition-all duration-75  ">
            <div className="mt-4">
              <h2 className="font-bold">Photography</h2>
              <p className="text-black/60 text-center text-xs ">
                60 Courses Avaliable
              </p>
              <div className="flex justify-center items-center gap-1 text-purplee-500">
                <button className="text-purple-500 text-sm ">Enroll Now</button>
                <MdArrowRightAlt size={20} />
              </div>
            </div>
          </div>
          <div className=" bg-sky-50 rounded min-h-28 p-2 text-center justify-center shadow-md hover:scale-105 transition-all duration-75  ">
            <div className="mt-4">
              <h2 className="font-bold">Photography</h2>
              <p className="text-black/60 text-center text-xs ">
                60 Courses Avaliable
              </p>
              <div className="flex justify-center items-center gap-1 text-purplee-500">
                <button className="text-blue-300 text-sm ">Enroll Now</button>
                <MdArrowRightAlt size={20} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Main;
