import React from "react";
import HeaderC from "./../header/HeaderC";
import MovieCard from "./../movieCard/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Button, Container } from "react-bootstrap";
import { removeAll } from "../store/slices/loveSlice";

const Watchlist = () => {
  const state = useSelector((state) => state.love);
  const dispatch = useDispatch();

  return (
    <div className="watchlist">
      <HeaderC title="Your Watchlist" />
      <Container>
        {!state.length ? (
          <h2 className="py-5 text-center text-white">
            Your Watchlist Is Empty !
          </h2>
        ) : (
          <>
            <div className="my-5 flex-between">
              <Badge className="bg-primary py-2 px-3 fs-5">
                {state.length} {state.length === 1 ? "Movie" : "Movies"}
              </Badge>
              <Button
                onClick={() => dispatch(removeAll())}
                className="bg-red fw-bold"
              >
                Remove All
              </Button>
            </div>

            <div className="watchlist-list mb-5 grid-4">
              {state.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
              ))}
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

export default Watchlist;
