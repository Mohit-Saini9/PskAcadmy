import { MdClose, MdDashboard } from "react-icons/md";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FiBookOpen } from "react-icons/fi";
import { FaUserFriends } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { IoVideocam } from "react-icons/io5";
import { IoAnalyticsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiUser } from "react-icons/fi";

const SideBar = ({ setOpen }) => {
  const Navigate = useNavigate();

  const menu = [
    {
      id: "dashbord",
      label: "Dashboard",
      icon: <MdDashboard size={20} />,
      path: "/trainer/dashbord",
    },
    {
      id: "course",
      label: "My Courses",
      path: "/trainer/mycourse",
      icon: <FiBookOpen size={20} />,
    },
    {
      id: "upload",
      label: "Upload Lesson",
      icon: <FiUpload size={20} />,
      path: "/trainer/upload",
    },
    {
      id: "students",
      label: "Students",
      icon: <FaUserFriends size={20} />,
      path: "/trainer/students",
    },
    {
      id: "analytics",
      label: "Analytics",
      icon: <IoAnalyticsOutline size={20} />,
      path: "/trainer/analytics",
    },
    {
      id: "announcements",
      label: "Announcements",
      icon: <IoMdNotificationsOutline size={20} />,
      path: "/trainer/announcements",
    },
    {
      id: "zooom",
      label: "Zoom Meetings",
      icon: <IoVideocam size={20} />,
      path: "/trainer/zoom",
    },

    {
      id: "profile",
      label: "Profile",
      icon: <FiUser size={20} />,
      path: "/trainer/profile",
    },
  ];
  return (
    <div className="h-screen bg-slate-50 ">
      <div className=" flex flex-col md:flex ">
        <aside
          className={` flex  w-48 md:w-56   shadow-md  h-screen sm:flex md:flex-col p-4 gap-6 text-md font-medium text-black/80 bg-white  transform transition-transform duration-300 ease-in-out`}
        >
          <div className={`flex flex-col gap-3.5 w-full `}>
            <div className="flex justify-between">
              <h2 className=" font-bold border-b-2 p-0 md:p-2 w-full mb-0 md:mb-2 text-blue-600 text-xl border-blue-500 pb-3">
                TrainerHub
              </h2>
              <button onClick={() => setOpen(!open)}>
                <MdClose size={25} className="md:hidden text-xl font-bold" />
              </button>
            </div>
            {menu.map((item) => (
              <NavLink
                key={item.id}
                className={({
                  isActive,
                }) => ` p-2 rounded flex items-center gap-2  cursor-pointer  
                ${isActive ? "bg-blue-400 text-white " : "text-gray-600"}
                      
                `}
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
