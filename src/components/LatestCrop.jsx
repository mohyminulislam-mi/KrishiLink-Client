import React from "react";
import { Link } from "react-router";

const LatestCrop = ({ crops }) => {
  return (
    <div className="w-11/12 mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4   gap-6">
        {crops.map((crop) => (
          <div
            key={crop._id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={crop.image}
              alt={crop.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-800">
                  {crop.name}
                </h2>
                <p className="text-xs font-medium text-white mb-1 px-2 py-1 rounded-full bg-green-600">
                  {crop.type}
                </p>
              </div>

              <p className="text-green-600 font-bold mb-2">
                Price: ৳{crop.price}
              </p>
              <p className="text-sm text-gray-500 font-medium mb-1">
                Quantity: {crop.quantity} {crop.unit}
              </p>

              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {crop.description}
              </p>
              <p className="text-sm font-normal text-gray-500 mb-3">
                {crop.address}
              </p>

              <div className="pb-3 pt-1 w-full">
                <Link className="bg-green-600 text-white px-4 py-2.5 rounded hover:bg-green-700 transition cursor-pointer w-full">
                  See Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestCrop;
