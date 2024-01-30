import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState } from "react";
import { Autoplay } from "swiper";
import "swiper/css";

import "./MySwiper.css";

export const MySwiper = ({
  children,
  items,
  spaceBetween,
  speed,
  delay,
  pagination,
  name,
  direction,
}) => {
  const [swiper, setSwiper] = useState(null);
  const mainSliderBreackpoints = {
    576: {
      slidesPerView: 1,
    },
  };
  const breakpoints = {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: name === "topRated" ? 4 : name === "similar" ? 5 : 6,
    },
  };

  return (
    <div className={`my-swiper ${name}`}>
      <Swiper
        breakpoints={
          name === "mainSlider" ? mainSliderBreackpoints : breakpoints
        }
        direction={direction ? direction : "horizontal"}
        spaceBetween={spaceBetween ? spaceBetween : 30}
        speed={speed ? speed : 800}
        autoplay={{ delay: delay ? delay : 0, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay]}
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        {items.map((el, idx) => (
          <SwiperSlide key={idx}>
            {React.cloneElement(children, { item: el })}
          </SwiperSlide>
        ))}
      </Swiper>

      {pagination && (
        <div className="btns flex-center gap-3 mt-5">
          <BsArrowLeftSquareFill
            className="fs-2 text-red"
            onClick={() => swiper.slidePrev()}
          />
          <BsArrowRightSquareFill
            className="fs-2 text-red"
            onClick={() => swiper.slideNext()}
          />
        </div>
      )}
    </div>
  );
};
