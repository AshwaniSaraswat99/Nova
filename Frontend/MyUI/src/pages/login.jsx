import api from "../api/axios";
import { useState } from "react";

export default function Login() {
  const [f, setF] = useState({ username: "", password: "" });
  const [err, setErr] = useState("");

  const h = e => setF({ ...f, [e.target.name]: e.target.value });

  const s = async (e) => {
    e?.preventDefault();
    setErr("");
    try {
      const r = await api.post("users/login/", f);
      localStorage.setItem("token", r.data.access);
      console.log("Login Success");
    } catch (err) {
      console.error("Login Failed", err.response || err);
      setErr(err.response?.data?.detail || "Login failed");
    }
  };

  return (
    <div>
      <h3>Login</h3>
      {err && <div style={{ color: "red" }}>{err}</div>}
      <input name="username" placeholder="username" value={f.username} onChange={h} />
      <input name="password" placeholder="password" type="password" value={f.password} onChange={h} />
      <button onClick={s}>Login</button>
    </div>
  );
}

