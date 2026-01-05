import { MdClose, MdDashboard } from "react-icons/md";
import { MdMenuBook } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FcSettings } from "react-icons/fc";
import { NavLink, Outlet } from "react-router-dom";

const SideBar = ({ setOpen }) => {
  const menu = [
    {
      id: "dashbord",
      label: "Dashboard",
      icon: <MdDashboard size={20} className="text-blue-700" />,
      path: "/student/dashbord",
    },
    {
      id: "courses",
      label: "My Courses",
      path: "/student/my-course",
      icon: <MdMenuBook size={20} className="text-red-500" />,
    },
    {
      id: "profile",
      label: "Profile",
      icon: <CgProfile size={20} className="text-green-700" />,
      path: "/student/profile",
    },
    {
      id: "settings",
      label: "Settings",
      icon: <FcSettings size={20} />,
      path: "/student/settings",
    },
  ];
  return (
    <div className="h-screen bg-slate-50 ">
      <div className=" flex flex-col md:flex ">
        <aside
          className={` flex  w-48 md:w-56  shadow-md  h-screen sm:flex md:flex-col p-4 gap-6 text-md font-medium text-black/80 bg-white  transform transition-transform duration-300 ease-in-out
            
          `}
        >
          <div className={`flex flex-col gap-4 w-full `}>
            <div className="flex justify-between">
              <h2 className=" font-bold border-b-2 p-2 w-full border-gray-400">
                LearnHub
              </h2>
              <button
                className="md:hidden text-xl font-bold"
                onClick={() => setOpen(!open)}
              >
                <MdClose size={30} />
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
