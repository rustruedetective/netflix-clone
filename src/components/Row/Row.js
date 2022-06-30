import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { SlideNext, SlidePrev } from "./SlideButtons";
import { styles } from "./styles/styles";
import Poster from "./Poster";

function Row({ row }) {
  row = [
    { name: "a", posterSrc: "", size: { x: 10, y: 100 } },
    { name: "b", posterSrc: "", size: { x: 10, y: 100 } },
    { name: "c", posterSrc: "", size: { x: 10, y: 100 } },
    { name: "d", posterSrc: "", size: { x: 10, y: 100 } },
    { name: "e", posterSrc: "", size: { x: 10, y: 100 } },
    { name: "f", posterSrc: "", size: { x: 10, y: 100 } },
    { name: "g", posterSrc: "", size: { x: 10, y: 100 } },
    { name: "h", posterSrc: "", size: { x: 10, y: 100 } },
    { name: "i", posterSrc: "", size: { x: 10, y: 100 } },
    { name: "j", posterSrc: "", size: { x: 10, y: 100 } },
    { name: "k", posterSrc: "", size: { x: 10, y: 100 } },
    { name: "l", posterSrc: "", size: { x: 10, y: 100 } },
    { name: "m", posterSrc: "", size: { x: 10, y: 100 } },
    { name: "n", posterSrc: "", size: { x: 10, y: 100 } },
    { name: "o", posterSrc: "", size: { x: 10, y: 100 } },
  ];

  return (
    <div className="row" style={styles}>
      <Swiper
        slidesPerView={6.4}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        freeMode
        preloadImages
      >
        {/* Array of posters */}
        {row.map((el, ind) => (
          <SwiperSlide key={ind}>
            <Poster {...el} />
          </SwiperSlide>
        ))}
        <SlideNext />
        <SlidePrev />
      </Swiper>
    </div>
  );
}

export default Row;
