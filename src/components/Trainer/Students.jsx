import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { studentsData } from "./student data";
import { IoChatboxOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const Students = () => {
  const [students] = useState(studentsData);

  return (
    <div className="flex- justify-center w-full    ">
      <div className="flex flex-col md:flex-row gap-4  rounded max-w-5xl mx-auto   ">
        <div className=" flex-1 w-full md:w-[70%]  rounded shadow bg-white  p-2">
          <div className="flex items-center text-sm border-2 p-1 rounded text-gray-600">
            <MdSearch size={16} />
            <input
              type="text"
              className="outline-none px-2 w-full bg-white"
              placeholder="search students by name or email ... "
            />
          </div>
          <div className=" shadow rounded-md  mt-4   overflow-x-auto  min-h-20 max-h-60 md:max-h-full ">
            <table className="min-h-30 min-w-[400px]  md:min-w-[500px] border-collapse rounded  ">
              <thead className="bg-blue-100 top-0 sticky  z-10">
                <tr className="text-black/60  border border-b    text-sm md:font-bold ">
                  <th className="p-2 min-w-40 text-left">Student</th>
                  <th className="p-2 min-w-24 text-center">Courses</th>
                  <th className="p-2 min-w-32 text-left">Progress</th>
                  <th className="p-2 min-w-32 ">Last Active</th>
                  <th className="p-2 min-w-28">Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr
                    key={student.id}
                    className=" bg-white border border-b  
                    py-2  hover:bg-gray-100   "
                  >
                    <td className="p-2 min-w-40 text-xs md:text-sm ">
                      <div className="flex  items-center ">
                        <img
                          src={student.image}
                          className="w-7 md:w-10 h-7 md:h-10 rounded-full"
                        />
                        <span className=" text-xs px-1 flex flex-col">
                          {student.name}
                          <span>{student.email}</span>
                        </span>
                      </div>
                    </td>
                    <td className="p-2 min-w-24 text-center">
                      {student.courses}
                    </td>

                    <td className="p-2 min-w-32">
                      <div className="flex  items-center gap-1 ">
                        <div className="h-2 relative bg-gray-200 w-10 rounded">
                          <div
                            className="absolute bg-green-400 h-2 rounded"
                            style={{ width: `${student.progress}%` }}
                          />
                        </div>
                        <div className="text-xs">{student.progress}%</div>
                      </div>
                    </td>

                    <td className="p-2 min-w-32 text-center text-xs md:text-sm">
                      {student.lastActive}
                    </td>

                    <td className="min-w-28 p-2">
                      <div className="flex gap-3 justify-center items-center">
                        <IoChatboxOutline size={18} className="text-blue-700" />
                        <MdOutlineEmail size={18} className="text-green-600" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className=" bg-white shadow min-h-40  w-full md:w-[40%] rounded p-2 px-4 space-y-4 ">
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
    </div>
  );
};

export default Students;

/*
 
*/
