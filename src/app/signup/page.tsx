"use client"

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
      toast.success(resp.data.message)
    } catch (err:any) {
      console.log(err);
      toast.error("Email address or password incorrect")
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
    <div className="m-12">
        <h1 className="text-4xl mb-8">{loading?"Processing":"Sign Up"}</h1>
        <hr />
            <hr />
            <div className="my-8">
        <label htmlFor="name">Email: </label>
        <br />
        <input className="border-2 my-2 rounded-md outline-none px-2 py-1" placeholder='Enter email address' type="email" value={user.email} onChange={(e)=>setUser({...user, email:e.target.value})}/>
        <br />
        <br />
        <label htmlFor="name">Password</label>
        <br />
        <input className="border-2 my-2 rounded-md outline-none px-2 py-1" placeholder='Enter password' type="password" value={user.password} onChange={(e)=>setUser({...user, password:e.target.value})}/>
        <Link href="/resetpassword" className='text-sm mx-12'>Forgot Password</Link>
        <br />
        <button className="border bg-red-500 mt-4 px-2 py-1 rounded-md font-medium" onClick={onSignUp}>Sign up</button>
        </div>
        <a className='px-6 py-3 text-white bg-violet-800 rounded-md ' href='/api/auth/signin'>Sign in using Linkedin</a>
        <br />
        <br />
        <Link href="/login" className='text-green-600 font-medium'>Log in instead</Link>
        <br />
        <ToastContainer />
    </div>
  )
}