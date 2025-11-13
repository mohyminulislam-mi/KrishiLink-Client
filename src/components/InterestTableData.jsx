import React from "react";

const InterestTableData = ({ interests }) => {
  console.log("interests", interests);

  return (
    <div>
      {/* <div className="overflow-x-auto">
        <h2 className="text-xl font-semibold mb-3">Interested Buyers</h2>
        <table className="table-auto w-full border-collapse border border-green-200">
          <thead className="bg-green-100">
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Quantity</th>
              <th className="border p-2">Units</th>
              <th className="border p-2">Message</th>
            </tr>
          </thead>
          <tbody>
            {interests.length > 0 ? (
              interests.map((interest, index) => (
                <tr key={index}>
                  <td className="border p-2">{interest.name}</td>
                  <td className="border p-2">{interest.email}</td>
                  <td className="border p-2">{interest.quantity}</td>
                  <td className="border p-2">{interest.units}</td>
                  <td className="border p-2">{interest.message}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-3 text-gray-500">
                  No interests yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div> */}
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left">Buyer Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Message</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {interests.map((req, idx) => (
              <tr key={idx} className="border-t">
                <td className="px-4 py-2">{req.name}</td>
                <td className="px-4 py-2">{req.email}</td>
                <td className="px-4 py-2">{req.message}</td>
                <td className="px-4 py-2">
                  <span className="bg-yellow-300 text-yellow-800 px-2 py-1 rounded text-sm">
                    {req.status}
                  </span>
                </td>
                <td className="px-4 py-2 space-x-2">
                  <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded">
                    Accept
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InterestTableData;
