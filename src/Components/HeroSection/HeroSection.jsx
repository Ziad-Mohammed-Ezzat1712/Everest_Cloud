import React from "react";
import home1 from "../../assets/Images/home1.png";

export default function HeroSection() {
  return (
    <section className="">
      <div className="xl:max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        
        {/* Left Side */}
        <div className="space-y-6 xl:text-left text-center">
          <p className="text-[#D1B88F] text-[18px] font-semibold  gap-2">
            ⚡ GET 25% OFF NOW
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-[#33404D] leading-tight">
            Find everything <br /> for vaping
          </h1>
          <p className="text-gray-600 text-lg">
            Our vape shop is not only a variety of vaping products, but also an
            operational support service.
          </p>
          <button className="mt-4 bg-gradient-to-r from-[#D1B88F] to-[#E9DFC9] text-[#33404D] font-bold text-[25px] px-16 py-5 rounded-full shadow-md hover:opacity-90 transition hover:bg-gradient-to-r hover:from-[#33404D] hover:to-[#435260] hover:text-white">
            Shop now
          </button>
        </div>

        {/* Right Side */}
        <div className="flex justify-center relative">
          <div className="bg-[#E9DFC9] rounded-t-full p-8 relative shadow-lg">
  <img
    src={home1}
    alt="Vape Bottle"
    className="xl:w-[350px] w-[200px] mx-auto relative z-10 animate-float"
  />
  {/* Decorative shapes */}

</div>

        </div>
      </div>
    </section>
  );
}
