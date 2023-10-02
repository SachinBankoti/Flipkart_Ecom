import React, { useState } from "react";
import { createContext } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [accountt, setAccount] = useState("");
  return (
    <DataContext.Provider
      value={{
        setAccount,
        accountt,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
