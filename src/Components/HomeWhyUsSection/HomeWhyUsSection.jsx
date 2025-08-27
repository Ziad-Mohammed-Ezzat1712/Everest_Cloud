import React, { useContext } from "react";
import { DarkModeContext } from "../../Context/DarkModeContext";
import fire from "../../assets/Images/fire.png";
import homecard1 from "../../assets/Images/homecard1.png";
import homecard2 from "../../assets/Images/homecard2.png";
import homecard3 from "../../assets/Images/homecard3.png";
import homecard4 from "../../assets/Images/homecard4.png";
import homecard5 from "../../assets/Images/homecard5.png";
import homecard6 from "../../assets/Images/homecard6.png";

export default function HomeWhyUsSection() {
  const { darkMode } = useContext(DarkModeContext);

  const services = [
    {
      icon: homecard1,
      title: "Wide range of e-liquids",
      desc: "Our company cooperates with many popular brands. In our store you will find only original products at the best prices.",
    },
    {
      icon: homecard2,
      title: "Unique accessories",
      desc: "Our company cooperates with many popular brands. In our store you will find only original products at the best prices.",
    },
    {
      icon: homecard3,
      title: "Vape repair service",
      desc: "Our company cooperates with many popular brands. In our store you will find only original products at the best prices.",
    },
    {
      icon: homecard4,
      title: "Starter kits",
      desc: "Our company cooperates with many popular brands. In our store you will find only original products at the best prices.",
    },
    {
      icon: homecard5,
      title: "Vape tools",
      desc: "Our company cooperates with many popular brands. In our store you will find only original products at the best prices.",
    },
    {
      icon: homecard6,
      title: "Disposable e-cigarettes",
      desc: "Our company cooperates with many popular brands. In our store you will find only original products at the best prices.",
    },
  ];

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-[#33404D] text-white"} w-max-10xl py-25 px-6 text-center`}>
      {/* العنوان */}
      <div className="mb-12">
        <div className="flex justify-center mb-2">
          <img src={fire} className="text-yellow-500 w-[60px]" />
        </div>
        <h4 className={`${darkMode ? "text-[#FFD700]" : "text-[#E9DFC9]"} uppercase text-[18px] font-semibold mt-5`}>
          Why Us
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          We are chosen for the <br /> high level of service
        </h2>
      </div>

      {/* الجريد - 6 كروت */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`${darkMode ? "hover:bg-gray-800" : "hover:bg-gray-700"} group p-10 rounded-2xl hover:shadow-2xl transition duration-400 shadow-lg flex flex-col xl:items-start xl:text-start items-center text-center`}
          >
            <img src={service.icon} alt="" className="w-[60px]" />
            <h3 className="mt-4 font-bold text-[20px]">{service.title}</h3>
            <p className={`${darkMode ? "text-gray-300" : "text-gray-300"} mt-2 text-[16px]`}>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
