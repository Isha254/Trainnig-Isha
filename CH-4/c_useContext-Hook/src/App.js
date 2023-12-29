import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import NavigationBar from './components/NavBar';

const App = () => {
  return (
    <ThemeProvider>
      <NavigationBar />
    </ThemeProvider>
  );
};

export default App;
