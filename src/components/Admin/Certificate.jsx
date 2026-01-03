const Certificate = () => {
  return (
    <div>
      <div className="flex justify-between itemse-center">
        <div>
          <h1 className="text-xl  font-bold">Certificate Management</h1>
          <p className="text-xs  text-gray-500 font-semibold">
            Manage certificates, templates, and verification
          </p>
        </div>
        <div>
          <button className="flex items-center md:gap-1 bg-blue-500 hover:bg-blue-700 hover:scale-105 p-1.5  rounded  text-xs md:text-sm text-white">
            Issue Certificate
          </button>
        </div>
      </div>
      <section
        className="grid grid-cols-2 md:flex 
                 gap-4 mt-5 "
      >
        <div className="md:w-1/3  min-h-24 p-2 py-3 rounded shadow bg-white   justify-center text-center">
          <div className="p-2">
            <p className="text-2xl font-bold  text-green-600">2</p>
            <p className="text-sm text-black/50 font-semibold">Issued</p>
          </div>
        </div>

        <div className="md:w-1/3  min-h-24 p-2 py-3 rounded shadow bg-white   justify-center text-center">
          <div className=" p-2">
            <p className="text-2xl font-bold  text-yellow-600">0</p>
            <p className="text-sm text-black/50 font-semibold">Pending</p>
          </div>
        </div>

        <div className="md:w-1/3  min-h-24 p-2 py-3 rounded shadow bg-white   justify-center text-center">
          <div className=" p-2">
            <p className="text-2xl font-bold  text-red-500">0</p>
            <p className="text-sm text-black/50 font-semibold">Revoked</p>
          </div>
        </div>
      </section>

      <button className="mt-4 text-blue-700 text-sm font-semibold border-b-blue-600 border-b pb-0.5">
        Issued Certification (2)
      </button>
      <hr className="shadow " />
      <div className=" overflow-x-auto max-h-60  p-4 rounded bg-white pb-6 mt-4">
        <table className="min-w-[700px] md:w-full table-fixed  ">
          <thead>
            <tr className="   border-b-[1.5px] text-black/50 p-2  uppercase text-xs">
              <th className=" p-2 text-left pb-4 ">Students</th>
              <th className="p-2 text-left pb-4">Courses</th>
              <th className="p-2 text-left  pb-4">Certifiacte Id</th>
              <th className="p-2 text-left  pb-4">Issue Date </th>
              <th className="p-2 text-left  pb-4">Status </th>
              <th className="p-2 text-left  pb-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            <>
              <tr className="p-2 bordesr-b-[1.5px] text-black/60 text-left text-sm font-semibold ">
                <td className="p-3 text-left">Michal cahin</td>
                <td className="p-3 ">JavaScript Advanced</td>
                <td className="p-3">
                  <button className="text-xs bg-slate-100 px-2">
                    CERT-2025-001
                  </button>
                </td>
                <td className="p-3">2025-12-18</td>
                <td className="p-3 ">
                  <button className="bg-green-100 text-xs rounded-xl  text-green-700 px-2 py-0.5">
                    issued
                  </button>
                </td>

                <td className="p-3 ">
                  <div className="flex gap-2">
                    <button className="text-blue-500">View</button>
                    <button className="text-red-500">Revoke</button>
                  </div>
                </td>
              </tr>
              <tr className="p-3  text-left text-sm font-semibold  text-black/60 ">
                <td className="p-3 text-left">Sarah Jhonson</td>
                <td className="p-3 ">React Masterclass</td>
                <td className="p-3">
                  <button className="text-xs bg-slate-100 px-2">
                    CERT-2025-001
                  </button>
                </td>
                <td className="p-3">2025-12-18</td>
                <td className="p-3 ">
                  <button className="bg-green-100 text-xs rounded-xl  text-green-700 px-2 py-0.5">
                    issued
                  </button>
                </td>

                <td className="p-3 ">
                  <div className="flex gap-2">
                    <button className="text-blue-500">View</button>
                    <button className="text-red-500">Revoke</button>
                  </div>
                </td>
              </tr>
            </>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Certificate;
