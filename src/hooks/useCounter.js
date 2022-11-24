import  { useState } from "react";

function UseCounter() {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue((prevValue) => prevValue + 1);
  };
  const decrement = () => {
    setValue((prevValue) => prevValue - 1);
  };
  const reset = () => {
    setValue (0);
  };
  return [value, increment, decrement, reset]
}

export default UseCounter;
