import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuCircleCheckBig } from "react-icons/lu";
import { FiDollarSign } from "react-icons/fi";
import { IoTrendingUp } from "react-icons/io5";
import { HiMiniArrowSmallUp } from "react-icons/hi2";

const Analytics = () => {
  const DataTrend = [
    { id: 1, month: "Jan", Revenue: "8,500", progress: "40" },
    { id: 2, month: "Feb", Revenue: "12,300", progress: "50" },
    { id: 3, month: "Mar", Revenue: "15,800", progress: "60" },
    { id: 4, month: "Apr", Revenue: "18,500", progress: "70" },
    { id: 5, month: "May", Revenue: "22,400", progress: "80" },
    { id: 6, month: "Jun", Revenue: "25,600", progress: "95" },
  ];
  return (
    <div className="  flex  justify-center ">
      <div className=" w-full max-w-3xl ">
        <h1 className="text-xl font-bold">Analytics</h1>
        <p className="text-sm font-semibold text-gray-500">
          Track your course perfomance and revenue
        </p>
        <section className="grid grid-cols-2 md:flex gap-4 mt-4">
          <div className="md:w-1/4  min-h-28 p-2 py-3 rounded-lg shadow border border-blue-200 bg-blue-50">
            <div className="flex justify-between items-center">
              <div className="bg-blue-400 w-8  mx-2 p-1.5  rounded text-white">
                <MdOutlineRemoveRedEye className="size-5" />
              </div>
              <span className=" text-xs flex gap-1 items-center text-green-500 font-semibold">
                <IoTrendingUp />
                12%
              </span>
            </div>
            <div className="px-2 mt-2">
              <span className="text-sm text-gray-500">Total Views</span>
              <p className="font-bold ">65,310</p>
            </div>
          </div>
          <div className="md:w-1/4  min-h-28 p-2 py-3 rounded-lg shadow border border-green-200 bg-green-50">
            <div className="flex justify-between items-center">
              <div className="bg-green-500 w-8  mx-2 p-1.5  rounded text-white">
                <LuCircleCheckBig className="size-5 " />
              </div>
              <span className=" text-xs flex gap-1 items-center text-green-500 font-semibold">
                <IoTrendingUp />
                8%
              </span>
            </div>
            <div className="px-2 mt-2">
              <span className="text-sm text-gray-500">Avg Companies</span>
              <p className="font-bold ">76.8%</p>
            </div>
          </div>
          <div className="md:w-1/4 min-h-28 p-2 py-3  rounded-lg shadow border border-orange-200 bg-orange-50">
            <div className="flex justify-between items-center">
              <div
                className="bg-gradient-to-br from-orange-500 to-red-500 
               w-8 mx-2 p-1.5  rounded text-white "
              >
                <FiDollarSign className="size-5 " />
              </div>
              <span className=" text-xs flex gap-1 items-center text-green-500 font-semibold">
                <IoTrendingUp />
                15%
              </span>
            </div>
            <div className="px-2 mt-2">
              <span className="text-sm text-gray-500">Monthly Revenue</span>
              <p className="font-bold ">$25,600</p>
            </div>
          </div>
          <div
            className="md:w-1/4 shadow min-h-28 p-2 py-3
           rounded-lg border border-purple-200 bg-purple-50"
          >
            <div className="flex justify-between items-center">
              <div
                className=" bg-gradient-to-br from-purple-500 to-pink-500
                w-8 mx-2 p-1.5 rounded text-white "
              >
                <IoTrendingUp className="size-5 " />
              </div>
              <span className=" text-xs flex gap-1 items-center text-green-500 font-semibold">
                <IoTrendingUp />
                15%
              </span>
            </div>
            <div className="px-2 mt-2">
              <span className="text-sm text-gray-500">Growth Rate</span>
              <p className="font-bold ">+18.5%</p>
            </div>
          </div>
        </section>
        <div className="flex flex-col md:flex-row mt-4 gap-4  ">
          <div className="md:w-1/2 shadow min-h-40 rounded-md p-2 bg-white px-4 ">
            <h1 className="text-md font-bold">Revenue Trend</h1>
            {DataTrend.map((data) => (
              <div key={data.id} className=" mt-1">
                <div>
                  <div className="flex justify-between text-xs text-gray-600 font-semibold">
                    {data.month}
                    <span className="">${data.Revenue}</span>
                  </div>
                  <div className="relative  bg-gray-200 h-2 w-full rounded mt-2">
                    <div
                      className={`absolute bg-blue-500 h-2  rounded `}
                      style={{ width: ` ${data.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="md:w-1/2 shadow  min-h-40 rounded-md p-2 bg-white px-4 pb-4 ">
            <h1 className=" font-bold">Course Perfomance</h1>
            <div className="mt-2 shadow px-2 rounded p-2 space-y-2 bg-white/80">
              <div className="flex justify-between">
                <h6 className="text-xs font-semibold ">
                  Complete React Masterclass
                </h6>
                <HiMiniArrowSmallUp />
              </div>
              <div className=" flex justify-between text-xs font-semibold">
                <div>
                  <span className="text-black/50  ">Views</span>
                  <p className="  ">12,450</p>
                </div>
                <div>
                  <span className="text-black/50  "> Completion</span>

                  <p>78%</p>
                </div>
                <div>
                  <span className="text-black/50  ">Revenue</span>
                  <p>$15,680</p>
                </div>
              </div>
            </div>

            <div className="mt-2 shadow px-2 rounded p-2 space-y-2 bg-white/80">
              <div className="flex justify-between">
                <h6 className="text-xs font-semibold ">
                  Advance Javascript Techniques
                </h6>
                <HiMiniArrowSmallUp />
              </div>
              <div className=" flex justify-between text-xs font-semibold">
                <div>
                  <span className="text-black/50  ">Views</span>
                  <p className="  ">9,820</p>
                </div>
                <div>
                  <span className="text-black/50  "> Completion</span>

                  <p>82%</p>
                </div>
                <div>
                  <span className="text-black/50  ">Revenue</span>
                  <p>$12,340</p>
                </div>
              </div>
            </div>
            <div className="mt-2 shadow px-2 rounded p-2 space-y-2 bg-white/80">
              <div className="flex justify-between">
                <h6 className="text-xs font-semibold ">
                  Modern CSS & Tailwind
                </h6>
                <HiMiniArrowSmallUp />
              </div>
              <div className=" flex justify-between text-xs font-semibold">
                <div>
                  <span className="text-black/50  ">Views</span>
                  <p className="  ">15,450</p>
                </div>
                <div>
                  <span className="text-black/50  "> Completion</span>

                  <p>85%</p>
                </div>
                <div>
                  <span className="text-black/50  ">Revenue</span>
                  <p>$18,680</p>
                </div>
              </div>
            </div>
            <div className="mt-2 shadow px-2 rounded p-2 space-y-2 bg-white/80">
              <div className="flex justify-between">
                <h6 className="text-xs font-semibold ">
                  Full Stack Devlopment
                </h6>
                <HiMiniArrowSmallUp />
              </div>
              <div className=" flex justify-between text-xs font-semibold">
                <div>
                  <span className="text-black/50  ">Views</span>
                  <p className="  ">18,450</p>
                </div>
                <div>
                  <span className="text-black/50  "> Completion</span>

                  <p>76%</p>
                </div>
                <div>
                  <span className="text-black/50  ">Revenue</span>
                  <p>$12,680</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
