"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();
  const [editable, setEditable] = useState(false);
  const [data, setData] = useState({
    name: "",
    password: "",
    email: "",
    video: "",
    about: "",
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

  const logout = async () => {
    try {
      const resp = await axios.get("/api/users/logout");
      console.log("success");
      router.push("/signup");
    } catch (err) {
      console.log(err);
    }
  };

  const editSettings = () => {
    setEditable(!editable);
    console.log({ data });
  };

  const getUserDetails = async () => {
    try {
      const res = await axios.get("/api/users/userinfo");
      console.log(res.data.data);

      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const saveChanges = async () => {
    try {
      const response = await axios.put("/api/users/profile", data);
      console.log("Data saved successfully:", response.data);
    } catch (error: any) {
      console.error("Error saving data:", error.response.data);
    }
  };
  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div className="mx-40 my-10 p-20 text-white rounded-lg bg-c1Light">
      <div className="flex justify-between items-center align-middle mb-16">
        <h1 className="text-4xl font-bold">Your Profile</h1>
        <button
          className="text-base bg-c2 rounded-md mt-4 px-8 py-2 font-medium"
          onClick={logout}
        >
          Logout
        </button>
      </div>
      {data ? (
        <>
          <p className="my-4">
            Name:
            <input
              className="mx-8 bg-c1 my-2 rounded-md outline-none px-4 py-2 placeholder:text-xs opacity-40"
              type="text"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              disabled
            />
          </p>
          <p className="my-4">
            Email:
            <input
              className="opacity-40 mx-8 bg-c1 my-2 rounded-md outline-none px-4 py-2 placeholder:text-xs"
              type="text"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              disabled
            />
          </p>
          <p className="my-4">
            Video Url:
            <input
              className={
                editable
                  ? "mx-8 bg-c1 my-2 rounded-md outline-none px-4 py-2 placeholder:text-xs"
                  : " mx-8 bg-c1 my-2 rounded-md outline-none px-4 py-2 placeholder:text-xs opacity-40"
              }
              type="url"
              pattern=".*\youtube.com\.*"
              onChange={(e) => setData({ ...data, video: e.target.value })}
              disabled={!editable}
            />
          </p>

          <label className="my-4" htmlFor="roles">
            Role:{" "}
          </label>
          <select
            className="mx-8 bg-c1 my-2 rounded-md outline-none px-4 py-2 placeholder:text-xs"
            name="role"
            id="role"
            onChange={(e) => setData({ ...data, role: e.target.value })}
            disabled={!editable}
          >
            <option value="none">Select one</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="content specialist">Content Specialist</option>
            <option value="product manager">Product Managers</option>
          </select>

          <p className="my-4">About:</p>

          <textarea
            className={
              editable
                ? " bg-c1 my-2 rounded-md outline-none px-4 py-2 placeholder:text-xs"
                : " bg-c1 my-2 rounded-md outline-none px-4 py-2 placeholder:text-xs opacity-40"
            }
            rows={5}
            cols={90}
            value={data.about}
            onChange={(e) => setData({ ...data, about: e.target.value })}
            disabled={!editable}
          />
          <p className="my-4">Achievements: </p>
          <textarea
            className={
              editable
                ? "bg-c1 my-2 rounded-md outline-none px-4 py-2 placeholder:text-xs"
                : "bg-c1 my-2 rounded-md outline-none px-4 py-2 placeholder:text-xs opacity-40"
            }
            rows={5}
            cols={90}
            value={data.achievements}
            onChange={(e) => setData({ ...data, achievements: e.target.value })}
            disabled={!editable}
          />

          {data.role === "designer" && (
            <div className="flex items-center align-middle">
              <p className="my-4">Behance</p>

              <input
                className="mx-2  bg-c1 my-2 rounded-md outline-none px-4 py-2 placeholder:text-xs"
                type="url"
                onChange={(e) =>
                  setData({
                    ...data,
                    links: { ...data.links, behance: e.target.value },
                  })
                }
                disabled={!editable}
                pattern=".*\behance.com\.*"
              />
              <br />
              <p className="my-4">Dribbble</p>
              <input
                className="mx-2 bg-c1 my-2 rounded-md outline-none px-4 py-2 placeholder:text-xs"
                type="url"
                onChange={(e) =>
                  setData({
                    ...data,
                    links: { ...data.links, dribble: e.target.value },
                  })
                }
                disabled={!editable}
                pattern=".*\dribble.com\.*"
              />
              <br />
            </div>
          )}
          {data.role === "developer" && (
            <div className="flex items-center align-middle">
              <p className="my-4">GitHub</p>
              <input
                className="mx-2 bg-c1 my-2 rounded-md outline-none px-4 py-2 placeholder:text-xs"
                type="url"
                onChange={(e) =>
                  setData({
                    ...data,
                    links: { ...data.links, github: e.target.value },
                  })
                }
                disabled={!editable}
                pattern=".*\github.com\.*"
              />
              <br />
              <p className="my-4">StackOverflow</p>
              <input
                className="mx-2 bg-c1 my-2 rounded-md outline-none px-4 py-2 placeholder:text-xs"
                type="url"
                onChange={(e) =>
                  setData({
                    ...data,
                    links: { ...data.links, stackoverflow: e.target.value },
                  })
                }
                disabled={!editable}
                pattern=".*\stackoverflow.com\.*"
              />
              <br />
              <p className="my-4">LeetCode</p>
              <input
                className="mx-2 bg-c1 my-2 rounded-md outline-none px-4 py-2 placeholder:text-xs"
                type="url"
                onChange={(e) =>
                  setData({
                    ...data,
                    links: { ...data.links, leetcode: e.target.value },
                  })
                }
                disabled={!editable}
                pattern=".*\leetcode.com\.*"
              />
            </div>
          )}
          {data.role === "content specialist" && (
            <div className="flex items-center align-middle">
              <p className="my-4">Medium</p>
              <input
                className="mx-2 bg-c1 my-2 rounded-md outline-none px-4 py-2 placeholder:text-xs"
                type="url"
                onChange={(e) =>
                  setData({
                    ...data,
                    links: { ...data.links, medium: e.target.value },
                  })
                }
                disabled={!editable}
                pattern=".*\medium.com\.*"
              />
              <br />
              <p className="my-4">Blog</p>
              <input
                className="mx-2 border-2 my-2 rounded-md outline-none px-2 py-1"
                type="url"
                onChange={(e) =>
                  setData({
                    ...data,
                    links: { ...data.links, blog: e.target.value },
                  })
                }
                disabled={!editable}
              />
            </div>
          )}
          {data.role === "product manager" && (
            <div className="flex items-center align-middle">
              <p className="my-4">Facebook</p>
              <input
                className="mx-2 border-2 my-2 rounded-md outline-none px-2 py-1"
                type="url"
                onChange={(e) =>
                  setData({
                    ...data,
                    links: { ...data.links, facebook: e.target.value },
                  })
                }
                disabled={!editable}
                pattern=".*\facebook.com\.*"
              />
              <br />
              <p className="my-4">Instagram</p>
              <input
                className="mx-2 border-2 my-2 rounded-md outline-none px-2 py-1"
                type="url"
                onChange={(e) =>
                  setData({
                    ...data,
                    links: { ...data.links, instagram: e.target.value },
                  })
                }
                disabled={!editable}
                pattern=".*\instagram.com\.*"
              />
              <br />
              <p className="my-4">Youtube</p>
              <input
                className="mx-2 border-2 my-2 rounded-md outline-none px-2 py-1"
                type="url"
                onChange={(e) =>
                  setData({
                    ...data,
                    links: { ...data.links, youtube: e.target.value },
                  })
                }
                disabled={!editable}
                pattern=".*\youtube.com\.*"
              />
            </div>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
      <br />

      <button
        className="text-base bg-c2 rounded-md mt-4 px-8 py-2 font-medium my-4"
        onClick={editSettings}
      >
        Edit
      </button>
      <button
        className="text-base bg-c3 rounded-md mt-4 px-8 py-2 font-medium mx-4"
        onClick={saveChanges}
      >
        Save
      </button>
    </div>
  );
}
