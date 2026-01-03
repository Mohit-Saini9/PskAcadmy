import React, { useState } from "react";
import { FaArrowUpLong, FaBarsProgress, FaChartLine } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";

const Reports = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="flex justify-between itemse-center">
        <div>
          <h1 className="text-xl  font-bold">Report & Analytics</h1>
          <p className="text-xs  text-gray-500 font-semibold">
            View detailed reports and analytics
          </p>
        </div>

        <div className=" flex gap-2 mt-2">
          <select className=" border rounded-md py-1 px-2  bg-white  focus:ring-blue-500 text-sm font-semibold">
            <option value="all">This month</option>
          </select>
          <button className=" border rounded-md md:py-1 px-2  bg-white  focus:ring-blue-500 text-sm font-semibold ">
            Download Logs
          </button>
        </div>
      </div>

      <section
        className="grid grid-cols-2 md:flex 
                 gap-4 mt-5 "
      >
        <div className="md:w-1/4  min-h-24 p-2 py-2 rounded shadow bg-white   ">
          <div className=" p-1">
            <h1 className="text-sm text-black/50 font-semibold">
              Avg Coures Completion
            </h1>
            <p className="text-2xl font-bold  text-blue-600 mt-2">73.4%</p>
            <p className="text-xs text-green-600 font-semibold flex items-center mt-1">
              <FaArrowUpLong /> 2.3% from last month
            </p>
          </div>
        </div>

        <div className="md:w-1/4  min-h-24 p-2 py-2 rounded shadow bg-white   ">
          <div className=" p-1">
            <h1 className="text-sm text-black/50 font-semibold">
              Avg Student Score
            </h1>
            <p className="text-2xl font-bold  text-green-600 mt-2">84%</p>
            <p className="text-xs text-green-600 font-semibold flex items-center mt-1">
              <FaArrowUpLong /> 1.5% from last month
            </p>
          </div>
        </div>

        <div className="md:w-1/4  min-h-24 p-2 py-2 rounded shadow bg-white   ">
          <div className=" p-1">
            <h1 className="text-sm text-black/50 font-semibold">
              Avg Sessions Attendance
            </h1>
            <p className="text-2xl font-bold  text-purple-600 mt-2">82%</p>
            <p className="text-xs text-amber-600 font-semibold flex items-center mt-1">
              <FaArrowUpLong /> 0.8% from last month
            </p>
          </div>
        </div>

        <div className="md:w-1/4  min-h-24 p-2 py-2 rounded shadow bg-white   ">
          <div className=" p-1">
            <h1 className="text-sm text-black/50 font-semibold">
              Total Downloads
            </h1>
            <p className="text-2xl font-bold  text-amber-600 mt-2">12,84</p>
            <p className="text-xs text-green-600 font-semibold flex items-center mt-1">
              <FaArrowUpLong /> 12.3% from last month
            </p>
          </div>
        </div>
      </section>

      <div className="mt-4">
        <div className="flex gap-2">
          <button
            className={`mt-4  text-sm font-semibold 2 pb-2 ${
              show ? "border-b-2 border-blue-400 " : ""
            }`}
            onClick={() => setShow(!show)}
          >
            Student Progress
          </button>
          <button
            className="mt-4  text-sm font-semibold   pb-2"
            onClick={() => setShow(!show)}
          >
            Trainer Performance
          </button>
        </div>
        {show ? (
          <div className=" overflow-x-auto max-h-60  p-4 rounded bg-white pb-6 mt-4">
            <table className="min-w-[700px] md:w-full table-fixed  ">
              <thead>
                <tr className="   border-b-[1.5px] text-black/50 p-2  uppercase text-xs">
                  <th className=" p-2 text-left pb-4 ">Student</th>
                  <th className="p-2 text-left pb-4">Courses</th>
                  <th className="p-2 text-left  pb-4">Progress</th>
                  <th className="p-2 text-left  pb-4">Lesson Completed </th>
                  <th className="p-2 text-left  pb-4">Time Spent</th>
                  <th className="p-2 text-left  pb-4">Avg Score</th>
                  <th className="p-2 text-left  pb-4">Last Activity</th>
                </tr>
              </thead>
              <tbody>
                <>
                  <tr className="p-2 bordesr-b-[1.5px] text-black/60 text-left text-sm font-semibold ">
                    <td className="p-3 text-left">Michal cahin</td>
                    <td className="p-3 ">React</td>
                    <td className="p-3">
                      <div className="flex  items-center gap-1 ">
                        <div className="h-2 relative bg-gray-200 w-14 rounded">
                          <div className="absolute bg-blue-600 h-2 w-[70%] rounded" />
                        </div>
                        <div className="text-xs">70%</div>
                      </div>
                    </td>
                    <td className="p-3">58/78</td>
                    <td className="p-3 ">42 hours</td>

                    <td className="p-3 ">87%</td>
                    <td className="p-3 ">2025-12-18</td>
                  </tr>
                  <tr className="p-2 bordesr-b-[1.5px] text-black/60 text-left text-sm font-semibold ">
                    <td className="p-3 text-left">Jhonson</td>
                    <td className="p-3 ">Java</td>
                    <td className="p-3">
                      <div className="flex  items-center gap-1 ">
                        <div className="h-2 relative bg-gray-200 w-14 rounded">
                          <div className="absolute bg-blue-600 h-2 w-[80%] rounded" />
                        </div>
                        <div className="text-xs">80%</div>
                      </div>
                    </td>
                    <td className="p-3">68/78</td>
                    <td className="p-3 ">52 hours</td>

                    <td className="p-3 ">80%</td>
                    <td className="p-3 ">2025-12-16</td>
                  </tr>
                </>
              </tbody>
            </table>
          </div>
        ) : (
          <div className=" overflow-x-auto max-h-60  p-4 rounded bg-white pb-6 mt-4">
            <table className="min-w-[700px] md:w-full table-fixed  ">
              <thead>
                <tr className="   border-b-[1.5px] text-black/50 p-2  uppercase text-xs">
                  <th className=" p-2 text-left pb-4 ">Trainer</th>
                  <th className="p-2 text-left pb-4">Courses</th>
                  <th className="p-2 text-left  pb-4">Certifiacte Id</th>
                  <th className="p-2 text-left  pb-4">Issue Date </th>
                  <th className="p-2 text-left  pb-4">Status </th>
                  <th className="p-2 text-left  pb-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                <>
                  <tr className="p-2 bordesr-b-[1.5px] text-black/60 text-left text-sm font-semibold ">
                    <td className="p-3 text-left">Michal cahin</td>
                    <td className="p-3 ">JavaScript Advanced</td>
                    <td className="p-3">
                      <button className="text-xs bg-slate-100 px-2">
                        CERT-2025-001
                      </button>
                    </td>
                    <td className="p-3">2025-12-18</td>
                    <td className="p-3 ">
                      <button className="bg-green-100 text-xs rounded-xl  text-green-700 px-2 py-0.5">
                        issued
                      </button>
                    </td>

                    <td className="p-3 ">
                      <div className="flex gap-2">
                        <button className="text-blue-500">View</button>
                        <button className="text-red-500">Revoke</button>
                      </div>
                    </td>
                  </tr>
                  <tr className="p-3  text-left text-sm font-semibold  text-black/60 ">
                    <td className="p-3 text-left">Sarah Jhonson</td>
                    <td className="p-3 ">React Masterclass</td>
                    <td className="p-3">
                      <button className="text-xs bg-slate-100 px-2">
                        CERT-2025-001
                      </button>
                    </td>
                    <td className="p-3">2025-12-18</td>
                    <td className="p-3 ">
                      <button className="bg-green-100 text-xs rounded-xl  text-green-700 px-2 py-0.5">
                        issued
                      </button>
                    </td>

                    <td className="p-3 ">
                      <div className="flex gap-2">
                        <button className="text-blue-500">View</button>
                        <button className="text-red-500">Revoke</button>
                      </div>
                    </td>
                  </tr>
                </>
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div className="shadow bg-white mt-4 rounded">
        <h1 className="p-2 px-4 font-semibold text-black/90">
          Experts Reports
        </h1>
        <hr className="" />

        <div className="shadow p-4 rounded w-full ">
          <section
            className="grid grid-cols-2 md:flex 
                 gap-4 mt-5 "
          >
            <div
              className="md:w-1/3  min-h-24 p-2 py-3 rounded-md  bg-white   justify-center text-center
             border-[1.5px] border-black/60"
            >
              <div className="p-2">
                <div className="flex justify-center text-center">
                  <FaBarsProgress className="size-6 text-blue-500" />
                </div>
                <p className="text-sm  font-semibold text-black/80">
                  Student Progress
                </p>
                <p className="text-xs text-black/60 font-semibold">CSV/PCF</p>
              </div>
            </div>

            <div className="md:w-1/3  min-h-24 p-2 py-3 rounded-md  bg-white   justify-center text-center  border-[1.5px] border-black/60">
              <div className=" p-2 space-y-2">
                <div className="flex justify-center text-center">
                  <FaChartLine className="size-6 text-red-500" />
                </div>
                <p className="text-sm  font-semibold text-black/80">
                  Course Analysis
                </p>
                <p className="text-xs text-black/60 font-semibold">CSV/PCF</p>
              </div>
            </div>

            <div className="md:w-1/3  min-h-24 p-2 py-3 rounded-md  bg-white   justify-center text-center  border-[1.5px] border-black/60">
              <div className=" p-2 space-y-2">
                <div className="flex justify-center text-center">
                  <FiUsers className="size-6 text-black" />
                </div>
                <p className="text-sm  font-semibold  text-black/80">
                  Trainer Report
                </p>
                <p className="text-xs text-black/60 font-semibold">CSV/PCF</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Reports;
