import { Container } from "react-bootstrap";

import { MainCard } from "../../../components/mainCard/MainCard";
import { MySwiper } from "../../../components/mySwiper/MySwiper";
import { mainSliderData } from "../../../data/home";

const MainSlider = () => {
  return (
    <div className="main-slider">
      <Container>
        <MySwiper
          items={mainSliderData}
          direction="vertical"
          name="mainSlider"
          speed={1000}
          delay={2000}
          spaceBetween={1}
        >
          <MainCard />
        </MySwiper>
      </Container>
    </div>
  );
};

export default MainSlider;
