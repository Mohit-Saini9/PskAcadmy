import React from "react";
import { MdEmail, MdFacebook, MdPhone, MdPlace } from "react-icons/md";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer
      className="min-h-60 bg-black/80  text-white  w-full mx-auto 
   "
    >
      <div className=" w-full grid  grid-cols-2 md:grid-cols-4 gap-10 md:gap-20 max-w-5xl  mx-auto p-4">
        <div className="p-2  max-w-xs sm:max-w-xs md:max-w-md min-h-30 text-sm ">
          <h1 className="text-xl font-bold">PSK Acadmy</h1>
          <p className="text-sm mt-2">
            Empowering learners worldwide with quality education and expert
            instructors . Transform your career with our comperhensive courses.
          </p>
          <div className="space-y-2 mt-6">
            <p className="flex items-center gap-2">
              <MdEmail className="text-blue-600 size-4 " />

              <span> contact@gamil..com</span>
            </p>
            <p className="flex items-center gap-2">
              <MdPhone className="text-blue-600 size-4 " />
              <span>+91 845678964</span>
            </p>
            <p className="flex items-center gap-2">
              <MdPlace className="text-blue-600 size-6" />
              <span>123 Learning Street Education City</span>
            </p>
          </div>
        </div>

        <div className="p-2 max-w-xs min-h-30 md:max-w-md ">
          <h1 className="text-xl font-bold">Quicks Links</h1>
          <ul className="mt-2 space-y-2 text-sm">
            <li>About Us </li>
            <li>Courses</li>
            <li>Trainers</li>
            <li>Blogs</li>
            <li>Carrers</li>
          </ul>
        </div>

        <div className="p-2 max-w-xs min-h-30 md:max-w-md">
          <h1 className="text-xl font-bold">Categories</h1>
          <ul className="mt-2 space-y-2 text-sm">
            <li>Web Devlopment </li>
            <li>Data Science</li>
            <li>UI/UX Design</li>
            <li>Digital Marketing</li>
            <li>Mobile Devlopment</li>
          </ul>
        </div>
        <div className="p-2 max-w-xs min-h-30 md:max-w-md ">
          <h1 className="text-xl font-bold">Support</h1>
          <ul className="mt-2 space-y-2 text-sm">
            <li>Help Center </li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms of Services</li>
            <li>Contact Support</li>
          </ul>
          <div className="mt-2">
            <h2 className="md:text-md text-sm font-bold">Follow Us</h2>
            <div className="flex md:gap-2 gap-1  py-2">
              <div>
                <FaFacebook />
              </div>
              <div>
                <FaTwitter />
              </div>
              <div>
                <FaInstagram />
              </div>
              <div>
                <FaLinkedin />
              </div>
              <div>
                <FaYoutube />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border border-black/20  " />
      <div className=" flex justify-between max-w-5xl mx-auto text-sm  items-end mt-2 py-1 pb-4">
        <div className="">2025 LMS Platform | Designed with care</div>
        <div className="flex gap-4">
          Privacy <span>Terms</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
