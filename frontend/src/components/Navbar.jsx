import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex justify-evenly items-center h-20 b border-b text-gray-600">
      <h3 className="text-red-400">LOGO</h3>
      <nav>
        <ul className="flex gap-12">
          <li>
            <NavLink to="/"> Home</NavLink>
          </li>
          <li>
            <NavLink to="/about"> About</NavLink>
          </li>
          <li>
            <NavLink to="/contact"> Contact</NavLink>
          </li>
          <li>
            <NavLink to="/register"> Register</NavLink>
          </li>
          <li>
            <NavLink to="/login"> Login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
