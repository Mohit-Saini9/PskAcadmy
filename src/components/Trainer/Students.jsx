import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { studentsData } from "./student data";
import { IoChatboxOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const Students = () => {
  const [students] = useState(studentsData);

  return (
    <>
      <div className=" md:max-w-3xl justify-center  flex flex-col md:flex-row gap-4 w-full   mx-auto pb-8 px-4">
        <div className=" min-h-80   items-center rounded max-w-5xl mx-auto  md:w-[70%] ">
          <div className=" flex-1 rounded shadow bg-white  p-4">
            <div className="flex  items-center text-sm border-2 p-1 rounded text-gray-600">
              <MdSearch size={16} />
              <input
                type="text"
                className="outline-none px-2 w-full"
                placeholder="search students by name or email ... "
              />
            </div>
          </div>
          <div className="rounded-md  mt-4 ">
            <table className="  min-h-20 w-full border rounded-md border-collapse ">
              <thead className="bg-white">
                <tr className="text-black/60  border border-b-gray-300 flex p-2 bg-gray-100  space-x-6 md:space-x-4 text-sm md:font-bold">
                  <th className="p-2 md:w-[32%] w-[18%]  text-left">Student</th>
                  <th className="p-2 text-center">Courses</th>
                  <th className="p-2 text-center">Progress</th>
                  <th className="p-2 text-left">Last Active</th>
                  <th className="p-2 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr
                    className=" bg-white border border-b-gray-300 flex 
                  md:p-3 p-1   space-x-4 md:space-x-8 items-center"
                  >
                    <td className="max-w-[32%] flex items-center p-1 text-xs md:text-sm">
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
                    <td className="flex  text-center">{student.courses}</td>
                    <td className="p-1   flex justify-between items-center gap-1">
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
                    <td className="flex gap-3  items-center  ">
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
          <h1 className="font-semibold text-xl ">Recent Message</h1>
          <div className="bg-blue-100 rounded p-2 shadow">
            <h6>Jhon Doe</h6>
            <p className="text-sm">
              I have a question about React hooks lesson...{" "}
            </p>
            <p className="text-xs text-gray-700">10 min ago</p>
          </div>
          <div className="bg-blue-100 rounded p-2 shadow">
            <h6>Jhon Smith</h6>
            <p className="text-sm">Thank you for the feedback on my project</p>
            <p className="text-xs text-gray-700">1 hour ago</p>
          </div>
          <div className="bg-gray-100 rounded p-2 shadow">
            <h6>Mike Jhonson </h6>
            <p className="text-sm">
              When will the next assignment be avaliable ?
            </p>
            <p className="text-xs text-gray-700">2 hour ago</p>
          </div>
          <div className="bg-gray-100 rounded p-2 shadow">
            <h6>Sarah Wilson</h6>
            <p className="text-sm">
              I have a question about React hooks lesson...{" "}
            </p>
            <p className="text-xs text-gray-700">10 min ago</p>
          </div>
          <div className="pb-2">
            <button className="w-full  text-center   bg-blue-500 hover:bg-blue-700  p-2 rounded px-4 text-sm text-white hover:scale-105 ">
              View All Messsages
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Students;
