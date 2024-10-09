import React, { useState } from 'react'
import { AiFillOpenAI } from "react-icons/ai";

const Register = () => {

const [user,setUser]= useState({
  username:"",
  phone:"",
  email:"",
  password:"",
});
const handlechnage=(e)=> {

let name = e.target.name;
let value = e.target.value
setUser({...user,
  [name]: value}
  )

}
const handlesubmit = (e)=>{
 e.preventDefault()
 console.log(user)

}

  return (
    <div className='h-screen w-full  '>
      <form  onSubmit={handlesubmit} className='flex flex-col gap-7 justify-center items-center'>
        <label className='text-3xl pt-20 pb-3 tracking-wider' htmlFor="register">Register now!</label>
        <div><input className='bg-transparent px-14 py-3 border hover:border-b-2 text-center border-black rounded-md' type="text" name='username' placeholder='Enter Username' value={user.username} onChange={handlechnage} /></div>
        <div><input className='bg-transparent px-14 py-3 border hover:border-b-2 text-center border-black rounded-md' type="email" name='email' placeholder='Enter email' onChange={handlechnage} value={user.email} /></div>
        <div><input className='bg-transparent px-14 py-3 border hover:border-b-2 text-center border-black rounded-md' type="number" name='phone' placeholder='Enter phone no' onChange={handlechnage} value={user.phone}/></div>
        <div><input className='bg-transparent px-14 py-3 border hover:border-b-2 text-center border-black rounded-md' type="password" name='password' placeholder='Enter password' onChange={handlechnage} value={user.password} /></div>
        <div><button className='border-b-2 hover:border-t-2 hover:border-b-0 transition text-blue-500  border-blue-400 px-10 py-2 rounded-full tracking-widest ' type='submit'>Register <div className='inline-block animate-spin'><AiFillOpenAI/></div> </button> </div>
      </form>
    </div>
  )
}

export default Register