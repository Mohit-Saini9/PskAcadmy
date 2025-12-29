import React from "react";
import { FaStar, FaUserFriends } from "react-icons/fa";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { LiaEditSolid } from "react-icons/lia";
import { MdDeleteOutline } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";

const Course = () => {
  return (
    <>
      <div className=" flex justify-center   ">
        <div className=" max-w-3xl w-full  ">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-bold text-xl ">My Courses</h1>
              <p className="text-gray-500 text-sm">
                Mange and create your courses
              </p>
            </div>
            <button className="flex items-center gap-1 bg-blue-500 hover:bg-blue-700 hover:scale-105 p-1 rounded px-2 text-sm text-white">
              <IoIosAdd size={20} /> Create New Course
            </button>
          </div>
          <section className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4 ">
            <div className="rounded shadow bg-white min-h-60 max-w-72 md:max-w-64    mt-4">
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
                <div className="flex w-full gap-2 text-sm mt-2  ">
                  <button className="bg-blue-50 w-1/2 rounded p-2 px-4 flex items-center text-blue-500 hover:text-white hover:bg-blue-400 hover:scale-105">
                    <LiaEditSolid size={20} />
                    Edit
                  </button>
                  <button className="w-1/2 bg-red-50 p-2 flex rounded items-center text-red-400 hover:bg-red-500 hover:text-white hover:scale-105">
                    <MdDeleteOutline size={20} />
                    Delete
                  </button>
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
                <div className="flex w-full gap-2 text-sm mt-2  ">
                  <button className="bg-blue-50 w-1/2 rounded p-2 px-4 flex items-center text-blue-500 hover:text-white hover:bg-blue-400 hover:scale-105">
                    <LiaEditSolid size={20} />
                    Edit
                  </button>
                  <button className="w-1/2 bg-red-50 p-2 flex rounded items-center text-red-400 hover:bg-red-500 hover:text-white hover:scale-105">
                    <MdDeleteOutline size={20} />
                    Delete
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded shadow bg-white min-h-60 max-w-72 md:max-w-64   mt-4">
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
                <div className="flex w-full gap-2 text-sm mt-2  ">
                  <button className="bg-blue-50 w-1/2 rounded p-2 px-4 flex items-center text-blue-500 hover:text-white hover:bg-blue-400 hover:scale-105">
                    <LiaEditSolid size={20} />
                    Edit
                  </button>
                  <button className="w-1/2 bg-red-50 p-2 flex rounded items-center text-red-400 hover:bg-red-500 hover:text-white hover:scale-105">
                    <MdDeleteOutline size={20} />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Course;
