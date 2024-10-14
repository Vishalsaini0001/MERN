import { useEffect } from "react"
import { useAuth } from "../store/auth"
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();
    const {logoutUser} = useAuth();

    useEffect(()=>{
        logoutUser()
    },[logoutUser])
  return ( 
   navigate("/login")
   
  )
}

export default Logout