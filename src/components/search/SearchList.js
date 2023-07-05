import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../movieCard/MovieCard";
import Loading from "../loading/Loading";
import { Container } from "react-bootstrap";
import Error from "../error/Error";

const SearchList = () => {
  const state = useSelector((state) => state.search);

  if (state.loading) return <Loading />;

  if (state.error && !state.loading)
    return <Error msg={state.error} height={50} />;

  if (state.data.length <= 0 && !state.loading)
    return <h3 className="text-center text-white py-5">No Movie Matches</h3>;

  return (
    <div className="my-5">
      <Container>
        <div className="grid-4">
          {state.data &&
            state.data.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))}
        </div>
      </Container>
    </div>
  );
};

export default SearchList;
