import React from "react";

const Courses = () => {
  return (
    <div className="max-w-4xl px-4 mx-auto ">
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3  gap-4 px-4  border-l-indigo-600">
        <section className="shadow-md p-4 max-w-72   bg-white rounded ">
          <div className="bg-black/70 w-54 h-28 rounded"></div>
          <div className="w-full shadow h-1 p-0.5 mt-2 rounded relative">
            <div className=" flex bg-blue-500 absolute  w-[60%] shadow h-1 p-0.5 rounded"></div>
            <p className="text-sm text-right ">70%</p>
          </div>
          <div className="">
            hello guys
            <p>this is dome</p>
          </div>
        </section>
        <section className="shadow-md p-4 max-w-72 bg-white rounded ">
          <div className="bg-black/70 w-54 h-28 rounded"></div>
          <div className="w-full shadow h-1 p-0.5 mt-2 rounded relative">
            <div className=" flex bg-blue-500 absolute  w-[60%] shadow h-1 p-0.5 rounded"></div>
            <p className="text-sm text-right ">70%</p>
          </div>
          <div className="">
            hello guys
            <p>this is dome</p>
          </div>
        </section>
        <section className="shadow-md p-4 max-w-72 bg-white rounded ">
          <div className="bg-black/70 w-54 h-28 rounded"></div>
          <div className="w-full shadow h-1 p-0.5 mt-2 rounded relative">
            <div className=" flex bg-blue-500 absolute  w-[60%] shadow h-1 p-0.5 rounded"></div>
            <p className="text-sm text-right ">70%</p>
          </div>
          <div className="">
            hello guys
            <p>this is dome</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Courses;
