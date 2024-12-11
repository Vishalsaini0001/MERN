import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { useAuth } from "../store/auth";

const Contact = () => {
  const { userdata } = useAuth();
  console.log(userdata);

  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        alert("Message sent!");
        // Reset the form fields after successful submission
        setUser({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert("Failed to send!");
      }
    } catch (error) {
      console.log("message error..", error)
    }
  };

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
            value={user.name}
            onChange={handleChange}
          />
          <label className='className="text-3x tracking-wider' htmlFor="email">
            Enter Email
          </label>
          <input
            className="bg-transparent px-14 py-3 border hover:border-b-2 text-center border-black rounded-md"
            type="text"
            placeholder="example@gmail.com"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <label
            className='className="text-3x tracking-wider'
            htmlFor="message"
          >
            Enter Message
          </label>
          <textarea
            className="bg-transparent px-14 py-3 border hover:border-b-2 border-black rounded-md"
            name="message"
            cols="20"
            rows="3"
            value={user.message}
            onChange={handleChange}
          ></textarea>
          <button
            className="border-b-2 hover:border-t-2 hover:border-b-0 transition text-blue-500  border-blue-400 px-3 mt-9 py-2 rounded-full tracking-widest"
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
