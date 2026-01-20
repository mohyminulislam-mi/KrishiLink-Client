import React from "react";
import Slider from "../../components/Slider";
import WorkProcedure from "../../components/WorkProcedure";
import Blogs from "../../components/Blogs";
import AboutSection from "../../components/AboutSection";
import Testimonial from "../../components/Testimonial";
import LatestCrops from "../../components/LatestCrops";
import Partnership from "../../pages/home/sections/Partnership";
import Methods from "../../pages/home/sections/Methods";
import FAQ from "../../pages/home/sections/FAQ";
import Newsletter from "../../pages/home/sections/Newsletter";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      {/* About */}
      <AboutSection></AboutSection>
      {/* Latest Crop */}
      <LatestCrops></LatestCrops>
      {/* working procedure */}
      <WorkProcedure></WorkProcedure>
      {/* Blog page */}
      <Blogs></Blogs>
      <Partnership></Partnership>
      {/* Testimonial  */}
      <Testimonial></Testimonial>
      <Methods></Methods>
      <FAQ></FAQ>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
