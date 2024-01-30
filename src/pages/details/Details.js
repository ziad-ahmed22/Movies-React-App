import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { DetailsHeader } from "./detailsHeader/DetailsHeader";
import { scrollToTop } from "../../utils/scrollToTop";
import Similar from "./similar/Similar";
import Cast from "./cast/Cast";

const Details = () => {
  const { movieId } = useParams();

  useEffect(() => scrollToTop(), [movieId]);

  return (
    <div className="details">
      <DetailsHeader movieId={movieId} />
      <Cast movieId={movieId} />
      <Similar movieId={movieId} />
    </div>
  );
};

export default Details;
