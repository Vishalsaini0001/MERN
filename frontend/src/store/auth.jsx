import e from "cors";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"))
    const [ userdata, setUser] = useState("")

  const setLocalToken = (token) => {
    setToken(token)
    return localStorage.setItem("token", token);
  };

  let isLoggedIn = !!token;
  
  const logoutUser = ()=>{
     setToken("");
    return localStorage.removeItem("token")
  }

  const userAuthentication = async ()=>{
  try {
    const response = await fetch("http://localhost:3000/api/user",{
      method:"GET",
      headers:{
        Authorization:`bearer ${token}`
      }
    }) 
    const data = await response.json();
    setUser(data);
  } catch (error) {
    console.log("authentication error",error)
  }
  }

  // get the current logged user
  useEffect(()=>{
    userAuthentication();
  },[])

  return (
    <AuthContext.Provider value={{ setLocalToken,logoutUser,isLoggedIn,userdata }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
