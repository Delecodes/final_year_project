import React, { createContext, useEffect, useState } from "react";

const FypContext = createContext(null);

const FypProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,}$/;
    setIsValid(regex.test(userDetails.password));
  }, [userDetails.password]);

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
        isValid,
        setIsValid,
        handleFormDataChange,
      }}
    >
      {children}
    </FypContext.Provider>
  );
};

const WsbConsumer = FypContext.Consumer;
export { FypContext, FypProvider, WsbConsumer };
