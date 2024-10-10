import React, { useState } from "react";
import { AiFillOpenAI } from "react-icons/ai";
import { NavLink,useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handlechange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        setUser({
          email: "",
          password: "",
        });
       navigate('/')
      }
    } catch (error) {
      console.log("login error....",error);
    }
  };
  return (
    <div className="h-screen w-full  ">
      <form
        onSubmit={handlesubmit}
        className="flex flex-col gap-4 justify-center items-center"
      >
        <label className="text-3xl pt-20 pb-3 tracking-wider" htmlFor="login">
          Login Now!
        </label>
        <div>
          <input
            type="email"
            onChange={handlechange}
            className="bg-transparent px-14 py-3 border hover:border-b-2 text-center border-black rounded-md"
            name="email"
            placeholder="Enter email"
          />
        </div>
        <div>
          <input
            type="password"
            onChange={handlechange}
            className="bg-transparent px-14 py-3 border hover:border-b-2 text-center border-black rounded-md"
            name="password"
            placeholder="Enter password"
          />
        </div>
        <div>
          <button
            className="border-b-2 hover:border-t-2 hover:border-b-0 transition text-blue-500  border-blue-400 px-10 py-2 rounded-full tracking-widest "
            type="submit"
          >
            Login{" "}
            <div className="inline-block animate-spin">
              <AiFillOpenAI />
            </div>{" "}
          </button>{" "}
        </div>
        <p className="mt-0 inline-block ">
          Don't have account!{" "}
          <NavLink
            className="text-blue-400 tracking-wider  hover:underline"
            to="/register"
          >
            Sign Up
          </NavLink>{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
