import api from "../api/axios";
import { useState } from "react";

export default function Register() {
  const [f, setF] = useState({
    username: "",
    email: "",
    password: "",
    role: "user"
  });

  const h = e => setF({ ...f, [e.target.name]: e.target.value });

  const s = async () => {
    try {
      await api.post("users/register/", f);
      console.log("Register Success");
    } catch (err) {
      console.log("Register Failed"); 
    }
  };

  return (
    <div>
      <h3>Register</h3>
      <input name="username" placeholder="username" onChange={h} />
      <input name="email" placeholder="email" onChange={h} />
      <input name="password" placeholder="password" type="password" onChange={h} />
      <select name="role" onChange={h}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={s}>Register</button>
    </div>
  );
}
