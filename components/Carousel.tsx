// components/Carousel.tsx
"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  { id: 1, content: "Luchamos contra la anemia" },
  { id: 2, content: "Únete a nuestra causa" },
  { id: 3, content: "Apóyanos con una donación" },
];

const Carousel: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto mt-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="h-96"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex items-center justify-center h-full bg-white text-red-600 rounded-lg border border-red-200 shadow-lg">
              <div className="text-center p-10">
                <h2 className="text-4xl font-bold mb-4">{slide.content}</h2>
                <p className="text-xl text-gray-600">Juntos podemos hacer la diferencia</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;