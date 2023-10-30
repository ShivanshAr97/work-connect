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
        <div className="m-12">
        <h1 className="text-4xl mb-8">Verify Email</h1>
        <hr />
            <hr />
            <div className="my-8">

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
            </div>
            <Link href="/"><button className='text-blue-600 font-medium'>Return to home page</button></Link>
            <ToastContainer />
        </div>
    )
}
