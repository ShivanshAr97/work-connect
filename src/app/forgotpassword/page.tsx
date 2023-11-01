"use client"

import axios from "axios"
import React,{useEffect, useState} from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'

export default function ForgotPasswordPage() {
    const router = useRouter()
    const [token, setToken] = useState("")
    const [password, setPassword] = useState("")

    const save = async() =>{
        try {
            await axios.post("/api/users/forgotpassword", {token, password})
            toast.success("Password changed successfully")
            router.push('/signup')
        } catch (error:any) {
            console.log(error);
            toast.error("Failed")
            
        }
    }

    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];
        setToken(urlToken || "");
    }, []);

    return(
        <>
        <div className="mx-24 mb-40">
            <h1 className="text-4xl text-white mb-8">Set Password</h1>
            <hr />
            <hr />
            <div className="my-8">
                <input className="border-2 rounded-md mt-12 outline-none px-2 py-1" type="password" placeholder="Enter new password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button className="border bg-green-500 px-2 py-1 mx-4 rounded-md font-medium" onClick={save}>Save new</button>
            </div>
        </div>
        <ToastContainer />
        </>
        
    )
}
