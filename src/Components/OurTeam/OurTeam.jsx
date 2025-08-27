import React from "react";
import smail from "../../assets/Images/smail.png";
import ourteam1 from "../../assets/Images/ourteam1.png";
import ourteam2 from "../../assets/Images/ourteam2.png";
import ourteam3 from "../../assets/Images/ourteam3.png";
import ourteam4 from "../../assets/Images/ourteam4.png";
import ourteam5 from "../../assets/Images/ourteam5.png";
import ourteam6 from "../../assets/Images/ourteam6.png";
import ourteam7 from "../../assets/Images/ourteam7.png";
import ourteam8 from "../../assets/Images/ourteam8.png";
import ourteam9 from "../../assets/Images/ourteam9.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function OurTeam() {
  const ourteam = [
    { id: 1, name: "Max Kent", image: ourteam1, job: "Salesman" },
    { id: 2, name: "Moira Anderson", image: ourteam2, job: "Founder and CEO" },
    { id: 3, name: "Jeremy Gold", image: ourteam3, job: "Senior Consultant" },
    { id: 4, name: "Peter Green", image: ourteam4, job: "Senior Consultant" },
    { id: 5, name: "Kate Watson", image: ourteam5, job: "Marketing manager" },
    { id: 6, name: "Jacob Adams", image: ourteam6, job: "Senior Consultant" },
    { id: 7, name: "Rita Griffin", image: ourteam7, job: "Accountant" },
    { id: 8, name: "Paul Jin", image: ourteam8, job: "Supply manager" },
    { id: 9, name: "Greta Martins", image: ourteam9, job: "Product manager" },
  ];

  return (
    <div className="py-20 text-center bg-white dark:bg-gray-900 transition-colors duration-500">
      {/* العنوان */}
      <div className="flex justify-center mb-6">
        <img
          src={smail}
          alt="smail"
          className="w-10 h-10 object-contain rounded-full"
        />
      </div>
      <h4 className="uppercase text-[#D1B88F] text-[20px] font-semibold">
        Our Team
      </h4>
      <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-gray-900 dark:text-white">
        Meet our vaping experts
      </h2>
      <p className="text-gray-700 dark:text-gray-300 max-w-xl text-lg mx-auto font-medium mb-16">
        Our company was founded in 1960. We work daily to become better and we
        are ready to share best practices.
      </p>

      {/* الفريق */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {ourteam.map((ourteams) => (
          <div
            key={ourteams.id}
            className="transition flex flex-col items-center text-center"
          >
            <img
              src={ourteams.image}
              alt={ourteams.name}
              className="w-[290px] h-[292px] object-cover rounded-full shadow-md"
            />
            <div className="mt-4">
              <h3 className="font-bold text-[22px] text-gray-900 dark:text-white">
                {ourteams.name}
              </h3>
              <p className="text-md font-medium mt-2 text-gray-600 dark:text-gray-400">
                {ourteams.job}
              </p>
            </div>

            {/* أيقونات السوشيال */}
            <div className="flex gap-5 justify-center items-center mt-4">
              <Link
                to=""
                aria-label="Facebook"
                className="bg-black dark:bg-gray-700 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#33404D] hover:dark:bg-black transition"
              >
                <FaFacebookF size={18} />
              </Link>
              <Link
                to=""
                aria-label="Twitter"
                className="bg-black dark:bg-gray-700 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#33404D] hover:dark:bg-black transition"
              >
                <FaTwitter size={18} />
              </Link>
              <Link
                to=""
                aria-label="Instagram"
                className="bg-black dark:bg-gray-700 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#33404D] hover:dark:bg-black  transition"
              >
                <FaInstagram size={18} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
