import React from "react";

import { useCount } from "../../context/CountContext";

/* interface ICounter {
  count: number;
  setCount(value: number): void;
} */

const DecreaseCounter: React.FC = (/*ICounter*/) => {
  const { count, setCount } = useCount();

  return (
    <div>
      <span>
        <b>Decrease Counter: </b>
        {count}
        <br></br>
        <button onClick={() => setCount(count - 1)}>-1</button>
      </span>
    </div>
  );
};

export default DecreaseCounter;
