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
            ? " bg-white shadow-md  text-black"
            : "bg-transparent text-white"
        }
      `}
    >
      <div className="flex items-center justify-between px-10 py-3 ">
        <h1 className="text-2xl font-bold md:text-blue-800">PSK Academy</h1>
        <button
          className="md:hidden text-2xl px-4"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoMdClose /> : <FaBars />}
        </button>
        <nav
          className={` md:flex gap-6 md:static absolute text-lg font-semibold 
          ${
            open
              ? "top-14 bg-black/90 flex flex-col w-[90%] px-6 py-4 rounded-md "
              : "hidden"
          }`}
        >
          {links.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="hover:text-blue-400 w-[60%]  hover:bg-[#dbdbdb] px-2 py-1 rounded font-bold"
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
