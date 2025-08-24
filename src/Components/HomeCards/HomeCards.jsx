import React from "react";
import iconhome1 from "../../assets/Images/iconhome1.png";
import iconhome2 from "../../assets/Images/iconhome2.png";
import iconhome3 from "../../assets/Images/iconhome3.png";
const cards = [
  {
    id: 1,
    image: iconhome1,
    title: "Top quality products",
    text: "We offer a wide range of quality vaping products",
  },
  {
    id: 2,
    image: iconhome2,
    title: "Secure payment",
    text: "Many options for convenient and secure payment methods ",
  },
  {
    id: 3,
    image: iconhome3,
    title: "Fast delivery",
    text: "We only work with the best delivery services on the market",
  },
];

export default function HomeCards() {
  return (
    <div className="max-w-7xl container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex items-start w-max-1 rounded-2xl p-4"
          >
            {/* الصورة */}
            <img
              src={card.image}
              alt={card.title}
              className="w-[60px] h-[60px] p-3 object-cover rounded-lg mr-4"
            />
            {/* النص */}
            <div>
              <h2 className="text-[20px] font-bold mb-2 ">{card.title}</h2>
              <p className="text-gray-600 font-medium text-[16px]">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

