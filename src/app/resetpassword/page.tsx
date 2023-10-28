"use client"

import axios from "axios"
import React,{useEffect, useState} from "react"

export default function ForgotPasswordPage() {

    const [email, setEmail] = useState("")
    
    const resetPassword = async() =>{
        console.log("Goejfp");
        
        try {
            await axios.post("/api/users/resetpassword", {email})

        } catch (error) {
            console.log(error);   
        }
    }

    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl">Reset Password</h1>
            <input type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <button onClick={resetPassword}>Reset</button>
        </div>
    )
}
