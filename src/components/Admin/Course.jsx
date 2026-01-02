import React from "react";
import { MdSearch } from "react-icons/md";

const Course = () => {
  return (
    <div className=" flex- justify-center   w-full ">
      <div className=" max-w-5xl mx-auto ">
        <div className="flex justify-between itemse-center">
          <div>
            <h1 className="md:text-xl  font-bold">Courses Management</h1>
            <p className="text-xs md:text-sm  text-gray-500">
              Manage all courses and content
            </p>
          </div>
          <div>
            <button className="flex items-center md:gap-1 bg-blue-500 hover:bg-blue-700 hover:scale-105 p-1.5 md:p-2 rounded  text-xs md:text-sm text-white">
              View full Report
            </button>
          </div>
        </div>

        <div
          className="bg-white min-h-30 shadow rounded
        "
        >
          <div className=" pt-1 mt-4   bg-blue-200 sticky ">
            <div className="w-full   relative  h-12 p-2  flex items-center  gap-4 px-4 rounded  mt-2  ">
              <div className=" bg-white rounded-md  w-full">
                <MdSearch className=" absolute  top-4 items-center size-4.5 z-10  left-5 " />
                <input
                  type="text"
                  placeholder="Search courses ..."
                  className="w-full shadow p-1 px-6 outline-none rounded-md placeholder:text-sm"
                />
              </div>
              <div className=" ">
                <select className="w-full border rounded-md py-1.5 px-4  bg-white  focus:ring-blue-500">
                  <option>All</option>
                  <option>React</option>
                  <option>Node.js</option>
                  <option>Full Stack</option>
                </select>
              </div>
            </div>
          </div>
          <div className="p-2 px-4 overflow-x-auto max-h-60">
            <table className="min-w-[500px] md:w-full ">
              <thead>
                <tr className="   border-b-[1.5px] text-black/60 p-2 text-sm">
                  <th colSpan={2} className=" text-left p-1">
                    Courses
                  </th>
                  <th className=" p-1 text-left">Trainer</th>
                  <th className="p-1 text-left">Price</th>
                  <th className="p-1 text-left">Students</th>
                  <th className="p-1 text-left">Status </th>
                  <th className="p-1 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="p-2 border-b-[1.5px] text-black/60 text-left text-xs font-semibold">
                  <td colSpan={2} className="p-2 text-left">
                    React Masterclass
                  </td>
                  <td className="p-2 ">Dr.James Andson</td>
                  <td className="p-2">$99.99</td>
                  <td className="p-2">145</td>
                  <td className="p-2">published</td>
                  <td className="p-2">
                    <div>
                      <span className="text-blue-500"> View </span>edit
                    </div>
                  </td>
                </tr>

                <tr className="p-2 border-b-[1.5px] text-black/60 text-left text-xs font-semibold">
                  <td colSpan={2} className="p-2 text-left">
                    React Masterclass
                  </td>
                  <td className="p-2 ">Dr.James Andson</td>
                  <td className="p-2">$99.99</td>
                  <td className="p-2">145</td>
                  <td className="p-2">published</td>
                  <td className="p-2">
                    <div>
                      <span className="text-blue-500"> View </span>edit
                    </div>
                  </td>
                </tr>

                <tr className="p-2  text-black/60 text-left text-xs font-semibold">
                  <td colSpan={2} className="p-2 text-left">
                    React Masterclass
                  </td>
                  <td className="p-2 ">Dr.James Andson</td>
                  <td className="p-2">$99.99</td>
                  <td className="p-2">145</td>
                  <td className="p-2">published</td>
                  <td className="p-2">
                    <div>
                      <span className="text-blue-500"> View </span>edit
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
