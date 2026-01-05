import React, { useState } from "react";

const LiveSession = () => {
  const [filter, setFilter] = useState("all");

  return (
    <div className="">
      <div className=" max-w-5xl mx-auto">
        <div className="flex justify-between itemse-center">
          <div>
            <h1 className="text-xl  font-bold">Live Sessions Management</h1>
            <p className="text-sm text-gray-500 font-semibold">
              Schedule And manage live training sessions
            </p>
          </div>
          <div>
            <button className="flex items-center md:gap-1 bg-blue-500 hover:bg-blue-700 hover:scale-105 p-1.5  rounded  text-xs md:text-sm text-white">
              Create New Sessions
            </button>
          </div>
        </div>

        <section
          className="grid grid-cols-2 md:flex 
                 gap-4 mt-5 "
        >
          <div className="md:w-1/4  min-h-24 p-2 py-3 rounded shadow bg-white   justify-center text-center">
            <div className=" p-2">
              <p className="text-2xl font-bold  text-blue-600">2</p>
              <p className="text-sm text-black/50 font-semibold">
                Total Sessions
              </p>
            </div>
          </div>

          <div className="md:w-1/4  min-h-24 p-2 py-3 rounded shadow bg-white   justify-center text-center">
            <div className=" p-2">
              <p className="text-2xl font-bold  text-green-600">0</p>
              <p className="text-sm text-black/50 font-semibold">Live Now</p>
            </div>
          </div>

          <div className="md:w-1/4  min-h-24 p-2 py-3 rounded shadow bg-white   justify-center text-center">
            <div className=" p-2">
              <p className="text-2xl font-bold  text-yellow-600">2</p>
              <p className="text-sm text-black/50 font-semibold">Scheduled</p>
            </div>
          </div>

          <div className="md:w-1/4  min-h-24 p-2 py-3 rounded shadow bg-white   justify-center text-center">
            <div className=" p-2">
              <p className="text-2xl font-bold  text-neutral-800">0</p>
              <p className="text-sm text-black/50 font-semibold">Completed</p>
            </div>
          </div>
        </section>

        <div className="shadow rounded  bg-white mt-5 p-2 px-2 ">
          <div className=" flex gap-2 mt-2">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className=" border rounded-md py-1 px-2  bg-white  focus:ring-blue-500 text-sm font-semibold"
            >
              <option value="all">All</option>
              <option value="live">Live Now</option>
              <option value="scheduled">Scheduled</option>
              <option value="completed">Completed</option>
            </select>
            <button className=" border rounded-md md:py-1 px-2 md:px-4  bg-white  focus:ring-blue-500 text-sm font-semibold ">
              Export Calander
            </button>
          </div>
          <div className="p-2 px-4 overflow-x-auto max-h-60">
            <table className="min-w-[700px] md:w-full table-fixed">
              <thead>
                <tr className="   border-b-[1.5px] text-black/50 p-2  uppercase text-xs">
                  <th colSpan={2} className=" text-left p-1">
                    Courses
                  </th>
                  <th className=" p-1 text-left">Trainer</th>
                  <th className="p-1 text-left">Date & Time</th>
                  <th className="p-1 text-left">Duration</th>
                  <th className="p-1 text-left">Platform </th>
                  <th className="p-1 text-left">Attendence</th>
                  <th className="p-1 text-left">Status </th>
                  <th className="p-1 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {(filter === "all" || filter === "scheduled") && (
                  <>
                    <tr className="p-2 border-b-[1.5px] text-black/60 text-left text-xs font-semibold ">
                      <td colSpan={2} className="p-2 text-left">
                        <div className="flex gap-2">
                          <p className="flex flex-col text-black/80 font-bold">
                            React Hooks Deep Dive
                            <span className="text-black/40 text-xs font-semibold">
                              React Masterclass
                            </span>
                          </p>
                        </div>
                      </td>
                      <td className="p-2 ">Dr.James Andson</td>
                      <td className="p-2">
                        2025-11-18
                        <p>10:00 Am</p>
                      </td>
                      <td className="p-2">2 hours</td>
                      <td className="p-2 ">Zoom</td>
                      <td className="p-2">45/100</td>
                      <td className="p-2">
                        <button className="bg-blue-100 text-xs rounded-xl  text-blue-700 px-2 py-0.5">
                          scheduled
                        </button>
                      </td>
                      <td className="p-2">
                        <div className="flex gap-2">
                          <span className="text-blue-500"> View </span>Edit
                        </div>
                      </td>
                    </tr>
                    <tr className="p-2  text-left text-xs font-semibold">
                      <td colSpan={2} className="p-2 text-left">
                        <div className="flex gap-2">
                          <p className="flex flex-col text-black/80 font-bold">
                            Javscript ES6+
                            <span className="text-black/40 text-xs font-semibold">
                              Javascripte Advanced
                            </span>
                          </p>
                        </div>
                      </td>
                      <td className="p-2 ">Prof.maria Gracia</td>
                      <td className="p-2">
                        2025-12-20
                        <p>1:30 Am</p>
                      </td>
                      <td className="p-2">1.5 hours</td>
                      <td className="p-2">Zoom</td>
                      <td className="p-2">56/80</td>
                      <td className="p-2 ">
                        <button className="bg-blue-100 text-xs rounded-xl  text-blue-700 px-2 py-0.5">
                          scheduled
                        </button>
                      </td>
                      <td className="p-2">
                        <div className="flex gap-2">
                          <span className="text-blue-500"> View </span>Edit
                        </div>
                      </td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveSession;
