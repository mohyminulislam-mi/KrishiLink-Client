import { useState, useContext } from "react";
import UpdateProfilePopup from "../components/UpdateProfilePopup";
import { AuthContext } from "../context/AuthContext";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const [open, setOpen] = useState(false);

  return (
    <div className="py-14">
      <title>KrishiLink | My Profile</title>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
        <div className="card-body">
          <div className="mx-auto">
            <img
              src={user?.photoURL || user.reloadUserInfo.photoUrl}
              alt="User"
              className="w-[150px] h-[150px] rounded-full object-cover"
            />
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-center mb-1">
              {user?.displayName || user.reloadUserInfo.displayName}
            </h1>
            <p>{user?.email}</p>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="btn bg-green-500 hover:bg-green-600 text-white mt-4"
          >
            Update Profile
          </button>
          {open && <UpdateProfilePopup closeModal={() => setOpen(false)} />}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
