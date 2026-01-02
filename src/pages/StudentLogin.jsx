import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";

const StudentLogin = () => {
  const Navigaite = useNavigate();
  const [isLogin, setIslogin] = useState(false);
  const handleLogin = () => {
    setIslogin(true);
    isLogin ? Navigaite("/student/dashbord") : "";
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 rounded-md">
        <form className="bg-white border border-gray-200 w-full max-w-md  rounded- shadow-xl">
          <div className="flex justify-center mt-2"></div>

          <div className="p-4">
            <label className="font-bold">Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
              className="w-full px-4 py-2 my-2 border rounded border-gray-300 box-border"
            />

            <label className="font-bold">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
              className="w-full px-4 py-2 my-2 border rounded border-gray-300 box-border"
            />

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 my-2 rounded hover:opacity-80"
              onClick={handleLogin}
            >
              Login
            </button>

            <label className="flex items-center gap-2 mt-2">
              <input type="checkbox" defaultChecked />
              Remember me
            </label>
          </div>

          <div className="flex justify-between items-center p-4 bg-gray-100">
            <button
              type="button"
              className="bg-red-500 rounded text-white px-4 py-2"
              onClick={() => Navigaite(-1)}
            >
              Cancel
            </button>

            <span className="text-sm">
              Forgot{" "}
              <a href="#" className="text-blue-600 hover:underline">
                password?
              </a>
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default StudentLogin;
