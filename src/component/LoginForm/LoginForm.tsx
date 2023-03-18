import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Auth } from "../../App";
import { AppContext } from "../../context/AppContext";
import { useLocalStorage } from "../../hooks/useApp";
import style from "./LoginForm.module.css";

export interface UserInput {
  user: string;
  password: string;
}

export default function LoginForm() {
  const { auth } = useContext(AppContext);
  const history = useHistory();  
  const [input, setInput] = useState({} as UserInput);
  const [user,setUser]=useLocalStorage<Auth|undefined>('User',Object)
  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }
  async function handleSubmit(e: any) {
    e.preventDefault();

    const response = await auth(input);
    setUser(response)
  }
  useEffect(()=>{
    if(user?.authorized === true){
      history.push('/')
    }
  },[user,history])

  return (
    <div className={style.container}>
      <div>
        Inicia Sesion
        <form className={style.container}>
          <input onChange={handleInput} name="user" placeholder="Usuario" />
          <input
            onChange={handleInput}
            type="password"
            name="password"
            placeholder="Contraseña"
          />        
          <button onClick={handleSubmit}> Login</button>
        </form>
        <h3>No tiene cuenta creada ?</h3>
        <button onClick={() => history.push("/register")}>Register </button>
      </div>
    </div>
  );
}
