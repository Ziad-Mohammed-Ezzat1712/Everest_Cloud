import { useState } from "react";
import { Link } from "react-router-dom";

import blog1 from "../../assets/Images/blog1.png";
import blog2 from "../../assets/Images/blog2.png";
import blog3 from "../../assets/Images/blog3.png";
import blog4 from "../../assets/Images/blog4.png";
import blog5 from "../../assets/Images/blog5.png";
import blog6 from "../../assets/Images/blog6.png";
import blog7 from "../../assets/Images/blog7.png";
import blog8 from "../../assets/Images/blog8.png";
import blog9 from "../../assets/Images/blog9.png";
import blog10 from "../../assets/Images/blog10.png";
import blog11 from "../../assets/Images/blog11.png";
import blog12 from "../../assets/Images/blog12.png";


const blogPosts = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  title: [
    "Vaping Green Tea Oil to Burn Fat and Detoxify",
    "How to Choose the Right Vaporizer",
    "Guide to Best Pods",
    "Is it OK to Run if You Vape?",
  ][i % 4],
  desc:
    "Donec vel pellentesque nisl, molestie tempus ligula. Cras massa turpis, pretium nec placerat ornare.",
img: [
  blog1,
  blog2,
  blog3,
  blog4,
  blog5,
  blog6,
  blog7,
  blog8,
  blog9,
  blog10,
  blog11,
  blog12,
][i % 12],

}));

export default function Blog() {
  const postsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  return (
    <div className=" min-h-screen py-10 px-4">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-[#33404D]">Blog </h1>
        <div className="mt-10 text-sm text-[#33404D]">
          <span className="bg-gradient-to-r from-[#D1B88F] to-[#E9DFC9]  text-[#33404D] px-2 py-1 rounded-full text-lg font-semibold">
          Everest Cloud
          </span>
          <span className="ml-2 text-lg font-semibold">{">"} BLOG </span>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {currentPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl overflow-hidden shadow-md"
          >
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-80 object-cover"
            />
            <div className="p-5">
              <h3 className="font-bold text-xl text-[#33404D]-800 mb-2">
                {post.title}
              </h3>
              <p className="text-[#33404D] text-md font-medium mb-4">{post.desc}</p>
              <Link to={`/blog/${post.id}`} className="hover:bg-gradient-to-r hover:from-[#D1B88F] hover:to-[#E9DFC9] hover:text-[#33404D] text-[#D1B88F] border border-[#D1B88F] font-semibold px-4 py-2 rounded-2xl cursor-pointer text-md hover:bg-orange-50 transition">
  Read more
</Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-10 flex justify-center space-x-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`w-9 h-9 rounded-md border text-sm font-medium ${
              currentPage === i + 1
                ? "bg-[#D1B88F] text-white"
                : "text-[#33404D]-700 hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
