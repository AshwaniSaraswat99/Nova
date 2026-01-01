import api from "../api/axios";
import { useEffect, useState } from "react";

export default function TaskList() {
  const [t, setT] = useState([]);

  useEffect(() => {
    api.get("tasks/")
      .then(r => setT(r.data))
      .catch(() => console.log("Login required"));
  }, []);

  const del = (id) => {
    api.delete(`tasks/${id}/`)
      .then(() => setT(t.filter(x => x.id !== id)))
      .catch(() => console.log("Not allowed"));
  };

  return (
    <ul>
      {t.map(x => (
        <li key={x.id}>
          {x.title}
          <button onClick={() => del(x.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
