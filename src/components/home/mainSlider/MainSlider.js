import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./mainslider.css";
import data from "./data";
import { Button, Container } from "react-bootstrap";
import { BiMoviePlay } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

const MainSlider = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Swiper
        className="rounded"
        direction="vertical"
        spaceBetween={1}
        loop={true}
        speed={1000}
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="info text-white">
              <h2 className="fw-bold">{item.title}</h2>
              <div className="mt-4 mb-4">
                <span className="fw-bold">
                  <BiMoviePlay className="me-2 mb-1 text-red fs-20" />
                  {item.type}
                </span>
                <span className="fw-bold">
                  <SlCalender className="me-2 ms-5 mb-1 text-red fs-17" />
                  {item.year}
                </span>
              </div>
              <Button
                onClick={() => navigate("/movies")}
                className="more bg-red"
              >
                More Movies
              </Button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default MainSlider;
