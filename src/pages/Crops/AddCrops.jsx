import { useState, useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";

const AddCrop = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-xl my-10">
      <h2 className="text-2xl font-semibold text-center mb-6 text-green-700">
        Add New Crop
      </h2>

      <form
        //   onSubmit={handleAddCrop}
        className="space-y-4"
      >
        {/* Crop Name */}
        <div>
          <label className="block font-medium mb-1">Crop Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="e.g Potato"
            className="input input-bordered w-full border-gray-300 rounded-lg p-2 outline-none border"
          />
        </div>

        {/* Type */}
        <div>
          <label className="block font-medium mb-1">Type</label>
          <select
            name="type"
            required
            className="input input-bordered w-full border-gray-300 rounded-lg p-2 outline-none border"
          >
            <option value="">Select Type</option>
            <option value="Grain">Grain</option>
            <option value="Vegetable">Vegetable</option>
            <option value="Fruit">Fruit</option>
          </select>
        </div>

        {/* Price & Unit */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Price per Unit</label>
            <input
              type="number"
              name="pricePerUnit"
              required
              min="1"
              placeholder="e.g 100"
              className="input input-bordered w-full border-gray-300 rounded-lg p-2 outline-none border"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Unit</label>
            <select
              name="unit"
              required
              className="input input-bordered w-full border-gray-300 rounded-lg p-2 outline-none border cursor-pointer"
            >
              <option value="" className="cursor-pointer">
                Select Unit{" "}
              </option>
              <option value="kg">kg</option>
              <option value="bag">bag</option>
              <option value="ton">Ton</option>
            </select>
          </div>
        </div>

        {/* Quantity */}
        <div>
          <label className="block font-medium mb-1">Quantity</label>
          <input
            type="number"
            name="quantity"
            required
            min="1"
            placeholder="e.g. 100"
            className="input input-bordered w-full border-gray-300 rounded-lg p-2 outline-none border"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            name="description"
            required
            rows="3"
            placeholder="Description about the crop"
            className="input input-bordered w-full border-gray-300 rounded-lg p-2 outline-none border resize-none"
          ></textarea>
        </div>

        {/* Location */}
        <div>
          <label className="block font-medium mb-1">Present Address</label>
          <input
            type="text"
            name="location"
            required
            placeholder="e.g. Dinajpur"
            className="input input-bordered w-full border-gray-300 rounded-lg p-2 outline-none border"
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block font-medium mb-1">Image URL</label>
          <input
            type="text"
            name="image"
            required
            placeholder="https://example.com/potato.jpg"
            className="input input-bordered w-full border-gray-300 rounded-lg p-2 outline-none border"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Add Crop
        </button>
      </form>
    </div>
  );
};

export default AddCrop;
