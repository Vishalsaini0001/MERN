import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

const Navbar = () => {
  const {isLoggedIn} = useAuth();
   

  return (
    <header className="flex md:justify-evenly items-center md:h-20 h-14 flex-col md:flex-row   ">
      <h3 className="text-red-400">LOGO</h3>
      <nav>
        <ul className="flex gap-3 text-xs tracking-widest text-red-500 md:text-base md:gap-12">
          <li>
            <NavLink to="/"> Home</NavLink>
          </li>
          <li>
            <NavLink to="/about"> About</NavLink>
          </li>
          <li>
            <NavLink to="/contact"> Contact</NavLink>
          </li>
          {isLoggedIn ? <li>
            <NavLink to="/logout">Logout</NavLink>
          </li>
          : <>
           <li> 
            <NavLink to="/register"> Register</NavLink>
          </li>
          <li>
            <NavLink to="/login"> Login</NavLink>
          </li>
          </>}
         
         
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
