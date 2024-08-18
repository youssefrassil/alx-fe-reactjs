import React, { createContext, useContext } from 'react';

// Create a Context object
const UserContext = createContext();

// Create a custom hook for easier consumption of the context
export const useUser = () => useContext(UserContext);

// Create a Context Provider component
export const UserProvider = ({ children, value }) => (
  <UserContext.Provider value={value}>
    {children}
  </UserContext.Provider>
);

export default UserContext;
