"use client"

import axios from "axios"
import React,{useEffect, useState} from "react"

export default function ForgotPasswordPage() {

    const [token, setToken] = useState("")
    const [password, setPassword] = useState("")

    const save = async() =>{
        try {
            await axios.post("/api/users/forgotpassword", {token, password})

        } catch (error:any) {
            console.log(error);
            
        }
    }

    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];
        setToken(urlToken || "");
    }, []);

    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">

            <h1 className="text-4xl">Set Password</h1>
            <input type="password" placeholder="Enter new password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={save}>Save new</button>
        </div>
    )
}
