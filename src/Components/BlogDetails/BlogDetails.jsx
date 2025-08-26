import { useParams, useNavigate } from "react-router-dom";
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

const images = [blog1, blog2, blog3, blog4, blog5, blog6, blog7, blog8, blog9, blog10, blog11, blog12];

const blogPosts = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  title: [
    "Vaping Green Tea Oil to Burn Fat and Detoxify",
    "How to Choose the Right Vaporizer",
    "Guide to Best Pods",
    "Is it OK to Run if You Vape?",
  ][i % 4],
  content: `Donec vel pellentesque nisl, molestie tempus ligula. Cras massa turpis, pretium nec placerat ornare, sodales ac urna. Sed commodo semper fermentum. Phasellus bibendum lorem nisi, et efficitur sapien dapibus sed. Suspendisse iaculis erat ut enim tincidunt, vitae bibendum lorem mattis. Quisque sed nunc quis nisi aliquam dictum at ac velit. Suspendisse orci nunc, condimentum sit amet lobortis et, maximus ac eros. Curabitur sit amet purus eget leo hendrerit rhoncus a sit amet massa. Aliquam sed posuere ex. Sed maximus sapien ac tortor consequat, non malesuada urna commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer pharetra scelerisque luctus. Integer sed aliquam est.  `,
  img: images[i % 12],
}));

export default function BlogDetails() {

  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <div className="text-center mt-20 text-red-500">Post not found</div>;
  }

  return (
  <div className="max-w-7xl mx-auto py-10 px-4">
    {/* Header */}
    
<div className="text-center mb-10">
      <h1 className="text-3xl font-bold text-[#33404D]">{post.title}</h1>
      <div className="mt-10 text-sm text-[#33404D]">
        <span className="bg-gradient-to-r from-[#D1B88F] to-[#E9DFC9] text-[#33404D] px-2 py-1 rounded-full text-lg font-semibold">
          Everest Cloud
        </span>
        <span className="ml-2 text-lg font-semibold">{">"} {post.title}</span>
      </div>
    </div>
    {/* Layout: Content + Sidebar */}
    <div className="flex flex-col lg:flex-row gap-10">
      
      {/* Main Post Content */}
      <div className="flex-1">
        <img src={post.img} alt={post.title} className="rounded-xl mb-6 w-full h-[500px] object-cover" />
        <p className="text-sm text-gray-500 mb-2">📅 January 19, 2022</p>
        <p className="text-[#33404D] text-md leading-relaxed py-6 border-b border-gray-300">{post.content}</p>

        <div className="mt-10 bg-white px-2 py-6 rounded-xl shadow-xl">
          <button
            onClick={() => navigate(-1)}
            className="text-[#D1B88F] text-xl cursor-pointer font-medium hover:text-[#33404D] transition"
          >
            <span className="text-2xl ">{"<"}</span> Back to Blog
          </button>
        </div>
        <div className="bg-white rounded-xl  p-6 mt-10 shadow-xl">
  <h3 className="text-[#33404D] font-semibold text-lg mb-2">Leave a Reply</h3>
  <p className="text-sm text-[#33404D]">
    You must be{" "}
    <span className="text-[#D1B88F] font-medium cursor-pointer hover:underline">
      logged in
    </span>{" "}
    to post a comment.
  </p>
</div>

      </div>

      {/* Sidebar */}
      <div className="w-full lg:w-[300px] space-y-6">
        {/* Search */}
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="text-[#33404D] font-bold mb-3 border-l-4 border-[#D1B88F] pl-2">Search by posts</h3>
          <div className="flex">
            <input type="text" placeholder="Search ..." className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none" />
            <button className="bg-[#D1B88F] text-[#33404D] font-medium px-2 rounded-r-md">Search</button>
          </div>
        </div>

        {/* Calendar */}
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="text-[#33404D] font-bold mb-3 border-l-4 border-[#D1B88F] pl-2">Calendar</h3>
          <div className="text-center text-sm">
            <div className="bg-[#D1B88F] text-[#33404D] font-semibold py-1 rounded mb-2">July 2025</div>
            <div className="grid grid-cols-7 gap-1 text-[#33404D] font-medium">
              {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                <div key={i}>{d}</div>
              ))}
              {/* Dummy dates (for appearance only) */}
              {Array.from({ length: 31 }, (_, i) => (
                <div
                  key={i}
                  className={`py-1 rounded-full text-center ${
                    i === 15 ? "bg-orange-100 text-[#D1B88F]" : ""
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
            <div className="mt-2 text-[#D1B88F] text-sm cursor-pointer hover:underline">« Jan</div>
          </div>
        </div>

        {/* Archives */}
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="text-[#33404D] font-bold mb-3 border-l-4 border-[#D1B88F] pl-2">Archives</h3>
          <ul className="space-y-1 text-sm text-[#33404D] font-medium">
            <li>January 2022</li>
            <li>November 2021</li>
            <li>January 2021</li>
          </ul>
        </div>

        {/* Categories */}
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="text-[#33404D] font-bold mb-3 border-l-4 border-[#D1B88F] pl-2">Categories</h3>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-sm text-[#33404D]">
            <option>Select Category</option>
            <option>Vaping</option>
            <option>Health</option>
            <option>Devices</option>
            <option>Tips</option>
          </select>
        </div>
         <div className="bg-white rounded-xl shadow p-4">
    <h3 className="text-[#33404D] font-bold mb-4 border-l-4 border-[#D1B88F] pl-2">Recent posts</h3>
   
<div className="space-y-4">
  {blogPosts.slice(0, 3).map((p) => (
    <div
      key={p.id}
      className="cursor-pointer items-center gap-3"
      onClick={() => navigate(`/blog/${p.id}`)}
    >
      <img src={p.img} alt={p.title} className="w-full h-42 rounded-md object-cover" />
      <p className="text-sm text-[#33404D] font-medium mt-2 hover:text-[#D1B88F]">{p.title}</p>
    </div>
  ))}
</div>
  </div>

  {/* Recent Comments */}
  <div className="bg-white rounded-xl shadow p-4">
    <h3 className="text-[#33404D] font-bold mb-3 border-l-4 border-[#D1B88F] pl-2">Recent Comments</h3>
    <ul className="text-sm space-y-2 text-[#33404D]">
      <li>Olga on <span className="text-gray-400 cursor-pointer ">Mr. Vapo Smoking Device</span></li>
      <li>Olga on <span className="text-gray-400 cursor-pointer ">Mr. Vapo Smoking Device</span></li>
      <li>Olga on <span className="text-gray-400 cursor-pointer ">Mr. Vapo Smoking Device</span></li>
      <li>Olga on <span className="text-gray-400 cursor-pointer ">Acid Apple E-Liquid</span></li>
      <li>Olga on <span className="text-gray-400 cursor-pointer ">Acid Apple E-Liquid</span></li>
    </ul>
  </div>

  {/* Tags */}
  <div className="bg-white rounded-xl shadow p-4">
    <h3 className="text-[#33404D] font-bold mb-3 border-l-4 border-[#D1B88F] pl-2">Tags</h3>
    <div className="flex flex-wrap gap-2 text-sm">
      {["e-liquid", "events", "facts", "news", "tips", "vape", "vaping"].map((tag, i) => (
        <span key={i} className="bg-[#D1B88F] text-[#33404D] px-2 py-1 rounded-full cursor-pointer hover:bg-orange-200">
          #{tag}
        </span>
      ))}
    </div>
  </div>
      </div>
    </div>
  </div>
);

}
