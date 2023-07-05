import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieCast } from "../store/slices/castSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import "./cast.css";
import { IMG_URL } from "./../URL";
import { Container } from "react-bootstrap";
import Loading from "./../loading/Loading";
import Error from "../error/Error";
import avatar from "./avatar.png";

const Cast = ({ movieId }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cast);

  useEffect(() => {
    dispatch(fetchMovieCast(movieId));
  }, [movieId]);

  return (
    <div className="cast pt-5">
      {state.loading && <Loading grid="true" />}
      {!state.error && !state.loading && state.data.length && (
        <Container fluid>
          {state.error && !state.loading ? (
            <Error msg={state.error} height={50} />
          ) : (
            <>
              <h3 className="text-white mb-5 mt-2">Cast</h3>
              <Swiper
                className="mySwiper text-white"
                breakpoints={{
                  "@0.00": { slidesPerView: 2 },
                  "@0.50": { slidesPerView: 3 },
                  "@1.00": { slidesPerView: 4 },
                  "@1.50": { slidesPerView: 5 },
                  "@2.00": { slidesPerView: 6 },
                }}
                watchSlidesProgress={true}
                direction="horizontal"
                spaceBetween={30}
                loop={true}
                speed={1500}
                modules={[Autoplay]}
                autoplay={{ delay: 0, disableOnInteraction: false }}
              >
                {state.data.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div>
                      {item.profile_path ? (
                        <img
                          className="rounded"
                          src={`${IMG_URL}${item.profile_path}`}
                          alt={item.original_name}
                        />
                      ) : (
                        <img
                          className="rounded"
                          src={avatar}
                          alt={item.original_name}
                        />
                      )}

                      <h6 className="text-center mt-3">{item.original_name}</h6>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          )}
        </Container>
      )}
    </div>
  );
};

export default Cast;
