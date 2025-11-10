import React from "react";
import Slider from "../../components/Slider";
import WorkProcedure from "../../components/WorkProcedure";
import Blogs from "../../components/Blogs";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      {/* Latest Crop */}
      {/* working procedure */}
      <WorkProcedure></WorkProcedure>
      {/* Blog page */}
      <Blogs></Blogs>
    </div>
  );
};

export default Home;
