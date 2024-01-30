import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";

import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import { DataHandler } from "../../../components/dataHandler/DataHandler";
import { MySwiper } from "../../../components/mySwiper/MySwiper";
import { CastCard } from "../../../components/castCard/CastCard";

const Cast = () => {
  const { data, loading, error } = useSelector((state) => state.cast);

  return (
    <div className="cast pt-5">
      <Container fluid>
        {data.length > 0 && <SectionTitle title="Cast" />}

        <DataHandler loading={loading} error={error} gridLoading>
          <MySwiper items={data} name="cast" speed={1500}>
            <CastCard />
          </MySwiper>
        </DataHandler>
      </Container>
    </div>
  );
};

export default Cast;
