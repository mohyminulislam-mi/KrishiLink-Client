import React from "react";
import Slider from "../../components/Slider";
import WorkProcedure from "../../components/WorkProcedure";
import Blogs from "../../components/Blogs";
import About from "../../components/About";
import Testimonial from "../../components/Testimonial";
import LatestCrops from "../../components/LatestCrops";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      {/* About */}
      <About></About>
      {/* Latest Crop */}
      <LatestCrops></LatestCrops>
      {/* working procedure */}
      <WorkProcedure></WorkProcedure>
      {/* Blog page */}
      <Blogs></Blogs>
      {/* Testimonial  */}
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
