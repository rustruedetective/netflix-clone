import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { SlideNext, SlidePrev } from "./SlideButtons";
import { styles } from "./styles/styles";
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
  trailer: {
    name: "trailer",
    width: "154.07px",
    height: "231.48px",
    aspectRatio: "auto 416 / 625",
  },
  search: {
    name: "search",
    width: "154.07px",
    height: "231.48px",
    aspectRatio: "auto 416 / 625",
  },
};

function Row({ rowArray, type }) {
  rowArray = [
    { name: "name abc", src: "https://random.imagecdn.app/416/625" },
    { name: "name abc", src: "https://random.imagecdn.app/416/625" },
    { name: "name abc", src: "https://random.imagecdn.app/416/625" },
    { name: "name abc", src: "https://random.imagecdn.app/416/625" },
    { name: "name abc", src: "https://random.imagecdn.app/416/625" },
    { name: "name abc", src: "https://random.imagecdn.app/416/625" },
    { name: "name abc", src: "https://random.imagecdn.app/416/625" },
    { name: "name abc", src: "https://random.imagecdn.app/416/625" },
    { name: "name abc", src: "https://random.imagecdn.app/416/625" },
    { name: "name abc", src: "https://random.imagecdn.app/416/625" },
    { name: "name abc", src: "https://random.imagecdn.app/416/625" },
    { name: "name abc", src: "https://random.imagecdn.app/416/625" },
    { name: "name abc", src: "https://random.imagecdn.app/416/625" },
    { name: "name abc", src: "https://random.imagecdn.app/416/625" },
    { name: "name abc", src: "https://random.imagecdn.app/416/625" },
  ];
  const [slidesPerView, setSlidesPerView] = useState(0);
  const row = rowArray.map((el, ind) => (
    <SwiperSlide key={ind}>
      <Poster {...el} type={typesOfPosters[type]} key={ind} keyNumber={ind} />
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
    <div className="row" style={styles}>
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
  );
}

export default Row;
