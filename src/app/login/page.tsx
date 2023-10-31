"use client";

import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [status, setStatus] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const resp = await axios.post("/api/users/login", user);
      console.log(resp.data);
      router.push("/signup");
      toast.success(resp.data.message);
    } catch (err: any) {
      toast.error("Email already registered");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.name.length > 0 &&
      user.email.length > 0 &&
      user.password.length > 0
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [user]);

  return (
    <div className="mx-80 my-10 p-20  rounded-lg bg-c1Light text-white">
      <h1 className="font-bold text-4xl mb-8">
        {loading ? "Processing" : "Login"}
      </h1>
      <hr />

      <div className="my-8">
        <label className="text-lg" htmlFor="name">
          Name
        </label>
        <br />
        <input
          className="bg-c1 my-2 rounded-md outline-none px-4 py-2 placeholder:text-xs"
          placeholder="Enter your name"
          type="text"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <br />
        <br />
        <label className="text-lg" htmlFor="name">
          Email
        </label>
        <br />
        <input
          className="bg-c1 my-2 rounded-md outline-none px-4 py-2 placeholder:text-xs"
          placeholder="Enter your email"
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <br />
        <br />
        <label className="text-lg" htmlFor="name">
          Password
        </label>
        <br />
        <input
          className="bg-c1 my-2 rounded-md outline-none px-4 py-2 placeholder:text-xs"
          placeholder="Enter your password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <br />
        <button
          className="text-base bg-c2 rounded-md mt-4 px-8 py-2 font-medium"
          onClick={onLogin}
        >
          Log in
        </button>
      </div>
      <Link href="/signup" className="text-c3 font-medium">
        Sign Up instead
      </Link>
      <ToastContainer />
    </div>
  );
}
