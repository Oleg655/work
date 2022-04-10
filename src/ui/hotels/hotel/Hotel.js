import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import style from "./Hotel.module.scss";
import home from "../../../assets/home.png";
import { addFavourites } from "../../../redux/hotels-reducer";

const Hotel = (props) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={style.hotelBlock}>
        <div className={style.imageBlock}>
          <img
            onClick={() => {
              dispatch(addFavourites(props.hotel));
            }}
            className={style.image}
            src={home}
          />
        </div>
        <div className={style.description}>
          <span>{props.hotel?.label}</span>
          <span>{}</span>
        </div>

        <div onClick={() => {}} className={style.like}></div>
      </div>
    </>
  );
};

export default Hotel;
