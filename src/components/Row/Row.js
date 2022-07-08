import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { SlideNext, SlidePrev } from "./SlideButtons";
import { styles, RowTitleStyles } from "./styles/styles";
import Poster from "../Poster/Poster";

// we need to provide height and width of whole poster here
// and not just the image inside it, because slides checks width from here
const typesOfPosters = {
  normal: {
    name: "normal",
    width: "154.07px",
    height: "231.48px",
    aspectRatio: "auto 416 / 625",
  },
  numbered: {
    name: "numbered",
    width: "308.14px",
    height: "231.48px",
    aspectRatio: "auto 416 / 625",
  },
};

function Row({ name, type, rowArray, select }) {
  const [slidesPerView, setSlidesPerView] = useState(0);
  const row = rowArray.map((el, ind) => (
    <SwiperSlide key={ind}>
      <Poster
        data={el}
        select={select}
        key={ind}
        keyNumber={ind}
        name={typesOfPosters[type].name}
        width={typesOfPosters[type].width}
        height={typesOfPosters[type].height}
        aspectRatio={typesOfPosters[type].aspectRatio}
      />
    </SwiperSlide>
  ));

  // setting the slides to display per slide
  // we can set a no by width of slider/width of all slides+space between them
  // we attach this code to the window's resize event, so we get responsive shit
  const ref = useRef(null);
  useEffect((_) => {
    const handler = (_) => {
      const widthOfSlider = ref.current.offsetWidth;
      const widthOfPoster =
        Number(typesOfPosters[type].width.split("px")[0]) + 10;
      setSlidesPerView(widthOfSlider / widthOfPoster);
    };

    handler(); // init run
    window.addEventListener("resize", handler);
    return (_) => window.removeEventListener("resize", handler);
  }, []);

  return (
    <>
      <div className="row" style={styles}>
        <div className="row-title" style={RowTitleStyles}>
          <h3>{name}</h3>
        </div>
        <Swiper
          ref={ref}
          slidesPerView={slidesPerView.toFixed(2)}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          freeMode
          preloadImages
        >
          {row}
          <SlideNext />
          <SlidePrev />
        </Swiper>
      </div>
    </>
  );
}

export default Row;
