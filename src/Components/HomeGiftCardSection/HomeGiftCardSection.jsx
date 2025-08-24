import React from "react";
import giftCard from "../../assets/Images/giftCard.png"
import { Link } from "react-router-dom";
const GiftCardSection = () => {
  return (
    <section className="bg-[#33404D] text-white py-6 px-6 md:px-6 flex flex-col md:flex-row items-center justify-center relative overflow-hidden">
      {/* Text Section */}
      <div className="max-w-xl space-y-4 xl:items-start xl:text-start items-center text-center">
        <p className="text-[#D1B88F] font-bold text-[18px] uppercase tracking-widest">
          Gift Cards
        </p>
        <h2 className="text-[40px] font-bold ">
          Give vapes to your <br /> vape lovers
        </h2>
        <p className="text-gray-300 font-medium text-[18px] ">
          Our company cooperates with many popular brands. In our store you will
          find only original products at the best prices.
        </p>
        <Link
          href="#"
          className="text-[#D1B88F] text-[20px] font-semibold inline-block border-b-2 border-[#D1B88F] hover:text-[#E9DFC9] hover:border-[#E9DFC9] transition"
        >
          Learn more
        </Link>
      </div>

      {/* Cards Section */}
      <div className="relative mt-10 md:mt-0">
      <img src={giftCard} alt="" className="w-[450px] h-[450px] animate-float" />
      </div>
    </section>
  );
};

export default GiftCardSection;
