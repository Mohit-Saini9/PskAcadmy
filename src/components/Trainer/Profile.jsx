import React from "react";
import { FaRegSave, FaStar } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { IoCameraSharp } from "react-icons/io5";

const Profile = () => {
  return (
    <div className="w-full md:max-w-3xl mx-auto ">
      <h1 className="text-xl font-bold">Edit Profile</h1>
      <p className="text-xs  md:text-sm text-black/50 font-semibold">
        Update your personal information
      </p>
      <form className="min-h-60  p-2 mt-4 space-y-3">
        <div className="bg-white shadow rounded p-2 px-4">
          <div className="flex text-center justify-center items-center">
            <div>
              <div className="bg-blue-400 rounded-full mx-auto w-20 h-20 relative mt-2">
                <img className=" w-20 h-20 rounded-full  items-center mx-auto " />
                <FiUser
                  size={30}
                  className="absolute text-2xl top-6 left-6 text-white"
                />
                <div className="p-1.5 z-2 rounded-full absolute top-14 left-14 bg-blue-500 ">
                  <IoCameraSharp size={14} className="text-white" />
                </div>
              </div>

              <p className="text-xs text-black/60 font-semi-bold text-center  mt-2 ">
                Click the camera icon to upload a new photo
              </p>
            </div>
          </div>
          <div className="flex gap-4   items-center">
            <div className="w-1/2">
              <label className="block text-sm font-medium mb-1">
                Full name
              </label>
              <input
                type="email"
                placeholder="Raman Singh"
                className="w-full border rounded-md px-3 py-1 text-xs focus:outline-none focus:ring-2 "
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="time"
                placeholder="Ramansingh@124gmail.com"
                className="w-full border rounded-md px-3 py-1 text-xs focus:outline-none focus:ring-2 "
              />
            </div>
          </div>
          <div className="flex gap-4 ">
            <div className="w-1/2">
              <label className="block text-sm font-medium mb-1">
                Expertise
              </label>
              <input
                type="text"
                placeholder="eg; Web Development ,React ,javscript"
                className="w-full border rounded-md px-3 py-1 text-xs focus:outline-none focus:ring-2 "
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium mb-1">Location</label>
              <input
                type="text"
                placeholder="eg; New York ,USA"
                className="w-full border rounded-md px-3 py-1 text-xs focus:outline-none focus:ring-2 "
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Bio</label>
            <textarea
              rows="4"
              placeholder="Write your announcement..."
              className="w-full border rounded-md px-3 py-1 text-xs resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
            ></textarea>
          </div>
        </div>
        <div className="shadow p-2 bg-white rounded  ">
          <h1 className="font-semibold">Profile Statistics</h1>
          <section className="grid grid-cols-2 md:flex gap-4 pb-2 px-2">
            <div className="md:w-1/3  min-h-20 p-2  rounded-lg shadow border border-blue-200 bg-blue-50 mt-2">
              <div className="px-2 ">
                <span className="text-sm text-gray-500">Total Courses</span>
                <p className="font-bold text-blue-500">12</p>
              </div>
            </div>
            <div className="md:w-1/3  min-h-20 p-2  rounded-lg shadow border border-green-200 bg-green-50 mt-2">
              <div className="px-2 ">
                <span className="text-sm text-gray-500">Total Student</span>
                <p className="font-bold text-green-600">1,234</p>
              </div>
            </div>
            <div className="md:w-1/3  min-h-20 p-2  rounded-lg shadow border border-orange-200 bg-orange-50 mt-2">
              <div className="px-2 ">
                <span className="text-sm text-gray-500">Avg Rating</span>
                <p className="font-bold text-orange-600 flex gap-1 items-center">
                  4.8 <FaStar className="text-yellow-500" />
                </p>
              </div>
            </div>
          </section>
        </div>

        <button className="w-full    bg-blue-500 hover:bg-blue-700   rounded px-4 text-sm text-white items-center flex text-center justify-center p-2.5 gap-2 ">
          <FaRegSave size={16} /> Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profile;
