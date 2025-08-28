import React, { useState } from "react";
import aboutsection21 from "../../assets/Images/aboutsection21.png";
import aboutsection22 from "../../assets/Images/aboutsection22.png";
import aboutsection23 from "../../assets/Images/aboutsection23.png";

export default function AboutSection2() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
    <section className="transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-40">
        {/* Left Side */}
        <div className="space-y-4">
          {/* الصورة الأولى */}
          <div>
            <img
              src={aboutsection21}
              alt="Vape Bottle"
              className="w-full object-cover rounded-lg cursor-pointer transition-transform duration-300 transform hover:scale-105"
              onClick={() => setSelectedImage(aboutsection21)}
            />
          </div>

          {/* الصورتين تحت جنب بعض */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src={aboutsection22}
              alt="Vape Bottle"
              className="w-full object-cover rounded-lg cursor-pointer transition-transform duration-300 transform hover:scale-105"
              onClick={() => setSelectedImage(aboutsection22)}
            />
            <img
              src={aboutsection23}
              alt="Vape Bottle"
              className="w-full object-cover rounded-lg cursor-pointer transition-transform duration-300 transform hover:scale-105"
              onClick={() => setSelectedImage(aboutsection23)}
            />
          </div>

          {/* المودال */}
          {selectedImage && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              {/* خلفية المودال */}
              <div className="absolute inset-0 bg-black opacity-85"></div>

              <div className="relative max-w-4xl w-full p-4">
                {/* زر الإغلاق */}
                <button
                  className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 cursor-pointer text-black dark:text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                  onClick={() => setSelectedImage(null)}
                >
                  ✕
                </button>

                {/* الصورة */}
                <img
                  src={selectedImage}
                  alt="Popup"
                  className="w-full max-h-[80vh] object-contain opacity-100 z-50 rounded-lg shadow-lg"
                />
              </div>
            </div>
          )}
        </div>

        {/* Right Side */}
        <div className="space-y-8 w-max-1 xl:text-left text-center">
          <p className="text-[#D1B88F] text-[18px] font-semibold">
            What We Do
          </p>
          <h1 className="text-4xl font-serif md:text-6xl font-extrabold text-[#33404D] dark:text-white leading-tight">
            Welcome to our <br /> vaping store
          </h1>
          <div>
            <p className="text-gray-600 dark:text-gray-300 text-[18px] font-medium">
              Welcome to our store! There are many electronic cigarettes,
              e-liquids, accessories and vaping accessories in our store. Our
              customers appreciate us for a wide range of products: in our
              network there are products both premium segment and middle and
              budget categories at the same time.
            </p>
          </div>
          <button className="mt-4 cursor-pointer hover:text-white hover:bg-gradient-to-r hover:from-[#33404D] hover:to-[#435260] bg-gradient-to-r from-[#D1B88F] to-[#E9DFC9] dark:bg-gradient-to-r dark:from-[#D1B88F] dark:to-[#E9DFC9] text-[#33404D] dark:text-[#33404D] dark:hover:from-[#33404D] dark:hover:to-[#435260] dark:hover:text-white font-bold text-[25px] px-16 py-5 rounded-full shadow-md hover:opacity-90 transition">
            Shop now
          </button>
        </div>
      </div>
    </section>
    </div>
  );
}
