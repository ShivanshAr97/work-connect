"use client"

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Signup() {
  const router = useRouter()
  const [user, setUser] = useState({
    email:"",
    password:""
  })
  const [disabled, setDisabled] = useState(true)
  const [loading, setLoading] = useState(false)

  
  const onSignUp=async()=>{
    try {
      setLoading(true)
      const resp = await axios.post("/api/users/signup", user)
      console.log(resp.data);
      router.push('/profile')
    } catch (err:any) {
      console.log(err);
      
    }finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    if(user.email.length>0 && user.password.length>0){
      setDisabled(false)
    }
    else{
      setDisabled(true)
    }
  
  }, [user])
  
  return (
    <>
        <h1>{loading?"Processing":"Sign Up"}</h1>
        <label htmlFor="name">Email</label>
        <input placeholder='' type="email" value={user.email} onChange={(e)=>setUser({...user, email:e.target.value})}/>
        <label htmlFor="name">Password</label>
        <input placeholder='' type="password" value={user.password} onChange={(e)=>setUser({...user, password:e.target.value})}/>
        <button onClick={onSignUp}>{disabled?"No":"Sign up"}</button>
        <Link href="/login">Log in</Link>
        <br />
        <Link href="/resetpassword">Forgot Password</Link>
    </>
  )
}