import React, { useEffect } from "react";
import Loading from "../loading/Loading";
import { Container } from "react-bootstrap";
import { fetchAllMovies } from "../store/slices/allMovieSlice";
import { useDispatch, useSelector } from "react-redux";
import Error from "../error/Error";
import MovieCard from "../movieCard/MovieCard";
import Pagination from "./../pagination/Pagination";

const MoviesList = () => {
  const state = useSelector((state) => state.allMovies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllMovies(1));
  }, []);

  // Pagination
  const handlePageClick = ({ selected }) => {
    dispatch(fetchAllMovies(selected + 1));
  };
  const pageCount = state.total_pages;

  return (
    <div className="popular-movies py-5">
      <Container>
        {state.loading && <Loading grid="true" />}

        {state.error && !state.loading ? (
          <Error msg={state.error} height={50} />
        ) : (
          <div className="grid-4">
            {state.data &&
              state.data.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
              ))}
          </div>
        )}

        {state.data.length && !state.error && (
          <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
        )}
      </Container>
    </div>
  );
};

export default MoviesList;
