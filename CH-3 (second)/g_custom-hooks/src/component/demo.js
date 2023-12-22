import { useState } from "react";

import { useLocalStorage } from "./useLocalStorage";

import './demo.css'

export default function Demo() {
  const [value, setValue] = useState("");

  const { setItem, getItem, deleteItem } = useLocalStorage("isha");

  return (
    <center>
    
     <div className="container">
    
      <h1>use LocalStorage</h1>
      <input 
           type="text" 
           onChange={(e) => setValue(e.target.value)} 
        />
     
      <div className="btn">
        <button onClick={() => setItem(value)} className="setbtn">Set</button>
        <button onClick={getItem} className="getbtn">Get</button>
        <button onClick={deleteItem} className="deletebtn">Delete</button>
      </div>
    </div>
    </center>
  );
}

