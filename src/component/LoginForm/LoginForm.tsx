import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import style from "./LoginForm.module.css";

interface UserInput {
  user: string;
  password: string;
}

export default function LoginForm() {
  const history = useHistory();
  const [remember, setRemember] = useState(false);
  const [input, setInput] = useState({} as UserInput);
  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });    
  }

  return (
    <div className={style.container}>
      <div>
        Inicia Sesion
        <form className={style.container}>
          <input onChange={handleInput} name='user' placeholder="Usuario" />
          <input onChange={handleInput} type='password' name='password' placeholder="Contraseña" />
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
          <button type="submit"> Login</button>
        </form>
        <h3>No tiene cuenta creada ?</h3>
        <button onClick={() => history.push("/register")}>Register </button>
      </div>
    </div>
  );
}
