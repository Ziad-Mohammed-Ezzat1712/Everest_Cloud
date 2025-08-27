import React, { useContext } from "react";
import logo from "../../../public/logo.jpg";
import { DarkModeContext } from "../../Context/DarkModeContext";

export default function Footer() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <footer
      className={`pt-16 mt-0 ${
        darkMode ? "bg-[#1F2937] text-gray-300" : "bg-[#fafafa] text-gray-600"
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6 md:px-12">
        {/* العمود الأول */}
        <div>
          <img
            src={logo}
            alt="logo"
            className="text-xl font-bold mb-4 w-32 h-22 object-cover rounded-2xl mt-0"
          />
          <p
            className={`leading-relaxed ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Reinventing the way of creating websites, we aim to create the most
            master-peaced WordPress theme available on the market.
          </p>
        </div>

        {/* العمود الثاني */}
        <div>
          <h3 className="text-lg font-semibold mb-4 relative">
            <span className="absolute left-[-12px] top-2 w-1 h-4 bg-[#D1B88F]"></span>
            Contact Us
          </h3>
          <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
            202 Helga Springs Rd, Crawford, TN 38554
          </p>
          <p className={`mt-3 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            Call Us: <span className="font-bold">800.275.8777</span>
          </p>
          <p className={`mt-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            alex@company.com
          </p>
        </div>

        {/* العمود الثالث */}
        <div>
          <h3 className="text-lg font-semibold mb-4 relative">
            <span className="absolute left-[-12px] top-2 w-1 h-4 bg-[#D1B88F]"></span>
            Sign Up for Email Updates
          </h3>
          <form className="flex items-center mb-3">
            <input
              type="email"
              placeholder="Your e-mail address"
              className={`w-full md:w-auto flex-1 px-4 py-3 rounded-l-full border focus:outline-none ${
                darkMode
                  ? "bg-[#374151] border-gray-600 text-white placeholder-gray-400"
                  : "border-gray-300 text-gray-700"
              }`}
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#D1B88F] text-[#33404D] to-[#E9DFC9] hover:opacity-90 px-6 py-3 rounded-r-full font-semibold cursor-pointer transition"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm">
            Sign up with your email address to receive news and updates
          </p>
        </div>
      </div>

      {/* الجزء السفلي */}
      <div
        className={`border-t max-w-7xl mx-auto mt-12 py-6 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between text-sm ${
          darkMode ? "border-gray-700 text-gray-400" : "border-gray-200 text-gray-600"
        }`}
      >
        <p>Copyright ©2025 Wapo. All rights reserved.</p>
        <ul className="flex gap-6 mt-4 md:mt-0">
          <li>
            <a href="/" className="hover:text-[#D1B88F]">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-[#D1B88F]">
              About Us
            </a>
          </li>
          <li>
            <a href="/team" className="hover:text-[#D1B88F]">
              Our team
            </a>
          </li>
          <li>
            <a href="/shop/shop" className="hover:text-[#D1B88F]">
              Shop
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#D1B88F]">
              Blog
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-[#D1B88F]">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
