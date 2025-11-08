import React from "react";
import useDarkMode from "./UseDarkMode";

const ThemeToggler = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "40px",
        padding: "20px",
        backgroundColor: isDarkMode ? "#222" : "#f5f5f5",
        color: isDarkMode ? "#fff" : "#000",
        transition: "all 0.3s ease",
      }}
    >
      <h2>{isDarkMode ? " Dark Mode" : " Light Mode"}</h2>
      <button
        onClick={toggleDarkMode}
        style={{
          marginTop: "10px",
          padding: "8px 16px",
          borderRadius: "8px",
          cursor: "pointer",
          border: "none",
          background: isDarkMode ? "#fff" : "#333",
          color: isDarkMode ? "#333" : "#fff",
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeToggler;
