import React, { useRef, useState } from "react";
import { FiUpload } from "react-icons/fi";
const Settings = () => {
  const fileRef = useRef(null);
  const [active, setActive] = useState("General");
  return (
    <div>
      <div>
        <h1 className="text-xl  font-bold">Settings</h1>
        <p className="text-sm  text-gray-500 font-semibold">
          Confgure platform settings and prefernces
        </p>
      </div>
      <div className="mt-5 ">
        <div className="gap-3 flex text-sm text-black/60 font-semibold ">
          <button
            className={`p-1 ${
              active === "General"
                ? "text-blue-500 border-b-2 border-blue-400"
                : ""
            } `}
            onClick={() => setActive("General")}
          >
            General
          </button>
          <button
            className={`p-1 ${
              active === "Security"
                ? "text-blue-500 border-b-2 border-blue-400"
                : ""
            } `}
            onClick={() => setActive("Security")}
          >
            Security
          </button>
          <button
            className={`p-1 ${
              active === "Notification"
                ? "text-blue-500 border-b-2 border-blue-400 "
                : ""
            } `}
            onClick={() => setActive("Notification")}
          >
            Notifications
          </button>
        </div>
      </div>
      <hr className="mt-2" />

      {active === "General" && (
        <div className="shadow bg-white rounded mt-4">
          <h1 className="p-2 px-4 font-semibold text-black/90">
            Platform Settings
          </h1>
          <hr />
          <div className="px-4 mt-4">
            <form className=" space-y-4 text-black/70">
              <div className="shadow px-4 pb-4 p-2 rounded bg-white flex flex-col">
                <label className="text-sm text-black/70 font-semibold">
                  Platform Name
                </label>
                <input
                  type="text"
                  className=" border-2 border-gray-300 rounded px-2 mt-1 md:placeholder:text-sm"
                  placeholder="Enter Your Title"
                  value="EditHUb PSK"
                />
              </div>
              <div className="shadow px-4 pb-4 p-2 h-44 rounded bg-white flex flex-col">
                <label
                  htmlFor="video"
                  className="text-sm text-black/70 font-semibold"
                >
                  Logo
                </label>
                <input
                  id="video"
                  type="file"
                  accept="video/*"
                  ref={fileRef}
                  hidden
                  placeholder="Click to upload or drag and drop "
                />
                <div
                  className=" flex flex-col h-40 py-0.5 md:py-1 border-2 border-dotted border-blue-400  rounded px-2 mt-2 placeholder:text-sm text-center justify-center items-center"
                  onClick={() => fileRef.current.click()}
                >
                  <FiUpload size={25} />
                  <p>Click to upload or drag and drop</p>
                  <p className=" text-sm text-gray-400">
                    MP4,AVI,MCb up to 500MB
                  </p>
                </div>
              </div>
              <div className="shadow px-4 pb-4 p-2 rounded bg-white flex flex-col">
                <label className="text-sm text-black/70 font-semibold">
                  Site Description
                </label>
                <textarea
                  className="py-0.5 md:py-1 border-2 border-gray-300 rounded px-2 mt-1 md:placeholder:text-sm placeholder:text-xs"
                  rows={3}
                  placeholder="Welcome to our learning management system.Provide quality education to students worldwide."
                />
              </div>

              <div className="pb-4 ">
                <button className=" text-center   bg-blue-500 hover:bg-blue-700  p-2 rounded px-4 text-sm text-white ">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {active === "Security" && (
        <div>
          <div className="shadow bg-white rounded mt-4 pb-2">
            <h1 className="p-2 px-4 font-semibold text-black/90">
              Sessions Management
            </h1>
            <hr />
            <div className=" px-4 p-2  mt-1 space-y-2">
              <div className="space-y-1">
                <p className="text-xs font-semibold">
                  Session Timeout (minutes)
                </p>
                <input
                  type="number"
                  className="w-full px-2 shadow rounded outline-blue-400 "
                  value={30}
                />
                <p className="text-xs text-black/60">
                  Users will be logged out after this duration of inactivity
                </p>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <p className="text-xs  font-semibold text-black/90 items-center">
                  Required Strong Password
                </p>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <p className="text-xs  font-semibold text-black/90 items-center">
                  Enable Two-factor authentication
                </p>
              </div>

              <button className="flex items-center md:gap-1 bg-blue-500 hover:bg-blue-700 hover:scale-105 p-1 px-2  rounded  text-xs md:text-sm text-white">
                Save Changes
              </button>
            </div>
          </div>
          <div className="shadow bg-white mt-4 rounded">
            <h1 className="p-2 px-4 font-semibold text-black/80">
              Role-Based Access Control
            </h1>
            <hr />
            <div className="  p-2 px-4 overflow-x-auto max-h-60 rounded">
              <table className="min-w-[700px] md:w-full table-fixed">
                <thead>
                  <tr className="   border-b-2 text-black/50 p-2  uppercase text-xs">
                    <th className=" text-left p-1">Role</th>
                    <th className=" p-1 text-left">Users</th>
                    <th className="p-1 text-left">Courses</th>
                    <th className="p-1 text-left">Reports</th>
                    <th className="p-1 text-left">Actions </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="p-2 border-b-[1.5px] text-black/60 text-left text-xs font-semibold ">
                    <td className="p-2 text-left text-black">Super Admin</td>
                    <td className="p-2 ">
                      <button className="bg-green-100 text-xs rounded-xl  text-green-700 px-2 py-0.5">
                        Yes
                      </button>
                    </td>
                    <td className="p-2 ">
                      <button className="bg-green-100 text-xs rounded-xl  text-green-700 px-2 py-0.5">
                        Yes
                      </button>
                    </td>
                    <td className="p-2 ">
                      <button className="bg-green-100 text-xs rounded-xl  text-green-700 px-2 py-0.5">
                        Yes
                      </button>
                    </td>
                    <td className="p-2">
                      <button className=" text-xs rounded-xl  text-blue-700 px-2 py-0.5">
                        Edit
                      </button>
                    </td>
                  </tr>

                  <tr className="p-2 border-b-[1.5px] text-black/60 text-left text-xs font-semibold ">
                    <td className="p-2 text-left text-black">
                      Content Manager
                    </td>
                    <td className="p-2 ">
                      <button className="bg-red-100 text-xs rounded-xl  text-red-500 px-2 py-0.5">
                        No
                      </button>
                    </td>
                    <td className="p-2 ">
                      <button className="bg-green-100 text-xs rounded-xl  text-green-700 px-2 py-0.5">
                        Yes
                      </button>
                    </td>
                    <td className="p-2 ">
                      <button className="bg-red-100 text-xs rounded-xl  text-red-500 px-2 py-0.5">
                        No
                      </button>
                    </td>
                    <td className="p-2">
                      <button className=" text-xs rounded-xl  text-blue-700 px-2 py-0.5">
                        Edit
                      </button>
                    </td>
                  </tr>
                  <tr className="p-2 text-black/60 text-left text-xs font-semibold ">
                    <td className="p-2 text-left text-black">User Manager</td>
                    <td className="p-2 ">
                      <button className="bg-green-100 text-xs rounded-xl  text-green-700 px-2 py-0.5">
                        Yes
                      </button>
                    </td>
                    <td className="p-2 ">
                      <button className="bg-red-100 text-xs rounded-xl  text-red-500 px-2 py-0.5">
                        No
                      </button>
                    </td>
                    <td className="p-2 ">
                      <button className="bg-red-100 text-xs rounded-xl  text-red-500 px-2 py-0.5">
                        No
                      </button>
                    </td>
                    <td className="p-2">
                      <button className=" text-xs rounded-xl  text-blue-700 px-2 py-0.5">
                        Edit
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {active === "Notification" && (
        <div>
          <div className="shadow bg-white rounded mt-4 pb-2">
            <h1 className="p-2 px-4 font-semibold text-black/90">
              Email Notifications
            </h1>
            <hr />
            <div className=" px-4 p-2  mt-1 space-y-2">
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <p className="text-xs  font-semibold text-black/90 items-center">
                  Enable Email notifications
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  SMTP Server
                </label>
                <input
                  type="text"
                  placeholder="stmp.gmail.com"
                  className="w-full border rounded-md px-3 py-1 text-xs focus:outline-none focus:ring-2 "
                />
              </div>
              <div className="flex gap-2">
                <div className="w-1/2">
                  <label className="block text-sm font-medium mb-1">
                    SMTP Port
                  </label>
                  <input
                    type="text"
                    placeholder="587"
                    className="w-full border rounded-md px-3 py-1 text-xs focus:outline-none focus:ring-2 "
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-medium mb-1">
                    From Email
                  </label>
                  <input
                    type="email"
                    placeholder="norply@example.com"
                    className="w-full border rounded-md px-3 py-1 text-xs focus:outline-none focus:ring-2 "
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <p className="text-xs  font-semibold text-black/90 items-center">
                  New Student registration
                </p>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <p className="text-xs  font-semibold text-black/90 items-center">
                  Course enrollment
                </p>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <p className="text-xs  font-semibold text-black/90 items-center">
                  Certifiacte issued
                </p>
              </div>

              <button className="flex items-center md:gap-1 bg-blue-500 hover:bg-blue-700 hover:scale-105 p-1 px-2  rounded  text-xs md:text-sm text-white">
                Save Email Settings
              </button>
            </div>
          </div>
          <div className="shadow bg-white rounded mt-4 pb-2">
            <h1 className="p-2 px-4 font-semibold text-black/90">
              SMS Notifications
            </h1>
            <hr />
            <div className="p-2 px-4  mt-1 space-y-2">
              <div className="flex items-center gap-2 ">
                <input type="checkbox" />
                <p className="text-xs  font-semibold text-black/90 items-center">
                  Enable SMS notifications
                </p>
              </div>

              <button className="flex items-center md:gap-1 bg-blue-500 hover:bg-blue-700 hover:scale-105 p-1 px-2  rounded  text-xs md:text-sm text-white">
                Save SMS Settings
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
