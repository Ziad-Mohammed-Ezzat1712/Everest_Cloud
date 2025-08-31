import { Link, useParams } from "react-router-dom";
import { products } from "../Shop/Shop";
import { useState, useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../Context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [activeTab, setActiveTab] = useState("description");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  const { addToCart, cartItems } = useContext(CartContext);

  if (!product) return <h2 className="dark:text-white">Product not found</h2>;

  // دالة الإضافة مع لودينج
  const handleAddToCart = () => {
    setLoading(true);
    setTimeout(() => {
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-8 dark:bg-gray-900 dark:text-gray-300 min-h-screen transition-colors duration-300">
        {/* ---------- LEFT SIDE (Main Product) ---------- */}
        <div className="md:col-span-2">
          <div className="grid md:grid-cols-2 gap-6">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-96 object-contain rounded-xl bg-white dark:bg-gray-800 p-4"
            />

            <div>
              <h1 className="text-3xl font-bold dark:text-white">{product.name}</h1>
              <div className="text-[#D1B88F] text-xl my-2">
                {"★".repeat(product.rating) + "☆".repeat(5 - product.rating)}
              </div>
              <p className="text-2xl font-semibold text-[#33404D] dark:text-[#E9DFC9]">
                ${product.price}
              </p>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Praesent ullamcorper erat eu mattis commodo. Sed elementum lacinia
                massa eu hendrerit. Vestibulum auctor metus lectus, vitae
                convallis turpis sodales quis. Donec congue libero ut justo
                dignissim posuere.
              </p>

              {/* Quantity control */}
              <div className="flex items-center space-x-4 mt-4">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-1 border border-gray-200 dark:border-gray-700 rounded-lg dark:text-white"
                >
                  -
                </button>
                <span className="text-lg font-semibold dark:text-gray-200">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-1 border border-gray-200 dark:border-gray-700 rounded-lg dark:text-white"
                >
                  +
                </button>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                disabled={loading}
                className="mt-4 flex items-center gap-2 px-6 py-2 rounded-lg bg-[#D1B88F] text-white font-bold hover:bg-[#bfa374] transition"
              >
                {loading ? (
                  <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4"></span>
                ) : (
                  <FaShoppingCart />
                )}
                {loading ? "Adding..." : `Add ${quantity} to Cart`}
              </button>
            </div>
          </div>

          {/* -------- TABS SECTION -------- */}
          <div className="bg-white dark:bg-gray-900 mt-10 rounded-xl p-6 shadow-sm">
            {/* Tabs Buttons */}
            <div className="flex space-x-6 mb-6">
              <button
                className={`py-2 px-4 text-sm font-semibold rounded-md ${
                  activeTab === "description"
                    ? "bg-[#D1B88F] text-[#33404D]"
                    : "text-[#33404D] dark:text-gray-300"
                }`}
                onClick={() => setActiveTab("description")}
              >
                Description
              </button>
              <button
                className={`py-2 px-4 text-sm font-semibold rounded-md ${
                  activeTab === "reviews"
                    ? "bg-[#D1B88F] text-[#33404D]"
                    : "text-[#33404D] dark:text-gray-300"
                }`}
                onClick={() => setActiveTab("reviews")}
              >
                Reviews (0)
              </button>
            </div>

            {/* Tabs Content */}
            {activeTab === "description" && (
              <div>
                <h3 className="text-xl font-bold text-[#D1B88F] mb-3">
                  Description
                </h3>
                <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                  Praesent ullamcorper erat eu mattis commodo. Sed elementum lacinia massa eu hendrerit.
                  Vestibulum auctor metus lectus, vitae convallis turpis sodales quis. Donec congue libero
                  ut justo dignissim posuere. Nullam mollis scelerisque volutpat...
                </p>
              </div>
            )}

            {activeTab === "reviews" && (
              <div>
                <h3 className="text-xl font-bold text-[#D1B88F] mb-3">Reviews</h3>
                <p className="text-gray-600 dark:text-gray-400">There are no reviews yet.</p>
              </div>
            )}
          </div>
          {/* -------- Related Products -------- */}
<div className="bg-white dark:bg-gray-900 mt-8 rounded-xl p-6 shadow-sm">
  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Related products</h3>
  <div className="grid md:grid-cols-3 gap-6">
    {products
      .filter((p) => p.id !== product.id) // نستبعد المنتج الحالي
      .slice(0, 3)
      .map((related) => {
        const [loadingRelated, setLoadingRelated] = useState(false);

        const handleAddRelated = () => {
          setLoadingRelated(true);
          setTimeout(() => {
            addToCart(related);
            setLoadingRelated(false);
          }, 500);
        };

        return (
          <div
            key={related.id}
            className="rounded-lg p-4 flex flex-col items-center bg-gray-50 dark:bg-gray-800"
          >
            <Link
                              to={`/product/${related.id}`}
                              className="flex flex-col items-center"
                            >
            <img
              src={related.img}
              alt={related.name}
              className="w-42 h-42 object-contain mb-2"
            />
            <p className="font-semibold text-lg text-center dark:text-white">{related.name}</p>
            <div className="text-yellow-500 text-xl mb-1">
              {"★".repeat(related.rating) + "☆".repeat(5 - related.rating)}
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-400 mb-2">${related.price}</p>
            </Link>
            
            <button
              onClick={handleAddRelated}
              disabled={loadingRelated}
              className="flex gap-2 items-center border border-[#D1B88F] text-[#D1B88F] font-semibold rounded-xl px-4 py-1 text-md hover:bg-gradient-to-r hover:from-[#D1B88F] hover:to-[#E9DFC9] hover:text-[#33404D] transition"
            >
              {loadingRelated ? (
                <span className="animate-spin border-2 border-[#D1B88F] border-t-transparent rounded-full w-4 h-4"></span>
              ) : (
                <FaShoppingCart />
              )}
              {loadingRelated ? "Adding..." : "ADD TO CART"}
            </button>
          </div>
        );
      })}
  </div>
</div>

        </div>

        {/* ---------- RIGHT SIDE (Sidebar) ---------- */}
        <div className="space-y-6">
          {/* Cart */}
          <div className="rounded-lg p-4 shadow-sm bg-white dark:bg-gray-900">
            <h3 className="font-bold mb-3 dark:text-white">Cart</h3>
            
            {cartItems.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Your cart is empty
              </p>
            ) : (
              <>
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between border-b pb-2 border-gray-200 dark:border-gray-700">
                    <div>
                      <p className="font-medium dark:text-gray-200">{item.name}</p>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {item.quantity} × ${item.price}
                      </span>
                    </div>
                    <img src={item.img} alt="" className="w-12 h-12 object-contain" />
                  </div>
                ))}
                <p className="mt-3 font-semibold dark:text-white">
                  Subtotal: ${cartItems.reduce((a, c) => a + c.price * c.quantity, 0).toFixed(2)}
                </p>
              </>
            )}
            
            <div className="flex gap-2 text-center mt-3">
              <Link
                to="/cart"
                className="flex-1 border cursor-pointer font-medium rounded-lg py-2"
              >
                View cart
              </Link>
              <Link
                to="/checkout"
                className="flex-1 bg-[#D1B88F] text-white font-medium rounded-lg py-2"
              >
                Checkout
              </Link>
            </div>
          </div>
       {/* Products */}
        <div className="rounded-lg p-4 shadow-sm bg-white dark:bg-gray-900">
          <h3 className="font-bold mb-3 dark:text-white">Products</h3>
          <ul className="space-y-3">
            {products.slice(0, 3).map((p) => (
              <li key={p.id} className="flex items-center justify-between">
                <div>
                  <p className="font-medium dark:text-gray-200">{p.name}</p>
                  <span className="text-sm text-gray-500 dark:text-gray-400">${p.price}</span>
                </div>
                <img src={p.img} alt={p.name} className="w-12 h-12 object-contain" />
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div className="rounded-lg p-4 shadow-sm bg-white dark:bg-gray-900">
          <h3 className="font-bold mb-3 dark:text-white">Product categories</h3>
          <select className="w-full border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg p-2">
            <option>Vape (24)</option>
            <option>E-Liquid (12)</option>
          </select>
        </div>

        {/* Recent reviews */}
        <div className="rounded-lg p-4 shadow-sm bg-white dark:bg-gray-900">
          <h3 className="font-bold mb-3 dark:text-white">Recent reviews</h3>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3">
                <img src={product.img} alt="" className="w-12 h-12 object-contain" />
                <div>
                  <p className="font-medium dark:text-gray-200">{product.name}</p>
                  <span className="text-yellow-500">★★★★★</span>
                  <p className="text-xs text-gray-500 dark:text-gray-400">By Olga</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="rounded-lg p-4 shadow-sm bg-white dark:bg-gray-900">
          <h3 className="font-bold mb-3 dark:text-white">Product tags</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {["aroma", "e-liquid", "flavor", "pod", "relax", "vaping"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-orange-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300 rounded-md text-sm"
                >
                  #{tag}
                </span>
              )
            )}
          </div>
        </div>
          {/* باقي السايدبار زي التصنيفات والتاغز... */}
        </div>
      </div>
    </div>
  );
}
