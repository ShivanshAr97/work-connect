"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function UserProfile({ params }: any) {
  const [id, setId] = useState("")
  const [user, setUser] = useState({
    name: "",
    password:"",
    email: "",
    video: "",
    about: "",
    profilePhoto:"",
    achievements: "",
    role: "",
    links: {
      behance: "",
      leetcode: "",
      stackoverflow: "",
      github: "",
      dribble: "",
      medium: "",
      blog: "",
      facebook: "",
      instagram: "",
      youtube: "",
    }
  })

  useEffect(() => {
      profileShowCase()
  }, [params.id]);

  const profileShowCase = async () => {
    const userId = window.location.pathname.split("/")[2];
    setId(userId)
    try {
      
      const resp = await axios.post(`/api/users/profile/${userId}`, {userId});

      // console.log(userId);
      const userData = resp.data
      console.log(userData);
      
      setUser(userData.data);

    } catch (error:any) {
      console.log("An error occurred: ", error.message);
    }
  };
  

  return (
    <div>
      {user ? (
        <div>
          <h2>User Profile</h2>
          <p>Name: {user.name}</p>
          <img className='border rounded-full h-20 w-20 object-cover' src={user.profilePhoto} alt="" />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
