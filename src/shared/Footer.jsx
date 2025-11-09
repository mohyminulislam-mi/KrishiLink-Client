import React from "react";
import { Link } from "react-router";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="w-11/12 mx-auto text-sm text-slate-500 pt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link to={"/"} className="flex items-center gap-2">
            <img src={Logo} alt="Logo" className="w-8" />
            <span className="text-3xl font-semibold text-black">
              KrishiLink
            </span>
          </Link>
          <p className="text-sm/7 mt-6">
            KrishiLink is a modern web application that connects people in the
            agricultural sector such as farmers, traders, and consumers in one
            digital space.
          </p>
        </div>
        <div className="flex flex-col lg:items-center lg:justify-center">
          <div className="flex flex-col text-sm space-y-2.5">
            <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
            <a className="hover:text-slate-600 transition" href="#">
              About us
            </a>
            <a className="hover:text-slate-600 transition" href="#">
              Careers
              <span className="text-xs text-white bg-indigo-600 rounded-md ml-2 px-2 py-1">
                We’re hiring!
              </span>
            </a>
            <a className="hover:text-slate-600 transition" href="#">
              Contact us
            </a>
            <a className="hover:text-slate-600 transition" href="#">
              Privacy policy
            </a>
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-gray-800 mb-5">
            Subscribe to our newsletter
          </h2>
          <div className="text-sm space-y-6 max-w-sm">
            <p>
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
            <div className="flex items-center justify-center gap-2 p-2 rounded-md bg-indigo-50">
              <input
                className="focus:ring-2 ring-indigo-600 outline-none w-full max-w-64 py-2 rounded px-2"
                type="email"
                placeholder="Enter your email"
              />
              <button className="bg-indigo-600 px-4 py-2 text-white rounded">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-300 mt-8" />
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5">
        <p>
          © {new Date().getFullYear()}{" "}
          <a href="https://prebuiltui.com">PrebuiltUI</a>. All rights reserved.
        </p>
        <div>
          <p>
            Develop by -{" "}
            <a
              href="https://www.linkedin.com/in/mohyminulislam/"
              target="blank"
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
