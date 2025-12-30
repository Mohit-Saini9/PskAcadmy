import React from "react";

const Profile = () => {
  return (
    <>
      <div className="md:flex flex-col   md:flex-row  max-w-4xl w-full  md:px-4 mx-auto  gap-4 ">
        <div className="w-full mx-auto md:max-w-xs rounded p-2 my-2   ">
          <div className=" text-center justify-center items-center shadow-md p-3 rounded bg-white h-54  ">
            <div className="justify-center flex items-center ">
              <img
                src="https://i.pravatar.cc/150?img=45  "
                className="w-20 h-20 rounded-full   text-center mt-2"
              />
            </div>
            <h2>User</h2>
            <p>raman@gmail.com</p>
            <button className="bg-blue-400 w-full text-white rounded text-sm p-1 hover:bg-blue-500 hover:scale-105 mt-2 mb-2">
              Edit profile
            </button>
          </div>
        </div>
        <div className="space-y-4 mt-4 w-full ">
          <form className="shadow-md p-3 min-h-56    max-w-xl bg-white rounded  px-4">
            <h1 className="font-bold ">Persnol Information</h1>
            <div className="space-y-1">
              <label htmlFor="fullname" className="text-sm ">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name...."
                className="w-full rounded  border-[1.5px] border-slate-300 outline-blue-400 px-2 py-1 mb-1 "
                id="fullname"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="email " className="text-sm   ">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email...."
                className="w-full rounded  border-[1.5px] border-slate-300 outline-blue-400 px-2 py-1 mb-2 "
                id="email"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="bio"> Bio</label>
              <textarea
                placeholder="Tell us about yourself..."
                className="w-full rounded  border-[1.5px] border-slate-300 outline-blue-400 px-2 py-1 "
                rows={3}
              ></textarea>
            </div>
            <div className="pb-2">
              <button className="bg-blue-400  text-white rounded text-sm p-1.5 px-4 hover:bg-blue-500 hover:scale-105 mt-2">
                Save changes
              </button>
            </div>
          </form>
          <div className="shadow-md p-2 min-h-20  bg-white rounded-md items-center">
            <h1 className="font-bold md:px-4 px-2">Learning Stats</h1>
            <div className="md:px-4 flex justify-evenly p-2 ">
              <div className=" text-center text-sm">
                <b>12</b>
                <p className="text-black/80 text-xs md:text-sm">
                  Course Enrolled
                </p>
              </div>
              <div className=" text-center text-sm">
                <span className="text-green-600 font-bold md:text-xl">8</span>
                <p className="text-black/80 text-xs md:text-sm">Completed</p>
              </div>
              <div className=" text-center text-sm">
                <span className="text-orange-600 font-bold text-md md:text-xl">
                  45h
                </span>
                <p className="text-black/80 text-xs md:text-sm">Watch Time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
