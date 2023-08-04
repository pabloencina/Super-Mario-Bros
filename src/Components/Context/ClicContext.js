import React, { createContext, useContext, useState } from "react";

const ClicksContext = createContext();

export function ClicksProvider({ children }) {
  const [totalClicks, setTotalClicks] = useState(0);

  const incrementTotalClicks = () => {
    setTotalClicks(totalClicks + 1);
  };

  return (
    <ClicksContext.Provider value={{ totalClicks, incrementTotalClicks }}>
      {children}
    </ClicksContext.Provider>
  );
}

export function useClicks() {
  return useContext(ClicksContext);
}
