import React from "react";
import MainSlider from "./mainSlider/MainSlider";
import PopularMovies from "./popularMovies/PopularMovies";
import Navbar from "../navbar/Navbar";
import Footer from "./../footer/Footer";
import Download from "./download/Download";
import TopRated from "./topRated/TopRated";

const Home = () => {
  return (
    <div className="bg-dark-blue">
      <Navbar />
      <MainSlider />
      <PopularMovies />
      <Download />
      <TopRated />
      <Footer />
    </div>
  );
};

export default Home;
