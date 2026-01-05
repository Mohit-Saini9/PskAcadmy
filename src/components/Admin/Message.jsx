import React from "react";

const Message = () => {
  return (
    <div>
      <div className="flex justify-between itemse-center">
        <div>
          <h1 className="text-xl  font-bold">Messages & Announcements</h1>
          <p className="text-sm  text-gray-500 font-semibold">
            Send announcements and manage conversations
          </p>
        </div>
        <div>
          <button className="flex items-center md:gap-1 bg-blue-500 hover:bg-blue-700 hover:scale-105 p-1.5  rounded  text-xs md:text-sm text-white">
            Compose Messages
          </button>
        </div>
      </div>

      <section
        className="grid grid-cols-2 md:flex 
                 gap-4 mt-5 "
      >
        <div className="md:w-1/3  min-h-24 p-2 py-3 rounded shadow bg-white   justify-center text-center">
          <div className="p-2">
            <p className="text-2xl font-bold  text-blue-600">1</p>
            <p className="text-sm text-black/50 font-semibold">
              Total Messages
            </p>
          </div>
        </div>

        <div className="md:w-1/3  min-h-24 p-2 py-3 rounded shadow bg-white   justify-center text-center">
          <div className=" p-2">
            <p className="text-2xl font-bold text-green-600">1</p>
            <p className="text-sm text-black/50 font-semibold">Sent</p>
          </div>
        </div>

        <div className="md:w-1/3  min-h-24 p-2 py-3 rounded shadow bg-white   justify-center text-center">
          <div className=" p-2">
            <p className="text-2xl font-bold  text-yellow-600">0</p>
            <p className="text-sm text-black/50 font-semibold">Unread</p>
          </div>
        </div>
      </section>

      <div className="shadow bg-white mt-4 rounded">
        <h1 className="p-2 px-4 font-semibold">Recent Announcements</h1>
        <hr className="" />

        <div className="shadow p-4 rounded w-full ">
          <div className="shadow p-4 rounded px-4 text-sm flex justify-between ">
            <div className="flex justify-between w-full">
              <div className=" ">
                <h1 className="font-semibold">Platform Maintance</h1>
                <p className="text-black/60">
                  The platform will be down for maintenance..
                </p>
              </div>
              <div>
                <button className="bg-green-50 text-green-600 font-semibold px-4  rounded-xl ">
                  sent
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shadow bg-white mt-4 rounded">
        <h1 className="p-2 px-4 font-semibold">Recent Conversations</h1>
        <hr className="" />

        <div className="shadow p-4 rounded w-full ">
          <div className="shadow p-4 rounded px-4 text-sm flex justify-between ">
            <div className="flex  gap-2">
              <img
                src="https://i.pravatar.cc/150?img=12"
                alt="user"
                className="w-10 h-10 rounded-full"
              />
              <div className=" ">
                <h1 className="font-semibold">Admin .Dr.James</h1>
                <p className="text-black/60">Thanks!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
