// src/components/Navbar.jsx
import React, { useState, useContext } from "react";
import logo from "../../../public/logo.jpg";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { DarkModeContext } from "../../Context/DarkModeContext";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (menu) =>
    setOpenDropdown(openDropdown === menu ? null : menu);

  return (
    <div className="bg-white dark:bg-[#1F2937] text-black dark:text-white transition-colors duration-300">
    <nav className="max-w-[1500px] mx-auto bg-white dark:bg-[#1F2937] text-black dark:text-white transition-colors duration-300 w-full relative">
      <div className="flex justify-between items-center mx-auto px-6 lg:px-12 py-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-[100px] h-[54px] rounded-2xl" />
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 items-center">
          <li>
            <NavLink to="/about" className={({ isActive }) =>
              `font-medium px-3 text-[18px] ${isActive ? "text-[#D1B88F]" : ""}`
            }>About Us</NavLink>
          </li>
          <li>
            <NavLink to="/team" className={({ isActive }) =>
              `font-medium px-3 text-[18px] ${isActive ? "text-[#D1B88F]" : ""}`
            }>Our Team</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) =>
              `font-medium px-3 text-[18px] ${isActive ? "text-[#D1B88F]" : ""}`
            }>Contact Us</NavLink>
          </li>

          {/* Online Shop Dropdown */}
          <li className="relative group">
            <button className="font-medium px-3 text-[18px]" onClick={() => toggleDropdown("shop")}>
              Online Shop ▾
            </button>
            {openDropdown === "shop" && (
              <ul className="absolute z-50 top-full left-0 bg-white dark:bg-gray-800 shadow-md rounded-md mt-2 py-2 w-40">
                <li><NavLink to="/shop/shop" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Shop</NavLink></li>
                <li><NavLink to="/shop/login" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">My Account</NavLink></li>
                <li><NavLink to="/shop/cart" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Cart</NavLink></li>
                <li><NavLink to="/shop/checkout" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Checkout</NavLink></li>
              </ul>
            )}
          </li>

          <li>
            <NavLink to="/blog" className={({ isActive }) =>
              `font-medium px-3 text-[18px] ${isActive ? "text-[#D1B88F]" : ""}`
            }>Blog</NavLink>
          </li>

          {/* Buy Now Button */}
          <li>
            <Link to="/contact">
              <button className="border border-[#D1B88F] hover:bg-gradient-to-r hover:from-[#D1B88F] hover:to-[#E9DFC9] px-[22px] py-[9px] rounded-full transition font-semibold">Buy Now</button>
            </Link>
          </li>

          {/* Dark Mode Toggle */}
          <li>
            <button onClick={toggleDarkMode} className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white">
              {darkMode ? <FiSun /> : <FiMoon />}
            </button>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button className="lg:hidden text-black dark:text-white text-2xl" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 text-black dark:text-white absolute top-full left-0 w-full flex flex-col items-start p-5 space-y-4 z-30 shadow-md">
          <NavLink to="/about" className={({ isActive }) =>`font-medium px-3 text-[18px] ${isActive ? "text-[#D1B88F]" : ""}`}>About Us</NavLink>
          <NavLink to="/team" className={({ isActive }) =>`font-medium px-3 text-[18px] ${isActive ? "text-[#D1B88F]" : ""}`}>Our Team</NavLink>
          <NavLink to="/contact" className={({ isActive }) =>`font-medium px-3 text-[18px] ${isActive ? "text-[#D1B88F]" : ""}`}>Contact Us</NavLink>
<NavLink to="/blog" className={({ isActive }) =>`font-medium px-3 text-[18px] ${isActive ? "text-[#D1B88F]" : ""}`}>Blog</NavLink>

          <details className="w-full">
            <summary className="cursor-pointer font-medium px-3 text-[18px] py-2 border-b border-gray-200 dark:border-gray-700">Online Shop</summary>
            <div className="flex flex-col pl-4">
               <NavLink to="/shop/shop" className={({ isActive }) =>`font-medium px-3 text-[18px] ${isActive ? "text-[#D1B88F]" : ""}`}>Shop</NavLink>
                <NavLink to="/shop/login" className={({ isActive }) =>`font-medium px-3 text-[18px] ${isActive ? "text-[#D1B88F]" : ""}`}>My Account</NavLink>
                <NavLink to="/shop/cart" className={({ isActive }) =>`font-medium px-3 text-[18px] ${isActive ? "text-[#D1B88F]" : ""}`}>Cart</NavLink>
                <NavLink to="/shop/checkout" className={({ isActive }) =>`font-medium px-3 text-[18px] ${isActive ? "text-[#D1B88F]" : ""}`}>Checkout</NavLink>
           </div>
          </details>

          <Link to="/contact">
            <button className="border border-[#D1B88F] hover:bg-gradient-to-r hover:from-[#D1B88F] hover:to-[#E9DFC9] px-[22px] py-[9px] rounded-full mt-3">Buy Now</button>
          </Link>

          {/* Dark Mode Toggle */}
          <button onClick={toggleDarkMode} className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white">
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      )}
    </nav>
    </div>
  );
}
