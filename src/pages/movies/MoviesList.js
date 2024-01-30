import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { useEffect } from "react";

import { DataHandler } from "../../components/dataHandler/DataHandler";
import { fetchAllMovies } from "../../store/slices/allMovieSlice";
import Pagination from "../../components/pagination/Pagination";
import MovieCard from "../../components/movieCard/MovieCard";
import { scrollToTop } from "../../utils/scrollToTop";

const MoviesList = () => {
  const dispatch = useDispatch();
  const { data, loading, error, total_pages } = useSelector(
    (state) => state.allMovies
  );

  useEffect(() => {
    dispatch(fetchAllMovies(1));
  }, [dispatch]);

  const handlePageClick = ({ selected }) => {
    dispatch(fetchAllMovies(selected + 1));
    scrollToTop();
  };

  return (
    <div className="popular-movies py-5">
      <Container>
        <DataHandler loading={loading} error={error} gridLoading>
          <div className="grid-4">
            {data &&
              data.map((movie, index) => (
                <MovieCard key={index} item={movie} />
              ))}
          </div>
        </DataHandler>

        {total_pages > 1 && !error && (
          <Pagination
            handlePageClick={handlePageClick}
            pageCount={total_pages}
          />
        )}
      </Container>
    </div>
  );
};

export default MoviesList;
