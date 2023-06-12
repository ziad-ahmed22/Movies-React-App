import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import "./popularMovies.css";
import Loading from "./../../loading/Loading";
import Error from "./../../error/Error";
import MovieCard from "../../movieCard/MovieCard";
import { fetchTopRated } from "../../store/slices/topRatedSlice";

const PopularMovies = () => {
  const state = useSelector((state) => state.topRated);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopRated());
  }, []);

  return (
    <div className="popular-movies py-5">
      <Container>
        <h3 className="text-white mb-5 mt-2">Popular Movies</h3>
        {state.loading && <Loading grid="true" />}
        {state.error && !state.loading ? (
          <Error msg={state.error} height={50} />
        ) : (
          <div className="grid-4">
            {state.data &&
              state.data
                .slice(0, 8)
                .map((movie, index) => <MovieCard key={index} movie={movie} />)}
          </div>
        )}
      </Container>
    </div>
  );
};

export default PopularMovies;
