import React from "react";
import nature from "../assets/nature2.png";
import parrot from "../assets/parrot.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Carousel = () => {
  return (
    <>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{ delay: 3000 }}
        navigation
        pagination={{ clickable: true }}
        loop
      >
        <SwiperSlide>
          <img src={nature} className="w-full h-[full] object-cover" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={parrot} className="w-full h-full object-cover" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={nature} className="w-full h-full object-cover" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
