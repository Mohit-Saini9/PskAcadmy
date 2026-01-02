import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { studentsData } from "./student data";
import { IoChatboxOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const Students = () => {
  const [students] = useState(studentsData);

  return (
    <>
      <div className=" md:max-w-4xl justify-center  flex flex-col md:flex-row gap-4 w-full   mx-auto pb-8  ">
        <div className=" w-full  items-center rounded max-w-5xl mx-auto  md:max-w-[70%] ">
          <div className=" flex-1 w-full rounded shadow bg-white  p-4">
            <div className="flex  items-center text-sm border-2 p-1 rounded text-gray-600">
              <MdSearch size={16} />
              <input
                type="text"
                className="outline-none px-2 w-full bg-white"
                placeholder="search students by name or email ... "
              />
            </div>
          </div>
          <div className=" shadow rounded-md   mt-4   overflow-x-auto  w-full  ">
            <table className="min-w-[700px]      w-full border-collapse rounded ">
              <thead className="bg-gray-100 top-0 sticky z-20">
                <tr className="text-black/60 w-full border border-b flex items-center space-x-12 p-2   text-sm md:font-bold ">
                  <th className=" w-36 p-1 text-left">Student</th>
                  <th className="p-1  text-left">Courses</th>
                  <th className="p-1 text-left">Progress</th>
                  <th className="p-1 text-left">Last Active</th>
                  <th className="p-1 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr
                    key={student.id}
                    className=" bg-white border border-b flex  space-x-12
                    py-4    items-center px-2"
                  >
                    <td className="text-left flex items-center p-1 text-xs md:text-sm  w-40">
                      <img
                        src={student.image}
                        alt=" image"
                        className="w-7 md:w-10 md:h-10 h-7 rounded-full "
                      />
                      <span className="px-2  flex flex-col">
                        {student.name}
                        <span className="">{student.email}</span>
                      </span>
                    </td>
                    <td className="flex p-2  text-right">{student.courses}</td>
                    <td className="p-2   flex justify-between items-center gap-1">
                      <div className=" h-2 relative bg-gray-200 w-10 rounded ">
                        <div
                          className={` absolute  bg-green-400 rounded}  h-2`}
                          style={{
                            width: `${student.progress}%`,
                            borderRadius: "4px",
                          }}
                        ></div>
                      </div>
                      <span className="text-right text-xs">
                        {student.progress}%
                      </span>
                    </td>
                    <td className="p-1 flex items-center md:text-sm justify-center text-center text-xs">
                      {student.lastActive}
                    </td>
                    <td className=" flex gap-3  items-center  ">
                      <IoChatboxOutline size={18} className="text-blue-700" />
                      <MdOutlineEmail size={18} className="text-green-600" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className=" bg-white shadow min-h-40 md:w-[40%] rounded p-2 px-4 space-y-4 ">
          <h1 className="font-semibold md:text-xl ">Recent Message</h1>
          <div className="bg-blue-100 rounded p-2 shadow">
            <h6 className="text-sm">Jhon Doe</h6>
            <p className="text-xs  md:text-sm">
              I have a question about React hooks lesson...{" "}
            </p>
            <p className="text-xs  text-gray-700">10 min ago</p>
          </div>
          <div className="bg-blue-100 rounded p-2 shadow">
            <h6 className="text-sm">Jhon Smith</h6>
            <p className="text-xs  md:text-sm">
              Thank you for the feedback on my project
            </p>
            <p className="text-xs text-gray-700">1 hour ago</p>
          </div>
          <div className="bg-gray-100 rounded p-2 shadow">
            <h6 className="text-sm">Mike Jhonson </h6>
            <p className="text-xs  md:text-sm">
              When will the next assignment be avaliable ?
            </p>
            <p className="text-xs text-gray-700">2 hour ago</p>
          </div>
          <div className="bg-gray-100 rounded p-2 shadow">
            <h6 className="text-sm">Sarah Wilson</h6>
            <p className="text-xs  md:text-sm">
              I have a question about React hooks lesson...{" "}
            </p>
            <p className="text-xs text-gray-700">10 min ago</p>
          </div>
          <div className="pb-2">
            <button className="w-full  text-center   bg-blue-500 hover:bg-blue-700  p-1 md:p-2 rounded px-4 text-sm text-white hover:scale-105 ">
              View All Messsages
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Students;
