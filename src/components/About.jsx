import { div } from "motion/react-client";
import React from "react";

const About = () => {
  return (
      <div className="my-14">
          <div className="text-center">
        <h2 className="text-4xl font-bold   text-green-700 mb-3">About KrishiLink</h2>
        <div className="flex justify-center mb-3">
          <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-green-600 to-green-400"></div>
        </div>
      </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4 mt-5">
      <div className="relative shadow-2xl shadow-green-600/40 rounded-2xl overflow-hidden shrink-0">
        <img
          className="max-w-md w-full object-cover rounded-2xl"
          src="https://i.ibb.co.com/wHp7ZMd/farmer.jpg"
          alt=""
        />
        <div className="gap-1 max-w-72 cursor-pointer absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white size-16 flex items-center justify-center aspect-square backdrop-blur rounded-full">
          <svg
            width="15"
            height="18"
            viewBox="0 0 15 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.027 3.371c0-1.374 1.512-2.213 2.678-1.484l9.11 5.693a1.75 1.75 0 0 1 0 2.969l-9.11 5.693c-1.166.729-2.678-.11-2.678-1.484z"
              fill="#fff"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="text-sm text-slate-600 max-w-lg">
        <p className="mt-8">
          <span className="text-green-600 font-bold text-xl">KrishiLink</span>{" "}
          is a modern web application that connects people in the agricultural
          sector such as farmers, traders, and consumers in one digital space.
        </p>

        <div className="mt-4">
          <p>For now every user can:</p>

          <div className="mt-2 ml-8">
            <li>Show interest to connect and collaborate</li>
            <li>Post what they are growing or selling</li>
            <li>Browse others crop’s posts</li>
          </div>
        </div>

        <p className="mt-4">
          Instead of a traditional e-commerce or buyer-seller model, this
          platform works as a social agro network, where everyone can interact
          directly.
        </p>
        <button className="flex items-center gap-2 mt-8 hover:-translate-y-0.5 transition bg-gradient-to-r from-green-600 to-green-500 py-3 px-8 rounded-full text-white cursor-pointer">
          <span>Read more</span>
          <svg
            width="13"
            height="12"
            viewBox="0 0 13 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
              fill="#fff"
            />
          </svg>
        </button>
      </div>
    </div>
      </div>
  );
};

export default About;
