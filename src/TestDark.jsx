// src/TestDark.jsx
import React, { useState, useEffect } from "react";

export default function TestDark() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Test Dark Mode</h1>
      <button
        className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 text-black dark:text-white"
        onClick={() => setDarkMode(prev => !prev)}
      >
        Toggle Dark Mode
      </button>
    </div>
  );
}
