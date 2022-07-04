import { React } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { useSwiper } from "swiper/react";

import {
  styles,
  rightStyle,
  leftStyle,
  iconStyle,
} from "./styles/slideButtonsStyles";

function SlideNext() {
  const swiper = useSwiper();

  return (
    <button
      style={{ ...styles, ...rightStyle }}
      onClick={() => swiper.slideNext()}
    >
      <BsChevronRight style={{ ...iconStyle }} />
    </button>
  );
}

function SlidePrev() {
  const swiper = useSwiper();

  return (
    <button
      style={{ ...styles, ...leftStyle }}
      onClick={() => swiper.slidePrev()}
    >
      <BsChevronLeft style={{ ...iconStyle }} />
    </button>
  );
}

export { SlideNext, SlidePrev };
