import React from "react";
import style from "./Login.module.scss";
import LoginForm from "./LoginForm/LoginForm";

const Login = () => {
  return (
    <>
      <div className={style.formBlock}>
        <h1>Simple Hotel Check</h1>
        <LoginForm/>
      </div>
    </>
  );
};

export default Login;
