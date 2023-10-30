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
    <>
        <h1>{loading?"Processing":"Login"}</h1>
        <label htmlFor="name">Name</label>
        <input placeholder='' type="text" value={user.name} onChange={(e)=>setUser({...user, name:e.target.value})}/>
        <label htmlFor="name">Email</label>
        <input placeholder='' type="email" value={user.email} onChange={(e)=>setUser({...user, email:e.target.value})}/>
        <label htmlFor="name">Password</label>
        <input placeholder='' type="password" value={user.password} onChange={(e)=>setUser({...user, password:e.target.value})}/>
        <button onClick={onLogin}>{disabled?"No":"Log in"}</button>
        <Link href="/signup">Sign Up</Link>
        <ToastContainer />
    </>
  )
}