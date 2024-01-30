import PopularMovies from "./popularMovies/PopularMovies";
import { scrollToTop } from "../../utils/scrollToTop";
import MainSlider from "./mainSlider/MainSlider";
import Download from "./download/Download";
import TopRated from "./topRated/TopRated";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => scrollToTop(), []);

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
