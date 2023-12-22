import React from 'react';
import './App.css';

function App() {
  return (
    <React.Fragment>
 <p>Simple Form</p>
      <div className="container">
     

     <form>
     
      <label> Name : {' '}
        <input type="text" />
      </label>

    <br /> <br />

      <label className='age'> Age : {' '}
        <input type="number" min={1}/>
      </label>
      <br /> <br />
 
  <label className='gender'> Gender : 
      <div className='gender'>

      <input type="radio" id="male" name="gender" />
      <label for="male">Male</label> 

      <input type="radio" id="female" name="gender" />
      <label for="female">Female</label><br/>
      </div>
      </label>
 
      <br />
<button type='submit' className='submit'>Submit</button>
 
    </form>
    </div>
    </React.Fragment>
      
  );
}



 
export default App;
