import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import Logo from "../assets/logo.png";
import { AuthContext } from "../context/AuthContext";
import { IoExitOutline, IoHome } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { PiPlantBold } from "react-icons/pi";
import { FaOpencart, FaPenToSquare } from "react-icons/fa6";
import { CiGrid42 } from "react-icons/ci";
import { ToastContainer, toast } from "react-toastify";

const Header = () => {
  const { user, singOutUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleSingOut = () => {
    singOutUser()
      .then(() => {
        toast.success("Logout successful");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to={"/"}>
          <IoHome />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/"}>
          <PiPlantBold />
          All Crops
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to={"/"}>
              {" "}
              <FaPenToSquare />
              Add Crops
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"}>
              <FaOpencart />
              My Posts
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"}>
              <CiGrid42 />
              My interests
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="w-11/12 mx-auto navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="w-8" />
          <span className="text-3xl font-semibold">KrishiLink</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="User" src={user?.photoURL} />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <Link
                to={"/profile"}
                className="font-bold cursor-pointer flex items-center gap-1 justify-center hover:bg-green-50"
              >
                <CgProfile /> Profile
              </Link>
              <button
                className="text-red-500 font-semibold cursor-pointer flex items-center gap-1 justify-center mt-2 hover:bg-green-50"
                onClick={handleSingOut}
              >
                <IoExitOutline /> Sing Out
              </button>
            </ul>
          </div>
        ) : (
          <div className="space-x-3">
            <Link to={"/login"} className="btn-primary">
              Login
            </Link>
            <Link to={"/registration"} className="btn-primary">
              Singup
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
