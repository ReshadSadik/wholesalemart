import React from 'react';
import { createContext } from 'react';
import useItems from '../hooks/useItems';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const allContents = useItems();
  return (
    <div>
      <AuthContext.Provider value={allContents}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
