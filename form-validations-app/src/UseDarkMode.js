import { useState, useEffect } from "react";

function useDarkMode() {
  // Step 1: Check saved theme in localStorage or default to false (light mode)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("dark-mode");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  // Step 2: Whenever isDarkMode changes, update <body> class and localStorage
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.style.backgroundColor = "#f5f5f5"; // light background
      document.body.style.color = "black";
    
    }

    localStorage.setItem("dark-mode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // Step 3: Function to toggle theme
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Step 4: Return values to use in components
  return { isDarkMode, toggleDarkMode };
}

export default useDarkMode;
