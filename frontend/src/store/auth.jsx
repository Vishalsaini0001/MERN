import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const setLocalToken = (token) => {
    return localStorage.setItem("token", token);
  };

  return (
    <AuthContext.Provider value={{ setLocalToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
