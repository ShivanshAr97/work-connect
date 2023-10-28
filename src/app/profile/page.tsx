"use client"

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Profile() {
  const router = useRouter()
  const [data, setData] = useState("nothing")

  const logout=async()=>{
    try {
      const resp = await axios.get('/api/users/logout')
      console.log("success");
      router.push("/signup")
    } catch (err:any) {
      console.log(err);
    }
  }

  const getUserDetails = async () => {
    const res = await axios.get('/api/users/userinfo')
    console.log(res.data);
    setData(res.data.data._id)
}

  return (
    <div>
      Profile
      <h2 className="p-1 rounded bg-green-500">{data === 'nothing' ? "Nothing" : <Link href={`/profile/${data}`}>{data}
            </Link>}</h2>
      <button onClick={logout}>Logout</button>
      
        <hr />

        <button
        onClick={getUserDetails}
        className="bg-green-800 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >GetUser Details</button>
    </div>

  )
}
