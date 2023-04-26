import React, { createContext, useEffect, useState } from "react";

const FypContext = createContext(null);

const FypProvider = ({ children }) => {
  const [login, setLogin] = useState({
    username: "Test from context",
    password: "",
  });

  return (
    <FypContext.Provider
      value={{
        login,
      }}
    >
      {children}
    </FypContext.Provider>
  );
};

const WsbConsumer = FypContext.Consumer;
export { FypContext, FypProvider, WsbConsumer };
