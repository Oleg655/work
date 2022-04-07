import React from "react";
import style from "./DesctopOne.module.scss";
import Login from "./login/Login";

const DesctopOne = () => {
  return (
    <>
      <div className={style.desctopBlock}>
        <Login />
      </div>
    </>
  );
};

export default DesctopOne;