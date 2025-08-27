
import React, { useState, useContext } from 'react';
import vapepuff from "../../assets/Images/vapepuff.webp";
import { Link } from "react-router-dom";
import { FiPlay, FiX } from "react-icons/fi";
import { DarkModeContext } from "../../Context/DarkModeContext";

export default function AboutForbeginners() {
  const [showVideo, setShowVideo] = useState(false);
  const { darkMode } = useContext(DarkModeContext);

  return (
         <div className="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"} pb-30`}>
      <section className="py-6 px-6 md:px-6 flex flex-col xl:flex-row items-center justify-center relative overflow-hidden gap-30 my-12 dark:py-12 dark:my-0">
        <div className="relative mt-10 md:mt-0">
          <img src={vapepuff} alt="" className="w-[550px] h-[400px] rounded-4xl" />

          {/* الزرار الأساسي */}
          <button
            onClick={() => setShowVideo(true)}
            className="relative flex items-center justify-center"
          >
            {/* دوائر الأنيميشن */}
            <span className="absolute xl:left-[240px] xl:top-[-250px] md:left-[235px] md:top-[-250px] sm:left-[225px] sm:top-[-220px] left-[130px] top-[-210px] w-20 h-20 rounded-full bg-[#D1B88F] opacity-40 animate-ping"></span>
            <span className="absolute xl:left-[240px] xl:top-[-250px] md:left-[235px] md:top-[-250px] sm:left-[225px] sm:top-[-220px] left-[130px] top-[-210px] w-20 h-20 rounded-full bg-[#D1B88F] opacity-40 animate-ping delay-200"></span>

            <div className="absolute xl:left-[240px] xl:top-[-250px] md:left-[235px] md:top-[-250px] sm:left-[225px] sm:top-[-220px] left-[130px] top-[-210px] bg-[#D1B88F] cursor-pointer text-white hover:bg-white hover:text-black p-6 rounded-full shadow-lg hover:scale-105 transition-transform  z-10">
              <FiPlay size={32} />
            </div>
          </button>

          {/* Overlay الفيديو */}
          {showVideo && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="absolute inset-0 bg-black opacity-90"></div>
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-5 right-5 text-white text-3xl hover:text-red-500 z-50"
              >
                <FiX />
              </button>
              <div className="relative w-[90%] md:w-[70%] lg:w-[60%] aspect-video z-50">
                <iframe
                  className="w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/zjtegz4JwMY?autoplay=1"
                  title="YouTube video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>

        {/* Text Section */}
        <div className="max-w-xl space-y-4 xl:items-start xl:text-start items-center text-center">
          <p className={`${darkMode ? "text-[#D1B88F]" : "text-[#D1B88F]"} font-bold text-[18px] uppercase tracking-widest`}>
            For beginners
          </p>
          <h2 className="text-[40px] font-bold font-serif">
            Watch our beginners <br /> guide
          </h2>
          <p className={`${darkMode ? "text-gray-300" : "text-gray-500"} font-medium text-[18px]`}>
            Welcome to our store! There are many electronic cigarettes, e-liquids, accessories and vaping accessories in our store. Our customers appreciate us for a wide range of products: in our network there are products both premium segment and middle and budget categories at the same time.
          </p>
          <Link
            to="/contact"
            className={`${darkMode ? "text-[#D1B88F] border-[#D1B88F] hover:text-[#E9DFC9] hover:border-[#E9DFC9]" : "text-[#D1B88F] border-[#D1B88F] hover:text-[#E9DFC9] hover:border-[#E9DFC9]"} text-[20px] font-semibold inline-block border-b-2 transition`}
          >
            Learn more
          </Link>
        </div>
      </section>

      <section className="w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 text-center">
          {/* Countries */}
          <div>
            <h3 className="text-[120px] font-bold text-gray-300">95</h3>
            <p className={`${darkMode ? "text-black" : "text-[#33404D]"} text-4xl font-bold -mt-28`}>Countries</p>
          </div>
          {/* Shops */}
          <div>
            <h3 className="text-[100px] font-bold text-gray-300">
              <span className="text-[120px] font-bold text-gray-300">5</span>0
            </h3>
            <p className={`${darkMode ? "text-black" : "text-[#33404D]"} text-4xl font-bold -mt-28`}>Shops</p>
          </div>
          {/* Years */}
          <div>
            <h3 className="text-[120px] font-bold text-gray-300">10</h3>
            <p className={`${darkMode ? "text-black" : "text-[#33404D]"} text-4xl font-bold -mt-28`}>Years</p>
          </div>
          {/* Partners */}
          <div>
            <h3 className="text-[100px] font-bold text-gray-300">
              <span className="text-[120px] font-bold text-gray-300">4</span>0
            </h3>
            <p className={`${darkMode ? "text-black" : "text-[#33404D]"} text-4xl font-bold -mt-28`}>Partners</p>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}
