import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"))

  const setLocalToken = (token) => {
    setToken(token)
    return localStorage.setItem("token", token);
  };

  let isLoggedIn = !!token;
  
  const logoutUser = ()=>{
     setToken("");
    return localStorage.removeItem("token")
  }

  return (
    <AuthContext.Provider value={{ setLocalToken,logoutUser,isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
