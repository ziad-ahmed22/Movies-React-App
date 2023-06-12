import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../movieCard/MovieCard";
import Loading from "../loading/Loading";
import { Container } from "react-bootstrap";
import Error from "../error/Error";
import Pagination from "../pagination/Pagination";
import { fetchSearchMovies } from "../store/slices/searchSlice";

const SearchList = ({ text }) => {
  const state = useSelector((state) => state.search);
  const dispatch = useDispatch();

  // Pagination
  const handlePageClick = ({ selected }) => {
    dispatch(fetchSearchMovies({ word: text, num: selected + 1 }));
  };
  const pageCount = state.total_pages;

  return (
    <div className="my-5">
      <Container>
        {!text ? (
          <h3 className="text-center text-white py-5">
            Search For Your Favorite Movie
          </h3>
        ) : (
          <>
            {state.loading && <Loading grid="true" />}

            {state.data.length <= 0 && !state.loading && text && (
              <h3 className="text-center text-white py-5">No Movie Matches</h3>
            )}

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
              <Pagination
                handlePageClick={handlePageClick}
                pageCount={pageCount}
              />
            )}
          </>
        )}
      </Container>
    </div>
  );
};

export default SearchList;
