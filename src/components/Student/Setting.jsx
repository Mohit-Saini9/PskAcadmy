import React, { useState } from "react";
import { IoToggleOutline, IoToggleSharp } from "react-icons/io5";
import { LiaToggleOffSolid } from "react-icons/lia";

const Setting = () => {
  const [mode, setMode] = useState(false);
  const [notification, setNotification] = useState(false);
  return (
    <>
      <div className=" w-full  justify-center  min-h-screen mx-auto ">
        <div className="w-full  max-w-5xl  text-black/80   rounded-md mx-auto  md:space-y-6 space-y-4">
          <h1 className="font-bold text-xl">Settings</h1>
          <div className="shadow-md p-1.5 px-4  bg-white rounded mt-2">
            <h2 className="font-bold ">Appearance</h2>
            <div className="flex items-center justify-between py-1">
              <div>
                <h6 className="text-sm font-bold text-gray-800">Dark mode</h6>
                <p className="text-xs font-semibold text-black/60">
                  Toggle dark mode theme
                </p>
              </div>
              <div>
                <button onClick={() => setMode(!mode)}>
                  {mode ? (
                    <IoToggleOutline size={30} />
                  ) : (
                    <LiaToggleOffSolid size={30} />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="shadow-md p-1.5 px-4  bg-white rounded mt-2">
            <h2 className="text-xl; font-bold text-gray-800">Notifications</h2>
            <div className=" items-center justify-between py-1  mt-3">
              <div>
                <h6 className="text-sm font-bold text-gray-800">
                  Email Notification
                </h6>
                <p className="text-xs font-semibold text-black/60">
                  Receive course updates via email
                </p>
              </div>
              <div className="flex items-center justify-between py-1.5 ">
                <div>
                  <h6 className="text-sm font-bold text-gray-800">
                    Push Notification
                  </h6>
                  <p className="text-xs font-semibold text-black/60">
                    Get push notifications for new content
                  </p>
                </div>
                <div>
                  <button
                    className=""
                    onClick={() => setNotification(!notification)}
                  >
                    {notification ? (
                      <IoToggleOutline size={30} />
                    ) : (
                      <LiaToggleOffSolid size={30} />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-md p-1.5 px-4  bg-white rounded space-y-4 pb-4">
            <h2 className="font-bold ">Account</h2>
            <div className="mb-1 mt-2">
              <h6 className="text-sm font-bold text-gray-800">
                Change Password
              </h6>
              <p className="text-xs font-semibold text-black/60">
                Update your account password
              </p>
            </div>
            <div className="mb-1">
              <h6 className="text-sm font-bold text-gray-800 ">
                Privacy Settings
              </h6>
              <p className="text-xs font-semibold text-black/60">
                Mange your privacy preferences
              </p>
            </div>
            <div className="text-red-500 my-2">
              <h6 className="text-sm font-bold ">Delete Account</h6>
              <p className="text-xs font-semibold 0 ">
                Permanently delete your account
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
