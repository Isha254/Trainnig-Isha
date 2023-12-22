// Task: Design a Button component with different styles (e.g., primary,
// secondary, danger) and use it in another component.

import React from "react";
import "./App.css";
// import Button from 'react-bootstrap/Button';
function App() {
  return (
     
     <div>
     
      <h3>Types of buttons</h3>

      <button type='button' class='btn btn-primary'>Primary</button>
      <br/><br/>
      <button type='button' class='btn btn-secondary'>Secondary</button>
      <br/><br/>      
      <button type='button' class='btn btn-success'>Success</button>
      <br/><br/>
      <button type='button' class='btn btn-danger'>Danger</button>
      <br/><br/>
      <button type='button' class='btn btn-warning'>Warning</button>
      <br/><br/>
      <button type='button' class='btn btn-info'>Info</button>
      <br/><br/>
      <button type='button' class='btn btn-light'>Light</button>
      <br/><br/>
      <button type='button' class='btn btn-dark'>Dark</button>
      <br/><br/>
      <button type='button' class='btn btn-link'>Link</button>
      



    </div>
  );
}

export default App;
