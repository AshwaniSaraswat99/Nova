import api from "../api/axios";
import { useState } from "react";

export default function Login(){
 const [f,setF] = useState({});
 const h = e => setF({...f,[e.target.name]:e.target.value});

 const s = async()=>{
  const r = await api.post("users/login/",f);
  localStorage.setItem("token", r.data.access);
 }

 return(
  <div>
   <input name="username" onChange={h}/>
   <input name="password" onChange={h}/>
   <button onClick={s}>Login</button>
  </div>
 )
}
