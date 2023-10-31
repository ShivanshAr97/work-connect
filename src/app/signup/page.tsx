"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const onSignUp = async () => {
    try {
      setLoading(true);
      const resp = await axios.post("/api/users/signup", user);
      console.log(resp.data);
      router.push("/profile");
      toast.success(resp.data.message);
    } catch (err: any) {
      console.log(err);
      toast.error("Email address or password incorrect");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [user]);

  return (
    <div className="mx-80 my-10 p-20  rounded-lg bg-c1Light">
      <h1 className="text-white font-bold text-4xl mb-8">
        {loading ? "Processing" : "Sign Up"}
      </h1>
      <hr className="rounded-full" />

      <div className="my-8">
        <form action=""></form>
        <label className="text-white text-lg" htmlFor="name">
          Email:{" "}
        </label>
        <br />
        <input
          className="text-white bg-c1 my-2 rounded-md outline-none px-4 py-2 placeholder:text-xs"
          placeholder="Enter your Email"
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <br />
        <br />
        <label className="text-white text-lg" htmlFor="name">
          Password
        </label>
        <br />
        <input
          className="text-white bg-c1 my-2 rounded-md outline-none px-4 py-2 placeholder:text-xs"
          placeholder="Enter Password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <br />
        <Link
          href="/resetpassword"
          className="text-c2 text-sm underline underline-offset-2"
        >
          Forgot Password
        </Link>
        <br />
        <a
          className="text-c2 text-sm underline underline-offset-2 "
          href="/api/auth/signin"
        >
          Sign in using Linkedin
        </a>
        <br />
        <br />
        <button
          className=" text-base bg-c3 rounded-md mt-4 px-8 py-2 font-medium"
          onClick={onSignUp}
        >
          Sign up
        </button>
      </div>
      <Link href="/login" className="text-green-600 font-medium">
        Log in instead
      </Link>
      <br />
      <ToastContainer />
    </div>
  );
}
