import { FaArrowUpLong, FaGraduationCap, FaSackDollar } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { IoIosCheckbox } from "react-icons/io";

import {
  MdAnalytics,
  MdDashboard,
  MdLiveTv,
  MdMenuBook,
  MdToday,
  MdWorkspacePremium,
} from "react-icons/md";

const Dashbord = () => {
  return (
    <div className="flex w-full justify-center mx-auto  bg-gren-200 ">
      <div className="md:max-5xl  w-full  mx-auto  ">
        <div className="flex justify-between">
          <div>
            <h1 className="text-xl  font-bold">Dashbord Overview</h1>
            <p className="text-sm font-semibold  text-gray-500">
              Welcome back! Here's what happening today.
            </p>
          </div>
          <div>
            <button className="flex items-center md:gap-1 bg-blue-500 hover:bg-blue-700 hover:scale-105 p-0.5 md:p-1.5 rounded  text-xs md:text-sm text-white">
              View full Report
            </button>
          </div>
        </div>
        <section
          className="grid grid-cols-2 md:flex 
                 gap-4 mt-5 "
        >
          <div className="md:w-1/4  min-h-28 p-2 py-3 rounded shadow bg-white px-3.5 ">
            <span className="md:text-sm text-xs font-semibold text-gray-600">
              Total Students
            </span>
            <div className="flex justify-between  ">
              <p className="font-bold text-xl">612</p>

              <div className="bg-blue-100 w-8  mx-2 p-1.5  rounded text-white mt-2 ">
                <FiUsers className="text-black font-bold size-5" />
              </div>
            </div>
            <div className=" space-y-2  flex gap-2 items-center">
              <div className="  ">
                <FaArrowUpLong size={10} className="text-green-500 " />
                <span className=" text-xs flex gap-1  text-green-500 font-semibold mt-1 ">
                  8.2%
                </span>
              </div>
              <span className="text-xs font-semibold text-gray-500">
                vs last month
              </span>
            </div>
          </div>
          <div className="md:w-1/4  min-h-28 p-2 py-3 rounded shadow bg-white px-3.5">
            <span className="md:text-sm text-xs font-semibold text-gray-600">
              Total Trainers
            </span>
            <div className="flex justify-between  ">
              <p className="font-bold text-xl">24</p>

              <div className="bg-green-100 w-8  mx-2 p-1.5  rounded text-white mt-2 ">
                <FaGraduationCap className="text-black/80 font-bold size-5" />
              </div>
            </div>
            <div className=" space-y-2  flex gap-2 items-center">
              <div className="  ">
                <FaArrowUpLong size={10} className="text-green-500 " />
                <span className=" text-xs flex gap-1  text-green-500 font-semibold mt-1 ">
                  3.2%
                </span>
              </div>
              <span className="text-xs font-semibold text-gray-500">
                vs last month
              </span>
            </div>
          </div>

          <div className="md:w-1/4  min-h-28 p-2 py-3 rounded shadow bg-white px-3.5">
            <span className="md:text-sm text-xs font-semibold text-gray-600">
              Total Courses
            </span>
            <div className="flex justify-between  ">
              <p className="font-bold text-xl">48</p>

              <div className="bg-purple-100 w-8  mx-2 p-1.5  rounded text-white mt-2 ">
                <MdMenuBook className="text-red-500 font-bold size-5" />
              </div>
            </div>
            <div className=" space-y-2  flex gap-2 items-center">
              <div className="  ">
                <FaArrowUpLong size={10} className="text-green-500 " />
                <span className=" text-xs flex gap-1  text-green-500 font-semibold mt-1 ">
                  12.5%
                </span>
              </div>
              <span className="text-xs font-semibold text-gray-500">
                vs last month
              </span>
            </div>
          </div>

          <div className="md:w-1/4  min-h-28 p-2 py-3 rounded shadow bg-white px-3.5">
            <span className="md:text-sm text-xs font-semibold text-gray-600">
              Active <br />
              Enrollement
            </span>
            <div className="flex justify-between  ">
              <p className="font-bold text-xl">1,842</p>

              <div className="bg-green-100 w-8  mx-2 p-1.5  rounded text-white mt-2 ">
                <IoIosCheckbox className="text-green-500 font-bold size-5" />
              </div>
            </div>
            <div className=" space-y-2  flex gap-2 items-center">
              <div className="  ">
                <FaArrowUpLong size={10} className="text-green-500 " />
                <span className=" text-xs flex gap-1  text-green-500 font-semibold mt-1 ">
                  15.3%
                </span>
              </div>
              <span className="text-xs font-semibold text-gray-500">
                vs last month
              </span>
            </div>
          </div>

          <div className="md:w-1/4  min-h-28 p-2 py-3 rounded shadow bg-white px-3.5">
            <span className="md:text-sm text-xs font-semibold text-gray-600">
              Session Today
            </span>
            <div className="flex justify-between  ">
              <p className="font-bold text-xl">3</p>

              <div className="bg-yellow-100 w-8  mx-2 p-1.5  rounded text-white mt-2 ">
                <MdToday className=" text-black/60 font-bold size-5" />
              </div>
            </div>
          </div>

          <div className="md:w-1/4  min-h-28 p-2 py-3 rounded shadow bg-white px-3.5">
            <span className="md:text-sm text-xs font-semibold text-gray-600">
              Total Revenue
            </span>
            <div className="flex justify-between  ">
              <p className="font-bold text-xl">$287K</p>

              <div className="bg-green-100 w-8  mx-2 p-1.5  rounded text-white mt-2 ">
                <FaSackDollar className="text-green-500 font-bold size-5" />
              </div>
            </div>
            <div className=" space-y-2  flex gap-2 items-center">
              <div className="  ">
                <FaArrowUpLong size={10} className="text-green-500 " />
                <span className=" text-xs flex gap-1  text-green-500 font-semibold mt-1 ">
                  22.4%
                </span>
              </div>
              <span className="text-xs font-semibold text-gray-500">
                vs last month
              </span>
            </div>
          </div>
        </section>

        <div className="flex flex-col md:flex-row gap-4 mt-5">
          <div className=" min-h-60 md:w-1/2 shadow rounded bg-white relative ">
            <h2 className=" font-semibold   p-2 px-4  pb-2 ">Student Growth</h2>
            <hr className="border-b" />
            <div className=" absolute w-full bottom-0 p-2 ">
              <div className="grid grid-flow-col gap-4 text-black/60 font-bold md:font-semibold text-sm px-4">
                <div>
                  Jan
                  <br />
                  120
                </div>

                <div>
                  Feb
                  <br />
                  105
                </div>

                <div>
                  Mar
                  <br />
                  245
                </div>

                <div>
                  Apr
                  <br />
                  312
                </div>

                <div>
                  May
                  <br />
                  356
                </div>

                <div>
                  Jun
                  <br />
                  456
                </div>
              </div>
            </div>
          </div>
          <div className=" min-h-60  md:w-1/2 shadow rounded bg-white px-2">
            <h1 className=" font-semibold p-2  px-2 pb-2">
              Course Completion Rate
            </h1>
            <hr className="border-b " />
            <div className=" px-2 mt-2">
              <div className="flex justify-between text-sm py-1">
                React
                <span>68%</span>
              </div>
              <div className="bg-white h-2 shadow rounded">
                <div className="bg-blue-500 h-2 rounded w-[68%]"></div>
              </div>
            </div>

            <div className=" px-2 mt-2 ">
              <div className="flex justify-between text-sm py-1">
                Javascript
                <span>84%</span>
              </div>
              <div className="bg-white h-2 shadow rounded">
                <div className="bg-blue-500 h-2 rounded w-[84%]"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mt-5 ">
          <div className="bg-white shadow md:w-1/2 rounded min-h-32 pb-4 ">
            <h1 className=" border-b-black p-2  px-4 font-semibold">
              Active Users
            </h1>
            <hr className="border-b" />
            <div className="px-4 p-2 space-y-2 mt-1">
              <div className="bg-blue-50 rounded min-h-10 p-2 flex justify-between">
                <div className="text-xs text-black/30 font-semibold px-2">
                  Daily Active
                  <p className=" text-black font-bold text-sm">342</p>
                </div>
                <div className="bg-blue-100 rounded-full px-2 items-center  flex justify-center">
                  <MdDashboard size={20} className="text-blue-500" />
                </div>
              </div>

              <div className="bg-green-50 rounded min-h-10 p-2 flex justify-between">
                <div className="text-xs text-black/30 font-semibold px-2">
                  Weekly Active
                  <p className=" text-black font-bold text-sm">498</p>
                </div>
                <div className="bg-blue-100 rounded-full px-2 items-center  flex justify-center">
                  <MdAnalytics size={20} className="text-green-500" />
                </div>
              </div>

              <div className="bg-purple-50 rounded min-h-10 p-2 flex justify-between">
                <div className="text-xs text-black/30 font-semibold px-2">
                  Monthly Active
                  <p className=" text-black font-bold text-sm">587</p>
                </div>
                <div className="bg-purple-100 rounded-full px-2 items-center  flex justify-center">
                  <MdDashboard size={20} className="text-purple-500" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow  w-full rounded pb-4 ">
            <h1 className=" border-b-black p-2  px-4 font-semibold">
              Quick Actions
            </h1>
            <hr className="border-b" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4  px-4 mt-5 w-full">
              <div className="  min-h-20 rounded border-[1px] p-2 pb-4 shadow hover:border-blue-500 hover:bg-blue-50">
                <div className=" flex justify-center mt-2">
                  <div className="bg-blue-500 w-12 h-12 rounded-full">
                    <MdMenuBook className="text-red-500 items-center flex  size-7 mt-2 mx-auto  justify-center" />
                  </div>
                </div>
                <div>
                  <p className="text-center text-xs text-black/60 font-bold md:font-semibold mt-2">
                    Add Courses
                  </p>
                </div>
              </div>

              <div className=" shadow min-h-20 rounded border-[1px]  p-2 pb-4 hover:border-blue-500 hover:bg-blue-50">
                <div className=" flex justify-center mt-2 ">
                  <div className="bg-green-500 w-12 h-12 rounded-full">
                    <FaGraduationCap className="text-gray-900 items-center flex  size-7 mt-2 mx-auto  justify-center" />
                  </div>
                </div>
                <div>
                  <p className="text-center text-xs text-black/60 font-bold md:font-semibold mt-2">
                    Add Trainer
                  </p>
                </div>
              </div>

              <div className=" shadow min-h-20 rounded border-[1px] p-2 pb-4 hover:border-blue-500 hover:bg-blue-50">
                <div className=" flex justify-center mt-2 ">
                  <div className="bg-purple-500 w-12 h-12 rounded-full">
                    <MdLiveTv className="text-gray-800 items-center flex  size-7 mt-2 mx-auto  justify-center" />
                  </div>
                </div>
                <div>
                  <p className="text-center text-xs text-black/60 font-bold md:font-semibold mt-2">
                    Create Sessions
                  </p>
                </div>
              </div>

              <div className=" shadow min-h-20 rounded border-[1px] p-2 pb-4 hover:border-blue-500 hover:bg-blue-50">
                <div className=" flex justify-center mt-2 ">
                  <div className="bg-amber-500 w-12 h-12 rounded-full">
                    <MdWorkspacePremium className="text-blue-500 items-center flex  size-7 mt-2 mx-auto  justify-center" />
                  </div>
                </div>
                <div>
                  <p className="text-center text-xs text-black/60 font-bold md:font-semibold mt-2">
                    Upload Certificate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
