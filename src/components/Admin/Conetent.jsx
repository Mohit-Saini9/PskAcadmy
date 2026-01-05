import React, { useState } from "react";

const Conetent = () => {
  const [filter, setFilter] = useState("all");
  return (
    <div>
      <div className="flex justify-between itemse-center">
        <div>
          <h1 className="text-xl  font-bold">Content & Downloads</h1>
          <p className="text-sm  text-gray-500 font-semibold">
            Manage course content ,videos, and download settings
          </p>
        </div>
        <div>
          <button className="flex items-center md:gap-1 bg-blue-500 hover:bg-blue-700 hover:scale-105 p-1 md:p-1.5 px-4 rounded  text-xs md:text-sm text-white">
            Upload Content
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
            <p className="text-sm text-black/50 font-semibold">Total Files</p>
          </div>
        </div>

        <div className="md:w-1/4  min-h-24 p-2 py-3 rounded shadow bg-white   justify-center text-center">
          <div className="p-2">
            <p className="text-2xl font-bold  text-green-600">1</p>
            <p className="text-sm text-black/50 font-semibold">Videos</p>
          </div>
        </div>

        <div className="md:w-1/4  min-h-24 p-2 py-3 rounded shadow bg-white   justify-center text-center">
          <div className=" p-2">
            <p className="text-2xl font-bold  text-yellow-600">320</p>
            <p className="text-sm text-black/50 font-semibold">
              Total Doownloads
            </p>
          </div>
        </div>

        <div className="md:w-1/4  min-h-24 p-2 py-3 rounded shadow bg-white   justify-center text-center">
          <div className=" p-2">
            <p className="text-2xl font-bold  text-purple-600">2</p>
            <p className="text-sm text-black/50 font-semibold">
              Download Enabled
            </p>
          </div>
        </div>
      </section>

      <div className="shadow bg-white mt-4 rounded">
        <h1 className="p-2 px-4 font-semibold">Storage</h1>
        <hr className="" />
        <div className="p-2 px-4  space-y-2">
          <div className="text-xs font-semibold flex justify-between">
            Total Storage
            <span className="font-semibold">342 GB / 500 GB</span>
          </div>
          <div className=" w-full shadow bg-slate-50 rounded h-1.5 relative mt-1">
            <div className="bg-blue-600 rounded absolute h-2 w-[70%]"></div>
          </div>
          <section
            className="grid grid-cols-1 md:grid-cols-3 
                 gap-4  "
          >
            <div className="bg-blue-50 min-h-14 rounded  p-2 text-xs text-black/40 font-semibold mt-2">
              Videos
              <p className="font-bold text-blue-600 text-sm">245GB</p>
            </div>

            <div className="bg-green-50 min-h-14 rounded  p-2  text-xs text-black/40 font-semibold mt-2">
              Documents
              <p className="font-bold text-green-600 text-sm">78GB</p>
            </div>

            <div className="bg-yellow-50 min-h-14 rounded p-2  text-black/40 font-semibold text-xs mt-2">
              Others
              <p className="font-bold text-yellow-600 text-sm">19GB</p>
            </div>
          </section>
          <div></div>
        </div>
      </div>

      <div className="shadow rounded  bg-white mt-5 p-2 px-2 ">
        <div className=" flex gap-2 mt-2">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className=" border rounded-md py-1 px-2  bg-white  focus:ring-blue-500 text-sm font-semibold"
          >
            <option value="all">All</option>
            <option value="video">Video</option>
            <option value="download">Total download</option>
            <option value="enabled">Enabled</option>
          </select>
          <button className=" border rounded-md md:py-1 px-4  bg-white  focus:ring-blue-500 text-sm font-semibold ">
            Download Logs
          </button>
        </div>
        <div className="p-2 px-4 overflow-x-auto max-h-60">
          <table className="min-w-[700px] md:w-full table-fixed">
            <thead>
              <tr className="   border-b-[1.5px] text-black/50 p-2  uppercase text-xs">
                <th className=" text-left p-1">Courses</th>
                <th className=" p-1 text-left">Content</th>
                <th className="p-1 text-left">Type</th>
                <th className="p-1 text-left">Module</th>
                <th className="p-1 text-left">Size </th>
                <th className="p-1 text-left">Downloads</th>
                <th className="p-1 text-left">Downloads Enabled</th>
                <th className="p-1 text-left">Expiry Days</th>
              </tr>
            </thead>
            <tbody>
              {(filter === "all" || filter === "scheduled") && (
                <>
                  <tr className="p-2 border-b-[1.5px] text-black/60 text-left text-xs font-semibold ">
                    <td className="p-2 text-left">
                      <div className="flex gap-2">
                        <p className="flex flex-col text-black/80 font-bold">
                          Introduction
                          <span className="text-black/40 text-xs font-semibold">
                            React
                          </span>
                        </p>
                      </div>
                    </td>
                    <td className="p-2 ">
                      <button className="bg-blue-100 text-xs rounded-xl  text-blue-700 px-2 py-0.5">
                        video
                      </button>
                    </td>
                    <td className="p-2 "></td>
                    <td className="p-2 "></td>
                    <td className="p-2">142</td>
                    <td className="p-2">
                      <button className="bg-green-100 text-xs rounded-xl  text-green-700 px-2 py-0.5">
                        Yes
                      </button>
                    </td>
                    <td className="p-2 ">undefined days</td>

                    <td className="p-2">
                      <div className="flex gap-2">
                        <span className="text-blue-500"> Settings </span>
                        <span className="text-red-500">Delete</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="p-2 border-b-[1.5px] text-black/60 text-left text-xs font-semibold ">
                    <td className="p-2 text-left">
                      <div className="flex gap-2">
                        <p className="flex flex-col text-black/80 font-bold">
                          Guide
                          <span className="text-black/40 text-xs font-semibold">
                            React
                          </span>
                        </p>
                      </div>
                    </td>
                    <td className="p-2 ">
                      <button className="bg-slate-100 text-xs rounded-xl  text-black/80 px-2 py-0.5">
                        document
                      </button>
                    </td>
                    <td className="p-2 "></td>
                    <td className="p-2 "></td>
                    <td className="p-2">178</td>
                    <td className="p-2">
                      <button className="bg-green-100 text-xs rounded-xl  text-green-700 px-2 py-0.5">
                        Yes
                      </button>
                    </td>
                    <td className="p-2 ">undefined days</td>

                    <td className="p-2">
                      <div className="flex gap-2">
                        <span className="text-blue-500"> Settings </span>
                        <span className="text-red-500">Delete</span>
                      </div>
                    </td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="shadow bg-white mt-4 rounded pb-2">
        <h1 className="p-2 px-4 font-semibold">Download Settings</h1>
        <hr className="" />
        <div className=" px-4 p-2  space-y-3">
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <p className="text-xs  font-semibold text-black/90 items-center">
              Allow students to downlods course materials
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-xs font-semibold">
              Download Expiry Duration (days)
            </p>
            <input
              type="number"
              className="shadow w-full px-2 p-0.5 rounded outline-blue-400 "
              value={30}
            />
            <p className="text-xs text-black/60">
              Set to 0 for no expiry limit
            </p>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <p className="text-xs  font-semibold text-black/90 items-center">
              Enable downlods conter
            </p>
          </div>

          <button className="flex items-center md:gap-1 bg-blue-500 hover:bg-blue-700 hover:scale-105 p-1.5 px-2  rounded  text-xs md:text-sm text-white">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Conetent;
