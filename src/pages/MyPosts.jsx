import React, { useContext, useEffect, useState } from "react";
import { MdOutlineEditNote } from "react-icons/md";
import { FaTrash } from "react-icons/fa6";
import Loading from "../loading/Loading";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const MyPosts = () => {
  const { user } = useContext(AuthContext);
  const [crops, setCrops] = useState([]);
  console.log("crops", crops);
  const [loading, setLoading] = useState(true);
  // const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/products?email=${user?.email}`)
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
  if (loading) return <Loading></Loading>;
  // handle Delete
  const handleDelete = (_id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn bg-green-600 text-white ml-1",
        cancelButton: "btn bg-red-700 text-white",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:3000/products/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                swalWithBootstrapButtons.fire({
                  title: "Deleted!",
                  text: "Product deleted successfully!",
                  icon: "success",
                });
                const remaining = crops.filter((item) => item._id !== _id);
                setCrops(remaining);
              } else {
                swalWithBootstrapButtons.fire({
                  title: "Error",
                  text: "Product not deleted from database.",
                  icon: "error",
                });
              }
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your product is safe!",
            icon: "error",
          });
        }
      });
  };

  return (
    <div className="w-11/12 mx-auto py-8">
      <div className=" w-full">
        <table className="min-w-full border border-gray-200 text-sm sm:text-base">
          <thead className="bg-green-500 text-white">
            <tr>
              <th className="px-5 py-3  text-start">Image</th>
              <th className="px-5 py-3  text-start">Crop Name</th>
              <th className="px-5 py-3  text-start">Categorie</th>
              <th className="px-5 py-3  text-start">Price</th>
              <th className="px-5 py-3  text-start">Quantity</th>
              <th className="px-5 py-3  text-start">Date</th>
              <th className="px-5 py-3  text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {crops.map((crop) => (
              <tr
                key={crop._id}
                className="border-b border-gray-200 transition-transform duration-500 hover:scale-101"
              >
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
                <td className="px-4 py-2 border-r border-gray-300 whitespace-nowrap text-center">
                  <div className="flex flex-nowrap justify-center gap-2">
                    <button
                      onClick={() => setOpen(alert("yes!"))}
                      className="btn btn-outline btn-success cursor-pointer hover:bg-green-500 hover:text-white"
                    >
                      <MdOutlineEditNote className="text-xl" /> Update
                    </button>

                    <button
                      onClick={() => handleDelete(crop._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded flex items-center gap-1 cursor-pointer"
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
    </div>
  );
};

export default MyPosts;
