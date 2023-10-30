"use client"

import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Login() {
  
  const router = useRouter()
  const [status, setStatus] = useState("")
  const [user, setUser] = useState({
    name:"",
    email:"",
    password:""
  })
  const [disabled, setDisabled] = useState(true)
  const [loading, setLoading] = useState(false)

  
  const onLogin=async()=>{
    try {
      setLoading(true)
      const resp = await axios.post("/api/users/login", user)
      console.log(resp.data);
      router.push('/signup')
      toast.success(resp.data.message)
    } catch (err:any) {
      toast.error("Email already registered")
      console.log(err);
    }finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    if(user.name.length>0 && user.email.length>0 && user.password.length>0){
      setDisabled(false)
    }
    else{
      setDisabled(true)
    }
  
  }, [user])
  

  return (
    <div className="m-12">
        <h1 className="text-4xl mb-8">{loading?"Processing":"Login"}</h1>
        <hr />
            <hr />
            <div className="my-8">
        <label htmlFor="name">Name</label>
        <br />
        <input className="border-2 my-2 rounded-md outline-none px-2 py-1" placeholder='Enter your name' type="text" value={user.name} onChange={(e)=>setUser({...user, name:e.target.value})}/>
        <br />
        <br />
        <label htmlFor="name">Email</label>
        <br />
        <input className="border-2 my-2 rounded-md outline-none px-2 py-1" placeholder='Enter your email' type="email" value={user.email} onChange={(e)=>setUser({...user, email:e.target.value})}/>
        <br />
        <br />
        <label htmlFor="name">Password</label>
        <br />
        <input className="border-2 my-2 rounded-md outline-none px-2 py-1" placeholder='Enter your password' type="password" value={user.password} onChange={(e)=>setUser({...user, password:e.target.value})}/>
        <br />
        <button className="border bg-red-500 mt-4 px-2 py-1 rounded-md font-medium" onClick={onLogin}>Log in</button>
        </div>
        <Link href="/signup" className='text-blue-600 font-medium'>Sign Up instead</Link>
        <ToastContainer />
    </div>
  )
}