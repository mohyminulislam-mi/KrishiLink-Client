import React, { useState } from "react";
import Swal from "sweetalert2";

const UpdateCrop = ({ crop, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    name: crop.name,
    type: crop.type,
    quantity: crop.quantity,
    unit: crop.unit,
    price: crop.price,
    description: crop.description,
    address: crop.address,
    image: crop.image,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(
      `https://krishi-link-server-eta.vercel.app/products/${crop._id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );

    const data = await res.json();

    if (data.modifiedCount > 0 || data.acknowledged) {
      Swal.fire({
        title: "Updated!",
        text: "Updated successfully!",
        icon: "success",
      });
      onUpdate({ ...crop, ...formData });
    } else {
      Swal.fire({
        title: "Failed!",
        text: "Update Failed!",
        icon: "error",
      });
    }
  };

  return (
    <div>
      <div className="fixed inset-0 bg-green-50 bg-opacity-40 flex justify-center items-center z-50">
        <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-green-700 text-center mb-4">
            Update Crop
          </h2>
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Crop Name */}
            <div>
              <label className="block font-medium mb-1">Crop Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
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
                value={formData.type}
                onChange={handleChange}
                className="input input-bordered w-full border-gray-300 rounded-lg p-2 outline-none border cursor-pointer"
              >
                <option value="">Select Type</option>
                <option value="Grain">Grain</option>
                <option value="Vegetable">Vegetable</option>
                <option value="Fruit">Fruit</option>
              </select>
            </div>
            {/* Quantity & Unit */}
            <div className="grid grid-cols-2 gap-4">
              {/* Quantity */}
              <div>
                <label className="block font-medium mb-1">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  min="1"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="input input-bordered w-full border-gray-300 rounded-lg p-2 outline-none border"
                />
              </div>
              {/* Unit like kg/Ton  */}
              <div>
                <label className="block font-medium mb-1">Unit</label>
                <select
                  name="unit"
                  value={formData.unit}
                  onChange={handleChange}
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
            {/* make your price  */}
            <div>
              <label className="block font-medium mb-1">Price per Unit</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                min="1"
                placeholder="e.g 100"
                className="input input-bordered w-full border-gray-300 rounded-lg p-2 outline-none border"
              />
            </div>
            {/* Description */}
            <label className="block font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description about the crop"
              rows="2"
              className="w-full border-gray-300 rounded-lg p-2 outline-none border resize-none"
            ></textarea>
            {/* Location */}
            <div>
              <label className="block font-medium mb-1">Present Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="e.g. Birampur, Dinajpur"
                className="input input-bordered w-full border-gray-300 rounded-lg p-2 outline-none border"
              />
            </div>
            {/* Image URL */}
            <div>
              <label className="block font-medium mb-1">Image URL</label>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="https://example.com/potato.jpg"
                className="input input-bordered w-full border-gray-300 rounded-lg p-2 outline-none border"
              />
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-red-500 text-white rounded cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 cursor-pointer"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCrop;
