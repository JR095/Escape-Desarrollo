import "../../index.css";
import { CardLocation } from "../cards/CardLocation";
import logo from "../../assets/imgs/Place1.jpg";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination ,Navigation,} from 'swiper/modules';

export function CarouselCard() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,  
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          915: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          1280: {
            slidesPerView: 3,
            spaceBetween: 30,
          },

          1600: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="pb-[3rem]"><CardLocation image={logo} name="Soda Mariaaaaa" city="Esparza Centro" starts="4.2"/></SwiperSlide>
        <SwiperSlide className="pb-[3rem]"><CardLocation image={logo} name="Soda Maria" city="Esparza Centro" starts="4.2"/></SwiperSlide>
        <SwiperSlide className="pb-[3rem]"><CardLocation image={logo} name="Soda Maria" city="Esparza Centro" starts="4.2"/></SwiperSlide>
        <SwiperSlide className="pb-[3rem]"><CardLocation image={logo} name="Soda Maria" city="Esparza Centro" starts="4.2"/></SwiperSlide>
        <SwiperSlide className="pb-[3rem]"><CardLocation image={logo} name="Soda Maria" city="Esparza Centro" starts="4.2"/></SwiperSlide>
        <SwiperSlide className="pb-[3rem]"><CardLocation image={logo} name="Soda Maria" city="Esparza Centro" starts="4.2"/></SwiperSlide>
        <SwiperSlide className="pb-[3rem]"><CardLocation image={logo} name="Soda Maria" city="Esparza Centro" starts="4.2"/></SwiperSlide>
        <SwiperSlide className="pb-[3rem]"><CardLocation image={logo} name="Soda Maria" city="Esparza Centro" starts="4.2"/></SwiperSlide>
        <SwiperSlide className="pb-[3rem]"><CardLocation image={logo} name="Soda Lucia" city="Esparza Centro" starts="4.2"/></SwiperSlide>
        
      </Swiper>
    </>
  );
}


