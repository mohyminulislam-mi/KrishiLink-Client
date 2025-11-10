import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";

const Login = () => {
  const { singInEmailPassword, singInWithGoogle } = use(AuthContext);
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{6,}$/;

  const location = useLocation();
  const navigate = useNavigate();

  const handleUserLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("user data", email, password);
    // password validation chcek
    if (!passwordPattern.test(password)) {
      setPasswordError("Your password format is invalid.");
      return;
    }
    singInEmailPassword(email, password)
      .then((result) => {
        console.log("user details", result);
        toast.success("login successful");
        e.target.reset();
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // singin with google
  const handleSinginGoogle = () => {
    singInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="bg-white text-gray-500 max-w-96 mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10 mx-auto my-14">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
        Welcome back
      </h2>
      <form onSubmit={handleUserLogin}>
        <input
          id="email"
          className="w-full bg-transparent border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
          type="email"
          placeholder="Enter your email"
          name="email"
          required
        />
        <input
          id="password"
          className="w-full bg-transparent border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
          type="password"
          placeholder="Enter your password"
          name="password"
          required
        />
        <div className="text-right py-4">
          <Link to={"/forget-password"} className="text-blue-600 underline">
            Forgot Password
          </Link>
        </div>
        <button
          type="submit"
          className="w-full mb-3 bg-green-500 py-2.5 rounded-full text-white cursor-pointer"
        >
          Log in
        </button>
      </form>
      <p className="text-center mt-4">
        Don’t have an account?{" "}
        <Link to={"/registration"} className="text-blue-500 underline">
          Signup
        </Link>
      </p>
      <div className="text-center my-4 ">
        <span className="font-bold">Or</span>
      </div>
      {/* Google */}
      <button
        onClick={handleSinginGoogle}
        className="btn bg-white text-black border-[#e5e5e5] w-full"
      >
        <svg
          aria-label="Google logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="m0 0H512V512H0" fill="#fff"></path>
            <path
              fill="#34a853"
              d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
            ></path>
            <path
              fill="#4285f4"
              d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
            ></path>
            <path
              fill="#fbbc02"
              d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
            ></path>
            <path
              fill="#ea4335"
              d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
            ></path>
          </g>
        </svg>
        Login with Google
      </button>
    </div>
  );
};

export default Login;
