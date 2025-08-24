import React from "react";
import logo from "../../../public/logo.jpg"
export default function Footer() {
  return (
    <footer className="bg-[#fafafa] pt-16 mt-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6 md:px-12">
        {/* العمود الأول */}
        <div>
           {/* <h2 className="text-xl font-bold mb-4">Wapo</h2> */}
         <img src={logo} alt="logo" className="text-xl font-bold mb-4 w-32 h-22 object-cover rounded-2xl mt-0" />
          <p className="text-gray-600 leading-relaxed">
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
          <p className="text-gray-600">
            202 Helga Springs Rd, Crawford, TN 38554
          </p>
          <p className="mt-3 text-gray-600">
            Call Us: <span className="font-bold">800.275.8777</span>
          </p>
          <p className="mt-2 text-gray-600">alex@company.com</p>
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
              className="w-full md:w-auto flex-1 px-4 py-3 rounded-l-full border border-gray-300 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#D1B88F] to-[#E9DFC9] hover:bg-orange-600 text-white px-6 py-3 rounded-r-full font-semibold"
            >
              Subscribe
            </button>
          </form>
          <p className="text-gray-600 text-sm">
            Sign up with your email address to receive news and updates
          </p>
        </div>
      </div>

      {/* الجزء السفلي */}
      <div className="border-t max-w-7xl mx-auto border-gray-200 mt-12 py-6 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
        <p>Copyright ©2025 Wapo. All rights reserved.</p>
        <ul className="flex gap-6 mt-4 md:mt-0">
          <li><a href="/" className="hover:text-black">Home</a></li>
          <li><a href="#" className="hover:text-black">About Us</a></li>
          <li><a href="#" className="hover:text-black">Our team</a></li>
          <li><a href="#" className="hover:text-black">Shop</a></li>
          <li><a href="#" className="hover:text-black">Blog</a></li>
          <li><a href="#" className="hover:text-black">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
}
