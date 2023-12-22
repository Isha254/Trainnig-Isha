import React, { useReducer } from 'react'

import './CounterOne.css'

const initialState = 0
const reducer = (state, action) => {
    switch(action) {
        case 'increment' :
            return state + 1
        case 'decrement' : 
            return state - 1   
        case 'reset' :
            return initialState
        default:
            return state
    }

}

 function CounterOne() {
    const [ count, dispatch ] = useReducer(reducer, initialState)

   return (
     <div>
        <div className='count'>
            Count { count }
        </div>
       <button onClick={() => dispatch('increment')} className='increment'>+</button>
       <button onClick={() => dispatch('decrement')} className='decrement'>-</button>
       <button onClick={() => dispatch('reset')} className='reset'>
         <i className="fa fa-refresh"></i>
       </button>
     </div>
   )
 }
 
 
 export default CounterOne;
 
 