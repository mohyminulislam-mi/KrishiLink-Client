import React, { useEffect, useState } from "react";
import LatestCrop from "./LatestCrop";
import { Link } from "react-router";

const LatestCrops = () => {
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/latest-products")
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

  return (
    <section className="w-11/12 mx-auto py-10 border-t border-green-300">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-green-700 mb-3">Latest Crops</h2>
        <div className="flex justify-center mb-3">
          <div className="w-24 h-[3px] rounded-full bg-linear-to-r from-green-600 to-green-400"></div>
        </div>
        <p className="text-gray-600 mb-10">
          Stay ahead with fresh insights on organic farming, soil health, pest
          control, and certification.
        </p>
      </div>

      {/* Loading state */}
      {loading ? (
        <div className="text-center text-green-600">Loading...</div>
      ) : (
        <LatestCrop crops={crops} />
      )}

      <div className="text-center my-10">
        <Link
          to={"/all-crops"}
          className="bg-green-600 text-white px-4 py-2.5 rounded hover:bg-green-700 transition cursor-pointer w-full"
        >
          View All
        </Link>
      </div>
    </section>
  );
};

export default LatestCrops;
