import React from "react";
import MainSlider from "./mainSlider/MainSlider";
import PopularMovies from "./popularMovies/PopularMovies";
import Download from "./download/Download";
import TopRated from "./topRated/TopRated";

const Home = () => {
  return (
    <div className="bg-dark-blue">
      <MainSlider />
      <PopularMovies />
      <Download />
      <TopRated />
    </div>
  );
};

export default Home;
