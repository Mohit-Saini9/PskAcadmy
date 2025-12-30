import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Student", path: "/student" },
    { name: "Trainer", path: "/trainer" },
    { name: "Admin", path: "/admin" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? " bg-white shadow-md  text-black/80"
            : "bg-transparent text-blue-500"
        }
      `}
    >
      <div className="flex items-center justify-between px-4 md:px-10 py-3 ">
        <h1
          className={`text-2xl font-bold text-black-700 ${
            scrolled ? "text-blue-600" : "text-blue-600"
          }`}
        >
          PSK Academy
        </h1>
        <button
          className="md:hidden text-2xl px-0"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoMdClose /> : <FaBars />}
        </button>
        <nav
          className={` md:flex gap-6 md:static absolute text-lg font-semibold 
          ${
            open
              ? "top-14 bg-black/90 text-white flex flex-col w-[90%] px-4 py-4 rounded-md "
              : "hidden"
          }`}
        >
          {links.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`"  hover:text-blue-500 w-[60%]  font-bold px-2 py-1 rounded " ${
                scrolled ? "md:text-black font-bold" : "text-blue-400  "
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
