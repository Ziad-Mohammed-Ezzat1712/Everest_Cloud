import React, { useState, useMemo, useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../Context/CartContext";
import product1 from "../../assets//Images/product1.png";
import product2 from "../../assets//Images/product2.png";
import product3 from "../../assets//Images/product3.png";
import product4 from "../../assets//Images/product4.png";
import product5 from "../../assets//Images/product5.png";
import product6 from "../../assets//Images/product6.png";
import product7 from "../../assets//Images/product7.png";
import product8 from "../../assets//Images/product8.png";
import product9 from "../../assets//Images/product9.png";
import product10 from "../../assets//Images/product10.png";

export const products = [
  {
    id: 1,
    name: "Mr. Vapo E-liquid 30ml",
    price: 4.5,
    img: product1,
    rating: 0,
    category: "E-liquids",
    tags: ["e-liquid", "flavor"],
  },
  {
    id: 2,
    name: "Starter Kit 1",
    price: 54.0,
    img: product2,
    rating: 5,
    category: "E-liquids",
    tags: ["e-liquid", "blueberry"],
  },
  {
    id: 3,
    name: "Mr. Vapo Pod Kit",
    price: 267,
    img: product3,
    rating: 5,
    category: "Vape Kits",
    tags: ["pod", "kit"],
  },
  {
    id: 4,
    name: "Starter Kit 2",
    price: 65,
    img: product4,
    rating: 0,
    category: "E-liquids",
    tags: ["e-liquid", "flavor"],
  },
  {
    id: 5,
    name: "Mr. Vapo Smoking Device",
    price: 65,
    img: product5,
    rating: 5,
    category: "E-liquids",
    tags: ["e-liquid", "blueberry"],
  },
  {
    id: 6,
    name: "Disposable e-cigarette ",
    price: 450,
    img: product6,
    rating: 5,
    category: "Vape Kits",
    tags: ["pod", "kit"],
  },
  {
    id: 7,
    name: "Juicy Grapes E-Liquid",
    price: 4.5,
    img: product7,
    rating: 0,
    category: "E-liquids",
    tags: ["e-liquid", "flavor"],
  },
  {
    id: 8,
    name: "Frozen Blueberry E-Liquid",
    price: 4.5,
    img: product8,
    rating: 0,
    category: "E-liquids",
    tags: ["e-liquid", "blueberry"],
  },
  {
    id: 9,
    name: "Mr. Vapo Pod Kit",
    price: 267,
    img: product9,
    rating: 5,
    category: "Vape Kits",
    tags: ["pod", "kit"],
  },
  {
    id: 10,
    name: "Sweet Strawberry E-Liquid",
    price: 4.5,
    img: product10,
    rating: 0,
    category: "E-liquids",
    tags: ["e-liquid", "flavor"],
  },
  {
    id: 11,
    name: "Starter Kit 1",
    price: 54,
    img: product2,
    rating: 0,
    category: "E-liquids",
    tags: ["e-liquid", "blueberry"],
  },
  {
    id: 12,
    name: "Mr. Vapo Pod Kit",
    price: 267,
    img: product3,
    rating: 0,
    category: "E-liquids",
    tags: ["e-liquid", "blueberry"],
  },
  {
    id: 13,
    name: "Juicy Grapes E-Liquid",
    price: 4.5,
    img: product7,
    rating: 0,
    category: "E-liquids",
    tags: ["e-liquid", "flavor"],
  },
  {
    id: 14,
    name: "Frozen Blueberry E-Liquid",
    price: 4.5,
    img: product8,
    rating: 0,
    category: "E-liquids",
    tags: ["e-liquid", "blueberry"],
  },
  {
    id: 15,
    name: "Mr. Vapo Pod Kit",
    price: 267,
    img: product9,
    rating: 5,
    category: "Vape Kits",
    tags: ["pod", "kit"],
  },
  {
    id: 16,
    name: "Sweet Strawberry E-Liquid",
    price: 4.5,
    img: product10,
    rating: 0,
    category: "E-liquids",
    tags: ["e-liquid", "flavor"],
  },
  {
    id: 17,
    name: "Starter Kit 1",
    price: 54,
    img: product2,
    rating: 0,
    category: "E-liquids",
    tags: ["e-liquid", "blueberry"],
  },
  {
    id: 18,
    name: "Mr. Vapo Pod Kit",
    price: 267,
    img: product3,
    rating: 0,
    category: "E-liquids",
    tags: ["e-liquid", "blueberry"],
  },
  {
    id: 19,
    name: "Mr. Vapo E-liquid 30ml",
    price: 4.5,
    img: product1,
    rating: 0,
    category: "E-liquids",
    tags: ["e-liquid", "flavor"],
  },
  {
    id: 20,
    name: "Starter Kit 1",
    price: 54.0,
    img: product2,
    rating: 5,
    category: "E-liquids",
    tags: ["e-liquid", "blueberry"],
  },
  {
    id: 21,
    name: "Mr. Vapo Pod Kit",
    price: 267,
    img: product3,
    rating: 5,
    category: "Vape Kits",
    tags: ["pod", "kit"],
  },
  {
    id: 22,
    name: "Starter Kit 2",
    price: 65,
    img: product4,
    rating: 0,
    category: "E-liquids",
    tags: ["e-liquid", "flavor"],
  },
  {
    id: 23,
    name: "Mr. Vapo Smoking Device",
    price: 65,
    img: product5,
    rating: 5,
    category: "E-liquids",
    tags: ["e-liquid", "blueberry"],
  },
  {
    id: 24,
    name: "Disposable e-cigarette ",
    price: 450,
    img: product6,
    rating: 5,
    category: "Vape Kits",
    tags: ["pod", "kit"],
  },
];
export default function Shop() {
  const { cartItems, addToCart } = useContext(CartContext); // ناخد الكارت من الكونتكست
  const [loadingId, setLoadingId] = useState(null);
  const pageSize = 12;
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("default");
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);

  // ترتيب المنتجات
  const sortedproducts = useMemo(() => {
    const arr = [...products];
    switch (sortBy) {
      case "price-asc":
        return arr.sort((a, b) => a.price - b.price);
      case "price-desc":
        return arr.sort((a, b) => b.price - a.price);
      case "rating":
        return arr.sort((a, b) => b.rating - a.rating);
      case "name":
        return arr.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return arr;
    }
  }, [sortBy]);

  // فلترة
  const filtered = sortedproducts.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      p.price >= minPrice &&
      p.price <= maxPrice
  );

  // Pagination
  const totalPages = Math.ceil(filtered.length / pageSize);
  const start = (page - 1) * pageSize;
  const paginated = filtered.slice(start, start + pageSize);

  // دالة الإضافة مع لودينج
  const handleAddToCart = (product) => {
    setLoadingId(product.id);
    setTimeout(() => {
      addToCart(product);
      setLoadingId(null);
    }, 1000); // تحاكي وقت التحميل
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 py-10">
        {/* المنتجات */}
        <div className="md:col-span-3">
          {/* Results count + sorting */}
          <div className="flex justify-between items-center mb-4">
            <p className="text-md font-semibold">
              Showing {filtered.length ? start + 1 : 0}–
              {filtered.length ? start + paginated.length : 0} of
              {filtered.length} results
            </p>

            <select
              className="bg-gray-200 dark:bg-gray-700 dark:text-white rounded-lg px-3 py-2 text-sm font-medium"
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value);
                setPage(1);
              }}
            >
              <option value="default">Default sorting</option>
              <option value="price-asc">Sort by price: low to high</option>
              <option value="price-desc">Sort by price: high to low</option>
              <option value="rating">Sort by rating</option>
              <option value="name">Sort by name</option>
            </select>
          </div>

          {/* products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginated.map((p) => (
              <div
                key={p.id}
                className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-4 flex flex-col items-center"
              >
                <Link
                  to={`/product/${p.id}`}
                  className="flex flex-col items-center"
                >
                  <img
                    src={p.img}
                    alt={p.name}
                    className="h-40 object-contain"
                  />
                  <h3 className="mt-4 font-bold text-xl text-center">
                    {p.name}
                  </h3>
                </Link>

                {/* التقييم */}
                <div className="text-[#D1B88F] text-xl">
                  {"★".repeat(p.rating) + "☆".repeat(5 - p.rating)}
                </div>

                {/* السعر */}
                <p className="text-lg font-medium">${p.price}</p>

                {/* زرار إضافة مع لودينج */}
                <button
                  onClick={() => handleAddToCart(p)}
                  disabled={loadingId === p.id}
                  className="flex gap-2 cursor-pointer items-center mt-3 border border-[#D1B88F] text-[#D1B88F] font-semibold px-4 py-1 rounded-2xl hover:bg-[#D1B88F] hover:text-white transition"
                >
                  {loadingId === p.id ? (
                    <span className="animate-spin border-2 cursor-pointer  border-[#D1B88F] border-t-transparent rounded-full w-4 h-4"></span>
                  ) : (
                    <FaShoppingCart />
                  )}
                  {loadingId === p.id ? "Loading..." : "ADD TO CART"}
                </button>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`px-3 py-1 rounded-lg border ${
                  page === i + 1
                    ? "bg-[#D1B88F] text-white"
                    : "text-gray-600 dark:text-gray-300"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>

        {/* سايدبار */}
        <div className="md:col-span-1 space-y-6 mt-6 md:mt-0">
          {/* Filter by Price */}
          <div className="p-4 bg-white transition-colors duration-300 dark:bg-gray-800 rounded-2xl shadow-md text-gray-800 dark:text-gray-300">
            
            <h4 className="font-bold mb-3 text-gray-900 dark:text-white">
              
              Filter by price
            </h4>
            <div className="flex items-center space-x-2">
              
              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
                className="w-16 border px-2 py-1 rounded dark:bg-gray-700 dark:text-white"
                min="0"
              />
              <span>-</span>
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-16 border px-2 py-1 rounded dark:bg-gray-700 dark:text-white"
                min="0"
              />
            </div>
            <p className="text-sm mt-2">
              Price: ${minPrice} — ${maxPrice}
            </p>
          </div>
          {/* Cart */}
          <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md">
            <h3 className="font-bold mb-3">Cart</h3>
            {cartItems.length === 0 ? (
              <p className="text-sm text-gray-500">Your cart is empty</p>
            ) : (
              <>
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border-b pb-2 mb-2"
                  >
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <span className="text-sm text-gray-500">
                        {item.quantity} × ${item.price}
                      </span>
                    </div>
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                ))}
                <p className="mt-3 font-semibold">
                  Subtotal: $
                  {cartItems
                    .reduce((acc, item) => acc + item.price * item.quantity, 0)
                    .toFixed(2)}
                </p>
                <div className="flex gap-2 text-center mt-3">
                  <Link
                    to="/shop/cart"
                    className="flex-1 border cursor-pointer font-medium rounded-lg py-2"
                  >
                    View cart
                  </Link>
                  <Link
                    to="/shop/checkout"
                    className="flex-1 bg-[#D1B88F] text-white font-medium rounded-lg py-2"
                  >
                    Checkout
                  </Link>
                </div>
              </>
            )}
          </div>
          {/* Average rating */}
          <div className="p-4 bg-white transition-colors duration-300 dark:bg-gray-800 rounded-2xl shadow-md text-gray-800 dark:text-gray-300">
            
            <h4 className="font-bold mb-2 text-gray-900 dark:text-white">
              
              Average rating
            </h4>
            <div className="text-[#D1B88F]">★★★★★</div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">(9)</p>
          </div>
          {/* Search */}
          <div className="p-4 bg-white transition-colors duration-300 dark:bg-gray-800 rounded-2xl w-full shadow-md text-gray-800 dark:text-gray-300">
            
            <h4 className="font-bold mb-2 text-gray-900 dark:text-white">
              
              Search by products
            </h4>
            <div className="flex">
              
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="flex border rounded-l-xl px-2 py-1 dark:bg-gray-700 dark:text-white"
              />
              <button className="bg-[#D1B88F] text-[#33404D] px-2 font-medium rounded-r-xl">
                
                Search
              </button>
            </div>
          </div>
          {/* Categories */}
          <div className="p-4 bg-white transition-colors duration-300 dark:bg-gray-800 rounded-2xl shadow-md text-gray-800 dark:text-gray-300">
            
            <h4 className="font-bold mb-2 text-gray-900 dark:text-white">
              
              Product categories
            </h4>
            <ul className="space-y-1 text-sm">
              
              <li>Accessories (7)</li> <li>E-cigarettes (15)</li>
              <li>E-liquids (10)</li> <li>Vape (24)</li> <li>Vape Kits (26)</li>
              <li>Vape Pods (34)</li>
            </ul>
          </div>
          {/* Tags */}
          <div className="p-4 bg-white transition-colors duration-300 dark:bg-gray-800 rounded-2xl shadow-md text-gray-800 dark:text-gray-300">
            
            <h4 className="font-bold mb-2 text-gray-900 dark:text-white">
              
              Product tags
            </h4>
            <div className="flex flex-wrap gap-2 text-sm">
              
              {["aroma", "e-liquid", "flavor", "pod", "relax", "vaping"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md"
                  >
                    
                    #{tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
