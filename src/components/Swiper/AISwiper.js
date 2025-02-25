import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Mockup1 from "../../assets/SwiperImages/Mockup.png";
import Mockup2 from "../../assets/SwiperImages/Mockup2.png";
import Mockup3 from "../../assets/SwiperImages/Mockup3.png";
import Mockup4 from "../../assets/SwiperImages/Mockup4.png";
import Mockup5 from "../../assets/SwiperImages/Mockup5.png";
import Mockup6 from "../../assets/SwiperImages/Mockup6.png";
import "./AISwiper.css"; 

export default function AISwiper() {
  const [sliderData] = useState([
    { id: 5, img: Mockup5 },  
    { id: 2, img: Mockup2 },
    { id: 3, img: Mockup1 },
    { id: 1, img: Mockup3 },
    { id: 4, img: Mockup4 },
    { id: 6, img: Mockup6 },
  ]);

  return (
    <div className="swiper-container">
      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="custom-swiper"
        breakpoints={{
          320: { slidesPerView: 1 }, 
          480: { slidesPerView: 2 }, 
          768: { slidesPerView: 3 }, 
          1024: { slidesPerView: 4 }, 
          1200: { slidesPerView: 5 }, 
        }}
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={index} className="slide">
            <img src={slide.img} alt={`Slide ${slide.id}`} className="slide-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

