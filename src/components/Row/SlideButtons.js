import { React } from "react";
import { useSwiper } from "swiper/react";

import { styles, rightStyle, leftStyle } from "./styles/slideButtonsStyles";

function SlideNext() {
  const swiper = useSwiper();

  return (
    <button
      style={{ ...styles, ...rightStyle }}
      onClick={() => swiper.slideNext()}
    ></button>
  );
}

function SlidePrev() {
  const swiper = useSwiper();

  return (
    <button
      style={{ ...styles, ...leftStyle }}
      onClick={() => swiper.slidePrev()}
    ></button>
  );
}

export { SlideNext, SlidePrev };
