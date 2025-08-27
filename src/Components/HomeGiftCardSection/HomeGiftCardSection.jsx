import React, { useContext } from "react";
import giftCard from "../../assets/Images/giftCard.png";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../Context/DarkModeContext";

const GiftCardSection = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
<div className="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
    <section className={`${darkMode ? "bg-gray-900 text-white" : "bg-[#33404D] text-white"} py-6 px-6 md:px-6 flex flex-col md:flex-row items-center justify-center relative overflow-hidden`}>
      {/* Text Section */}
      <div className="max-w-xl space-y-4 xl:items-start xl:text-start items-center text-center">
        <p className={`${darkMode ? "text-[#D1B88F]" : "text-[#D1B88F]"} font-bold text-[18px] uppercase tracking-widest`}>
          Gift Cards
        </p>
        <h2 className="text-[40px] font-bold">
          Give vapes to your <br /> vape lovers
        </h2>
        <p className={`${darkMode ? "text-gray-300" : "text-gray-300"} font-medium text-[18px]`}>
          Our company cooperates with many popular brands. In our store you will
          find only original products at the best prices.
        </p>
        <Link
          to="/contact"
          className={`${darkMode ? "text-[#D1B88F] border-[#D1B88F] hover:text-[#E9DFC9] hover:border-[#E9DFC9]" : "text-[#D1B88F] border-[#D1B88F] hover:text-[#E9DFC9] hover:border-[#E9DFC9]"} text-[20px] font-semibold inline-block border-b-2 transition`}
        >
          Learn more
        </Link>
      </div>

      {/* Cards Section */}
      <div className="relative mt-10 md:mt-0">
        <img src={giftCard} alt="" className="w-[450px] h-[450px] animate-float" />
      </div>
    </section>
    </div>
  );
};

export default GiftCardSection;
