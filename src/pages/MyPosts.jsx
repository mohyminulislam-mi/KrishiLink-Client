import React, { useContext, useEffect, useState } from "react";
import { MdOutlineEditNote } from "react-icons/md";
import { FaTrash } from "react-icons/fa6";
import Loading from "../loading/Loading";
import { AuthContext } from "../context/AuthContext";
import UpdateCrop from "../pages/Crops/UpdateCrop";
import Swal from "sweetalert2";

const MyPosts = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCrop, setSelectedCrop] = useState(null);

  // load data
  useEffect(() => {
    fetch(`http://localhost:3000/products?email=${user?.email}`)
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

  // delete crop
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
      const res = await fetch(`http://localhost:3000/products/${_id}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (data.deletedCount > 0) {
        setProducts(products.filter((item) => item._id !== _id));
        Swal.fire("Deleted!", "Your product has been deleted.", "success");
      }
    }
  };

  return (
    <div className="w-11/12 mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">My Crops</h2>

      <table className="min-w-full border border-gray-200 text-sm sm:text-base">
        <thead className="bg-green-500 text-white">
          <tr>
            <th className="px-5 py-3 text-start">Image</th>
            <th className="px-5 py-3 text-start">Name</th>
            <th className="px-5 py-3 text-start">Category</th>
            <th className="px-5 py-3 text-start">Price</th>
            <th className="px-5 py-3 text-start">Quantity</th>
            <th className="px-5 py-3 text-start">Date</th>
            <th className="px-5 py-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((crop) => (
            <tr key={crop._id} className="border-b border-gray-200">
              <td className="px-4 py-2">
                <img src={crop.image} alt="Image" className="h-16 w-22" />
              </td>
              <td className="px-4 py-2">{crop.name}</td>
              <td className="px-4 py-2">{crop.type}</td>
              <td className="px-4 py-2">৳{crop.price}</td>
              <td className="px-4 py-2">
                {crop.quantity} {crop.unit}
              </td>
              <td className="px-4 py-2">{crop.created_at_display}</td>
              <td className="px-4 py-2 text-center">
                <div className="flex justify-center gap-2">
                  <button
                    onClick={() => setSelectedCrop(crop)}
                    className="btn btn-outline btn-success cursor-pointer hover:bg-green-500 hover:text-white"
                  >
                    <MdOutlineEditNote className="text-xl" /> Update
                  </button>

                  <button
                    onClick={() => handleDelete(crop._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded flex items-center gap-1 hover:bg-red-600 cursor-pointer"
                  >
                    <FaTrash /> Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* popup modal */}
      {selectedCrop && (
        <UpdateCrop
          crop={selectedCrop}
          onClose={() => setSelectedCrop(null)}
          onUpdate={(updatedCrop) => {
            setProducts(
              products.map((p) => (p._id === updatedCrop._id ? updatedCrop : p))
            );
            setSelectedCrop(null);
          }}
        />
      )}
    </div>
  );
};

export default MyPosts;
