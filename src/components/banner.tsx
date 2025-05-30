import React, { useEffect, useState } from "react";
import { Text, Icon, useNavigate } from "zmp-ui";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Banner1 from "@/image/Ads.png";
import Banner2 from "@/image/Thuetaikhoan.png";
import Banner3 from "@/image/Website.png";

function BANNER() {
  return (
    <div className="slider-container  z-1">
      <Swiper
      modules={[FreeMode, Autoplay, Navigation, Pagination]}
        effect="slide"
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img
            src={Banner1}
            alt="Banner1"
            className="w-full h-[25vh] mb-3 rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Banner2}
            alt="Banner2"
            className="w-full h-[25vh] mb-3 rounded"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Banner3}
            alt="Banner3"
            className="w-full h-[25vh] mb-3 rounded"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default BANNER;
