// DarkModeContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // نضيف / نحذف الكلاس حسب حالة الزرار فقط
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);
const toggleDarkMode = () => {
  setDarkMode(prev => {
    console.log("Dark Mode now:", !prev);
    return !prev;
  });
};

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
