import React from "react";
import style from "./Location.module.scss";

const Location = () => {
  return (
    <>
      <div className={style.locationBlock}>
        Локация
        <input className={style.input} />
        Дата заселения
        <input className={style.input} type="date" />
        Количество дней
        <input className={style.input} type="number" />
        <div>
          <button className={style.button}>Найти</button>
        </div>
      </div>
    </>
  );
};

export default Location;
