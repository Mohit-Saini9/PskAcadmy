import { FiBookOpen } from "react-icons/fi";
import { FaStar, FaUserFriends } from "react-icons/fa";
import { FiDollarSign } from "react-icons/fi";
import { IoTrendingUp } from "react-icons/io5";

const Dashbord = () => {
  return (
    <div className="flex justify-center ">
      <div className="w-full max-w-3xl   ">
        <h1 className="text-xl  font-bold">Dashbord Overview</h1>
        <p className="text-sm  text-gray-500">
          Task your teaching perfomance and student engagement
        </p>
        <section
          className="grid grid-cols-2 md:flex 
         gap-4 mt-4"
        >
          <div className="md:w-1/4 border border-blue-100 shadow min-h-28 p-2 py-3 rounded-md bg-blue-50">
            <div className="bg-blue-400 w-8 md:w-10 ml-2 p-1.5 md:p-2 rounded text-white">
              <FiBookOpen className="size-5 md:size-6" />
            </div>
            <div className="px-2 mt-2">
              <span className="text-sm text-gray-500">Total Courses</span>
              <p className="font-bold ">12</p>
            </div>
          </div>
          <div className="md:w-1/4 shadow min-h-28 p-2 py-3 border border-green-100 rounded-md bg-green-50">
            <div className="bg-green-400  w-8 md:w-10 ml-2 p-1.5 md:p-2 rounded text-white">
              <FaUserFriends className="size-5 md:size-6" />
            </div>
            <div className="px-2 mt-2">
              <span className="text-sm text-gray-500">Total Students</span>
              <p className="font-bold ">1,234</p>
            </div>
          </div>
          <div className="md:w-1/4  border border-orange-100 shadow min-h-28 p-2 py-3 rounded-md bg-red-50">
            <div className="bg-gradient-to-br from-red-500 to-orange-500 w-8 md:w-10 ml-2 p-1.5 md:p-2 rounded text-white ">
              <FiDollarSign className="size-5 md:size-6" />
            </div>
            <div className="px-2 mt-2">
              <span className="text-sm text-gray-500">Total Revenue</span>
              <p className="font-bold ">$45,890</p>
            </div>
          </div>
          <div className="md:w-1/4 bordeer border-purpuple-100 shadow min-h-28 p-2 py-3 rounded-md bg-purple-50">
            <div className=" bg-gradient-to-br from-purple-500 to-pink-500 w-8 md:w-10 ml-2  p-1.5 md:p-2 rounded text-white ">
              <IoTrendingUp className="size-5 md:size-6" />
            </div>
            <div className="px-2 mt-2">
              <span className="text-sm text-gray-500">Any Companies</span>
              <p className="font-bold ">78%</p>
            </div>
          </div>
        </section>
        <div className="grid md:flex  gap-4 mt-4 ">
          <div className="md:w-1/2  shadow min-h-36 p-2 rounded bg-white px-6 ">
            <h1 className="tetx-xl font-semibold">Recent Activites</h1>
            <ul className="list-disc marker:text-blue-400 text-sm px-2 mt-2 space-y-4 pb-4">
              <li>
                jhon Doe enrollred in
                <span className="text-blue-500 px-1">React Masterclass</span>
                <p className="text-xs  text-gray-600">2 hours ago</p>
              </li>
              <li>
                Jane Smith completed
                <span className="text-blue-500 px-1">Javascript Basis </span>
                <p className="text-xs text-gray-600">5 hours ago</p>
              </li>
              <li>
                Mike Johnson asked a question in{" "}
                <span className="text-blue-500 px-1">Advance Css</span>
                <p className="text-xs  text-gray-600">1 day ago</p>
              </li>
              <li>
                Sarah Wilson left a review for{" "}
                <span className="text-blue-500 px-1">Web Devlopment</span>
                <p className="text-xs  text-gray-600">2 day ago</p>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2  shadow min-h-36 p-2 rounded bg-white">
            <div className="space-y-4">
              <h1 className="font-bold">Quick Stats</h1>
              <div className="bg-blue-50 rounded p-2 flex justify-between text-sm ">
                This Week's Enrollment{" "}
                <span className="text-blue-600 font-semibold">47</span>
              </div>
              <div className="bg-green-50 rounded p-2 flex justify-between text-sm ">
                Course Completions
                <span className="text-green-600 font-semibold">23</span>
              </div>
              <div className="bg-orange-50 rounded p-2 flex justify-between text-sm ">
                Active Studdts
                <span className="text-orange-600 font-semibold">892</span>
              </div>
              <div className="bg-purple-50 rounded p-2 flex justify-between text-sm ">
                Avg Rating
                <span className="text-purple-600 font-semibold flex items-center">
                  4.8
                  <FaStar size={16} className="text-yellow-400 text-2xl " />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
