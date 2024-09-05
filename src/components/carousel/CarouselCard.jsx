import "../../index.css";
import { CardLocation } from "../cards/CardLocation";
import logo from "../../assets/imgs/Place1.jpg";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export function CarouselCard() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper mt-[4rem]"
      >
        <SwiperSlide><CardLocation image={logo} name="Soda Maria" city="Esparza Centro" starts="4.2"/></SwiperSlide>
        <SwiperSlide><CardLocation image={logo} name="Soda Maria" city="Esparza Centro" starts="4.2"/></SwiperSlide>
        <SwiperSlide><CardLocation image={logo} name="Soda Maria" city="Esparza Centro" starts="4.2"/></SwiperSlide>
        <SwiperSlide><CardLocation image={logo} name="Soda Maria" city="Esparza Centro" starts="4.2"/></SwiperSlide>
        <SwiperSlide><CardLocation image={logo} name="Soda Maria" city="Esparza Centro" starts="4.2"/></SwiperSlide>
        <SwiperSlide><CardLocation image={logo} name="Soda Maria" city="Esparza Centro" starts="4.2"/></SwiperSlide>
        <SwiperSlide><CardLocation image={logo} name="Soda Maria" city="Esparza Centro" starts="4.2"/></SwiperSlide>
        <SwiperSlide><CardLocation image={logo} name="Soda Maria" city="Esparza Centro" starts="4.2"/></SwiperSlide>
        <SwiperSlide><CardLocation image={logo} name="Soda Maria" city="Esparza Centro" starts="4.2"/></SwiperSlide>
        
      </Swiper>
    </>
  );
}


