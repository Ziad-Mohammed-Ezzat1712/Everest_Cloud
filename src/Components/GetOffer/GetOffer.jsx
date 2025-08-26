import React from "react";
import homeget from "../../assets/Images/homeget.png";
import { Link } from "react-router-dom";
export default function GetOffer() {
  return (
    <section className="bg-[#33404D]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-40">
        
        {/* Left Side */}
        <div className="flex justify-center relative">
          <img
              src={homeget}
              alt="Vape Bottle"
              className=" animate-float"
            />
        </div>

        {/* Right Side */}
        <div className="space-y-4  xl:text-left text-center">
        
          <h1 className=" font-serif text-4xl font-extrabold text-white leading-tight">
            Get 25% off for your <br /> first order
          </h1>
          <div className="">
            <p className="text-white text-[18px] font-medium">
              Our vape shop is not only a variety of vaping products, but also an operational support service.
            </p>
          </div>
          <Link to="/shop/shop">
          <button className="mt-4 bg-gradient-to-r from-[#D1B88F] to-[#E9DFC9] text-[#33404D] font-bold text-[25px] px-16 py-5 rounded-full shadow-md hover:opacity-90 transition hover:bg-gradient-to-r hover:from-[#E9DFC9] hover:to-[#D1B88F]  cursor-pointer  ">
            Go to Shop
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
