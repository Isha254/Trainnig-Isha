import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
      <Home path='/' exact/>

      <Cart path='/cart'/>

      <Routes>
          <Route path="/" exact>
          
          </Route>
          <Route path="/cart">
           
          </Route>
      </Routes>
      
      </div>
    </BrowserRouter>
  );
}

export default App;