import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  const [user,setUser]= useState({
    name:"",
    email:"",
    message:""
  })
const handleChnage=(e)=>{
  
  let name = e.target.name;
  let value = e.target.value

  setUser({...user,
  [name]:value})
}
const handleSubmit = (e)=>{
  e.preventDefault();
  console.log(user)
}

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-3">
        <label className='className="text-3x tracking-wider' htmlFor="name">
          Enter Name
        </label>
        <input
          className="bg-transparent px-14 py-3 border hover:border-b-2 text-center border-black rounded-md"
          type="text"
          placeholder="John Doe"
          name="name"
          onChange={handleChnage}
        />
        <label className='className="text-3x tracking-wider' htmlFor="name">
          Enter Email
        </label>
        <input
        name="email"
          className="bg-transparent px-14 py-3 border hover:border-b-2 text-center border-black rounded-md"
          type="text"
          placeholder="example@gmail.com"
          onChange={handleChnage}
        />
        <label className='className="text-3x tracking-wider' htmlFor="name">
          Enter Message
        </label>
        <textarea
          className="bg-transparent px-14 py-3 border hover:border-b-2 border-black rounded-md"
          name="message"
          id=""
          cols="20"
          rows="3"
          
          onChange={handleChnage}
          
        ></textarea>
        <button
          className="border-b-2 hover:border-t-2 hover:border-b-0 transition text-blue-500  border-blue-400 px-3 mt-9 py-2 rounded-full tracking-widest "
          type="submit"
        >
          Submit{" "}
          <div className="inline-block animate-ping">
            <IoIosSend />
          </div>{" "}
        </button>{" "}
      </div>
      </form>
    </div>
  );
};

export default Contact;
