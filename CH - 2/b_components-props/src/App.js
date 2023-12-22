import React from 'react'
import './App.css';
import UserProfile from './component/UserProfile';


const App = () => {
  const user = {
    name: 'Isha Bhalodiya', 
    bio: 'Hello, I am a Web Developer.',
  };

  return (
    <div>
      <h1>Welcome to My UserProfile</h1>
      <UserProfile {...user} />
    </div>
  );
};


export default App;



