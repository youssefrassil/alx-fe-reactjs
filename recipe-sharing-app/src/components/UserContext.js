// src/components/UserContext.js
import React, { createContext, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children, value }) => {
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);

export default UserContext;
