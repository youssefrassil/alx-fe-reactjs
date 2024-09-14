import React, { createContext } from 'react';
import { UserContext } from '../context/UserContext';

const UserContext = createContext();

export const UserProvider = ({ children, value }) => (
  <UserContext.Provider value={value}>
    {children}
  </UserContext.Provider>
);

export const useUser = () => React.useContext(UserContext);

export default UserContext; // Ensure UserContext is also exported as default
