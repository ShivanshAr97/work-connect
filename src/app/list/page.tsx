"use client"

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function List() {
  const [users, setUsers] = useState([{_id:"",name:"",role:"", photo:""}]);

  useEffect(() => {
    getIDs();
  }, []);

  const getIDs = async () => {
    try {
      const resp = await axios.get("/api/users/list");
      console.log(resp.data);
      setUsers(resp.data.data);
    } catch (error:any) {
      console.log(error.response.data);
    }
  }

  return (
    <div className="m-12">
          <h1 className="text-4xl mb-8">All users</h1>
          <hr />
            <hr />
            <div className="grid grid-cols-2">
      {users.map((user, index) => (
        <Link href={`profile/${user._id}`}><div className="m-4 p-4 flex items-center align-middle border rounded-md" key={index}>
            <img className="border rounded-full h-20 w-20 object-cover" key={index} src={user.photo} alt="" />
            <div className="p-4"  key={index}>
            <p  key={index}>Name: {user.name}</p>
            <p  key={index} className="capitalize">Role: {user.role}</p>
            </div>
        </div></Link>
      ))}
      </div>
    </div>
  );
}
