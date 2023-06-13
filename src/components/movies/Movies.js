import HeaderC from "../header/HeaderC";
import MoviesList from "./MoviesList";

const Movies = () => {
  return (
    <div className="movies bg-dark-blue">
      <HeaderC title="All Movies" />
      <MoviesList />
    </div>
  );
};

export default Movies;
