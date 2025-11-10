import React from "react";
import Home from "../pages/home/Home";
import Header from "../shared/Header";
import { Outlet } from "react-router";
import Footer from "../shared/Footer";
import { ToastContainer } from "react-toastify";

const MainlayOut = () => {
  return (
    <div>
      <header className="bg-base-100">
        <Header />
      </header>
      <div className="w-11/12 mx-auto">
        <Outlet></Outlet>
      </div>
      <footer className="bg-white">
        <Footer />
      </footer>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover={false}
        draggable
        theme="light"
      />
    </div>
  );
};

export default MainlayOut;
