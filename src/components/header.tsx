// import React, { useState } from "react";

import Link from "next/link";

const Header = () => {
  // const [toggle, setToggle] = useState(false);

  // const handleClick = () => {
  //   setToggle(!toggle);
  // };
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
        <li>
          <Link href={"/list"}>Candidate</Link>
        </li>
      </ul>
      <Link href={"/profile"}>
        <button
          className="text-base bg-c2 rounded-md mt-4 px-8 py-2 font-medium"
          // onClick={handleClick}
        >
          {/* {toggle ? "User" : "Sign In / Sign Up"} */}
          User
        </button>
      </Link>
    </nav>
  );
};

export default Header;
