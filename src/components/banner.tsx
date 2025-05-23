import React, { useEffect, useState } from "react";
import { Text, Icon, useNavigate } from "zmp-ui";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import Banner1 from "@/image/Banner1.png";
import Banner2 from "@/image/Banner2.png";
import Banner3 from "@/image/Banner3.png";
function BANNER() {
  return (
    <div className="slider-container  z-1">
      <Swiper
        effect="slide"
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img
            src={Banner1}
            alt="Banner1"
            className="w-full h-auto mb-3 rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Banner2}
            alt="Banner2"
            className="w-full h-auto mb-3 rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Banner3}
            alt="Banner3"
            className="w-full h-auto mb-3 rounded"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default BANNER;
