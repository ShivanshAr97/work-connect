"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

export default function UserProfile({ params }: any) {
  const [id, setId] = useState("");
  const [newVideo, setNewVideo] = useState("");
  const [user, setUser] = useState({
    name: "",
    password: "",
    email: "",
    video: "",
    about: "",
    profilePhoto: "",
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
    },
  });

  useEffect(() => {
    profileShowCase();
  }, [params.id]);

  const profileShowCase = async () => {
    const userId = window.location.pathname.split("/")[2];
    setId(userId);
    try {
      const resp = await axios.post(`/api/users/profile/${userId}`, { userId });

      // console.log(userId);
      const userData = resp.data;
      console.log(userData);

      setUser(userData.data);
      // const video = userData.data.video
      // const wVideo = video.replace("watch", "embed");
      // setNewVideo(wVideo)
      // console.log(wVideo);
    } catch (error: any) {
      console.log("An error occurred: ", error.message);
    }
  };

  return (
    <div>
      {user ? (
        <div className="text-white mx-40 my-10 p-20  rounded-lg bg-c1Light">
          <h1 className="text-4xl mb-8">User Profile</h1>
          <hr />
          <hr />
          <div className="my-8">
            <div className="flex align-middle items-center">
              <Image
                src={user.profilePhoto}
                alt={user.name}
                width={50}
                height={50}
              />
              {/* <img className='border rounded-full h-20 w-20 object-cover' src={user.profilePhoto} alt="" /> */}
              <div className="mx-4">
                <span className="text-2xl">{user.name}</span>
                <p>{user.email}</p>
              </div>
            </div>
            <p className="text-xl font-extrabold mt-4">Role: </p>
            <p className="capitalize text-base">{user.role}</p>
            <p className="text-xl font-extrabold mt-4">Video: </p>
            {user.video && (
              <iframe
                className="mx-auto rounded-md my-2"
                width="400"
                height="250"
                src={user.video}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            )}
            <p className="text-xl font-extrabold my-2">About:</p>
            <p> {user.about}</p>
            <p className="text-xl font-extrabold my-2">Achievements:</p>
            <p> {user.achievements}</p>
            <p className="text-xl font-extrabold my-2">Links:</p>
            {user.role === "developer" && user.links && (
              <div>
                {
                  <div className="flex">
                    <a href={`${user.links.github}`}>
                      <p>GitHub</p>
                    </a>
                    <a className="mx-12" href={`${user.links.stackoverflow}`}>
                      <p>StackOverflow</p>
                    </a>
                    <a href={`${user.links.leetcode}`}>
                      <p>LeetCode</p>
                    </a>
                  </div>
                }
              </div>
            )}
            {user.role === "designer" && user.links && (
              <div>
                {
                  <div className="flex">
                    <a href={`${user.links.behance}`}>
                      <p>Behance</p>
                    </a>
                    <a className="mx-12" href={`${user.links.dribble}`}>
                      <p>Dribbble</p>
                    </a>
                  </div>
                }
              </div>
            )}

            {user.role === "content specialist" && user.links && (
              <div>
                {
                  <div className="flex">
                    <a href={`${user.links.medium}`}>
                      <p>Medium</p>
                    </a>
                    <a className="mx-12" href={`${user.links.blog}`}>
                      <p>Blog</p>
                    </a>
                  </div>
                }
              </div>
            )}

            {user.role === "product manager" && user.links && (
              <div>
                {
                  <div className="flex">
                    <a href={`${user.links.facebook}`}>
                      <p>Facebook</p>
                    </a>
                    <a className="mx-12" href={`${user.links.instagram}`}>
                      <p>Instagram</p>
                    </a>
                    <a href={`${user.links.youtube}`}>
                      <p>Youtube</p>
                    </a>
                  </div>
                }
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
