import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import { DataHandler } from "../../../components/dataHandler/DataHandler";
import { MySwiper } from "../../../components/mySwiper/MySwiper";
import MovieCard from "../../../components/movieCard/MovieCard";

const Similar = () => {
  const { data, loading, error } = useSelector((state) => state.similar);

  return (
    <div className="similar pt-5">
      <Container fluid>
        {data.length > 0 && <SectionTitle title="Similar Movies" />}

        <DataHandler loading={loading} error={error} gridLoading>
          <MySwiper
            items={data}
            name="similar"
            spaceBetween={20}
            delay={1000}
            speed={500}
          >
            <MovieCard />
          </MySwiper>
        </DataHandler>
      </Container>
    </div>
  );
};

export default Similar;
