import React from "react";
import { FaStar, FaRegStar, FaShoppingCart } from "react-icons/fa";
import testimonials1 from "../../assets//Images/testimonials1.png"
import testimonials2 from "../../assets//Images/testimonials2.png"
import testimonials3 from "../../assets//Images/testimonials3.png"
import smail from "../../assets//Images/smail.png"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Lisa Smith",
       paragraph: "“Great! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare in felis vel commodo.”",
      image: testimonials1, // غيّر المسار حسب صورك
      rating: 1,
      job:"Barista"
    },
    {
      id: 2,
      name: "Andrew Jons",
      paragraph: "“Great! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare in felis vel commodo.”",
      image: testimonials2,
      rating: 2,
      job:"Waiter"
    },
    {
      id: 3,
      name: "Steve Parker",
      paragraph: "“Great! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare in felis vel commodo.”",
      image: testimonials3,
      rating: 3,
      job:"Project manager"
    },
    
  ];

  // Component render stars
  const renderStars = (rating) => {
    return (
      <div className="flex justify-center text-[#D1B88F]">
        {Array.from({ length: 5 }).map((_, i) =>
          i < rating ? <FaStar key={i} /> : <FaRegStar key={i} />
        )}
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-b from-white to-[#FFF7F3] py-16 px-6 text-center">
      {/* الوصف فوق */}
      <div className="flex justify-center"><img src={smail} alt="smail" className="w-10 h-10 object-contain text-center  rounded-full " /></div>
       <h4 className="uppercase text-[#D1B88F] text-[18px] font-semibold mt-5">Testimonials</h4>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-5">
          Hear from our clients
        </h2>
      <p className="text-gray-500 max-w-md mx-auto font-medium mb-10">
       We offer a wide range of quality products, an easy shopping process, express delivery and first-class service.
      </p>

      {/* المنتجات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 object-contain rounded-full mb-8"
            />
            <div className="my-2">{renderStars(testimonial.rating)}</div>
            <p className="font-medium text-lg text-[#33404D]">{testimonial.paragraph}</p>
           <div className="mt-10"> <h3 className="font-bold text-[20px] text-gray-800">{testimonial.name}</h3>
            <p className="text-md text-[#33404D]">{testimonial.job}</p></div>
            
            

          </div>
        ))}
      </div>

   
    </div>
  );
}
