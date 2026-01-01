import api from "../api/axios";
import { useEffect,useState } from "react";

export default function TaskList(){
 const [t,setT] = useState([]);
 useEffect(()=>{ api.get("tasks/").then(r=>setT(r.data)) },[]);
 return <ul>{t.map(x=><li key={x.id}>{x.title}</li>)}</ul>
}
