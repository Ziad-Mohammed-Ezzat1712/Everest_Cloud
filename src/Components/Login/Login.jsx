import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className=" min-h-screen py-10">
      {/* Header */}
      <div className="text-center mb-8 bg-[#fff7f3] py-20">
        <h1 className="text-4xl font-bold text-gray-800">My account</h1>
        <div className="mt-10 text-lg  text-gray-600">
          <span className="bg-[#D1B88F] text-white px-2 py-1 rounded-full text-lg font-semibold">
            Everest Cloud
          </span>
          <span className="ml-2 text-gray-700 font-medium">{'>'} MY ACCOUNT</span>
        </div>
      </div>

      {/* Login Box */}
      <div className="max-w-xl mx-auto mt-20 bg-white rounded-xl shadow-md p-8">
        <h2 className="text-xl font-bold text-[#33404D] mb-6 border-l-4 border-[#D1B88F] pl-3">
          Login
        </h2>

        {/* Username */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-[#33404D] mb-1">
            Username or email address <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D1B88F]"
          />
        </div>

        {/* Password */}
        <div className="mb-4 relative">
          <label className="block text-sm font-semibold text-[#33404D] mb-1">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#D1B88F]"
          />
          <button
            type="button"
            className="absolute right-3 top-[38px]  text-[#33404D]"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeSlashIcon className="h-5 w-5" />
            ) : (
              <EyeIcon className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Remember me + Forgot password */}
        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center text-sm text-gray-700">
            <input type="checkbox" className="mr-2 " />
            Remember me
          </label>
          <a href="#" className="text-sm text-[#33404D] hover:underline">
            Lost your password?
          </a>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full cursor-pointer bg-gradient-to-r from-[#D1B88F] to-[#E9DFC9] hover:bg-gradient-to-r hover:from-[#33404D] hover:to-[#435260] hover:text-white py-3 text-lg text-[#33404D] rounded-md font-bold shadow-lg transition"
        >
          Log in
        </button>
      </div>
    </div>
  );
}
