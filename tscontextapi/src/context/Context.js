import React, { createContext, useState, useContext } from "react";

const CountContext = createContext();

export default function CountProvider({ children }) {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

export function useCount() {
  const context = useContext(CountContext);
  if (!context)
    throw new Error(
      "useCount() must be used within a CountProvider(): App.tsx has to wrap it as declaring components that must have providers on ContextAPI environment."
    );
  const { count, setCount } = context;
  return { count, setCount };
}
