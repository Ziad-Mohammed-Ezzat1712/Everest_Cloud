import React from "react";

import ourteam1 from "../../assets//Images/ourteam1.png"
import ourteam2 from "../../assets//Images/ourteam2.png"
import ourteam3 from "../../assets//Images/ourteam3.png"
import aboutgrid1 from "../../assets//Images/aboutgrid1.png"
import aboutgrid2 from "../../assets//Images/aboutgrid2.png"
import aboutgrid3 from "../../assets//Images/aboutgrid3.png"
import aboutgrid4 from "../../assets//Images/aboutgrid4.png"
import { Link } from "react-router-dom";


export default function AboutOurTeam() {
  const ourteam = [
    {
      id: 1,
      name: "Max Kent",       
      image: ourteam1,
      job:"Salesman"
    },
    {
      id: 2,
      name: "Moira Anderson",
      image: ourteam2,
      job:"Founder and CEO"
    },
    {
      id: 3,
      name: "Jeremy Gold",
       image: ourteam3,
      job:"Senior Consultant"
    },
    
  ];

  return (
<>
 <div className="bg-gradient-to-r from-[#33404D] to-[#29323b] dark:from-gray-900 dark:to-gray-800 py-22  text-center">
  <h4 className="uppercase text-[#D1B88F] dark:text-[#D1B88F] text-[20px] font-semibold">our team</h4>
  <h2 className="text-6xl text-white dark:text-white font-bold mt-2 mb-10">
    Meet our vaping experts
  </h2>
  <p className="text-gray-300 dark:text-gray-300 max-w-lg text-lg mx-auto font-medium mb-22">
    Our company was founded in 1960. We work daily to become better and we are ready to share best practices.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto space-y-8">
    {ourteam.map((ourteams) => (
      <div key={ourteams.id} className="transition flex flex-col items-center">
        <img
          src={ourteams.image}
          alt={ourteams.name}
          className="w-[290px] h-[292px] object-contain rounded-full mb-4"
        />
        <div className="mt-10">
          <h3 className="font-bold text-white dark:text-white text-[25px]">{ourteams.name}</h3>
          <p className="text-md text-white dark:text-gray-300 font-medium mt-3">{ourteams.job}</p>
        </div>
      </div>
    ))}
  </div>

  <div className="mt-10">
    <Link
      to="#"
      className="text-[#D1B88F] dark:text-[#D1B88F] text-[25px] font-semibold flex items-center justify-center gap-2 hover:text-white dark:hover:text-white transition"
    >
      View all Team →
    </Link>
  </div>
</div>
<div className="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
  <img src={aboutgrid1} alt="" className="xl:h-[80%] w-full object-cover" />
  <img src={aboutgrid2} alt="" className="xl:h-[80%] w-full object-cover" />
  <img src={aboutgrid3} alt="" className="xl:h-[80%] w-full object-cover" />
  <img src={aboutgrid4} alt="" className="xl:h-[80%] w-full object-cover" />
</div>
</div>

    </>
  );
}
