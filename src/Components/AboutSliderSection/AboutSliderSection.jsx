
import React, { useContext } from "react";

import homeslider1 from "../../assets/Images/homeslider1.png";
import homeslider2 from "../../assets/Images/homeslider2.png";
import homeslider3 from "../../assets/Images/homeslider3.png";
import homeslider4 from "../../assets/Images/homeslider4.png";
import homeslider5 from "../../assets/Images/homeslider5.png";
import homeslider6 from "../../assets/Images/homeslider6.png";
import homesliderdark1 from "../../assets/Images/homesliderdark1.png";
import homesliderdark2 from "../../assets/Images/homesliderdark2.png";
import homesliderdark3 from "../../assets/Images/homesliderdark3.png";
import homesliderdark4 from "../../assets/Images/homesliderdark4.png";
import homesliderdark5 from "../../assets/Images/homesliderdark5.png";
import homesliderdark6 from "../../assets/Images/homesliderdark6.png";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { DarkModeContext } from "../../Context/DarkModeContext";

export default function AboutSliderSection() {
  const { darkMode } = useContext(DarkModeContext); // جلب حالة Dark Mode

  const carTypes = [
    { img: homeslider1 },
    { img: homeslider2 },
    { img: homeslider3 },
    { img: homeslider4 },
    { img: homeslider5 },
    { img: homeslider6 },
      { img: homeslider1 },
    { img: homeslider2 },
    { img: homeslider3 },
    { img: homeslider4 },
    { img: homeslider5 },
    { img: homeslider6 },
  ];
  const carTypesDark = [
    { img: homesliderdark1 },
    { img: homesliderdark2 },
    { img: homesliderdark3 },
    { img: homesliderdark4 },
    { img: homesliderdark5 },
    { img: homesliderdark6 },
        { img: homesliderdark1 },
    { img: homesliderdark2 },
    { img: homesliderdark3 },
    { img: homesliderdark4 },
    { img: homesliderdark5 },
    { img: homesliderdark6 },
  ];

  // نختار array المناسب حسب حالة Dark Mode
  const slides = darkMode ? carTypesDark : carTypes;

  return (
    <div className="text-center py-10 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          loop={true}
          spaceBetween={100}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 2.8 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
        >
          {slides.map((car, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center">
                <img
                  src={car.img}
                  alt={`car-${idx}`}
                  className="w-32 h-20 sm:w-36 sm:h-24 md:w-40 md:h-28 object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
