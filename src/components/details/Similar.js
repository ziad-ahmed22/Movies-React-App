import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSimilarMovies } from "../store/slices/similarSlice";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import "./similar.css";
import MovieCard from "./../movieCard/MovieCard";
import Loading from "../loading/Loading";
import Error from "../error/Error";

const Similar = ({ movieId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSimilarMovies(movieId));
  }, [movieId]);

  const state = useSelector((state) => state.similar);

  return (
    <div className="similar pt-5">
      {state.loading && <Loading grid="true" />}

      {!state.error && !state.loading && state.data.length && (
        <Container fluid>
          {!state.error && !state.loading ? (
            <>
              <h3 className="text-white mb-5 mt-2">Similar Movies</h3>
              <Swiper
                className="mySwiper text-white"
                breakpoints={{
                  "@0.00": { slidesPerView: 1 },
                  "@0.50": { slidesPerView: 1 },
                  "@1.00": { slidesPerView: 3 },
                  "@1.50": { slidesPerView: 4 },
                  "@2.00": { slidesPerView: 5 },
                }}
                watchSlidesProgress={true}
                direction="horizontal"
                spaceBetween={20}
                loop={true}
                speed={500}
                modules={[Autoplay]}
                autoplay={{ delay: 1000, disableOnInteraction: false }}
              >
                {state.data.slice(0, 15).map((item, index) => (
                  <SwiperSlide key={index}>
                    <MovieCard movie={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          ) : (
            <Error msg={state.error} height={50} />
          )}
        </Container>
      )}
    </div>
  );
};

export default Similar;
