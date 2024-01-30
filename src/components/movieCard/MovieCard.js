import { Link } from "react-router-dom";

import { AddToFav } from "../addToFav/AddToFav";
import { IMG_URL } from "../../utils/URL";
import "./movieCard.css";

const MovieCard = ({ item, topRated }) => {
  const { id, poster_path, original_title } = item;

  if (topRated) {
    return (
      <div className="movie-top-rated rounded bg-blue w-100">
        <img
          src={IMG_URL + poster_path}
          alt={original_title}
          className="w-100 h-100 rounded"
        />

        <div className="movie-info flex-center flex-column ">
          <AddToFav movie={item} />

          <Link to={`/movies/${id}`}>
            <h5 className="text-center w-100 text-white mt-4 mb-3 px-3">
              {original_title}
            </h5>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="movie-card position-relative rounded w-100">
      <Link to={`/movies/${id}`}>
        {poster_path && (
          <img
            src={IMG_URL + poster_path}
            alt={original_title}
            className="w-100 h-100"
          />
        )}
      </Link>

      <div className="flex-between">
        <h6 className="trim-text pe-2 mb-0">{original_title}</h6>
        <AddToFav movie={item} />
      </div>
    </div>
  );
};

export default MovieCard;
