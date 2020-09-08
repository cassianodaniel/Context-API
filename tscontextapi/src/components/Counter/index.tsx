import React from "react";

import { useCount } from "../../context/CountContext";

const Counter: React.FC = () => {
  const { count, setCount } = useCount();
  return (
    <div>
      <span>
        <b>Count: </b>
        {count}
      </span>
      <br />
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
};

export default Counter;
