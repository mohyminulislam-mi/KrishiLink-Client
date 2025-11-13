import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const AddCrop = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddCrop = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const type = e.target.type.value;
    const quantity = parseInt(e.target.quantity.value);
    const unit = e.target.unit.value;
    const price = parseFloat(e.target.price.value);
    const description = e.target.description.value;
    const address = e.target.address.value;
    const image = e.target.image.value;

    const newProduct = {
      name,
      type,
      quantity,
      unit,
      price,
      description,
      address,
      image,
      owner: {
        ownerEmail: user.email,
        ownerName: user.displayName,
      },
    };
    console.log(newProduct);

    // post data into server
    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Added successful!");
        e.target.reset();
        navigate("/my-posts");
      });
  };
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-xl my-10">
      <title>KrishiLink | Add Your Crops</title>
      <div className="text-center">
        <h2 className="text-2xl font-bold text-green-700 mb-2">Add New Crop</h2>
        <div className="flex justify-center mb-2">
          <div className="w-24 h-[3px] rounded-full bg-linear-to-r from-green-600 to-green-400"></div>
        </div>
        <p className="  text-gray-600 mb-8">
          You can add your all type Crops. and this crop visible for our
          website!
        </p>
      </div>

      <form onSubmit={handleAddCrop} className="space-y-4">
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
              required
              min="1"
              placeholder="e.g. 100"
              className="input input-bordered w-full border-gray-300 rounded-lg p-2 outline-none border"
            />
          </div>
          {/* Unit like kg/Ton  */}
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
        {/* make your price  */}
        <div>
          <label className="block font-medium mb-1">Price per Unit</label>
          <input
            type="number"
            name="price"
            required
            min="1"
            placeholder="e.g 100"
            className="input input-bordered w-full border-gray-300 rounded-lg p-2 outline-none border"
          />
        </div>

        {/* Description */}

        <label className="block font-medium mb-1">Description</label>
        <textarea
          name="description"
          required
          placeholder="Description about the crop"
          rows="2"
          className="w-full border-gray-300 rounded-lg p-2 outline-none border resize-none"
        ></textarea>
        {/* Location */}
        <div>
          <label className="block font-medium mb-1">Location</label>
          <input
            type="text"
            name="address"
            required
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
            required
            placeholder="https://example.com/potato.jpg"
            className="input input-bordered w-full border-gray-300 rounded-lg p-2 outline-none border"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full  bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition cursor-pointer"
        >
          Add Crop
        </button>
      </form>
    </div>
  );
};

export default AddCrop;
