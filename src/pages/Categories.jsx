import { MdArrowRightAlt, MdPhotoCamera } from "react-icons/md";
import { GrAnnounce } from "react-icons/gr";
import { IoAnalyticsSharp } from "react-icons/io5";
import { TbMessageChatbot } from "react-icons/tb";
import { FaPaintBrush } from "react-icons/fa";
import { MdCode } from "react-icons/md";

const Categories = () => {
  return (
    <div className="pb-4 h-full max-w-5xl mx-auto px-4 my-auto mt-10 min-h-screen">
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold mt-4">
        Explore Categories
      </h2>
      <p className="text-center text-xs text-black/50 font-medium">
        Find the perfect course in your field of intrest
      </p>
      <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 px-4">
        <div className=" bg-blue-50 rounded-md min-h-28 p-2 text-center justify-center shadow-lg hover:scale-105 transition-all duration-75 pb-4 ">
          <div className="flex justify-center  items-center   rounded mt-2 transition-transform duration-700 hover:rotate-[360deg] ">
            <div className="w-10 h-10 p-2 bg-blue-600 rounded-md ">
              <MdCode size={24} className=" rounded  text-white mx-auto" />
            </div>
          </div>
          <div className="mt-3 space-y-2 ">
            <h2 className="font-bold">Programming</h2>
            <p className="text-black/60 text-center text-xs font-semibold">
              120 Courses Avaliable
            </p>
            <div className="flex justify-center items-center gap-1 text-blue-500">
              <button className="text-blue-500 text-sm ">Explore Now</button>
              <MdArrowRightAlt size={20} className="relative top-[1px]" />
            </div>
          </div>
        </div>

        <div className=" bg-pink-50 rounded-md min-h-28 p-2 text-center justify-center shadow-lg hover:scale-105 transition-all duration-75  ">
          <div className="flex justify-center  items-center   rounded mt-2 transition-transform duration-700 hover:rotate-[360deg]">
            <div className="w-10 h-10 p-2 bg-pink-500 rounded-md ">
              <FaPaintBrush
                size={24}
                className=" rounded  text-white mx-auto"
              />
            </div>
          </div>
          <div className="space-y-2 mt-2 ">
            <h2 className="font-bold">Design</h2>
            <p className="text-black/60 text-center text-xs font-semibold">
              85 Courses Avaliable
            </p>
            <div className="flex justify-center items-center gap-1 text-pink-500">
              <button className=" text-sm ">Enroll Now</button>
              <MdArrowRightAlt size={20} className="relative top-[1px]" />
            </div>
          </div>
        </div>

        <div className=" bg-green-50 rounded-md min-h-28 p-2 text-center justify-center shadow-lg hover:scale-105 transition-all duration-75   ">
          <div className="flex justify-center  items-center   rounded mt-2  transition-transform duration-700 hover:rotate-[360deg] ">
            <div className="w-10 h-10 p-2 bg-green-600 rounded-md">
              <TbMessageChatbot
                size={24}
                className=" rounded  text-white mx-auto"
              />
            </div>
          </div>
          <div className="space-y-2 mt-2 pb-2">
            <h2 className="font-bold">Artificial Intelligence</h2>
            <p className="text-black/60 text-center text-xs font-semibold">
              95 Courses Avaliable
            </p>
            <div className="flex justify-center items-center gap-1 text-green-500">
              <button className="text-green-500 text-sm ">Enroll Now</button>
              <MdArrowRightAlt size={20} className="relative top-[1px]" />
            </div>
          </div>
        </div>

        <div className=" bg-orange-50 rounded-md min-h-28 p-2 text-center justify-center shadow-lg hover:scale-105 transition-all duration-75   ">
          <div className="flex justify-center  items-center   rounded mt-2 transition-transform duration-700 hover:rotate-[360deg]">
            <div className="w-10 h-10 p-2 bg-orange-500 rounded-md ">
              <GrAnnounce size={24} className=" rounded  text-white mx-auto" />
            </div>
          </div>
          <div className="space-y-2 mt-2 pb-4">
            <h2 className="font-bold">Marketing</h2>
            <p className="text-black/60 text-center text-xs ">
              73 Courses Avaliable
            </p>
            <div className="flex justify-center items-center gap-1 text-orange-500">
              <button className="text-orange-500 text-sm ">Enroll Now</button>
              <MdArrowRightAlt size={20} className="relative top-[1px]" />
            </div>
          </div>
        </div>

        <div className=" bg-purple-50 rounded-md min-h-28 p-2 text-center justify-center shadow-lg hover:scale-105 transition-all duration-75  ">
          <div className="flex justify-center  items-center   rounded mt-2 transition-transform duration-700 hover:rotate-[360deg]">
            <div className="w-10 h-10 p-2 bg-gradient-to-tl from-violet-500 to-purple-600 rounded-md ">
              <MdPhotoCamera
                size={24}
                className=" rounded  text-white mx-auto"
              />
            </div>
          </div>
          <div className="space-y-1 mt-2 pb-2">
            <h2 className="font-bold">Photography</h2>
            <p className="text-black/60 text-center text-xs ">
              60 Courses Avaliable
            </p>
            <div className="flex justify-center items-center gap-1 text-purple-500">
              <button className="text-purple-500 text-sm ">Enroll Now</button>
              <MdArrowRightAlt size={20} className="relative top-[1px]" />
            </div>
          </div>
        </div>

        <div className=" bg-cyan-50 rounded-md min-h-28 p-2 text-center justify-center shadow-lg hover:scale-105 transition-all duration-75  ">
          <div className="flex justify-center  items-center   rounded mt-2 transition-transform duration-700 hover:rotate-[360deg]">
            <div className="w-10 h-10 p-2 bg-cyan-500 rounded-md ">
              <IoAnalyticsSharp
                size={24}
                className=" rounded  text-white mx-auto"
              />
            </div>
          </div>
          <div className="space-y-1 mt-1 pb-2">
            <h2 className="font-bold">Bussiness</h2>
            <p className="text-black/60 text-center text-xs ">
              78 Courses Avaliable
            </p>
            <div className="flex justify-center items-center gap-1 text-cyan-500  text-sm ">
              <button className="flex text-sm items-center gap-1  ">
                Enroll Now
                <MdArrowRightAlt size={20} className="relative top-[1px]" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
