import { FaLocationArrow } from "react-icons/fa";
import { GrScheduleNew } from "react-icons/gr";
import { GrFormSchedule } from "react-icons/gr";
import { IoTimeOutline } from "react-icons/io5";

const Announcement = () => {
  return (
    <div className="  w-full max-w-3xl justify-center mx-auto ">
      <h1 className="font-bold text-xl">Announcements 7 Live Sessions</h1>
      <p className="text-xs md:text-sm text-black/60 font-semibold">
        Communicate with your students and schedule live sessions
      </p>
      <div className="flex flex-col md:flex-row gap-4 mt-6  ">
        <form className="shadow bg-white rounded p-3 px-3 w-full h-full space-y-3 pb-6 text-black/70 font-semibold ">
          <h6 className="text-sm font-bold flex items-center gap-2">
            <FaLocationArrow aria-hidden="true" className="text-blue-500 " />
            Create Announcement
          </h6>
          <div>
            <label className="block text-sm font-medium mb-1">
              Announcement Title
            </label>
            <input
              type="text"
              placeholder="Enter announcement title"
              className="w-full border rounded-md px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Select Course
            </label>
            <select className="w-full border rounded-md px-3 py-2 text-xs bg-white  focus:ring-blue-500">
              <option>Select course</option>
              <option>React</option>
              <option>Node.js</option>
              <option>Full Stack</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="Write your announcement..."
              className="w-full border rounded-md px-3 py-2 text-xs resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
            ></textarea>
          </div>
          <button
            type="button"
            className="w-full  text-center   bg-blue-500 hover:bg-blue-700  p-2 rounded px-4 text-sm text-white  "
          >
            Send Announcement
          </button>
        </form>
        <div className="shadow  md:w-1/2  bg-white rounded-md p-2 px-4 space-y-3 pb-4">
          <h2 className="font-bold flex items-center gap-2">
            <GrScheduleNew className="text-blue-500" />
            Scheduled Sessions
          </h2>
          <div className="  rounded-md p-2 bg-blue-100 border border-blue-300 space-y-1">
            <h6 className="text-sm text-black/80 font-medium">
              React Hook Deep Dive{" "}
            </h6>
            <p className="text-blue-500 text-xs font-medium">
              Complete React Masterclass
            </p>
            <p className="text-xs font-semibold flex items-center text-black/60 ">
              <GrFormSchedule className="size-4" />
              2025-12-4
            </p>
            <p className="text-xs flex font-semibold items-center text-black/60">
              <IoTimeOutline className="size-4" />
              2:00 PM (90 min)
            </p>
          </div>
          <div className="  rounded-md p-2 bg-blue-100 border border-blue-300 space-y-1">
            <h6 className="text-sm text-black/80 font-medium">
              Advanced State Management
            </h6>
            <p className="text-blue-500 text-xs font-medium">
              Advanced JavaScript Techniques
            </p>
            <p className="text-xs font-semibold flex items-center text-black/60 ">
              <GrFormSchedule className="size-4" />
              2025-12-6
            </p>
            <p className="text-xs flex font-semibold items-center text-black/60">
              <IoTimeOutline className="size-4" />
              4:00 PM (60 min)
            </p>
          </div>
          <div className="  rounded-md p-2 bg-blue-100 border border-blue-300 space-y-1 ">
            <h6 className="text-sm text-black/80 font-medium">
              Responsive Design Workshop
            </h6>
            <p className="text-blue-500 text-xs font-medium">
              Modern CSS & Tailwind
            </p>
            <p className="text-xs font-semibold flex items-center text-black/60 ">
              <GrFormSchedule className="size-4" />
              2025-12-7
            </p>
            <p className="text-xs flex font-semibold items-center text-black/60">
              <IoTimeOutline className="size-4" />
              3:00 PM (120 min)
            </p>
          </div>
          <button className="w-full  text-center   bg-blue-500 hover:bg-blue-700  p-2 rounded px-4 text-sm text-white hover:scale-105 ">
            Schedule New Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
