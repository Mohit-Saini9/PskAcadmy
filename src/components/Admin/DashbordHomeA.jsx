import SideBar from "./Sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import Dashbord from "./Dashbord";
import { MdSearch } from "react-icons/md";
import Users from "./Users";
import Course from "./Course";
import LiveSession from "./LiveSession";
import Conetent from "./Conetent";
import Certificate from "./Certificate";
import Message from "./Message";
import Reports from "./Reports";
import Setting from "../Student/Setting";
import Settings from "./Settings";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa";
const DashbordHomeA = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const Navigate = useNavigate();
  return (
    <div className="flex min-h-screen md:gap-1 bg-slate-50 w-full">
      <aside className={`  fixed ${open ? " z-50 fixed  " : "hidden md:flex"}`}>
        <SideBar setOpen={setOpen} />
      </aside>

      <div className=" flex-1 shadow  w-full">
        <div className="flex fixed w-full top-0  bg-white shadow  z-20  px-2 gap-1">
          <button
            className=" md:hidden  text-xl  "
            onClick={() => setOpen(!open)}
          >
            {open ? <IoMdClose size={30} /> : <FaBars size={30} />}
          </button>
          <div className=" md:ml-56 bg-white relative md:shadow h-14 p-2 md:fixed flex items-center w-full gap-2 md:gap-4 md:px-4 rounded ">
            <div className="absolute px-1 items-center">
              <MdSearch className=" size-4 z-10   " />
            </div>
            <input
              type="text"
              placeholder="Search students,course,trainers.."
              className="max-w-52 md:min-w-96 shadow p-0.5 px-6 outline-none rounded-sm  placeholder:text-sm"
            />
            <button
              className="text-sm bg-gray-800 text-white p-1 px-2 md:px-4 rounded font-semibold"
              onClick={() => Navigate("/")}
            >
              Home
            </button>
          </div>
        </div>

        <div className=" md:ml-60 w-full max-w-5xl mx-auto  py-20  md:px-4 px-4 overflow-y-auto p-4">
          {pathname === "/admin/dashbord" && <Dashbord />}
          {pathname === "/admin/users" && <Users />}
          {pathname === "/admin/courses" && <Course />}
          {pathname === "/admin/liveSessions" && <LiveSession />}
          {pathname === "/admin/content" && <Conetent />}
          {pathname === "/admin/certificates" && <Certificate />}
          {pathname === "/admin/messages" && <Message />}
          {pathname === "/admin/reports" && <Reports />}
          {pathname === "/admin/settings" && <Settings />}
        </div>
      </div>
    </div>
  );
};

export default DashbordHomeA;
