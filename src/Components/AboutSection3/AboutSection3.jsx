import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function AboutSection3() {
  const { ref, inView } = useInView({
    triggerOnce: true, // يشتغل مرة واحدة بس
    threshold: 0.3, // يبدأ لما 30% من العنصر يظهر
  });

  return (
          <div className="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
    <div
      ref={ref}
      className="w-[75%] mx-auto flex flex-col md:flex-row items-center justify-around text-center gap-12 p-12 
                 bg-white dark:bg-gray-900 rounded-2xl shadow-lg transition-colors duration-500"
    >
      <div>
        <h1 className="text-5xl font-bold text-[#33404D] dark:text-white">
          {inView ? <CountUp start={0} end={8000} duration={3} suffix="k" /> : "0"}
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          E-liquids sold last month
        </p>
      </div>

      <div>
        <h1 className="text-5xl font-bold text-[#33404D] dark:text-white">
          {inView ? <CountUp start={0} end={50} duration={3} /> : "0"}
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Shops around the world
        </p>
      </div>

      <div>
        <h1 className="text-5xl font-bold text-[#33404D] dark:text-white">
          {inView ? <CountUp start={0} end={10} duration={3} /> : "0"}
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Years of experience
        </p>
      </div>
    </div>
    </div>
  );
}
