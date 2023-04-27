import React, { createContext, useEffect, useState } from "react";

const FypContext = createContext(null);

const FypProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });

  const handleFormDataChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  return (
    <FypContext.Provider
      value={{
        userDetails,
        handleFormDataChange,
      }}
    >
      {children}
    </FypContext.Provider>
  );
};

const WsbConsumer = FypContext.Consumer;
export { FypContext, FypProvider, WsbConsumer };
