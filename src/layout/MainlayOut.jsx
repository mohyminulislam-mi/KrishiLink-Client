import React from "react";
import Home from "../pages/home/Home";
import Header from "../shared/Header";
import { Outlet } from "react-router";
import Footer from "../shared/Footer";

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
    </div>
  );
};

export default MainlayOut;
