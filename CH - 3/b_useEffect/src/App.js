import React, { useEffect, useState } from "react";
import './App.css';
// import styled from "styled-components";
import Image from "./background.png";

const App = () => {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    const url = "https://api.adviceslip.com/advice";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json.slip.advice);
        setAdvice(json.slip.advice);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <img src={Image} alt="background" />
      <h1>Fetch Data from an API</h1>
      <h2>{advice}</h2>
    </div>
  );
};

export default App;
