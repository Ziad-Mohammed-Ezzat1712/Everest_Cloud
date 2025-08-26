import { Link, useParams } from "react-router-dom";
import { products } from "../Shop/Shop"; 
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
 const [activeTab, setActiveTab] = useState("description"); // 👈 هنا التاب اللي ظاهر حاليًا
  const [quantity, setQuantity] = useState(1);

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* ---------- LEFT SIDE (Main Product) ---------- */}
      <div className="md:col-span-2">
        <div className="grid md:grid-cols-2 gap-6">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-96 object-contain rounded-xl"
          />

          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="text-[#D1B88F] text-xl my-2">
              {"★".repeat(product.rating) + "☆".repeat(5 - product.rating)}
            </div>
            <p className="text-2xl font-semibold text-[#33404D]">
              ${product.price}
            </p>
            <p className="mt-4 text-gray-600">
              Praesent ullamcorper erat eu mattis commodo. Sed elementum lacinia
              massa eu hendrerit. Vestibulum auctor metus lectus, vitae
              convallis turpis sodales quis. Donec congue libero ut justo
              dignissim posuere.
            </p>

            {/* Quantity control */}
            <div className="flex items-center space-x-4 mt-4">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-1 border border-gray-200 rounded-lg"
              >
                -
              </button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-1 border border-gray-200 rounded-lg"
              >
                +
              </button>
            </div>

            {/* Add to Cart */}
            <button className="mt-4 px-6 py-2 rounded-lg bg-[#D1B88F] text-white font-bold">
              Add {quantity} to Cart
            </button>
          </div>
        </div>
          {/* -------- TABS SECTION -------- */}
        <div className="bg-white mt-10 rounded-xl p-6 shadow-sm">
          {/* Tabs Buttons */}
          <div className="flex space-x-6 mb-6">
            <button
              className={`py-2 px-4 text-sm font-semibold rounded-md ${
                activeTab === "description"
                  ? "bg-[#D1B88F] text-[#33404D]"
                  : "text-[#33404D]"
              }`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              className={`py-2 px-4 text-sm font-semibold rounded-md ${
                activeTab === "reviews"
                  ? "bg-[#D1B88F] text-[#33404D]"
                  : "text-[#33404D]"
              }`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews (0)
            </button>
          </div>

          {/* Tabs Content */}
          {activeTab === "description" && (
            <div>
              <h3 className="text-xl font-bold text-[#D1B88F] mb-3">Description</h3>
              <p className="text-gray-700 leading-relaxed">
                Praesent ullamcorper erat eu mattis commodo. Sed elementum lacinia massa eu hendrerit.
                Vestibulum auctor metus lectus, vitae convallis turpis sodales quis. Donec congue libero
                ut justo dignissim posuere. Nullam mollis scelerisque volutpat...
              </p>
            </div>
          )}

          {activeTab === "reviews" && (
            <div>
              <h3 className="text-xl font-bold text-[#D1B88F] mb-3">Reviews</h3>
              <p className="text-gray-600">There are no reviews yet.</p>
              <div className="text-sm text-gray-500 mt-2">
                Be the first to review <strong>“{product.name}”</strong>
              </div>
              <div className="text-sm text-gray-500 mt-1">
                You must be{" "}
                <span className="text-[#D1B88F] underline cursor-pointer">logged in</span> to post a review.
              </div>
            </div>
          )}
        </div>

        {/* -------- Related Products -------- */}
        <div className="bg-white mt-8 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Related products</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {products.slice(0, 3).map((related) => (
              <div
                key={related.id}
                className=" rounded-lg p-4 flex flex-col items-center"
              >
                <img
                  src={related.img}
                  alt={related.name}
                  className="w-42 h-42 object-contain mb-2"
                />
                <p className="font-semibold text-lg text-center">{related.name}</p>
                <div className="text-yellow-500 text-xl mb-1">
                  {"★".repeat(related.rating) + "☆".repeat(5 - related.rating)}
                </div>
                <p className="text-sm text-gray-700 mb-2">${related.price}</p>
                <button className="flex gap-4 items-center border border-[#D1B88F] text-[#D1B88F] font-semibold rounded-xl px-4 py-1 text-md hover:bg-gradient-to-r hover:from-[#D1B88F] hover:to-[#E9DFC9] hover:text-[#33404D] transition">
                   <FaShoppingCart />  ADD TO CART
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- RIGHT SIDE (Sidebar) ---------- */}
      <div className="space-y-6">
        {/* Cart */}
        <div className=" rounded-lg p-4 shadow-sm">
          <h3 className="font-bold mb-3">Cart</h3>
          <div className="flex items-center justify-between border-b pb-2">
            <div>
              <p className="font-medium">{product.name}</p>
              <span className="text-sm text-gray-500">
                {quantity} × ${product.price}
              </span>
            </div>
            <img src={product.img} alt="" className="w-12 h-12 object-contain" />
          </div>
          <p className="mt-3 font-semibold">
            Subtotal: ${(product.price * quantity).toFixed(2)}
          </p>
          <div className="flex gap-2 text-center mt-3">
            <button className="flex-1 border cursor-pointer font-medium rounded-lg py-2">View cart</button>
            <Link to="" className="flex-1 bg-[#D1B88F]  text-white font-medium rounded-lg py-2">
            <button className="text-center">
              Checkout
            </button></Link>
          </div>
        </div>

        {/* Products */}
        <div className=" rounded-lg p-4 shadow-sm">
          <h3 className="font-bold mb-3">Products</h3>
          <ul className="space-y-3">
            {products.slice(0, 3).map((p) => (
              <li key={p.id} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{p.name}</p>
                  <span className="text-sm text-gray-500">${p.price}</span>
                </div>
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-12 h-12 object-contain"
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div className=" rounded-lg p-4 shadow-sm">
          <h3 className="font-bold mb-3">Product categories</h3>
          <select className="w-full border border-gray-200 rounded-lg p-2">
            <option>Vape (24)</option>
            <option>E-Liquid (12)</option>
          </select>
        </div>

        {/* Recent reviews */}
        <div className=" rounded-lg p-4 shadow-sm">
          <h3 className="font-bold mb-3">Recent reviews</h3>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3">
                <img
                  src={product.img}
                  alt=""
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <p className="font-medium">{product.name}</p>
                  <span className="text-yellow-500">★★★★★</span>
                  <p className="text-xs text-gray-500">By Olga</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className=" rounded-lg p-4 shadow-sm">
          <h3 className="font-bold mb-3">Product tags</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {["aroma", "e-liquid", "flavor", "pod", "relax", "vaping"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-orange-100 text-gray-500 rounded-md text-sm"
                >
                  #{tag}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
