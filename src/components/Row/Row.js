import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { SlideNext, SlidePrev } from "./SlideButtons";
import { styles, rowImgStyle } from "./styles/styles";
import { constants, derivedConstants } from "./helpers/constants";

function Row() {
  const { row_img_width, row_img_height, row_img_per_page } = constants;
  const { img_width, img_height } = derivedConstants;

  return (
    <div className="row" style={styles}>
      
      <Swiper
        slidesPerView={row_img_per_page}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        freeMode
        preloadImages
      >
        {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((el, ind) => (
          <SwiperSlide key={ind}>
            <img
              className="row-img"
              width={row_img_width}
              height={row_img_height}
              src={`https://random.imagecdn.app/${img_width}/${img_height}`}
              style={rowImgStyle}
            />
          </SwiperSlide>
        ))}
        <SlideNext />
        <SlidePrev />
      </Swiper>
    </div>
  );
}

export default Row;
