import React, { createContext, useState, useContext } from "react";

interface ICountContextData {
  count: number;
  setCount(value: number): void;
}

const CountContext = createContext<ICountContextData>({} as ICountContextData);

const CountProvider: React.FC = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};

export default CountProvider;

export function useCount() {
  const context = useContext(CountContext);
  if (!context) throw new Error("useCount must be used within a CountProvider");
  return context;
}
