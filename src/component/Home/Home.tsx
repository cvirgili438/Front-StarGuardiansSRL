import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Auth } from "../../App";
import { useLocalStorage } from "../../hooks/useApp";

export default function Home() {
  const [user,setUser] = useLocalStorage<Auth>('User',Object)
  const history = useHistory()
  useEffect(()=>{
    if(user?.authorized === false || Object.keys(user).length < 1 ){
      history.push('/login')
    }
  },[user])
  
  return (
    <div>
      Home
      <div>
        <button onClick={()=>setUser({...user,authorized:false})}>algo</button>
      </div>
    </div>
  );
}
