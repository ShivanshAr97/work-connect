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
        <div className="m-12">
            <h1 className="text-4xl mb-8">Reset Password</h1>
            <hr />
            <hr />
            <div className="my-8">
                <input className="border-2 rounded-md outline-none px-2 py-1" type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <button className="border bg-green-500 px-2 py-1 mx-4 rounded-md font-medium"  onClick={resetPassword}>Reset</button>
            </div>
        </div>
    )
}
