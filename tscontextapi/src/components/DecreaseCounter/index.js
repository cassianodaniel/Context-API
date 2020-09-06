import React from "react";

import { useCount } from "./../../context/Context";

export default function DecreaseCounter() {
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
}
