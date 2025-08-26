import React from "react";
import { FaStar, FaRegStar, FaShoppingCart } from "react-icons/fa";
import product1 from "../../assets//Images/product1.png"
import product2 from "../../assets//Images/product2.png"
import product3 from "../../assets//Images/product3.png"
import product4 from "../../assets//Images/product4.png"
import product5 from "../../assets//Images/product5.png"
import product6 from "../../assets//Images/product6.png"
import { Link } from "react-router-dom";
export default function HomeOurproducts() {
  const products = [
    {
      id: 1,
      name: "Mr. Vapo E-liquid 30ml",
      price: "$4.50",
      image: product1, // غيّر المسار حسب صورك
      rating: 1,
    },
    {
      id: 2,
      name: "Starter Kit 1",
      price: "$54.00",
      image: product2,
      rating: 2,
    },
    {
      id: 3,
      name: "Mr. Vapo Pod Kit",
      price: "$267.00",
      image: product3,
      rating: 3,
    },
    {
      id: 4,
      name: "Starter Kit 2",
      price: "$65.00",
      image: product4,
      rating: 4,
    },
    {
      id: 5,
      name: "Mr. Vapo Smoking Device",
      price: "$65.00",
      image: product5,
      rating: 5,
    },
    {
      id: 6,
      name: "Disposable e-cigarette",
      price: "$450.00",
      image: product6,
      rating: 3 ,
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
       <h4 className="uppercase text-[#D1B88F] text-[18px] font-semibold mt-5">Our products</h4>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-5">
          Welcome to our online <br /> vaping store
        </h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-10">
        We offer a wide range of quality products, an easy shopping process,
        express delivery and first-class service.
      </p>

      {/* المنتجات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-60 h-60 object-contain mb-4"
            />
            <h3 className="font-bold text-[20px] text-gray-800">{product.name}</h3>
            <div className="my-2">{renderStars(product.rating)}</div>
            <p className="font-bold text-lg text-[#33404D]">{product.price}</p>
            <button className="mt-4 flex items-center gap-2 border font-semibold border-[#D1B88F] text-[#D1B88F] px-5 py-2 rounded-2xl hover:bg-[#D1B88F] hover:text-white transition">
              <FaShoppingCart /> Add to Cart
            </button>
          </div>
        ))}
      </div>

     
      <div className="mt-10">
        <Link
          to="#"
          className="text-[#D1B88F] font-medium flex items-center justify-center gap-2 hover:underline"
        >
          View all products →
        </Link>
      </div>
    </div>
  );
}
