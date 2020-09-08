import React from "react";
import "./App.css";

import CountProvider from "./context/CountContext";

import Counter from "./components/Counter";
import DecreaseCounter from "./components/DecreaseCounter";

function App() {
  return (
    <CountProvider>
      <div className="App">
        <Counter />
        <DecreaseCounter />
      </div>
    </CountProvider>
  );
}

export default App;
