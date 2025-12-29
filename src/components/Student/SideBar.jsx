import { MdDashboard } from "react-icons/md";
import { MdMenuBook } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FcSettings } from "react-icons/fc";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const SideBar = ({ open }) => {
  // const [open, setOpen] = useState(false);
  const Navigate = useNavigate();

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
          className={` flex  w-60  shadow-md  h-screen sm:flex md:flex-col p-4 gap-6 text-md font-medium text-black/80 bg-white  transform transition-transform duration-300 ease-in-out${
            open ? "top-20 bg-white/90 translate-x-0 " : ""
          }`}
        >
          <div className={`flex flex-col gap-2 w-full `}>
            <h2 className=" font-bold md:border-b-2 p-2 w-full">LearnHub</h2>
            {menu.map((item) => (
              <NavLink
                key={item.id}
                className={({
                  isActive,
                }) => ` p-2 rounded flex items-center gap-2  cursor-pointer  
                ${isActive ? "bg-blue-400 text-white " : "text-gray-600"}
                      
                `}
                //
                to={`${item.path}`}
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
