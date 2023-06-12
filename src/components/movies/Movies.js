import HeaderC from "../header/HeaderC";
import Navbar from "../navbar/Navbar";
import Footer from "./../footer/Footer";
import MoviesList from "./MoviesList";

const Movies = () => {
  return (
    <div className="movies bg-dark-blue">
      <Navbar />
      <HeaderC title="All Movies" />
      <MoviesList />
      <Footer />
    </div>
  );
};

export default Movies;
