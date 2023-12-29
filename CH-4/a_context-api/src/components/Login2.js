import React, { useContext } from 'react';
import { Auth } from '../App';

const Login = () => {
  const [isLogin, login, logout] = useContext(Auth);

  return (
    <div>
      {isLogin ? (
        <div>
          <h1>You are logged in to the system</h1>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>You are logged out of the system</h1>
          <button onClick={login}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Login;
