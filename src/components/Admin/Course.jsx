import { MdSearch } from "react-icons/md";

const Course = () => {
  return (
    <div className="justify-center   w-full ">
      <div className=" max-w-5xl mx-auto ">
        <div className="flex justify-between items-center ">
          <div>
            <h1 className="text-xl  font-bold">Courses Management</h1>
            <p className="text-sm font-semibold text-gray-500">
              Manage all courses and content
            </p>
          </div>
          <div>
            <button className="flex items-center md:gap-1 bg-blue-500 hover:bg-blue-700 hover:scale-105 p-1 py-1.5 md:p-1.5 rounded  text-xs md:text-sm text-white">
              View full Report
            </button>
          </div>
        </div>

        <div
          className="bg-white min-h-30 shadow rounded 
        "
        >
          <div className=" pt-1 mt-4    sticky ">
            <div className="w-full   relative  h-12 p-2  flex items-center  gap-4 px-4 rounded  mt-2  ">
              <div className=" bg-white rounded-md  w-full">
                <MdSearch className=" absolute  top-4 items-center size-4.5 z-10  left-5 " />
                <input
                  type="text"
                  placeholder="Search courses ..."
                  className="w-full shadow p-1 px-6 outline-none rounded-md placeholder:text-sm"
                />
              </div>
              <div className=" ">
                <select className="w-full border rounded-md py-1.5 px-4  bg-white  focus:ring-blue-500 text-sm">
                  <option>All</option>
                  <option>React</option>
                  <option>Node.js</option>
                  <option>Full Stack</option>
                </select>
              </div>
            </div>
          </div>
          <div className="p-2 px-4 overflow-x-auto max-h-60">
            <table className="min-w-[700px] md:w-full table-fixed">
              <thead>
                <tr className="   border-b-[1.5px] text-black/60 p-2 text-sm">
                  <th colSpan={2} className=" text-left p-1">
                    Courses
                  </th>
                  <th className=" p-1 text-left">Trainer</th>
                  <th className="p-1 text-left">Price</th>
                  <th className="p-1 text-left">Students</th>
                  <th className="p-1 text-left">Status </th>
                  <th className="p-1 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="p-2 border-b-[1.5px] text-black/60 text-left text-xs font-semibold hover:bg-gray-100">
                  <td colSpan={2} className="p-2 text-left">
                    <div className="flex gap-2">
                      <img
                        src="https://xpertlab.com/wp-content/uploads/2024/10/reactjs_img-copy.jpg"
                        alt="image "
                        className="w-12 h-10 rounded"
                      />
                      <p className="flex flex-col">
                        React Masterclass
                        <span className="text-black/40 text-xs">Frontend</span>
                      </p>
                    </div>
                  </td>
                  <td className="p-2 ">Dr.James Andson</td>
                  <td className="p-2">$99.99</td>
                  <td className="p-2">145</td>
                  <td className="p-2 ">
                    <button className="bg-green-100 text-xs rounded-xl  text-green-700 px-2 py-0.5">
                      published
                    </button>
                  </td>
                  <td className="p-2">
                    <div className="flex gap-2">
                      <span className="text-blue-500"> View </span>Edit
                    </div>
                  </td>
                </tr>
                <tr className="p-2 border-b-[1.5px] text-black/60 text-left text-xs font-semibold hover:bg-gray-100">
                  <td colSpan={2} className="p-2 text-left">
                    <div className="flex gap-2">
                      <img
                        src="https://media.istockphoto.com/id/1284271878/photo/javascript-inscription-against-laptop-and-code-background-learn-javascript-programming.webp?s=1024x1024&w=is&k=20&c=iGiUPCesPFZq06F0eE_I72w5Z7dW_LgUeciGmyONLcM="
                        alt="image "
                        className="w-12 h-10 rounded"
                      />
                      <p className="flex flex-col">
                        Javascripte Advanced
                        <span className="text-black/40 text-xs">
                          Programming
                        </span>
                      </p>
                    </div>
                  </td>
                  <td className="p-2 ">Prof.maria Gracia</td>
                  <td className="p-2">$79.99</td>
                  <td className="p-2">175</td>
                  <td className="p-2 ">
                    <button className="bg-green-100 text-xs rounded-xl  text-green-700 px-2 py-0.5">
                      published
                    </button>
                  </td>
                  <td className="p-2">
                    <div className="flex gap-2">
                      <span className="text-blue-500"> View </span>Edit
                    </div>
                  </td>
                </tr>
                <tr className="p-2  text-left text-xs font-semibold hover:bg-gray-100">
                  <td colSpan={2} className="p-2 text-left">
                    <div className="flex gap-2">
                      <img
                        src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fvqwoji22l56hjgsl6woy.jpeg"
                        alt="image "
                        className="w-12 h-10 rounded"
                      />
                      <p className="flex flex-col">
                        Next js Masterclass
                        <span className="text-black/40 text-xs">
                          Full Stack
                        </span>
                      </p>
                    </div>
                  </td>
                  <td className="p-2 ">Dr.James Andson</td>
                  <td className="p-2">$99.99</td>
                  <td className="p-2">145</td>
                  <td className="p-2 ">
                    <button className="bg-green-100 text-xs rounded-xl  text-green-700 px-2 py-0.5">
                      published
                    </button>
                  </td>
                  <td className="p-2">
                    <div className="flex gap-2">
                      <span className="text-blue-500"> View </span>Edit
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
