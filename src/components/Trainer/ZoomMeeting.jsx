import { FaRegShareSquare } from "react-icons/fa";
import { GrFormSchedule, GrSchedule } from "react-icons/gr";
import { IoIosAdd } from "react-icons/io";
import { IoTimeOutline, IoVideocam } from "react-icons/io5";
import { IoVideocamOutline } from "react-icons/io5";
import { LuCopy } from "react-icons/lu";
const ZoomMeeting = () => {
  return (
    <div className="flex justify-center ">
      <div className="min-h-screen w-full  md:max-w-3xl pb-4">
        <h1 className="text-xl font-bold">Zoom Meetings</h1>
        <p className="text-xs  md:text-sm text-black/50 font-semibold">
          Schedule and manage your your live sessions
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <div className="md:w-full">
            <form className="shadow bg-white rounded p-2              w-full  space-y-3  text-black/70 font-semibold ">
              <h6 className="text-base font-bold flex items-center gap-2">
                <IoIosAdd className="text-blue-500 size-5" /> Schedule New
                Mettings
              </h6>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Announcement Title
                </label>
                <input
                  type="text"
                  placeholder="Enter announcement title"
                  className="w-full border rounded-md px-3 py-1 text-xs focus:outline-none focus:ring-2 "
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Select Course
                </label>
                <select className="w-full border rounded-md px-3 py-1 text-xs  bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-black/80">
                  <option>Select course</option>
                  <option>React</option>
                  <option>Node.js</option>
                  <option>Full Stack</option>
                </select>
              </div>
              <div className="flex gap-2">
                <div className="w-1/2">
                  <label className="block text-sm font-medium mb-1">Date</label>
                  <input
                    type="date"
                    placeholder="Enter announcement title"
                    className="w-full border rounded-md px-3 py-1 text-xs focus:outline-none focus:ring-2 "
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-medium mb-1">Time</label>
                  <input
                    type="time"
                    placeholder="Enter announcement title"
                    className="w-full border rounded-md px-3 py-1 text-xs focus:outline-none focus:ring-2 "
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Duaration (minutes)
                </label>
                <select className="w-full border rounded-md px-3 py-1 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>20 minutes</option>
                  <option>40minutes</option>
                  <option>60minutes</option>
                </select>
              </div>
              <button
                type="button"
                className="w-full  text-center   bg-blue-500 hover:bg-blue-700  p-2 rounded px-4 text-sm text-white  "
              >
                Send Announcement
              </button>
            </form>
            <div className="w-full shadow-md bg-white mt-4 rounded-md p-2 pb-4">
              <h2 className="flex gap-1 items-center font-bold">
                <IoVideocamOutline size={20} className="text-blue-500" />
                Upcoming Meeting
              </h2>
              <div className="bg-blue-100 p-2 rounded-md mt-1">
                <div className="flex justify-between ">
                  <h6 className="text-sm text-black/80 font-medium">
                    React Hooks Q&A Seesion
                  </h6>
                  <button
                    type="button"
                    className="bg-green-100 rounded-xl text-xs px-2 font-medium text-green-500 border border-green-200"
                  >
                    Scheduled
                  </button>
                </div>
                <p className="text-xs text-blue-400 font-semibold">
                  Complete React Masterclass
                </p>

                <div className="flex  ">
                  <p className="flex  items-center gap-1 text-xs text-black/70 flex-1 w-1/2">
                    <GrFormSchedule className="size-5 text-blue-500" />
                    2025-12-25
                  </p>
                  <p className="flex gap-1 items-center text-xs text-black/70 px-1 w-1/2">
                    <IoTimeOutline className="text-blue-500" /> 2:00 PM (90 min)
                  </p>
                </div>

                <div className="flex gap-1">
                  <button className="bg-green-500 rounded w-full text-sm text-white font-semibold p-1 mt-1 flex justify-center gap-22 items-center hover:bg-green-600 ">
                    <FaRegShareSquare className="text-center size-4 " />
                    joins Meetings
                  </button>
                  <button className="mt-1 p-2  text-sm text-blue-500 bg-blue-200 hover:bg-blue-300 rounded">
                    <LuCopy />
                  </button>
                </div>
              </div>
              <div className="bg-blue-100 p-2 rounded-md mt-1">
                <div className="flex justify-between ">
                  <h6 className="text-sm text-black/80 font-medium">
                    Javascript Advanced Concepts
                  </h6>
                  <button
                    type="button"
                    className="bg-green-100 rounded-xl text-xs px-2 font-semibold text-green-500 border border-green-200"
                  >
                    Scheduled
                  </button>
                </div>
                <p className="text-xs text-blue-400 font-semibold">
                  Advanced Javascript Techniques
                </p>

                <div className="flex  ">
                  <p className="flex  items-center gap-1 text-xs text-black/70 flex-1 w-1/2">
                    <GrFormSchedule className="size-5 text-blue-500" />
                    2025-12-24
                  </p>
                  <p className="flex gap-1 items-center text-xs text-black/70 px-1 w-1/2">
                    <IoTimeOutline className="text-blue-500" /> 3:00 PM (90 min)
                  </p>
                </div>

                <div className="flex justify-between gap-1">
                  <button className="bg-green-500 rounded w-full text-sm text-white font-semibold p-1 mt-1 flex justify-center gap-2 items-center hover:bg-green-600 ">
                    <FaRegShareSquare className="text-center size-4 " />
                    joins Meetings
                  </button>
                  <button className="mt-1 p-2  text-sm text-blue-500 bg-blue-200 hover:bg-blue-300 rounded">
                    <LuCopy />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 space-y-4">
            <div className="shadow   bg-white p-2 rounded-md px-3 space-y-2 pb-6 ">
              <h2 className="font-semibold flex items-center gap-2">
                Meetings Sessions
              </h2>
              <div className="bg-blue-50 p-2 border border-blue-200 rounded-md px-3 ">
                <h6 className="text-xs font-medium text-black/50">
                  Total Meeting
                </h6>
                <p className="text-blue-600 font-bold">24</p>
              </div>
              <div className="bg-green-50 p-2 border border-green-200 rounded-md px-3 ">
                <h6 className="text-xs font-medium text-black/50">
                  This Month
                </h6>
                <p className="text-green-600 font-bold">8</p>
              </div>
              <div className="bg-orange-50 p-2 border border-orange-200 rounded-md px-3 ">
                <h6 className="text-xs font-medium text-black/50">
                  Avg Attendance
                </h6>
                <p className="text-orange-500 font-bold">87%</p>
              </div>
            </div>
            <div className="shadow bg-white rounded-md p-3 px-4 ">
              <h4 className="font-semibold">Past Meetings</h4>
              <div className="bg-gray-50 p-2 rounded-md space-y-1 mt-2 border border-gray-200 ">
                <h5 className="text-xs font-semibold">
                  CSS Grid 7 Flexbox Workshop
                </h5>
                <p className="text-black/60 text-xs font-medium">
                  Modern Css & Tailwind
                </p>
                <p className="flex items-center gap-1 text-xs text-black/60">
                  <GrSchedule />
                  2025-12-10
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZoomMeeting;
