import React, { createContext, useCallback, useState } from "react";

export type CounntContextData = {
  count: number;
  incrementCount: () => void;
  decrementCount: () => void;
};

const CountContext = createContext<CounntContextData>({} as CounntContextData);

const CountProvider: React.FC = ({ children }) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count + 1);
  };

  return (
    <CountContext.Provider
      value={{
        count,
        incrementCount,
        decrementCount,
      }}
    >
      {children}
    </CountContext.Provider>
  );
};

export { CountProvider, CountContext };
