import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

export default function Cart() {
  const { cartItems, removeFromCart, addToCart, decreaseQuantity } =
    useContext(CartContext);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 dark:bg-gray-900 dark:text-gray-300">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty 🛒</h2>
        <Link
          to="/shop/shop"
          className="bg-[#D1B88F] hover:bg-[#33404D] text-white px-6 py-3 rounded-full shadow-md transition"
        >
          Return to shop
        </Link>
      </div>
    );
  }

  return (
    <>
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

      <div className="max-w-5xl mx-auto p-6  dark:bg-gray-900 transition-colors duration-300">
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 overflow-x-auto transition-colors duration-300" >
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-300 dark:border-gray-700 transition-colors duration-300">
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b border-gray-300 transition-colors duration-300 dark:border-gray-700 text-center dark:text-gray-300">
                  {/* Remove */}
                  <td>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 text-lg font-bold"
                    >
                      ×
                    </button>
                  </td>

                  {/* Product + image */}
                  <td className="flex items-center justify-start gap-3 py-4">
                    <img
                      src={item.img || "/placeholder.png"}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-full border border-[#D1B88F]"
                    />
                    <span>{item.name}</span>
                  </td>

                  {/* Price */}
                  <td className="text-[#D1B88F] font-semibold text-left">
                    ${item.price.toFixed(2)}
                  </td>

                  {/* Quantity controls */}
                  <td>
                    <div className="flex items-center justify-start ">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="px-2 py-1 border rounded-md hover:bg-gray-100 transition-colors duration-300 dark:hover:bg-gray-700"
                      >
                        -
                      </button>
                      <span className="px-3">{item.quantity}</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="px-2 py-1 border rounded-md hover:bg-gray-100 transition-colors duration-300 dark:hover:bg-gray-700"
                      >
                        +
                      </button>
                    </div>
                  </td>

                  {/* Subtotal */}
                  <td className="text-[#D1B88F] font-semibold text-left px-2">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Coupon only */}
          <div className="flex justify-start items-center mt-6 gap-2">
            <input
              type="text"
              placeholder="Coupon code"
              className="border px-4 py-2 rounded-full transition-colors duration-300 dark:bg-gray-800 dark:text-white dark:border-gray-700"
            />
            <button className="border border-[#D1B88F] text-[#D1B88F] px-5 py-2 rounded-full hover:bg-[#D1B88F] hover:text-white transition">
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
            <Link
              to="/checkout"
              className="bg-[#D1B88F] hover:bg-[#33404D]  text-white px-6 py-3 rounded-full shadow-md w-full block text-center mt-4"
            >
              Proceed to checkout
            </Link>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
