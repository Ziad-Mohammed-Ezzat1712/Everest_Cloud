import React, { useContext } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import testimonials1 from "../../assets/Images/testimonials1.png";
import testimonials2 from "../../assets/Images/testimonials2.png";
import testimonials3 from "../../assets/Images/testimonials3.png";
import smail from "../../assets/Images/smail.png";
import { DarkModeContext } from "../../Context/DarkModeContext";

export default function Testimonials() {
  const { darkMode } = useContext(DarkModeContext);

  const testimonials = [
    { id: 1, name: "Lisa Smith", paragraph: "“Great! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare in felis vel commodo.”", image: testimonials1, rating: 1, job: "Barista" },
    { id: 2, name: "Andrew Jons", paragraph: "“Great! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare in felis vel commodo.”", image: testimonials2, rating: 2, job: "Waiter" },
    { id: 3, name: "Steve Parker", paragraph: "“Great! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare in felis vel commodo.”", image: testimonials3, rating: 3, job: "Project manager" },
  ];

  const renderStars = (rating) => (
    <div className="flex justify-center text-[#D1B88F]">
      {Array.from({ length: 5 }).map((_, i) =>
        i < rating ? <FaStar key={i} /> : <FaRegStar key={i} />
      )}
    </div>
  );

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-b from-white to-[#FFF7F3] text-gray-800"} py-16 px-6 text-center`}>
      {/* الوصف فوق */}
      <div className="flex justify-center">
        <img src={smail} alt="smail" className="w-10 h-10 object-contain text-center rounded-full" />
      </div>
      <h4 className={`${darkMode ? "text-[#D1B88F]" : "text-[#D1B88F]"} uppercase text-[18px] font-semibold mt-5`}>Testimonials</h4>
      <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-5">Hear from our clients</h2>
      <p className={`${darkMode ? "text-gray-300" : "text-gray-500"} max-w-md mx-auto font-medium mb-10`}>
        We offer a wide range of quality products, an easy shopping process, express delivery and first-class service.
      </p>

      {/* Testimonials */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className={`${darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-100"} p-8 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center`}
          >
            <img src={t.image} alt={t.name} className="w-20 h-20 object-contain rounded-full mb-8" />
            <div className="my-2">{renderStars(t.rating)}</div>
            <p className={`${darkMode ? "text-gray-300" : "text-[#33404D]"} font-medium text-lg`}>{t.paragraph}</p>
            <div className="mt-10">
              <h3 className={`${darkMode ? "text-white" : "text-gray-800"} font-bold text-[20px]`}>{t.name}</h3>
              <p className={`${darkMode ? "text-gray-300" : "text-[#33404D]"} text-md`}>{t.job}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
