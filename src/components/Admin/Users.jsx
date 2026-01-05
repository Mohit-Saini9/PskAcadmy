import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiStar } from "react-icons/fi";
import { MdSearch } from "react-icons/md";

const Users = () => {
  const [active, setActive] = useState("Students");

  return (
    <div>
      <div>
        <h1 className="text-xl  font-bold">User Management</h1>
        <p className="text-sm  text-gray-500 font-semibold">
          Manage students, trainer, and administrators
        </p>
      </div>
      <div className="mt-5 ">
        <div className="gap-3 flex text-sm text-black/60 font-semibold ">
          <button
            className={`p-1 ${
              active === "Students"
                ? "text-blue-500 border-b-2 border-blue-400"
                : ""
            } `}
            onClick={() => setActive("Students")}
          >
            Students (3)
          </button>
          <button
            className={`p-1 ${
              active === "Trainers"
                ? "text-blue-500 border-b-2 border-blue-400 "
                : ""
            } `}
            onClick={() => setActive("Trainers")}
          >
            Trainers (2)
          </button>
          <button
            className={`p-1 ${
              active === "Admins"
                ? "text-blue-500 border-b-2 border-blue-400"
                : ""
            } `}
            onClick={() => setActive("Admins")}
          >
            Admins(1)
          </button>
        </div>
      </div>
      <hr className="mt-2" />

      {active === "Students" && (
        <div
          className="bg-white min-h-30 shadow rounded 
                "
        >
          <div className="  mt-4    p-1  sticky ">
            <div className="  relative  h-12 p-2  flex items-center  gap-2 px-4 rounded  mt-2 flex-col md:flex-row md:justify-between ">
              <div className="w-full md:w-[70%] bg-white rounded-md ">
                <MdSearch className=" absolute  top-4 items-center size-4.5 z-10   left-5 " />
                <input
                  type="text"
                  placeholder="Search courses ..."
                  className="w-full shadow p-1 px-6 outline-none rounded-md placeholder:text-sm"
                />
              </div>
              <div className=" flex items-center gap-2 py-0.5 p-2">
                <button className=" border rounded-md py-1 px-4  bg-white  focus:ring-blue-500   text-sm font-semibold  ">
                  Export
                </button>
                <button className=" border rounded-md py-1 px-4  text-white bg-blue-500 hover:bg-blue-600 text-sm font-semibold ">
                  Add Student
                </button>
              </div>
            </div>
          </div>
          <div className="p-2 px-4 overflow-x-auto max-h-60 mt-4 md:mt-0">
            <table className="min-w-[700px] md:w-full table-fixed bg-white">
              <thead>
                <tr className="   border-b-[1.5px] text-black/50 p-2 text-sm">
                  <th colSpan={2} className=" p-1 text-left">
                    Student
                  </th>
                  <th className="p-1 text-left">Mobile</th>
                  <th className="p-1 text-left">Education</th>
                  <th className="p-1 text-left">Enrolled Courses </th>
                  <th className="p-1 text-center">Progress</th>
                  <th className="p-1 text-left">Status</th>
                  <th className="p-1 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="p-2 border-b-[1.5px] text-black/60 text-left text-xs font-semibold hover:bg-gray-100">
                  <td colSpan={2} className="p-2 text-left">
                    <div className="flex gap-2">
                      <img
                        src="https://i.pravatar.cc/150?img=12"
                        alt="image "
                        className="w-12 h-10 rounded-full"
                      />
                      <p className="flex flex-col">
                        Aman Sharma
                        <span className="text-black/40 text-xs">
                          aman@gmail.com
                        </span>
                      </p>
                    </div>
                  </td>
                  <td className="p-2 ">+1 234-567-8910</td>
                  <td className="p-2">Bachelor's in CS</td>
                  <td className="p-2 text-center">1</td>
                  <td className="p-2">
                    <div className="flex  items-center gap-1 ">
                      <div className="h-2 relative bg-gray-200 w-14 rounded">
                        <div className="absolute bg-blue-600 h-2 w-[70%] rounded" />
                      </div>
                      <div className="text-xs">70%</div>
                    </div>
                  </td>
                  <td className="p-2 ">
                    <button className="bg-green-100 text-xs rounded-xl  text-green-700 px-2 py-0.5">
                      active
                    </button>
                  </td>
                  <td className="p-2">
                    <div className="flex gap-2">
                      <span className="text-blue-500"> View </span>Edit
                    </div>
                  </td>
                </tr>

                <tr className="p-2 border-b-[1.5px] text-black/60 text-left text-xs font-semibold hover:bg-gray-100">
                  <td colSpan={2} className="p-2 text-left">
                    <div className="flex gap-2">
                      <img
                        src="https://i.pravatar.cc/150?img=45 "
                        alt="image "
                        className="w-12 h-10 rounded-full"
                      />
                      <p className="flex flex-col">
                        Rahul Mehata
                        <span className="text-black/40 text-xs">
                          rahul@gmail.com
                        </span>
                      </p>
                    </div>
                  </td>
                  <td className="p-2 ">+1 234-566-9910</td>
                  <td className="p-2">Bachelor's in CS</td>
                  <td className="p-2 text-center">1</td>
                  <td className="p-2">
                    <div className="flex  items-center gap-1  ">
                      <div className="h-2 relative bg-gray-200 w-14 rounded">
                        <div className="absolute bg-blue-600 h-2 w-[45%] rounded" />
                      </div>
                      <div className="text-xs">45%</div>
                    </div>
                  </td>
                  <td className="p-2 ">
                    <button className="bg-green-100 text-xs rounded-xl  text-green-700 px-2 py-0.5">
                      active
                    </button>
                  </td>
                  <td className="p-2">
                    <div className="flex gap-2">
                      <span className="text-blue-500"> View </span>Edit
                    </div>
                  </td>
                </tr>

                <tr className="p-2  text-black/60 text-left text-xs font-semibold hover:bg-gray-100">
                  <td colSpan={2} className="p-2 text-left">
                    <div className="flex gap-2">
                      <img
                        src="https://i.pravatar.cc/150?img=18"
                        alt="image "
                        className="w-12 h-10 rounded-full"
                      />
                      <p className="flex flex-col">
                        Neha Verrma
                        <span className="text-black/40 text-xs">
                          neha@gmail.com
                        </span>
                      </p>
                    </div>
                  </td>
                  <td className="p-2 ">+1 234-567-8910</td>
                  <td className="p-2">Bachelor's in CS</td>
                  <td className="p-2 text-center">1</td>
                  <td className="p-2">
                    <div className="flex  items-center gap-1  ">
                      <div className="h-2 relative bg-gray-200 w-14 rounded">
                        <div className="absolute bg-blue-600 h-2 w-[90%] rounded" />
                      </div>
                      <div className="text-xs">90%</div>
                    </div>
                  </td>
                  <td className="p-2 ">
                    <button className="bg-green-100 text-xs rounded-xl  text-green-700 px-2 py-0.5">
                      active
                    </button>
                  </td>
                  <td className="p-2">
                    <div className="flex gap-2">
                      <span className="text-blue-500"> View </span>Edit
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {active === "Trainers" && (
        <div
          className="bg-white min-h-30 shadow rounded 
                "
        >
          <div className="  mt-4  p-1  sticky ">
            <div className="  relative  h-12 p-1  flex items-center  gap-2 px-4 rounded  mt-2 flex-col md:flex-row md:justify-between ">
              <div className="w-full md:w-[70%] bg-white rounded-md ">
                <MdSearch className=" absolute  top-3 md:top-4 items-center size-4.5 z-10  left-5 " />
                <input
                  type="text"
                  placeholder="Search trainers ..."
                  className="w-full shadow p-1 px-6 outline-none rounded-md placeholder:text-sm"
                />
              </div>
              <div className=" flex items-center  py-0.5 gap-2 p-2">
                <button className=" border rounded-md py-1 px-4  bg-white  focus:ring-blue-500 text-xs  md:text-sm font-semibold ">
                  Export
                </button>
                <button className=" border rounded-md py-1 px-2  text-white bg-blue-500 hover:bg-blue-600 text-xs md:text-sm font-semibold ">
                  Add Trainer
                </button>
              </div>
            </div>
          </div>
          <div className="p-2 px-4 overflow-x-auto max-h-60 mt-4 md:mt-0">
            <table className="min-w-[700px] md:w-full table-fixed bg-white">
              <thead>
                <tr className="   border-b-[1.5px] text-black/50 p-2 text-sm">
                  <th colSpan={2} className="p-1 text-left">
                    Trainer
                  </th>
                  <th colSpan={2} className="p-1 text-left">
                    Expertise
                  </th>
                  <th className="p-1 text-left">Courses </th>
                  <th className="p-1 text-center">Students</th>
                  <th className="p-1 text-left">Rating</th>
                  <th className="p-1 text-left">Status</th>
                  <th className="p-1 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="p-2 border-b-[1.5px] text-black/60 text-left text-xs font-semibold hover:bg-gray-100">
                  <td colSpan={2} className="p-2 text-left">
                    <div className="flex gap-2">
                      <img
                        src="https://i.pravatar.cc/150?img=12"
                        alt="image "
                        className="w-12 h-10 rounded-full"
                      />
                      <p className="flex flex-col">
                        Dr.james
                        <span className="text-black/40 text-xs">
                          james@gmail.com
                        </span>
                      </p>
                    </div>
                  </td>
                  <td colSpan={2} className="p-2 ">
                    Full Stack Devlopement
                  </td>
                  <td className="p-2">1</td>
                  <td className="p-2 text-center">156</td>
                  <td className="p-2">
                    <div className="flex  items-center gap-1 ">
                      <FaStar className="text-yellow-500 " />
                      4.8
                    </div>
                  </td>
                  <td className="p-2 ">
                    <button className="bg-green-100 text-xs rounded-xl  text-green-700 px-2 py-0.5">
                      active
                    </button>
                  </td>
                  <td className="p-2">
                    <div className="flex gap-2">
                      <span className="text-blue-500"> View </span>Edit
                    </div>
                  </td>
                </tr>
                <tr className="p-2  text-black/50 text-left text-xs font-semibold hover:bg-gray-100">
                  <td colSpan={2} className="p-2 text-left">
                    <div className="flex gap-2">
                      <img
                        src="https://i.pravatar.cc/150?img=45"
                        alt="image "
                        className="w-12 h-10 rounded-full"
                      />
                      <p className="flex flex-col">
                        Prof.Maria
                        <span className="text-black/40 text-xs">
                          maria@gmail.com
                        </span>
                      </p>
                    </div>
                  </td>
                  <td colSpan={2} className="p-2 ">
                    JavaScript UI/UX
                  </td>
                  <td className="p-2">2</td>
                  <td className="p-2 text-center">203</td>
                  <td className="p-2">
                    <div className="flex  items-center gap-1 ">
                      <FaStar className="text-yellow-500 " />
                      4.9
                    </div>
                  </td>
                  <td className="p-2 ">
                    <button className="bg-green-100 text-xs rounded-xl  text-green-700 px-2 py-0.5">
                      active
                    </button>
                  </td>
                  <td className="p-2">
                    <div className="flex gap-2">
                      <span className="text-blue-500"> View </span>Edit
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {active === "Admins" && (
        <div
          className="bg-white min-h-30 shadow rounded 
                "
        >
          <div className=" pt-1 mt-4    sticky ">
            <div className="  relative  h-12 p-2  flex items-center  gap-2 px-4 rounded  mt-2  justify-between ">
              <div className="max-w-full bg-white rounded-md ">
                <MdSearch className=" absolute  top-4 items-center size-4.5 z-10  left-5 " />
                <input
                  type="text"
                  placeholder="Search trainers ..."
                  className="w-full shadow p-1 px-6 outline-none rounded-md placeholder:text-sm"
                />
              </div>
              <div className=" items-center gap-1 py-0.5 md:gap-2 p-2">
                <button className=" border rounded-md py-1 px-2  text-white bg-blue-500 hover:bg-blue-600 text-sm font-semibold ">
                  Add Admin
                </button>
              </div>
            </div>
          </div>
          <div className="p-2 px-4 overflow-x-auto max-h-60 mt-1 md:mt-0">
            <table className="min-w-[700px] md:w-full table-fixed bg-white">
              <thead>
                <tr className="   border-b-[1.5px] text-black/50 p-2 text-sm">
                  <th colSpan={2} className="p-1 text-left">
                    Admin
                  </th>
                  <th className="p-1 text-left">Role</th>
                  <th className="p-1 text-left">Permissions </th>
                  <th className="p-1 text-center">Last Login</th>
                  <th className="p-1 text-left">Status</th>
                  <th className="p-1 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="p-2 border-b-[1.5px] text-black/60 text-left text-xs font-semibold hover:bg-gray-100">
                  <td colSpan={2} className="p-2 text-left">
                    <div className="flex gap-2">
                      <img
                        src="https://i.pravatar.cc/150?img=12"
                        alt="image "
                        className="w-12 h-10 rounded-full"
                      />
                      <p className="flex flex-col">
                        Dr.james
                        <span className="text-black/40 text-xs">
                          james@gmail.com
                        </span>
                      </p>
                    </div>
                  </td>
                  <td className="p-2 ">
                    <button className="bg-blue-600 text-xs rounded-xl   px-2 py-0.5 text-white">
                      Super Admin
                    </button>
                  </td>
                  <td className="p-2">All Access</td>
                  <td className="p-2 text-center">2025-12-16 08:30 AM</td>

                  <td className="p-2 ">
                    <button className="bg-green-100 text-xs rounded-xl  text-green-700 px-2 py-0.5">
                      active
                    </button>
                  </td>
                  <td className="p-2">
                    <div className="flex gap-2 ">
                      <button className="text-blue-500"> Edit</button>
                      <button className="text-red-700">Remove</button>
                    </div>
                  </td>
                </tr>
                <tr className="p-2  text-black/50 text-left text-xs font-semibold hover:bg-gray-100">
                  <td colSpan={2} className="p-2 text-left">
                    <div className="flex gap-2">
                      <img
                        src="https://i.pravatar.cc/150?img=45"
                        alt="image "
                        className="w-12 h-10 rounded-full"
                      />
                      <p className="flex flex-col">
                        Prof.Maria
                        <span className="text-black/40 text-xs">
                          maria@gmail.com
                        </span>
                      </p>
                    </div>
                  </td>
                  <td className="p-2 ">
                    <button className="bg-blue-600 text-xs rounded-xl   px-2 py-0.5 text-white">
                      Super Admin
                    </button>
                  </td>
                  <td className="p-2">All Access</td>
                  <td className="p-2 text-center">2025-12-16 08:30 AM</td>

                  <td className="p-2 ">
                    <button className="bg-green-100 text-xs rounded-xl  text-green-700 px-2 py-0.5">
                      active
                    </button>
                  </td>
                  <td className="p-2">
                    <div className="flex gap-2 ">
                      <button className="text-blue-500"> Edit</button>
                      <button className="text-red-700">Remove</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
