import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Loading from "../loading/Loading";

const MyInterests = () => {
  const { user } = useContext(AuthContext);
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://krishi-link-server-eta.vercel.app/interests?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCrops(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching crops:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="w-11/12 mx-auto">
      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm mt-6">
        <table className="min-w-full text-sm sm:text-base">
          <thead className="bg-green-500 text-white">
            <tr>
              <th className="px-3 sm:px-5 py-3 text-start">Crop Name</th>
              <th className="px-3 sm:px-5 py-3 text-start">Owner Name</th>
              <th className="px-3 sm:px-5 py-3 text-start">Owner Email</th>
              <th className="px-3 sm:px-5 py-3 text-start">Quantity</th>
              <th className="px-3 sm:px-5 py-3 text-start">Message</th>
              <th className="px-3 sm:px-5 py-3 text-start">Status</th>
              <th className="px-3 sm:px-5 py-3 text-center">Submitted On</th>
            </tr>
          </thead>

          <tbody className="bg-white">
            {crops.length > 0 ? (
              crops.map((crop) => (
                <tr
                  key={crop._id}
                  className="border-b border-gray-200 hover:bg-gray-50 transition"
                >
                  <td className="px-3 sm:px-4 py-2">{crop.cropTitle}</td>
                  <td className="px-3 sm:px-4 py-2 font-medium text-gray-800">
                    {crop.name}
                  </td>
                  <td className="px-3 sm:px-4 py-2">{crop.email}</td>
                  <td className="px-3 sm:px-4 py-2 text-green-600 font-semibold">
                    {crop.quantity}
                  </td>
                  <td className="px-3 sm:px-4 py-2">{crop.message}</td>
                  <td
                    className={`px-3 sm:px-4 py-2 font-semibold ${
                      crop.status === "pending"
                        ? "text-yellow-600"
                        : crop.status === "accepted"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {crop.status}
                  </td>
                  <td className="px-3 sm:px-4 py-2 text-gray-500">
                    {new Date(crop.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="text-center py-6 text-gray-500 font-medium"
                >
                  No interests found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyInterests;
