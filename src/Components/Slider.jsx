import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import slide1 from "../assets/foreign-students.jpg"
import slide2 from "../assets/gtu-cern.jpg"
import slide3 from "../assets/gtu-course-on-horticulture.png"
import slide4 from "../assets/pjimage2.jpg"
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard,Autoplay } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide ><img  style={{height:'570px'}} src={slide1} /></SwiperSlide>
        <SwiperSlide><img src={slide2}/></SwiperSlide>
        <SwiperSlide><img src={slide3} /></SwiperSlide>
        <SwiperSlide><img style={{height:'575px'}} src={slide4} /></SwiperSlide>
      </Swiper>
    </>
  );
}
