import React, { useState } from "react";
import SideBar from "./SideBar";
import Courses from "../Student/Courses";
import Profile from "../Student/Profile";
import Setting from "../Student/Setting";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Dashbord from "./Dashbord";
import { useLocation } from "react-router-dom";

const DashbordHome = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      <div className="bg-slate-50 flex min-h-screen   ">
        <aside
          className={`fixed  max-w-64 md:flex ${
            open
              ? "z-50 absolute top-16  md:my-0 md:static px-4 md:px-0 "
              : "hidden md:flex h-full"
          }`}
        >
          <SideBar open={open} />
        </aside>

        <div className="md:ml-60   flex-1 justify-center  bg-white/20">
          <div className="flex shadow bg-white sticky top-0 w-full ">
            <button
              className=" md:hidden text-2xl p-2 "
              onClick={() => setOpen(!open)}
            >
              {open ? <IoMdClose size={25} /> : <FaBars size={25} />}
            </button>
            <h1 className="items-center px-4 p-3 text-2xl bg-white h-14 font-medium  ">
              Student Dashboard
            </h1>
          </div>
          <div className="  md:left-60 md:max-w-5xl w-full p-4 h-full px-4   bg-slate-50">
            {pathname === "/student/dashbord" && <Dashbord />}
            {pathname === "/student/my-course" && <Courses />}
            {pathname === "/student/profile" && <Profile />}
            {pathname === "/student/settings" && <Setting />}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashbordHome;
