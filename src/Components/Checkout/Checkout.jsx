import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export default function Checkout() {
  const { cartItems } = useContext(CartContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    country: "United States (US)",
    address: "",
    apartment: "",
    city: "",
    state: "California",
    zip: "",
    phone: "",
    email: "",
    notes: "",
  });

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("✅ Order placed successfully!");
  };

  return (
    <>
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      {/* Header */}
      <div className="text-center py-10 bg-[#fff7f3] dark:bg-gray-800 mb-10 transition-colors duration-300">
        <h1 className="text-3xl font-bold text-[#33404D] dark:text-white">
          Checkout
        </h1>
        <div className="mt-10 text-sm text-[#33404D] dark:text-gray-300">
          <span className="bg-gradient-to-r from-[#D1B88F] to-[#E9DFC9] text-[#33404D] dark:text-gray-900 px-2 py-1 rounded-full text-lg font-semibold">
            Everest Cloud
          </span>
          <span className="ml-2 text-md font-semibold">{">"} CHECKOUT </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Billing details */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6">
            <h2 className="text-lg font-bold border-l-4 border-[#D1B88F] pl-2 mb-6 dark:text-white">
              Billing details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium mb-1 dark:text-gray-300">
                  First name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-xl px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="block font-medium mb-1 dark:text-gray-300">
                  Last name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-xl px-3 py-2"
                  required
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block font-medium mb-1 dark:text-gray-300">
                Company name (optional)
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-xl px-3 py-2"
              />
            </div>

            <div className="mt-4">
              <label className="block font-medium mb-1 dark:text-gray-300">
                Country / Region <span className="text-red-500">*</span>
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-xl px-3 py-2"
              >
                <option>United States (US)</option>
                <option>United Kingdom (UK)</option>
                <option>Egypt</option>
                <option>Saudi Arabia</option>
              </select>
            </div>

            <div className="mt-4">
              <label className="block font-medium mb-1 dark:text-gray-300">
                Street address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="address"
                placeholder="House number and street name"
                value={formData.address}
                onChange={handleChange}
                className="w-full border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-xl px-3 py-2 mb-2"
                required
              />
              <input
                type="text"
                name="apartment"
                placeholder="Apartment, suite, unit, etc. (optional)"
                value={formData.apartment}
                onChange={handleChange}
                className="w-full border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-xl px-3 py-2"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div>
                <label className="block font-medium mb-1 dark:text-gray-300">
                  Town / City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-xl px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="block font-medium mb-1 dark:text-gray-300">
                  State <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-xl px-3 py-2"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div>
                <label className="block font-medium mb-1 dark:text-gray-300">
                  ZIP Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  className="w-full border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-xl px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="block font-medium mb-1 dark:text-gray-300">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-xl px-3 py-2"
                  required
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block font-medium mb-1 dark:text-gray-300">
                Email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-xl px-3 py-2"
                required
              />
            </div>
          </div>

          {/* Additional info */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6">
            <h2 className="text-lg font-bold border-l-4 border-[#D1B88F] pl-2 mb-6 dark:text-white">
              Additional information
            </h2>

            <div>
              <label className="block font-medium mb-1 dark:text-gray-300">
                Order notes (optional)
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Notes about your order, e.g. special notes for delivery."
                className="w-full border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-xl px-3 py-2"
                rows="3"
              />
            </div>
          </div>

          {/* Order summary */}
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6">
            <h2 className="text-lg font-bold border-l-4 border-[#D1B88F] pl-2 mb-4 dark:text-white">
              Your order
            </h2>

            <table className="w-full text-left mb-4">
              <thead>
                <tr className="border-b border-gray-300 dark:border-gray-700">
                  <th className="py-2 dark:text-gray-300">Product</th>
                  <th className="py-2 dark:text-gray-300">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray-200 dark:border-gray-700 dark:text-gray-300"
                  >
                    <td className="py-2">
                      {item.name} × {item.quantity}
                    </td>
                    <td className="py-2 text-[#D1B88F] font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Totals */}
            <div className="flex justify-between border-t border-gray-300 dark:border-gray-700 py-2 font-medium dark:text-gray-300">
              <span>Subtotal</span>
              <span className="text-[#33404D] dark:text-gray-300">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between font-bold text-[#D1B88F] text-xl py-2">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            {/* Place order button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#D1B88F] hover:bg-[#33404D] text-[#33404D] hover:text-white font-semibold px-16 py-3 rounded-full text-lg shadow-md mt-4"
              >
                Place order
              </button>
            </div>
          </div>
        </form>
      </div>
      </div>
    </>
  );
}
