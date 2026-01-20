import React, { useContext, useEffect, useState } from "react";
import { MdOutlineEditNote } from "react-icons/md";
import { FaTrash } from "react-icons/fa6";
import Loading from "../../loading/Loading";
import { AuthContext } from "../../context/AuthContext";
import UpdateCrop from "../../Dashboard/Admin/Crops/UpdateCrop";
import Swal from "sweetalert2";

const MyPosts = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCrop, setSelectedCrop] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch(
      `https://krishi-link-server-eta.vercel.app/products?email=${user?.email}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, [user]);

  if (loading) return <Loading />;

  const handleDelete = async (_id) => {
    const confirmDelete = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#00C951",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirmDelete.isConfirmed) {
      const res = await fetch(
        `https://krishi-link-server-eta.vercel.app/products/${_id}`,
        {
          method: "DELETE",
        },
      );
      const data = await res.json();

      if (data.deletedCount > 0) {
        setProducts(products.filter((item) => item._id !== _id));
        Swal.fire("Deleted!", "Your product has been deleted.", "success");
      }
    }
  };
  return (
    <div className="w-11/12 mx-auto py-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        My Crops
      </h2>

      {/* Responsive Table Wrapper */}
      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <table className="min-w-[768px] lg:w-full text-sm sm:text-base md:text-base">
          <thead className="bg-green-500 text-white">
            <tr>
              <th className="px-3 sm:px-5 py-3 text-start">Image</th>
              <th className="px-3 sm:px-5 py-3 text-start">Name</th>
              <th className="px-3 sm:px-5 py-3 text-start">Category</th>
              <th className="px-3 sm:px-5 py-3 text-start">Price</th>
              <th className="px-3 sm:px-5 py-3 text-start">Quantity</th>
              <th className="px-2 py-3 text-start sm:px-5 md:px-6 lg:px-8">
                Post Date
              </th>
              <th className="px-3 sm:px-5 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="bg-white">
            {products.map((crop) => (
              <tr
                key={crop._id}
                className="border-b border-gray-200 hover:bg-gray-50 transition"
              >
                <td className="px-3 sm:px-4 py-2">
                  <img
                    src={crop.image}
                    alt="Crop"
                    className="h-12 w-16 sm:h-16 sm:w-20 object-cover rounded"
                  />
                </td>
                <td className="px-3 sm:px-4 py-2 font-medium text-gray-800">
                  {crop.name}
                </td>
                <td className="px-3 sm:px-4 py-2">{crop.type}</td>
                <td className="px-3 sm:px-4 py-2 text-green-600 font-semibold">
                  ৳{crop.price}
                </td>
                <td className="px-3 sm:px-4 py-2">
                  {crop.quantity} {crop.unit}
                </td>
                <td className="px-2 py-2 text-xs sm:px-4 md:px-5 lg:px-7 sm:text-sm whitespace-normal">
                  <span className="w-full block">
                    {crop.created_at_display}
                  </span>
                </td>
                <td className="px-3 sm:px-4 py-2 text-center">
                  <div className="flex flex-col lg:flex-row justify-center items-center gap-2">
                    <button
                      onClick={() => setSelectedCrop(crop)}
                      className="flex items-center justify-center gap-1 border border-green-500 text-green-600 px-3 py-1 rounded hover:bg-green-500 hover:text-white transition w-full sm:w-auto"
                    >
                      <MdOutlineEditNote className="text-lg" /> Update
                    </button>

                    <button
                      onClick={() => handleDelete(crop._id)}
                      className="flex items-center justify-center gap-1 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition w-full sm:w-auto"
                    >
                      <FaTrash /> Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Popup modal */}
      {selectedCrop && (
        <UpdateCrop
          crop={selectedCrop}
          onClose={() => setSelectedCrop(null)}
          onUpdate={(updatedCrop) => {
            setProducts(
              products.map((p) =>
                p._id === updatedCrop._id ? updatedCrop : p,
              ),
            );
            setSelectedCrop(null);
          }}
        />
      )}
    </div>
  );
};

export default MyPosts;
