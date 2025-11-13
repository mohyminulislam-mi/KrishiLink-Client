import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const UpdateProfilePopup = ({ closeModal }) => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUserProfile(name, photoURL);
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-opacity-40 flex justify-center items-center">
      <title>KrishiLink | Update Your Profile</title>
      <div className="bg-white p-6 rounded-xl w-[380px] shadow-lg">
        <h2 className="text-xl font-semibold text-center">Update Profile</h2>

        <div className="flex justify-center my-4">
          <img
            src={photoURL}
            alt="User"
            className="w-20 h-20 rounded-full border-2 object-cover"
          />
        </div>

        <form onSubmit={handleSubmit}>
          <label className="block mb-1 font-medium">Photo URL</label>
          <input
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="w-full border px-3 py-2 rounded mb-3"
          />

          <label className="block mb-1 font-medium">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border px-3 py-2 rounded mb-3"
          />

          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 border rounded cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded cursor-pointer"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfilePopup;
