import React, {useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {

  // sample value to be replaced
  // let count = 0;
  const [count, setCount] = useState(1);
    
     const handleChange = () => {
       

         setCount(count + 1);
    }
     const handleSub = () => {
       if (count>1){
         setCount(count - 1);
        }
    }
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={handleChange}>+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button" onClick={handleSub}>-</button>
    </div>
  );
};

export default Counter;
