import React from "react";
import Home from "../pages/home/Home";
import Header from "../shared/Header";
import { Outlet } from "react-router";
import Footer from "../shared/Footer";

const MainlayOut = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainlayOut;
