import { GrInProgress } from "react-icons/gr";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";

const Dashbord = () => {
  return (
    <div className="w-full flex justify-center mx-auto">
      <div className="w-full  md:max-w-4xl  mx-auto b ">
        <div className="text-2xl px-4">Welcome Back!</div>
        <p className="text-base text-black/40 font-semibold mt-2 px-4">
          Continue your learning journey
        </p>
        <div className="grid grid-cols-3 mt-6   gap-6 px-2 ">
          <div className="md:max-w-72   w-full sm:w-64  p-4 min-h-[140px] shadow rounded-md bg-white">
            <div className="flex justify-between  p-3 text-black/60">
              Total Course
              <MdMenuBook size={25} className="text-red-500" />
            </div>
            <span className="text-2xl font-bold ">0</span>
          </div>

          <div className="md:max-w-72   w-full sm:w-64 min-h-[140px] p-4 shadow h-28 rounded-md bg-white">
            <div className="flex justify-between  p-3 text-black/60">
              In Progress
              <GrInProgress size={25} className="text-orange-500" />
            </div>
            <span className="text-2xl font-bold ">0</span>
          </div>

          <div className="md:max-w-72   w-full sm:w-64 min-h-[140px] p-4 shadow h-28 rounded-md bg-white">
            <div className="flex justify-between  p-3 text-black/60">
              Completed
              <FaRegCheckCircle size={25} className="text-green-500" />
            </div>
            <span className="text-2xl font-bold  text-green-600">0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
