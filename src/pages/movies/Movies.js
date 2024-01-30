import HeaderC from "../../components/header/HeaderC";
import { scrollToTop } from "../../utils/scrollToTop";
import MoviesList from "./MoviesList";
import { useEffect } from "react";

const Movies = () => {
  useEffect(() => scrollToTop(), []);

  return (
    <div className="movies bg-dark-blue">
      <HeaderC title="All Movies" />
      <MoviesList />
    </div>
  );
};

export default Movies;
