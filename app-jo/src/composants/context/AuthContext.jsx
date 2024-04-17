import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext({
  authData: null,
  setAuthData: () => {},
});

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(JSON.parse(localStorage.getItem('authData')));

  useEffect(() => {
    if (authData) {
      localStorage.setItem('authData', JSON.stringify(authData));
    } else {
      localStorage.removeItem('authData');
    }
  }, [authData]);

  const providerAuthData = {
    authData,
    setAuthData,
  };

  return (
    <AuthContext.Provider value={providerAuthData}>
      {children}
    </AuthContext.Provider>
  );
};
