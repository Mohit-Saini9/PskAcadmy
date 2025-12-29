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
          <img
            src="https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-[full] object-cover"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-full object-cover"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-full object-cover"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
