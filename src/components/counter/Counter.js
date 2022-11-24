
import UseCounter from "../../hooks/useCounter";
import { Button } from "../button/Button";
import counterStyles from "../counter/Counter.module.css"


export const Counter = () => {
    const[value, increment, decrement, reset] = UseCounter(0)
  return (
    <div className={counterStyles.container}>
      <div className={counterStyles.counter}>
        <p className={counterStyles.value}>{value}</p>
        <div className={counterStyles.actions}>
        <Button onClick={increment}>
            increment
        </Button>  
        <Button onClick={decrement}>
            decrement
        </Button>  
        <Button onClick={reset}>
            reset
        </Button>  
        </div>
      </div>
    </div>
  );
};
