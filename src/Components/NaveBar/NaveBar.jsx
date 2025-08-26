import React, { useState } from "react";
import logo from "../../../public/logo.jpg";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";


export default function NaveBar() {
  const [isOpen, setIsOpen] = useState(false);

  // علشان الدروب داونز
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <>
      <nav className="w-full top-0 right-0 left-0 relative  xl:px-30">
        <div className="flex justify-between items-center mx-auto px-6 lg:px-12 py-4">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="w-[100px] h-[54px] rounded-2xl  " />
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-6 items-center">
      

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `font-medium px-3 text-[18px] ${
                    isActive ? "text-[#D1B88F]" : "text-black"
                  }`
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/team"
                className={({ isActive }) =>
                  `font-medium px-3 text-[18px] ${
                    isActive ? "text-[#D1B88F]" : "text-black"
                  }`
                }
              >
                Our Team
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `font-medium px-3 text-[18px] ${
                    isActive ? "text-[#D1B88F]" : "text-black"
                  }`
                }
              >
                Contact Us
              </NavLink>
            </li>

            {/* Online Shop Dropdown */}
            <li className="relative group">
              <button
                className="font-medium px-3 text-[18px] text-black"
                onClick={() => toggleDropdown("shop")}
              >
                Online Shop ▾
              </button>
              {openDropdown === "shop" && (
                <ul className="absolute z-50 top-full left-0 bg-white shadow-md rounded-md mt-2 py-2 w-40">
                  <li>
                    <NavLink
                      to="/shop/shop"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      shop
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/shop/login"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                       My account
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/shop/cart"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      cart
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/shop/checkout"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Checkout
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>

            {/* Blog Dropdown */}
       <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `font-medium px-3 text-[18px] ${
                    isActive ? "text-[#D1B88F]" : "text-black"
                  }`
                }
              >
                Blog
              </NavLink>
            </li>

            {/* Button */}
            <li>
              <Link to="contact"><button className="border border-[#D1B88F] hover:bg-gradient-to-r hover:from-[#D1B88F] hover:to-[#E9DFC9] cursor-pointer px-[22px] py-[9px] font-semibold rounded-full  transition ">
                Buy Now
              </button></Link>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-black text-2xl"
            onClick={toggleMenu}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white text-black absolute top-full left-0 w-full flex flex-col items-start p-5 space-y-4 z-30 shadow-md">
         

            <NavLink to="/about" className="w-full py-2 border-b border-gray-200">
              About Us
            </NavLink>
            <NavLink to="/team" className="w-full py-2 border-b border-gray-200">
              Our Team
            </NavLink>
            <NavLink
              to="/contact"
              className="w-full py-2 border-b border-gray-200"
            >
              Contact Us
            </NavLink>

            {/* Online Shop Dropdown */}
            <details className="w-full">
              <summary className="cursor-pointer py-2 border-b border-gray-200">
                Online Shop
              </summary>
              <div className="flex flex-col pl-4">
                <NavLink to="/shop/products" className="py-2 border-b border-gray-100">
                  Products
                </NavLink>
                <NavLink to="/shop/cart" className="py-2 border-b border-gray-100">
                  Cart
                </NavLink>
              </div>
            </details>

            {/* Blog Dropdown */}
            <details className="w-full">
              <summary className="cursor-pointer py-2 border-b border-gray-200">
                Blog
              </summary>
              <div className="flex flex-col pl-4">
                <NavLink to="/blog/news" className="py-2 border-b border-gray-100">
                  News
                </NavLink>
                <NavLink to="/blog/articles" className="py-2 border-b border-gray-100">
                  Articles
                </NavLink>
              </div>
            </details>

            {/* Button */}
            <Link to="contact"><button className="border border-[#D1B88F] hover:bg-gradient-to-r hover:from-[#D1B88F] hover:to-[#E9DFC9] cursor-pointer  px-[22px] py-[9px] rounded-full mt-3">
              Buy Now
            </button></Link>
          </div>
        )}
      </nav>
    </>
  );
}
