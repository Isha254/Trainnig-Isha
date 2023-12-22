import React, { useReducer } from "react";

import "./CounterTwo.css";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };

    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };

    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div className="count">First Count {count.firstCounter}</div>

      <button
        onClick={() => dispatch({ type: "increment", value: 1 })}
        className="increment"
      >
        +
      </button>

      <button
        onClick={() => dispatch({ type: "decrement", value: 1 })}
        className="decrement"
      >
        -
      </button>

      <button
        onClick={() => dispatch({ type: "increment", value: 5 })}
        className="increment5"
      >
        + 5
      </button>

      <button
        onClick={() => dispatch({ type: "decrement", value: 5 })}
        className="decrement5"
      >
        - 5
      </button>

      <div className="count">Second Count {count.secondCounter}</div>

      <div>
        <button
          onClick={() => dispatch({ type: "increment2", value: 1 })}
          className="increment"
        >
          +{" "}
        </button>
        <button
          onClick={() => dispatch({ type: "decrement2", value: 1 })}
          className="decrement"
        >
          -{" "}
        </button>
      </div>

      <div>
        <button onClick={() => dispatch({ type: "reset" })} className="reset">
          <i className="fa fa-refresh"></i>
        </button>
      </div>
    </div>
  );
}

export default CounterTwo;
