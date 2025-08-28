import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

export default function Cart() {
  const { cartItems, removeFromCart, addToCart, decreaseQuantity } =
    useContext(CartContext);
  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 dark:bg-gray-900 dark:text-gray-300">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty 🛒</h2>
        <button
          onClick={() => navigate("/shop/shop")}
          className="bg-[#D1B88F] hover:bg-[#33404D] text-white px-6 py-3 rounded-full shadow-md transition"
        >
          Return to shop
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      {/* Header */}
      <div className="text-center py-10 bg-[#fff7f3] dark:bg-gray-800 mb-10 transition-colors duration-300">
        <h1 className="text-3xl font-bold text-[#33404D] dark:text-white">
          Cart
        </h1>
        <div className="mt-10 text-sm text-[#33404D] dark:text-gray-300">
          <span className="bg-gradient-to-r from-[#D1B88F] to-[#E9DFC9] text-[#33404D] dark:text-gray-900 px-2 py-1 rounded-full text-lg font-semibold">
            Everest Cloud
          </span>
          <span className="ml-2 text-lg font-semibold">{">"} Cart </span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-6  dark:bg-gray-900 transition-colors duration-300 flex flex-col gap-6">
        {/* Table */}
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 overflow-x-auto transition-colors duration-300">
        <div className="overflow-x-auto">
  <table className="w-full table-auto text-left border-collapse">
   <thead>
  <tr className="border-b border-gray-300 dark:border-gray-700 transition-colors duration-300">
    <th className="hidden sm:table-cell"></th>
    <th className="hidden sm:table-cell">Product</th>
    <th className="hidden sm:table-cell">Price</th>
    <th className="hidden sm:table-cell">Quantity</th>
    <th className="hidden sm:table-cell">Subtotal</th>
  </tr>
</thead>

    <tbody>
    {cartItems.map((item) => (
  <tr
    key={item.id}
    className="border-b border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300
               block sm:table-row mb-6 sm:mb-0" // زودت الـ margin-bottom على الموبايل
  >
    {/* Remove */}
    <td className="block sm:table-cell text-right sm:text-center mb-4 sm:mb-0 px-4 sm:px-2">
      <button
        onClick={() => removeFromCart(item.id)}
        className="text-red-500 text-2xl sm:text-lg font-bold" // كبرت علامة الحذف على الموبايل
      >
        ×
      </button>
    </td>

    {/* Product + image */}
    <td className="block sm:table-cell py-4 sm:py-4 px-4 sm:px-2">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-3">
        <img
          src={item.img || "/placeholder.png"}
          alt={item.name}
          className="w-20 h-20 sm:w-16 sm:h-16 object-cover rounded-full border border-[#D1B88F]" // كبرت الصورة على الموبايل
        />
        <span className="font-semibold text-lg sm:text-base">{item.name}</span> {/* كبرت النص */}
      </div>
    </td>

    {/* Price */}
    <td className="block sm:table-cell text-[#D1B88F] font-semibold py-4 sm:py-4 px-4 sm:px-2 text-lg sm:text-base">
      ${item.price.toFixed(2)}
    </td>

    {/* Quantity controls */}
    <td className="block sm:table-cell py-4 sm:py-4 px-4 sm:px-2">
      <div className="flex items-center gap-3">
        <button
          onClick={() => decreaseQuantity(item.id)}
          className="px-3 py-2 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition text-lg sm:text-base"
        >
          -
        </button>
        <span className="text-lg sm:text-base">{item.quantity}</span>
        <button
          onClick={() => addToCart(item)}
          className="px-3 py-2 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition text-lg sm:text-base"
        >
          +
        </button>
      </div>
    </td>

    {/* Subtotal */}
    <td className="block sm:table-cell text-[#D1B88F] font-semibold py-4 sm:py-4 px-4 sm:px-2 text-lg sm:text-base">
      ${(item.price * item.quantity).toFixed(2)}
    </td>
  </tr>
))}

    </tbody>
  </table>
</div>

          {/* Coupon only */}
          <div className="flex flex-col sm:flex-row justify-start items-center mt-6 gap-2">
            <input
              type="text"
              placeholder="Coupon code"
              className="border px-4 py-2 rounded-full transition-colors duration-300 dark:bg-gray-800 dark:text-white dark:border-gray-700 w-full sm:w-auto"
            />
            <button className="border border-[#D1B88F] text-[#D1B88F] px-5 py-2 rounded-full hover:bg-[#D1B88F] hover:text-white transition w-full sm:w-auto">
              Apply coupon
            </button>
          </div>
        </div>

        {/* Cart totals */}
        <div className="mt-8 max-w-md ml-auto">
          <div className="bg-white dark:bg-gray-800 transition-colors duration-300 shadow-md rounded-2xl p-6">
            <h2 className="text-lg font-bold border-l-4 border-[#D1B88F] pl-2 mb-4 dark:text-white">
              Cart totals
            </h2>
            <div className="flex justify-between border-b border-gray-300 transition-colors duration-300 dark:border-gray-700 py-2 dark:text-gray-300">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-[#D1B88F] text-lg py-3">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <button
              onClick={() => navigate("/shop/checkout")}
              className="bg-[#D1B88F] hover:bg-[#33404D] text-white px-6 py-3 rounded-full shadow-md w-full block text-center mt-4 transition"
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
