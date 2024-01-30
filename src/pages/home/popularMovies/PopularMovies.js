import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { useEffect } from "react";

import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import { DataHandler } from "../../../components/dataHandler/DataHandler";
import { fetchTopRated } from "../../../store/slices/topRatedSlice";
import MovieCard from "../../../components/movieCard/MovieCard";

const PopularMovies = () => {
  const { data, loading, error } = useSelector((state) => state.topRated);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopRated());
  }, [dispatch]);

  return (
    <div className="popular-movies py-5">
      <Container>
        <SectionTitle title="Popular Movies" />

        <DataHandler loading={loading} error={error} gridLoading>
          <div className="grid-4">
            {data &&
              data
                .slice(0, 8)
                .map((movie, idx) => <MovieCard key={idx} item={movie} />)}
          </div>
        </DataHandler>
      </Container>
    </div>
  );
};

export default PopularMovies;
