import React, { useState } from 'react';
import './App.css';

const themes = {
  light: {
    backgroundColor: '#fff',
    color: '#000',
  },
  dark: {
    backgroundColor: '#333',
    color: '#fff',
  },
  blue: {
    backgroundColor: '#3498db',
    color: '#fff',
  },
  red: {
    backgroundColor: '#e74c3c',
    color: '#fff',
  },
};

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const changeTheme = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  return (
    <div className="container" style={themes[theme]}>
      <h1>Theme Toggler</h1>
      <button onClick={toggleTheme}>Toggle Theme</button> <br />
      <label htmlFor="theme-select">Choose Theme:</label>
      <select
        id="theme-select"
        onChange={(e) => changeTheme(e.target.value)}
        value={theme}
      >
        {Object.keys(themes).map((themeOption) => (
          <option key={themeOption} value={themeOption}>
            {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default App;
