import React from "react";
import { ThemeContextProvider } from "./components/ThemeContext";
import { useTheme } from "./components/ThemeContext";

const App = () => {
  return (
    <ThemeContextProvider>
      <div>
        <ThemeComponent />
      </div>
    </ThemeContextProvider>
  );
};

const ThemeComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        height: "98vh",
      }}
    >
      <p>Current Theme : {theme}</p>

      <button
        onClick={toggleTheme}
        style={{
          border: "none",
          height: 40,
          width: 120,
          cursor: "pointer",
          background: "pink",
          borderRadius: 5,
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default App;
