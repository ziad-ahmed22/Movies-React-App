import Navbar from "./../navbar/Navbar";
import Footer from "./../footer/Footer";
import DetailsHead from "./DetailsHead";
import Cast from "./Cast";
import { useParams } from "react-router-dom";
import Similar from "./Similar";

const Details = () => {
  const { movieId } = useParams();

  return (
    <>
      <Navbar />
      <DetailsHead movieId={movieId} />
      <Cast movieId={movieId} />
      <Similar movieId={movieId} />
      <Footer />
    </>
  );
};

export default Details;
