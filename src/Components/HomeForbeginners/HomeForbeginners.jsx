import React, { useState } from 'react'
import vapepuff from "../../assets/Images/vapepuff.webp"
import { Link } from "react-router-dom";
import { FiPlay,FiX  } from "react-icons/fi";
export default function HomeForbeginners() {
    const [showVideo, setShowVideo] = useState(false);  
  return (
    
    <div className='pb-30'>
    <section className=" py-6 px-6 md:px-6 flex flex-col xl:flex-row items-center justify-center relative overflow-hidden gap-30 my-12">
       <div className="relative mt-10 md:mt-0">
      <img src={vapepuff} alt="" className="w-[550px] h-[400px] rounded-4xl" />
            {/* الزرار الأساسي */}
      <button
        onClick={() => setShowVideo(true)}
        className="relative flex items-center justify-center"
      >
        {/* دوائر الأنيميشن */}
        <span className="absolute xl:left-[240px] xl:top-[-250px] md:left-[235px] md:top-[-250px] left-[200px] top-[-250px] w-20 h-20 rounded-full bg-[#D1B88F] opacity-40 animate-ping"></span>
        <span className="absolute xl:left-[240px] xl:top-[-250px] md:left-[235px] md:top-[-250px] left-[200px] top-[-250px] w-20 h-20 rounded-full bg-[#D1B88F] opacity-40 animate-ping delay-200"></span>

        {/* الزرار الأساسي */}
        <div className="absolute xl:left-[240px] xl:top-[-250px] md:left-[235px] md:top-[-250px] left-[200px] top-[-250px] bg-[#D1B88F] cursor-pointer text-white hover:bg-white hover:text-black p-6 rounded-full shadow-lg hover:scale-105 transition-transform  z-10">
          <FiPlay size={32} />
        </div>
      </button>

      {/* Overlay الفيديو */}
    {showVideo && (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    {/* الخلفية السوداء عليها بس الأوباسيتي */}
    <div className="absolute inset-0 bg-black opacity-90"></div>

    {/* زرار الإغلاق */}
    <button
      onClick={() => setShowVideo(false)}
      className="absolute top-5 right-5 text-white text-3xl hover:text-red-500 z-50"
    >
      <FiX />
    </button>

    {/* الفيديو */}
    <div className="relative w-[90%] md:w-[70%] lg:w-[60%] aspect-video z-50">
      <iframe
        className="w-full h-full rounded-lg shadow-lg"
        src="https://www.youtube.com/embed/zjtegz4JwMY?autoplay=1"
        title="YouTube video"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  </div>
)}

      </div>

   
     {/* Text Section */}
      <div className="max-w-xl space-y-4 xl:items-start xl:text-start items-center text-center">
        <p className="text-[#D1B88F] font-bold text-[18px] uppercase tracking-widest">
          For beginners
        </p>
        <h2 className="text-[40px] font-bold font-serif ">
          Watch our beginners <br /> guide
        </h2>
        <p className="text-gray-500 font-medium text-[18px] ">
          Welcome to our store! There are many electronic cigarettes, e-liquids, accessories and vaping accessories in our store. Our customers appreciate us for a wide range of products: in our network there are products both premium segment and middle and budget categories at the same time.
        </p>
        <Link
          href="#"
          className="text-[#D1B88F] text-[20px] font-semibold inline-block border-b-2 border-[#D1B88F] hover:text-[#E9DFC9] hover:border-[#E9DFC9] transition"
        >
          Learn more
        </Link>
      </div>
    </section>
    <section className="w-full  ">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 text-center">
    {/* Countries */}
    <div className='  '>
      <h3 className="text-[120px] font-bold text-gray-300 ">95</h3>
      <p className="text-4xl font-semibold text-[#33404D] -mt-28">Countries</p>
    </div>

    {/* Shops */}
    <div className=' ' >
      <h3 className="text-[100px] font-bold text-gray-300 "><span className='text-[120px] font-bold text-gray-300'>5</span><span className=''>0</span></h3>
      <p className="text-4xl font-semibold text-[#33404D] -mt-28">Shops</p>
    </div>

    {/* Years */}
    <div className=' '>
      <h3 className="text-[120px] font-bold text-gray-300 ">10</h3>
      <p className="text-4xl font-semibold text-[#33404D] -mt-28">Years</p>
    </div>

    {/* Partners */}
    <div >
      <h3 className="text-[100px] font-bold text-gray-300 "><span className='text-[120px] font-bold text-gray-300'>4</span>0</h3>
      <p className="text-4xl font-semibold text-[#33404D] -mt-28">Partners</p>
    </div>
  </div>
</section>
</div>
  );
}
