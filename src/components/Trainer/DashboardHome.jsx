import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import SideBar from "./SideBar";
import Dashbord from "./Dashbord";
import Course from "./Course";
import Upload from "./Upload";
import Students from "./Students";
import Analytics from "./Analytics";
import Announcement from "./Announcement";
import ZoomMeeting from "./ZoomMeeting";
import Profile from "./Profile";
const DashboardHome = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const Naviagte = useNavigate();
  return (
    <div className=" flex min-h-screen bg-slate-50  w-full ">
      <aside
        className={`fixed  max-w-64 md:flex ${
          open ? "z-50 fixed  md:my-0    " : " hidden md:flex "
        }`}
      >
        <SideBar open={open} setOpen={setOpen} />
      </aside>

      <div className="md:ml-56 flex-1 w-full justify-center  bg-white/20 md:pl-2 ">
        <div className="flex  shadow bg-white fixed  w-full z-20 items-center px-2">
          <button
            className=" md:hidden text-2xl p-2 "
            onClick={() => setOpen(!open)}
          >
            {open ? <IoMdClose size={30} /> : <FaBars size={30} />}
          </button>
          <div className="flex justify-between    ">
            <h1 className="items-center    px-4 p-3    sm:text-md md:text-xl bg-white h-14 font-medium  ">
              Welcome back
            </h1>
            <div className="flex gap-2 ">
              <button
                className=" px-2 my-3 bg-blue-400 rounded text-sm text-white font-bold hover:bg-blue-500 hover:scale-105"
                onClick={() => Naviagte("/")}
              >
                Home
              </button>
              <button className=" flex items-center gap-1 bg-red-500 rounded px-1 my-3 mr-4 text-xs sm:&&md:text-sm text-white hover:bg-red-500 hover:scale-105">
                <MdLogout size={20} />
                Log out
              </button>
            </div>
          </div>
        </div>
        <div className="  md:left-60 w-full max-w-5xl  p-4  px-4 mx-auto py-20 overflow-y-auto">
          {pathname === "/trainer/dashbord" && <Dashbord />}
          {pathname === "/trainer/mycourse" && <Course />}
          {pathname === "/trainer/upload" && <Upload />}
          {pathname === "/trainer/students" && <Students />}
          {pathname === "/trainer/analytics" && <Analytics />}
          {pathname === "/trainer/announcements" && <Announcement />}
          {pathname === "/trainer/zoom" && <ZoomMeeting />}
          {pathname === "/trainer/profile" && <Profile />}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
