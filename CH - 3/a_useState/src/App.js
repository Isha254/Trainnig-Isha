import React, { useState } from 'react';
import useLocalStorage from "use-local-storage";

import './App.css';
import { Toggle } from './components/Toogle';

const App = () => {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);

  // const [isDark, setIsDark] = useState(true);

  return (
    <div className='App' data-theme={isDark ? "dark" : "light"}>

      <Toggle 
        isChecked={isDark}
        handleChange={() => setIsDark(!isDark)}
      />

      <h1 className='title'>Hello World</h1>
      
    </div>
  )
}

export default App;
