import React from 'react'
import imogy from "../../assets/Images/imogy.png"
import time from "../../assets/Images/time.png"
import { FaMapMarkerAlt, FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";

export default function ContactUs() {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <div className="py-22 bg-white dark:bg-gray-900">
        <div className="flex justify-center mb-6">
          <img src={imogy} alt="smail" className="w-10 h-10 object-contain text-center rounded-full" />
        </div>

        <div className='text-center'>
          <h4 className="uppercase text-[#D1B88F] text-[20px] font-semibold">Get in touch</h4>
          <h2 className="text-5xl font-bold mt-2 mb-6 text-gray-900 dark:text-white">
            Contact information
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-lg text-lg mx-auto font-medium mb-22">
            Our company was founded in 1960. We work daily to become better and we are ready to share best practices.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side */}
          <div className="flex flex-col gap-6">
            {/* Head office */}
            <div className="bg-white dark:bg-gray-800 shadow-sm rounded-xl p-12">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Head office</h2>
              <div className="flex items-center gap-3 mb-3 text-gray-700 dark:text-gray-300">
                <FaMapMarkerAlt className="text-[#D1B88F] text-lg" />
                <span>202 Helga Springs Rd, Crawford, TN 38554</span>
              </div>
              <div className="flex items-center gap-3 mb-3 text-gray-700 dark:text-gray-300">
                <FaPhoneAlt className="text-[#D1B88F] text-lg" />
                <span>800.275.8777</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <FaTelegramPlane className="text-[#D1B88F] text-lg" />
                <span>Telegram Support</span>
              </div>
            </div>

            {/* Opening hours */}
            <div className="bg-white dark:bg-gray-800 shadow-sm rounded-xl p-12 text-gray-700 dark:text-gray-300">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Opening hours</h2>
              <ul className="space-y-6">
                <li><span className="font-semibold">Monday:</span> 8:00 – 17:00</li>
                <li><span className="font-semibold">Tuesday:</span> 8:00 – 17:00</li>
                <li><span className="font-semibold">Wednesday:</span> 8:00 – 17:00</li>
                <li><span className="font-semibold">Thursday:</span> 8:00 – 17:00</li>
                <li><span className="font-semibold">Friday:</span> 8:00 – 17:00</li>
                <li><span className="font-semibold">Saturday:</span> 10:00 – 16:00</li>
                <li><span className="font-semibold">Sunday:</span> CLOSED</li>
              </ul>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white dark:bg-gray-800 shadow-sm rounded-xl p-12 text-gray-700 dark:text-gray-300">
            <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Send us a message</h2>
            <form className="flex flex-col gap-4">
              <div>
                <label className="block mb-1">Your name</label>
                <input
                  type="text"
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#D1B88F] dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="block mb-1">Your email</label>
                <input
                  type="email"
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#D1B88F] dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="block mb-1">Your message</label>
                <textarea
                  rows="5"
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#D1B88F] dark:bg-gray-700 dark:text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-max-1 bg-gradient-to-r from-[#D1B88F] to-[#E9DFC9] hover:from-[#33404D] hover:to-[#435260] cursor-pointer hover:text-white py-3 rounded-lg font-bold text-[18px] shadow-lg transition dark:text-gray-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-6 mt-12">
        <img src={time} alt="smail" className="w-10 h-10 object-contain text-center rounded-full" />
      </div>

      <div className='text-center mb-12 dark:mb-0'>
        <h4 className="uppercase text-[#D1B88F] text-[20px] font-semibold">How to get to us</h4>
        <h2 className="text-5xl font-bold mt-2 mb-6 text-gray-900 dark:text-white">Find our store</h2>

        <div className="mb-10 p-8 dark:mb-0 dark:pb-20">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.6169657915743!2d31.35075552382529!3d30.047844918408483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e7c2b423207%3A0x1a6c3486f518f331!2z2YXYudmH2K8g2KfZhNij2YTYs9mGINin2YTZudin2YTZiiDZhNmE2LPZitin2K3YqSDZiNin2YTZgdmG2KfYr9mCINmI2KfZhNit2KfYs9ioINin2YTYo9mE2Yk!5e0!3m2!1sar!2seg!4v1756120510992!5m2!1sar!2seg" 
            width="1100" 
            height="600"  
            className='mx-auto border-0'
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      </div>
    </>
  )
}
