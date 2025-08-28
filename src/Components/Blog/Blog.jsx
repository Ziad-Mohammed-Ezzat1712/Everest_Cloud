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
    <div className="min-h-screen py-10 px-4 dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-[#33404D] dark:text-white">
          Blog
        </h1>
        <div className="mt-10 text-sm text-[#33404D] dark:text-gray-300">
          <span className="bg-gradient-to-r from-[#D1B88F] to-[#E9DFC9] text-[#33404D] dark:text-gray-900 px-2 py-1 rounded-full text-lg font-semibold">
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
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md transition-colors duration-300"
          >
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-80 object-cover"
            />
            <div className="p-5">
              <h3 className="font-bold text-xl text-[#33404D] dark:text-white mb-2">
                {post.title}
              </h3>
              <p className="text-[#33404D] dark:text-gray-300 text-md font-medium mb-4">
                {post.desc}
              </p>
              <Link
                to={`/blog/${post.id}`}
                className="hover:bg-gradient-to-r hover:from-[#D1B88F] hover:to-[#E9DFC9] hover:text-[#33404D] text-[#D1B88F] border border-[#D1B88F] font-semibold px-4 py-2 rounded-2xl cursor-pointer text-md transition dark:hover:from-[#33404D] dark:hover:to-[#435260] dark:hover:text-white"
              >
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
            className={`w-9 h-9 rounded-md border text-sm font-medium transition ${
              currentPage === i + 1
                ? "bg-[#D1B88F] text-white"
                : "text-[#33404D] dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
