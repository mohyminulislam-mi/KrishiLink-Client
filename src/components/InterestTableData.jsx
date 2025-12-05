import { span } from "motion/react-client";
import React, { useState } from "react";
import Swal from "sweetalert2";

const InterestTableData = ({ interests, setInterests, setCrop }) => {
  const [updatingId, setUpdatingId] = useState(null);

  const handleStatusChange = async (id, status, req) => {
    setUpdatingId(id);
    try {
      const res = await fetch(
        `https://krishi-link-server-eta.vercel.app/interests/${id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status }),
        }
      );

      const data = await res.json();

      if (res.ok && data.success) {
        Swal.fire("Success!", `Request ${status}`, "success");

        if (status === "accepted") {
          setCrop((c) => ({ ...c, quantity: c.quantity - req.quantity }));
        }

        // Update UI instantly
        setInterests((prev) =>
          prev.map((item) => (item._id === id ? { ...item, status } : item))
        );
      } else {
        Swal.fire("Error!", "Update failed!", "error");
      }
    } catch (error) {
      Swal.fire("Error!", "Server not responding!", "error");
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <div className="overflow-x-auto bg-white rounded shadow">
      <table className="min-w-full table-auto">
        <thead className="bg-green-500 text-white">
          <tr>
            <th className="px-4 py-2 text-left">Buyer Name</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Message</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {interests.map((req, idx) => (
            <tr key={idx} className="border-t">
              <td className="px-4 py-2">{req.name}</td>
              <td className="px-4 py-2">{req.email}</td>
              <td className="px-4 py-2">{req.message}</td>

              <td className="px-4 py-2">
                <span
                  className={`px-2 py-1 rounded text-sm ${
                    req.status === "accepted"
                      ? "bg-green-300 text-green-800"
                      : req.status === "rejected"
                      ? "bg-red-300 text-red-800"
                      : "bg-yellow-300 text-yellow-800"
                  }`}
                >
                  {req.status}
                </span>
              </td>

              <td className="px-4 py-2 space-x-2">
                {req.status === "accepted" ? (
                  <span className="text-green-800">Delivery are processed</span>
                ) : req.status === "rejected" ? (
                  <span className="text-red-800">Owner rejected</span>
                ) : (
                  <>
                    <button
                      disabled={updatingId === req._id}
                      onClick={() =>
                        handleStatusChange(req._id, "accepted", req)
                      }
                      className={`${
                        updatingId === req._id
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-green-500 hover:bg-green-600"
                      } text-white px-3 py-1 rounded cursor-pointer`}
                    >
                      Accept
                    </button>
                    <button
                      disabled={updatingId === req._id}
                      onClick={() =>
                        handleStatusChange(req._id, "rejected", req)
                      }
                      className={`${
                        updatingId === req._id
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-red-500 hover:bg-red-600"
                      } text-white px-3 py-1 rounded cursor-pointer`}
                    >
                      Reject
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InterestTableData;
