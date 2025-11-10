import React from "react";
import Slider from "../../components/Slider";
import WorkProcedure from "../../components/WorkProcedure";
import Blogs from "../../components/Blogs";
import About from "../../components/About";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      {/* About */}
      <About></About>
      {/* Latest Crop */}
      {/* working procedure */}
      <WorkProcedure></WorkProcedure>
      {/* Blog page */}
      <Blogs></Blogs>
    </div>
  );
};

export default Home;
