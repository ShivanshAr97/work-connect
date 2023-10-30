"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function UserProfile({ params }: any) {
  const [id, setId] = useState("")
  const [newVideo, setNewVideo]=useState("")
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
      const video = userData.data.video
      const wVideo = video.replace("watch", "embed");
      setNewVideo(wVideo)
      console.log(wVideo);
      
      

    } catch (error:any) {
      console.log("An error occurred: ", error.message);
    }
  };
  

  return (
    <div>
      {user ? (
        <div className="m-12">
          <h1 className="text-4xl mb-8">User Profile</h1>
          <hr />
          <hr />
          <div className="my-8">
            <div className='flex align-middle items-center'>
            <img className='border rounded-full h-20 w-20 object-cover' src={user.profilePhoto} alt="" />
            <div className='mx-4'>
            <span className='text-2xl'>{user.name}</span>
            <p>{user.email}</p>

            </div>

            </div>
            <p className='text-xs'>Role: </p>
          <p className='capitalize text-lg'>{user.role}</p>
          <p className='my-2 text-xs'>Video: </p>
          {newVideo &&<iframe className='mx-auto rounded-md my-4' width="400" height="250" src={newVideo} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>}
          <p className='my-2 text-xs'>About:</p>
          <p> {user.about}</p>
          <p className='my-2 text-xs'>Achievements:</p>
          <p> {user.achievements}</p>
          <p className='my-2 text-xs'>Links</p>
      {user.role === "developer" && (
        <div>
        {<div>
          <p>Github:</p>
          <p>{user.links.github}</p>
          <p>Stackoverflow:</p>
          <p>{user.links.stackoverflow}</p>
          <p>Leetcode:</p>
          <p>{user.links.leetcode}</p>
        </div>}
    </div>)}
  {user.role === "designer" && (
    <div>
        {<div>
          <p>Behance:</p>
          <p>{user.links.behance}</p>
          <p>Dribble:</p>
          <p>{user.links.dribble}</p>
        </div>}
    </div>)}

  {user.role === "content specialist" && (
    <div>
        {<div>
          <p>Medium:</p>
          <p>{user.links.medium}</p>
          <p>Blog:</p>
          <p>{user.links.blog}</p>
        </div>}
    </div>)}

  {user.role === "product managers" && (
      <div>
        {<div>
          <p>Facebook:</p>
          <p>{user.links.facebook}</p>
          <p>Instagram:</p>
          <p>{user.links.instagram}</p>
          <p>Youtube:</p>
          <p>{user.links.youtube}</p>
        </div>}
    </div>)}

      </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
