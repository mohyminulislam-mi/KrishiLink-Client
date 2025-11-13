import React from "react";
import { FaLeaf } from "react-icons/fa6";

// const interestPromise = fetch('http://localhost:3000/interests').then(res => res.json())
const MyInterests = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
      <div className="bg-white rounded-2xl p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <FaLeaf className="text-green-600 text-2xl" />
            <h2 className="text-xl font-semibold text-gray-800">
              Crop Request
            </h2>
          </div>
          <span className="text-sm text-gray-500">Today</span>
        </div>

        <div className="space-y-2 text-gray-700">
          <p>
            <span className="font-medium text-gray-900">Name:</span> Mohyminul
          </p>
          <p>
            <span className="font-medium text-gray-900">Email:</span>{" "}
            Mohyminul@gmail.com
          </p>
          <p>
            <span className="font-medium text-gray-900">Quantity:</span>{" "}
            {/* {quantity} {units} */} 1kg
          </p>
          <p>
            <span className="font-medium text-gray-900">Crop ID:</span>{" "}
            <span className="text-sm bg-green-100 px-2 py-0.5 rounded-md text-green-700">
              {/* {cropId} */} id-123456
            </span>
          </p>
        </div>

        <div className="mt-5 flex justify-end">
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all">
            View Details
          </button>
        </div>
      </div>
      {/* box 2 */}
      <div className="bg-white rounded-2xl p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <FaLeaf className="text-green-600 text-2xl" />
            <h2 className="text-xl font-semibold text-gray-800">
              Crop Request
            </h2>
          </div>
          <span className="text-sm text-gray-500">Today</span>
        </div>

        <div className="space-y-2 text-gray-700">
          <p>
            <span className="font-medium text-gray-900">Name:</span> Mohyminul
          </p>
          <p>
            <span className="font-medium text-gray-900">Email:</span>{" "}
            Mohyminul@gmail.com
          </p>
          <p>
            <span className="font-medium text-gray-900">Quantity:</span>{" "}
            {/* {quantity} {units} */} 1kg
          </p>
          <p>
            <span className="font-medium text-gray-900">Crop ID:</span>{" "}
            <span className="text-sm bg-green-100 px-2 py-0.5 rounded-md text-green-700">
              {/* {cropId} */} id-123456
            </span>
          </p>
        </div>

        <div className="mt-5 flex justify-end">
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all">
            View Details
          </button>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <FaLeaf className="text-green-600 text-2xl" />
            <h2 className="text-xl font-semibold text-gray-800">
              Crop Request
            </h2>
          </div>
          <span className="text-sm text-gray-500">Today</span>
        </div>

        <div className="space-y-2 text-gray-700">
          <p>
            <span className="font-medium text-gray-900">Name:</span> Mohyminul
          </p>
          <p>
            <span className="font-medium text-gray-900">Email:</span>{" "}
            Mohyminul@gmail.com
          </p>
          <p>
            <span className="font-medium text-gray-900">Quantity:</span>{" "}
            {/* {quantity} {units} */} 1kg
          </p>
          <p>
            <span className="font-medium text-gray-900">Crop ID:</span>{" "}
            <span className="text-sm bg-green-100 px-2 py-0.5 rounded-md text-green-700">
              {/* {cropId} */} id-123456
            </span>
          </p>
        </div>

        <div className="mt-5 flex justify-end">
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyInterests;
