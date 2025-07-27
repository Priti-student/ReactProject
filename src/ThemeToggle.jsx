import React from "react";
import { useEffect, useState } from "react";

function ThemeToggle() {
  const [isLight, setIsLight] = useState(() => {
    return localStorage.getItem("theme") === "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isLight) {
      root.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  }, [isLight]);

  return (
    <button
      onClick={() => setIsLight(!isLight)}
      className="fixed text-2xl bottom-6 right-6 z-50 p-2 rounded-full border border-gray-600 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white shadow-md transition duration-300"
    >
      {isLight ? "☀":"🌙" }
    </button>
  );
}

export default ThemeToggle;