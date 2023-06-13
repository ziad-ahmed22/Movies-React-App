import DetailsHead from "./DetailsHead";
import Cast from "./Cast";
import { useParams } from "react-router-dom";
import Similar from "./Similar";

const Details = () => {
  const { movieId } = useParams();

  return (
    <>
      <DetailsHead movieId={movieId} />
      <Cast movieId={movieId} />
      <Similar movieId={movieId} />
    </>
  );
};

export default Details;
