import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const getLoggin = localStorage.getItem('login')
  const [isLoggedIn, setIsLoggedIn] = useState(getLoggin);
  const [userName, setUserName] = useState("") 

  const login = () => {
    localStorage.setItem('login', true)
    setIsLoggedIn(true);
  }
  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, userName, setUserName }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
