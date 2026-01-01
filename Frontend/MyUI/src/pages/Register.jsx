import api from "../api/axios";
import { useState } from "react";

export default function Register(){
 const [f,setF] = useState({});
 const h = e => setF({...f,[e.target.name]:e.target.value});

 const s = ()=> api.post("users/register/",f);

 return(
  <div>
   <input name="username" onChange={h}/>
   <input name="email" onChange={h}/>
   <input name="password" onChange={h}/>
   <select name="role" onChange={h}>
     <option value="user">User</option>
     <option value="admin">Admin</option>
   </select>
   <button onClick={s}>Register</button>
  </div>
 )
}
