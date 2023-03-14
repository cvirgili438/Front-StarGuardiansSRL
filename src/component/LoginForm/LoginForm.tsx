import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Auth } from "../../App";
import { AppContext } from "../../context/AppContext";
import { useLocalStorage, useSessionStorage } from "../../hooks/useApp";
import style from "./LoginForm.module.css";

export interface UserInput {
  user: string;
  password: string;
}

export default function LoginForm() {
  const { auth } = useContext(AppContext);
  const history = useHistory();
  const [remember, setRemember] = useState(false);
  const [input, setInput] = useState({} as UserInput);
  const [user,setUser]=useLocalStorage<Auth|undefined>('User',Object)
  const [userForgot,setUserForgot]=useSessionStorage<Auth | undefined>('User',Object)
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
    if(remember){
     setUser(response)     
    }
    if(!remember){
      setUserForgot(response)
    }

   
  }

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
          <label>
            <input
              type="checkbox"
              name="remember"
              onClick={() => {
                setRemember(!remember);
                console.log(remember);
              }}
            />
            Remember
          </label>
          <button onClick={handleSubmit}> Login</button>
        </form>
        <h3>No tiene cuenta creada ?</h3>
        <button onClick={() => history.push("/register")}>Register </button>
      </div>
    </div>
  );
}
