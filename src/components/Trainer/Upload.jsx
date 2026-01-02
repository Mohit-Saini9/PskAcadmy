import React, { useRef } from "react";
import { FaFileUpload } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";

const Upload = () => {
  const fileRef = useRef(null);
  return (
    <div className=" flex  justify-center  ">
      <div className="w-full max-w-4xl ">
        <h1 className="text-xl  font-bold">Upload Lesson</h1>
        <p className="text-xs md:text-sm font-semibold text-gray-500 mt-2">
          Add new video lesson to your courses
        </p>
        <form className="mt-4 space-y-4 text-black/70">
          <div className="shadow px-4 pb-3 p-2 rounded bg-white flex flex-col">
            <label className="text-sm font-semibold">Select Course</label>
            <select className="md:py-1 py-0.5 border-2 border-gray-300  rounded px-2 mt-1">
              <option value="">Choose a course...</option>
              <option>Css</option>
              <option>Javascript</option>
              <option>Other(Enter Your own)</option>
            </select>
          </div>
          <div className="shadow px-4 pb-4 p-2 rounded bg-white flex flex-col">
            <label className="text-sm text-black/70 font-semibold">
              Lesson Title
            </label>
            <input
              type="text"
              className="py-0.5 md:py-1 border-2 border-gray-300 rounded px-2 mt-1 placeholder:text-sm"
              placeholder="Enter Your Title"
            />
          </div>
          <div className="shadow px-4 pb-4 p-2 rounded bg-white flex flex-col">
            <label className="text-sm text-black/70 font-semibold">
              Lesson Description
            </label>
            <textarea
              className="py-0.5 md:py-1 border-2 border-gray-300 rounded px-2 mt-1 placeholder:text-sm"
              rows={3}
              placeholder="Describe what students wiil Learn..."
            />
          </div>
          <div className="shadow px-4 pb-4 p-2 rounded bg-white flex flex-col">
            <label className="text-sm text-black/70 font-semibold">
              Video Caption
            </label>
            <input
              type="text"
              className="py-0.5 md:py-1 border-2 border-gray-300 rounded px-2 mt-1 placeholder:text-sm"
              placeholder="Enter video caption "
            />
          </div>
          <div className="shadow px-4 pb-4 p-2 h-44 rounded bg-white flex flex-col">
            <label
              htmlFor="video"
              className="text-sm text-black/70 font-semibold"
            >
              Upload Video
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
              className=" flex flex-col h-44 py-0.5 md:py-1 border-2 border-dotted border-blue-400 bg-blue-50 rounded px-2 mt-2 placeholder:text-sm text-center justify-center items-center"
              onClick={() => fileRef.current.click()}
            >
              <FiUpload size={25} />
              <p>Click to upload or drag and drop</p>
              <p className=" text-sm text-gray-400">MP4,AVI,MCb up to 500MB</p>
            </div>
          </div>
          <div className="pb-4 ">
            <button className="w-full  text-center   bg-blue-500 hover:bg-blue-700  p-2 rounded px-4 text-sm text-white ">
              Upload Lessons
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Upload;
