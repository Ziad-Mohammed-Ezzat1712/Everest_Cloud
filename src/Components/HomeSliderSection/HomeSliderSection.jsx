import React from "react";
import homeslider1 from "../../assets/Images/homeslider1.png";
import homeslider2 from "../../assets/Images/homeslider2.png";
import homeslider3 from "../../assets/Images/homeslider3.png";
import homeslider4 from "../../assets/Images/homeslider4.png";
import homeslider5 from "../../assets/Images/homeslider5.png";
import homeslider6 from "../../assets/Images/homeslider6.png";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function HomeSliderSection() {
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

  return (
    <div className="text-center py-10 ">
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
            1280: { slidesPerView: 6 },
          }}
        >
          {carTypes.map((car, idx) => (
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
