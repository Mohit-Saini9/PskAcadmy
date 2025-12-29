import React, { useState } from "react";
import { IoToggleOutline, IoToggleSharp } from "react-icons/io5";
import { LiaToggleOffSolid } from "react-icons/lia";

import { MdToggleOff } from "react-icons/md";

const Setting = () => {
  const [mode, setMode] = useState(false);
  const [notification, setNotification] = useState(false);
  return (
    <>
      <div className=" w-full md:max-w-4xl p-4  justify-center   mx-auto ">
        <div className="max-w-full  md:max-w-5xl  text-black/80   h-96  rounded-md mx-auto px-8 space-y-6">
          <h1 className="font-bold text-xl">Settings</h1>
          <div className="shadow-md p-1.5 px-4  bg-white rounded mt-2">
            <h3 className="font-bold">Appearance</h3>
            <div className="flex items-center justify-between py-1">
              <div>
                <span className="text-xs font-bold text-black/80">
                  Dark mode
                </span>
                <p className="text-[10px]">Toggle dark mode theme</p>
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
            <h3 className="font-bold">Notifications</h3>
            <div className=" items-center justify-between py-1">
              <div>
                <span className="text-xs font-bold text-black/80">
                  Email Notification
                </span>
                <p className="text-[10px]">Receive course updates via email</p>
              </div>
              <div className="flex items-center justify-between py-1.5 ">
                <div>
                  <span className="text-xs font-bold text-black/80">
                    Push Notification
                  </span>
                  <p className="text-[10px]">
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
          <div className="shadow-md p-1.5 px-4  bg-white rounded mt-2">
            <h3 className="font-bold">Account</h3>

            <div>
              <span className="text-xs font-bold text-black/80">
                Change Password
              </span>
              <p className="text-[10px]">Update your account password</p>
            </div>
            <div>
              <span className="text-xs font-bold text-black/80 ">
                Privacy Settings
              </span>
              <p className="text-[10px] ">Mange your privacy preferences</p>
            </div>
          </div>
          <div className="shadow-md p-1.5 px-4  bg-white rounded mt-2">
            <div className="text-red-500 my-2">
              <span className="text-sm font-bold ">Delete Account</span>
              <p className="text-[10px]  font-semibold ">
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
