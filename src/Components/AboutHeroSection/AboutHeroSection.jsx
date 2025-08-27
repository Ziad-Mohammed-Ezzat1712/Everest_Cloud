import React from "react";
import star from "../../assets/Images/star.png";
import abouthero1 from "../../assets/Images/abouthero1.png";
import abouthero2 from "../../assets/Images/abouthero2.png";
import abouthero3 from "../../assets/Images/abouthero3.png";
import { Link } from "react-router-dom";

export default function AboutHeroSection() {
  const services = [
    {
      icon: abouthero1,
      title: "Wide range of e-liquids",
      desc: "Our company cooperates with many popular brands. In our store you will find only original products at the best prices.",
    },
    {
      icon: abouthero2,
      title: "Unique accessories",
      desc: "Our company cooperates with many popular brands. In our store you will find only original products at the best prices.",
    },
    {
      icon: abouthero3,
      title: "Vape repair service",
      desc: "Our company cooperates with many popular brands. In our store you will find only original products at the best prices.",
    },
  ];

  return (
    <div className="w-max-10xl py-20 px-6 text-center bg-gradient-to-r from-[#ffffff] to-[#fff6e3] dark:from-gray-900 dark:to-gray-900 transition-colors duration-500">
      {/* العنوان */}
      <div className="mb-12">
        <div className="flex justify-center mb-2">
          <img src={star} className="w-[50px]" alt="star" />
        </div>
        <h4 className="uppercase text-[#a49575] text-[18px] font-semibold mt-5">
          Our Story
        </h4>
        <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6 text-black dark:text-white">
          About our company
        </h1>
        <p className="text-[18px] font-medium max-w-md md:max-w-xl text-center mx-auto text-gray-600 dark:text-gray-300">
          We offer a wide range of quality products, an easy shopping process,
          express delivery and first-class service.
        </p>
      </div>

      {/* الجريد */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((service, idx) => (
          <Link to="/contact" key={idx}>
            <div className="group p-10 rounded-2xl bg-white dark:bg-gray-800 hover:shadow-2xl transition duration-400 shadow-lg flex flex-col items-center text-center">
              <img src={service.icon} alt="" className="w-[60px]" />
              <h3 className="mt-4 font-bold text-[20px] text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-[16px] text-gray-800 dark:text-gray-300">
                {service.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
