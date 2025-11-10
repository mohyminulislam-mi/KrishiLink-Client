import React from "react";

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
      <div>
        <div className="p-4 bg-white rounded-lg shadow max-w-80">
          <img
            className="rounded-md max-h-40 w-full object-cover"
            src="https://images.unsplash.com/photo-1560264418-c4445382edbc?q=80&w=400"
            alt="officeImage"
          />
          <p className="text-gray-900 text-xl font-semibold ml-2 mt-2">
            Your Card Title
          </p>
          <p className="text-gray-500 text-sm my-3 ml-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore..
          </p>
        </div>
      </div>
    </section>
  );
};

export default LatestCrops;
