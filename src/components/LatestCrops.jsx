import React, { Suspense } from "react";
import LatestCrop from "./LatestCrop";

const cropsPromise = fetch("http://localhost:3000/products").then((res) =>
  res.json()
);
const LatestCrops = () => {
  return (
    <section className="w-11/12 mx-auto py-10 border-t border-green-300">
      <div className="text-center">
        <h2 className="text-4xl font-bold   text-green-700 mb-3">
          Latest Crops
        </h2>
        <div className="flex justify-center mb-3">
          <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-green-600 to-green-400"></div>
        </div>
        <p className="  text-gray-600 mb-10">
          Stay ahead with fresh insights on organic farming, soil health, pest
          control, and certification.
        </p>
      </div>
      {/* Latest Crops card */}
      <Suspense fallback={"Loading..."}>
        <LatestCrop cropsPromise={cropsPromise}></LatestCrop>
      </Suspense>
    </section>
  );
};

export default LatestCrops;
