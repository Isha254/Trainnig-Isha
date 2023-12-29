import React, { createContext, useState } from 'react';
import Login2 from './components/Login2.js'
export const Auth = createContext();


const App = () => {
 
const [isLogin, setIsLogin] = useState(false);

const Login = () => {
  setIsLogin(true);
}

const Logout = () => {
  setIsLogin(false);
}

  return (
    <div>
      <Auth.Provider value={[isLogin, Login, Logout]}>
        <Login2/>

      </Auth.Provider>
        
    </div>
  )
}

export default App;






