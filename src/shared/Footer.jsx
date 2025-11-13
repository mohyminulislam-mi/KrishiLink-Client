import React from "react";
import { Link } from "react-router";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Logo from "../assets/logo.png";
import { toast } from "react-toastify";

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    toast.success("Thanks for connect!");
    e.target.reset();
  };
  return (
    <div className="w-11/12 mx-auto text-base-content mt-10">
      <div className="py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* --- Brand Section --- */}
        <div>
          <Link to="/" className="flex items-center gap-2 mb-3">
            <img src={Logo} alt="KrishiLink Logo" className="w-10" />
            <span className="text-2xl font-bold text-green-700">
              KrishiLink
            </span>
          </Link>
          <p className="text-sm text-gray-600">
            Connecting farmers and buyers across Bangladesh — grow, trade, and
            thrive with confidence.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-4 text-lg">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-600"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-600"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-600"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-600"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* --- Quick Links --- */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-green-700">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-green-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/all-crops" className="hover:text-green-600">
                All Crops
              </Link>
            </li>
            <li>
              <Link to="/add-crops" className="hover:text-green-600">
                Add Crops
              </Link>
            </li>
            <li>
              <Link to="/my-posts" className="hover:text-green-600">
                My Posts
              </Link>
            </li>
          </ul>
        </div>

        {/* --- Support --- */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-green-700">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-green-600">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-green-600">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-green-600">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-green-600">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* --- Newsletter --- */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-green-700">
            Subscribe
          </h3>
          <p className="text-sm text-gray-600 mb-3">
            Get weekly updates about crops, trends, and best farming practices.
          </p>
          <form
            onSubmit={handleSubscribe}
            className="flex items-center justify-center gap-2 p-2 rounded-md bg-green-50"
          >
            <input
              className="focus:ring-2 ring-green-600 outline-none w-full max-w-64 py-2 rounded px-2"
              type="email"
              placeholder="Enter your email"
            />
            <button className="btn-primary">Subscribe</button>
          </form>
        </div>
      </div>

      {/* --- Bottom Section --- */}

      <div className="border-t border-gray-300 py-4 text-center text-sm text-gray-600 flex justify-between flex-col lg:flex-row">
        <div>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-green-700">KrishiLink</span>. All
          rights reserved.
        </div>
        <div>
          <p>
            Develop by -{" "}
            <a
              href="https://www.linkedin.com/in/mohyminulislam/"
              target="blank"
              className="font-bold text-green-600"
            >
              Mohyminul Islam
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
