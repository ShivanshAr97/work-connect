import React from "react";
import Link from "next/link";
import { NextRequest } from "next/server";

const Header: React.FC = () => {
  const token = "";
  return (
    <nav className="flex text-white justify-between items-center p-10">
      <div>
        <h1 className="font-extrabold text-c3 text-2xl underline underline-offset-8">
          WorkConnect
        </h1>
        <p className="text-xl antialiased tracking-widest leading-8 text-center">
          Open for Work
        </p>
      </div>
      <ul className="flex gap-10">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/"}>About</Link>
        </li>
        <li>
          <Link href={"/"}>Contact</Link>
        </li>
      </ul>
      <Link href={"/profile"}>
        <button className="text-lg bg-c2 rounded-full p-3">
          {token !== "" ? "User" : "Sign In / Sign Up"}
        </button>
      </Link>
    </nav>
  );
};

export default Header;
