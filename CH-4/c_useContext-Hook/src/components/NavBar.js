import React from 'react';
import { useTheme } from './ThemeContext';

const NavigationBar = () => {
  const { theme, toggleTheme } = useTheme();

  const navBarStyle = {
    background: theme === 'light' ? '#f0f0f0' : '#333',
    color: theme === 'light' ? '#333' : '#fff',
    padding: '10px',
    marginBottom: '20px',
  };

  return (
    <div style={navBarStyle}>
      <span>Navigation Bar</span>
      <button onClick={toggleTheme} style={{ marginLeft: '10px', cursor:"pointer" }}>
        Toggle Theme     
      </button>
    </div>
  );
};

export default NavigationBar;