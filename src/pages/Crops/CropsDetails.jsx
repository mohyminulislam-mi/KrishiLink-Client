import { useLoaderData, useParams } from "react-router";

const CropDetails = () => {
  const crop = useLoaderData();
  console.log("data", crop);


  if (!crop)
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-ring loading-lg text-green-600"></span>
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <img
        src={crop.image}
        alt={crop.name}
        className="w-full h-72 object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold mb-2">{crop.name}</h1>
      <p className="text-gray-600 mb-1">Type: {crop.type}</p>
      <p className="text-gray-600 mb-1">
        Quantity: {crop.quantity} {crop.unit}
      </p>
      <p className="text-green-600 font-bold mb-3">Price: ৳{crop.price}</p>
      <p className="text-gray-700 mb-4">{crop.description}</p>
      <p className="text-gray-500 text-sm mb-6">📍 {crop.address}</p>

      {/* Interest Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Interest submitted!");
        }}
        className="bg-gray-50 p-4 rounded-lg border"
      >
        <h2 className="text-lg font-semibold mb-3">Interested to buy?</h2>
        <input
          type="number"
          placeholder="Enter quantity"
          className="border rounded-lg w-full px-3 py-2 mb-3"
          required
        />
        <button className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 w-full">
          Submit Interest
        </button>
      </form>
    </div>
  );
};

export default CropDetails;
