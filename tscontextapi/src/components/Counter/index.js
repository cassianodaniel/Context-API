import React from "react";

import { useCount } from "./../../context/Context";

export default function Counter() {
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
}
