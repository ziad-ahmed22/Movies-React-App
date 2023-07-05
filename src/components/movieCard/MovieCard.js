import { Link } from "react-router-dom";
import { IMG_URL } from "../URL";
import "./movieCard.css";
import Love from "./Love";

const MovieCard = ({ movie }) => {
  return (
    <div className="card position-relative rounded">
      <Link to={`/NetflixoReactApp/movies/${movie.id}`}>
        {movie.poster_path && (
          <img
            src={IMG_URL + movie.poster_path}
            alt={movie.original_title}
            className="w-100 h-100"
          />
        )}
      </Link>
      <div className="flex-between">
        <h6>
          {movie.original_title.length > 25
            ? movie.original_title.slice(0, 20) + "...."
            : movie.original_title}
        </h6>
        <Love movie={movie} />
      </div>
    </div>
  );
};

export default MovieCard;
