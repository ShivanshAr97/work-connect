"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Profile() {
  const router = useRouter();
  const [editable, setEditable] = useState(false)
  const [data, setData] = useState({
    name: "",
    password:"",
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
      const resp = await axios.get('/api/users/logout');
      console.log("success");
      router.push("/signup");
    } catch (err) {
      console.log(err);
    }
  }

  const editSettings=()=>{
      setEditable(!editable)
      console.log({data});
      
  }

  const getUserDetails = async () => {
    try {
      const res = await axios.get('/api/users/userinfo');
      console.log(res.data.data);
      
      setData(res.data.data);
      
    } catch (error) {
      console.log(error);
    }
  }
  const saveChanges = async () => {
    try {
      const response = await axios.put('/api/users/profile', data);
      console.log('Data saved successfully:', response.data);
    } catch (error:any) {
      console.error('Error saving data:', error.response.data);
    }
  }
  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div>
      Profile
      <button onClick={logout}>Logout</button>

      {data ? 
      <>
        <p>Name:  
          <input className="opacity-40" type="text" value={data.name} onChange={(e)=>setData({...data, name:e.target.value})} disabled /></p>
          <p>Email:  
          <input className="opacity-40" type="text" value={data.email} onChange={(e)=>setData({...data, email:e.target.value})} disabled /></p>
          <p>Password:  
          <input className="opacity-40" type="password" value={data.password} onChange={(e)=>setData({...data, password:e.target.value})} disabled /></p>
          <p>Video:  
          <input className={editable?"":"opacity-40"} type="url" pattern=".*\youtube.com\.*" onChange={(e)=>setData({...data, video:e.target.value})} disabled={!editable} /></p>
          
          <label htmlFor="roles">Role: </label>
            <select name="role" id="role" onChange={(e)=>setData({...data, role:e.target.value})} disabled={!editable}>
              <option value="none">Select one</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="content specialist">Content Specialist</option>
              <option value="product managers">Product Managers</option>
            </select>
            
            {data.role === "designer" && (
                <>
                  <p>Behance</p>
                  
                  <input type="url"  onChange={(e) => setData({ ...data, links: { ...data.links, behance: e.target.value } })} disabled={!editable} pattern=".*\behance.com\.*"/>
                  <br />
                  <p>Dribbble</p>
                  <input type="url"  onChange={(e) => setData({ ...data, links: { ...data.links, dribble: e.target.value } })}  disabled={!editable} pattern=".*\dribble.com\.*"/>
                  <br />
                </>
              )
            }
            {data.role === "developer" && (
                <>
                  <p>GitHub</p>
                  <input type="url"  onChange={(e) => setData({ ...data, links: { ...data.links, github: e.target.value } })}  disabled={!editable} pattern=".*\github.com\.*"/>
                  <br />
                  <p>StackOverflow</p>
                  <input type="url"  onChange={(e) => setData({ ...data, links: { ...data.links, stackoverflow: e.target.value } })}  disabled={!editable} pattern=".*\stackoverflow.com\.*"/>
                  <br />
                  <p>LeetCode</p>
                  <input type="url"  onChange={(e) => setData({ ...data, links: { ...data.links, leetcode: e.target.value } })}  disabled={!editable} pattern=".*\leetcode.com\.*"/>
                </>
              )
            }
            {data.role === "content specialist" && (
                <>
                  <p>Medium</p>
                  <input type="url"  onChange={(e) => setData({ ...data, links: { ...data.links, medium: e.target.value } })}  disabled={!editable} pattern=".*\medium.com\.*"/>
                  <br />
                  <p>Blog</p>
                  <input type="url"  onChange={(e) => setData({ ...data, links: { ...data.links, blog: e.target.value } })}  disabled={!editable}/>
                </>
              )
            }
            {data.role === "product managers" && (
                <>
                  <p>Facebook</p>
                  <input type="url" onChange={(e) => setData({ ...data, links: { ...data.links, facebook: e.target.value } })}  disabled={!editable} pattern=".*\facebook.com\.*"/>
                  <br />
                  <p>Instagram</p>
                  <input type="url" onChange={(e) => setData({ ...data, links: { ...data.links, instagram: e.target.value } })}  disabled={!editable} pattern=".*\instagram.com\.*"/>
                  <br />
                  <p>Youtube</p>
                  <input type="url" onChange={(e) => setData({ ...data, links: { ...data.links, youtube: e.target.value } })}  disabled={!editable} pattern=".*\youtube.com\.*"/>
                </>
              )
            }
          <p>About:  
          <input className={editable?"":"opacity-40"} type="text" value={data.about} onChange={(e)=>setData({...data, about:e.target.value})} disabled={!editable} /></p>
          <p>Achievements:  
          <input className={editable?"":"opacity-40"} type="text" value={data.achievements} onChange={(e)=>setData({...data, achievements:e.target.value})} disabled={!editable} /></p>
      </>
      : <p>Loading...</p>}
      <button onClick={editSettings}>Edit</button>
      <button onClick={saveChanges}>Save</button>
    </div>
  );
}
