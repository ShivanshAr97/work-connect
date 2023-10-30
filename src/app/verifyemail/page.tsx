"use client"

import Link from "next/link"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from "axios"
import React,{useEffect, useState} from "react"

export default function VerifyEmailPage() {

    const [token, setToken] = useState("")
    const [isVerified, setIsVerified] = useState(false)
    const [error, setError] = useState(false)

    const verifyUserEmail = async() =>{
        try {
            await axios.post("/api/users/verifyemail", {token})
            setIsVerified(true)
            toast.success("Verification successful")

        } catch (error:any) {
            setError(false)
            console.log(error.response.data);
            toast.error("Verification failed")
        }
    }

    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];
        setToken(urlToken || "");
    }, []);


    useEffect(() => {
        if(token.length > 0) {
            verifyUserEmail();
        }
    }, [token]);

    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">

            <h1 className="text-4xl">Verify Email</h1>
            <h2 className="p-2 bg-orange-500 text-black">{token ? `${token}` : "no token"}</h2>

            {isVerified && (
                <div>
                    <h2 className="text-2xl">Email Verified</h2>
                    <Link href="/signup">
                        Signup
                    </Link>
                </div>
            )}
            {error && (
                <div>
                    <h2 className="text-2xl bg-red-500 text-black">Error</h2>
                    
                </div>
            )}
            <ToastContainer />
        </div>
    )
}
