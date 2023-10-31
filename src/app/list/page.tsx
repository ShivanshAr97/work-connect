"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function List() {
  const [users, setUsers] = useState([
    { _id: "", name: "", role: "", photo: "" },
  ]);

  useEffect(() => {
    getIDs();
  }, []);

  const getIDs = async () => {
    try {
      const resp = await axios.get("/api/users/list");
      console.log(resp.data);
      setUsers(resp.data.data);
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="text-white mx-40 my-10 p-20  rounded-lg bg-c1Light">
      <h1 className="text-4xl font-bold mb-8">All users</h1>
      <hr />
      <hr />
      <div className="grid grid-cols-2">
        {users.map((user, index) => (
          <Link key={user._id} href={`profile/${user._id}`}>
            <div className="m-4 p-4 flex items-center align-middle border rounded-md">
              <Image src={user.photo} alt={user.name} width={50} height={50} />
              {/* <img className="border rounded-full h-20 w-20 object-cover" key={index} src={user.photo} alt="" /> */}
              <div className="p-4">
                <p className="font-bold">
                  Name: <span className="font-normal">{user.name}</span>
                </p>
                <p className="font-bold">
                  Role: <span className="text-c3">{user.role}</span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
