import React, { useState } from "react";
import SideBar from "./SideBar";
import Courses from "../Student/Courses";
import Profile from "../Student/Profile";
import Setting from "../Student/Setting";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Dashbord from "./Dashbord";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DashbordHome = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const Naviagte = useNavigate();

  return (
    <div className=" bg-slate-50 flex   min-h-screen overflow-y-auto    ">
      <aside
        className={`fixed max-w-64  md:flex ${
          open ? "z-50 absolute  " : " hidden  md:flex   h-full"
        }`}
      >
        <SideBar setOpen={setOpen} />
      </aside>

      <div className="md:ml-56 justify-center  bg-white/20 w-full md:pl-2 ">
        <div className=" flex shadow bg-white fixed w-full  ">
          <button
            className=" md:hidden  text-xl p-2 "
            onClick={() => setOpen(!open)}
          >
            {open ? <IoMdClose size={25} /> : <FaBars size={25} />}
          </button>
          <div className="flex justify-between items-center  ">
            <h1 className="w-full items-center md:px-4  sm:p-4  p-3.5 px-2  text-xl md:p-2 md:text-xl bg-white h-12 font-medium  ">
              Student Dashboard
            </h1>

            <button
              className="p-1  bg-blue-400 rounded text-sm text-white font-bold hover:bg-blue-500 hover:scale-105"
              onClick={() => Naviagte("/")}
            >
              Home
            </button>
          </div>
        </div>
        <div className=" md:left-56  md:max-w-5xl w-full md:px-4 px-4 p-4   mx-auto  py-20 overflow-y-auto ">
          {pathname === "/student/dashbord" && <Dashbord />}
          {pathname === "/student/my-course" && <Courses />}
          {pathname === "/student/profile" && <Profile />}
          {pathname === "/student/settings" && <Setting />}
        </div>
      </div>
    </div>
  );
};

export default DashbordHome;
