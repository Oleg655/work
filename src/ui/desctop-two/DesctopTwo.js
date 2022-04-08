import React from "react";
import { useNavigate } from "react-router-dom";
import Favourites from "../favourites/Favourites";
import Hotels from "../hotels/Hotels";
import Search from "../search/Search";
import style from "./DesctopTwo.module.scss";

const DesctopTwo = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={style.mainBlock}>
        <div className={style.header}>
          <h5>Simple Hotel Check</h5>
          <div onClick={() => {
              navigate("/");
            }}
            className={style.logout}>Выйти</div>
        </div>
        <div className={style.desctopBlock}>
          <div className={style.sideBar}>
            <Search />
            <Favourites />
          </div>
          <div>
            <Hotels />
          </div>
        </div>
      </div>
    </>
  );
};

export default DesctopTwo;
