import React from "react";
import home2 from "../../assets/Images/home2.png";
import { Link } from "react-router-dom";
export default function HomeSection3() {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-40">
        
        {/* Left Side */}
        <div className="flex justify-center relative">
          {/* Background shape ثابت */}
          <div className="bg-[#E9DFC9] rounded-t-full w-[300px] xl:h-[600px]  h-[500px] relative shadow-lg overflow-visible">
            {/* الصورة فوق الخلفية */}
            
          </div>
          <img
              src={home2}
              alt="Vape Bottle"
              className="absolute xl:top-[60px] xl:left-1 xl:w-[700px] xl:h-[600px] top-[40px] left-1    z-10 animate-float"
            />
        </div>

        {/* Right Side */}
        <div className="space-y-8 w-max-1 xl:text-left text-center">
          <p className="text-[#D1B88F] text-[18px] font-semibold  items-center gap-2">
            What We Do
          </p>
          <h1 className="text-4xl font-serif md:text-6xl font-extrabold text-[#33404D] leading-tight">
            Welcome to our <br /> vaping store
          </h1>
          <div className="">
            <p className="text-gray-600 text-[18px] font-medium">
              Welcome to our store! There are many electronic cigarettes,
              e-liquids, accessories and vaping accessories in our store. Our
              customers appreciate us for a wide range of products: in our
              network there are products both premium segment and middle and
              budget categories at the same time.
            </p>
          </div>
           <Link to="/shop/shop">
          <button className="mt-4 bg-gradient-to-r from-[#D1B88F] to-[#E9DFC9] text-[#33404D] font-bold text-[25px] px-16 py-5 rounded-full shadow-md hover:opacity-90 transition hover:bg-gradient-to-r hover:from-[#33404D] hover:to-[#435260] hover:text-white">
            Shop now
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
