import { Badge, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { EmptyPlaceholder } from "../../components/emptyPlaceholder/EmptyPlaceholder";
import MovieCard from "../../components/movieCard/MovieCard";
import { removeAll } from "../../store/slices/loveSlice";

const FavoriteList = () => {
  const state = useSelector((state) => state.love);
  const dispatch = useDispatch();

  return (
    <div className="Favorite-list">
      <Container>
        {!state.length ? (
          <EmptyPlaceholder text="Your Favourite List Is Empty !" />
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
              {state.map((item, idx) => (
                <MovieCard key={idx} item={item} />
              ))}
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

export default FavoriteList;
