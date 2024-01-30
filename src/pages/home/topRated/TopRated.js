import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { useEffect } from "react";

import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import { DataHandler } from "../../../components/dataHandler/DataHandler";
import { fetchTopRated } from "../../../store/slices/topRatedSlice";
import { MySwiper } from "../../../components/mySwiper/MySwiper";
import MovieCard from "../../../components/movieCard/MovieCard";

const TopRated = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.topRated);

  useEffect(() => {
    dispatch(fetchTopRated());
  }, [dispatch]);

  return (
    <div className="top-rated py-5 px-1">
      <Container>
        <SectionTitle title="Top Rated" />

        <DataHandler loading={loading} error={error}>
          <MySwiper
            items={data.slice(12, 22)}
            name="topRated"
            delay={3000}
            pagination
          >
            <MovieCard topRated />
          </MySwiper>
        </DataHandler>
      </Container>
    </div>
  );
};

export default TopRated;
