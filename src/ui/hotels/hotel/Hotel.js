import React from "react";
import { useSelector } from "react-redux";
import style from "./Hotel.module.scss";

const Hotel = () => {
  const data = useSelector((state) => state.hotels);
  const date = useSelector((state) => state.searchData.date);

  return (
    <>
      <div className={style.hotelBlock}>
        <div className={style.image}></div>
        <span>{data.name}</span>
        <div>{date}</div>
        <div>{data.stars}</div>
        <div>{data.price}</div>
        <div onClick={() => {}} className={style.like}></div>
      </div>
    </>
  );
};

export default Hotel;
