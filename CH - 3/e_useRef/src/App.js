import React, { Component }  from 'react'
// import FocusInput from './components/FocusInput';
import ClassTimer from './components/ClassTimer';
import HookTimer from './components/HookTimer';
import './App.css';


class App extends Component {
  state = {  } 
  render() { 
    return (
      <div>
        {/* <FocusInput/> */}
       <center>
       <ClassTimer /> 
       <HookTimer />
       </center> 
      </div>
    );
  }
}
 
export default App;
















// { useRef, useEffect }



// function App() {
//   const inputRef = useRef(null);

//   useEffect(() => {
//     inputRef.current.focus();
//   }, []);

//   return <input ref={inputRef} />;
// }