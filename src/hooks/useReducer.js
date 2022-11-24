import { useReducer } from "react";

const initialState = 0;

export const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};


function Counter () {
    const [value, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>Value - {value}</div>
            <button onClick={()=>dispatch("increment")}></button>
            <button onClick={()=>dispatch("decrement")}></button>
            <button onClick={()=>dispatch("reset")}></button>
        </div>

    )
}
