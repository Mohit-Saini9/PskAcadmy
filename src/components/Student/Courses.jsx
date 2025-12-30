import React from "react";
import { FaStar, FaUserFriends } from "react-icons/fa";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { LiaEditSolid } from "react-icons/lia";
import { MdDeleteOutline } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
const Courses = () => {
  return (
    <div className="max-w-4xl  mx-auto ">
      <div className="mt-6 grid  sm:grid-cols-2 md:grid-cols-3  gap-4 px-4  border-l-indigo-600 ">
        <div className="rounded shadow bg-white max-w-72 md:max-w-64    mt-4">
          <iframe
            src="https://www.youtube.com/embed/xomWdliKKK0?si=RVy5TNRZlleZI8x4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="rounded-t w-full max-w-72 md:max-w-64"
          ></iframe>
          <span></span>
          <div className="p-3">
            <h1 className="">Day 1 ReactJS Internship</h1>
            <div className="flex items-center gap-1 justify-between mt-2">
              <div className="flex gap-1 items-center">
                <FaUserFriends /> <span className="text-xs">0</span>
              </div>
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-300" />
                <span className="text-xs">0</span>
              </div>
              <div className="flex gap-1">
                <AiOutlineLike />
                <AiOutlineDislike />
              </div>
            </div>
          </div>
        </div>
        <div className="rounded shadow bg-white min-h-60 max-w-72 md:max-w-64  mt-4">
          <iframe
            src="https://www.youtube.com/embed/qx9hW8IgLEc?si=JlADwH2qiRmDZxR2"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="rounded-t  w-full max-w-72 md:max-w-64"
          ></iframe>
          <span></span>
          <div className="p-3">
            <h1 className="">Day 2 ReactJS Internship</h1>
            <div className="flex items-center gap-1 justify-between mt-2">
              <div className="flex gap-1 items-center">
                <FaUserFriends /> <span className="text-xs">0</span>
              </div>
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-300" />
                <span className="text-xs">0</span>
              </div>
              <div className="flex gap-1">
                <AiOutlineLike />
                <AiOutlineDislike />
              </div>
            </div>
          </div>
        </div>
        <div className="rounded shadow bg-white  max-w-72 md:max-w-64   mt-4">
          <iframe
            src="https://www.youtube.com/embed/NgD4S6BfjNo?si=tqdGaV_nsBiIO-8y"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="rounded-t  w-full max-w-72 md:max-w-64"
          ></iframe>
          <span></span>
          <div className="p-3">
            <h1 className="">Day 3 ReactJS Internship</h1>
            <div className="flex items-center gap-1 justify-between mt-2">
              <div className="flex gap-1 items-center">
                <FaUserFriends /> <span className="text-xs">0</span>
              </div>
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-300" />
                <span className="text-xs">0</span>
              </div>
              <div className="flex gap-1">
                <AiOutlineLike />
                <AiOutlineDislike />
              </div>
            </div>
          </div>
        </div>
        {/* </section> */}
      </div>
    </div>
  );
};

export default Courses;
