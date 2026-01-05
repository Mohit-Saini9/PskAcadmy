import {
  MdClose,
  MdDashboard,
  MdLiveTv,
  MdMessage,
  MdSettings,
  MdWorkspacePremium,
} from "react-icons/md";

import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FiBookOpen, FiUsers } from "react-icons/fi";
import { FaChartLine, FaDownload } from "react-icons/fa";

const SideBar = ({ setOpen }) => {
  const Navigate = useNavigate();

  const menu = [
    {
      id: "dashbord",
      label: "Dashboard",
      icon: <MdDashboard size={20} className="text-blue-700" />,
      path: "/admin/dashbord",
    },
    {
      id: "users",
      label: "Users",
      icon: <FiUsers size={20} />,
      path: "/admin/users",
    },
    {
      id: "courses",
      label: "Courses",
      path: "/admin/courses",
      icon: <FiBookOpen size={20} />,
    },

    {
      id: "live",
      label: "Live Sessions",
      icon: <MdLiveTv size={20} className="text-white/70" />,
      path: "/admin/liveSessions",
    },
    {
      id: "content",
      label: "Content & Downloads",
      icon: <FaDownload size={20} />,
      path: "/admin/content",
    },
    {
      id: "certficate",
      label: "Certifiactes",
      icon: <MdWorkspacePremium size={20} />,
      path: "/admin/certificates",
    },
    {
      id: "message",
      label: "Messages",
      icon: <MdMessage size={20} />,
      path: "/admin/messages",
    },

    {
      id: "report",
      label: "Report & Analytics",
      icon: <FaChartLine size={20} />,
      path: "/admin/reports",
    },
    {
      id: "settings",
      label: "Settings",
      icon: <MdSettings size={20} />,
      path: "/admin/settings",
    },
  ];
  return (
    <div className=" h-screen ">
      <div className=" h-screen flex flex-col   ">
        <aside
          className={` flex  w-48 md:w-56   shadow-md  h-screen sm:flex md:flex-col p-4 gap-6 text-md font-medium text-black/80 bg-gray-900  transform transition-transform duration-300 ease-in-out`}
        >
          <div className={`flex flex-col gap-3  w-full `}>
            <div className="flex justify-between text-white ">
              <div className="flex gap-3  items-center p-2 mt-4 md:mt-0">
                <div className="bg-blue-800 p-1  rounded size-8  text-center text-white ">
                  L
                </div>
                <div className="   ">
                  <h2 className=" font-bold w-full text-sm md:text-xl text-white">
                    PSK Admin
                  </h2>
                  <p className="text-xs text-white/40">Learning Management</p>
                </div>
              </div>
              <button onClick={() => setOpen(!open)}>
                <MdClose size={30} className="md:hidden text-xl font-bold" />
              </button>
            </div>
            {menu.map((item) => (
              <NavLink
                key={item.id}
                className={({
                  isActive,
                }) => ` p-2 rounded flex items-center gap-4  cursor-pointer  transition-all scroll-smooth 
                ${isActive ? "bg-blue-400 text-white " : "text-white "}
                      
                `}
                //
                to={`${item.path}`}
                onClick={() => setOpen(!open)}
              >
                {item.icon}
                {item.label}
              </NavLink>
            ))}
          </div>
        </aside>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default SideBar;
