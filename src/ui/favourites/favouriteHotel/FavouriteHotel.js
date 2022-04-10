import React from "react";
import { useDispatch } from "react-redux";
import style from "./FavouriteHotel.module.scss";
import home from "../../../assets/home.png";
import {deleteFromFavourites} from '../../../redux/hotels-reducer'


const FavoutiteHotel = (props) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={style.hotelBlock}>
        <div className={style.imageBlock}>
          <img
            onClick={() => {
              dispatch(deleteFromFavourites(props.hotel));
            }}
            className={style.image}
            src={home}
          />
        </div>
        <div className={style.description}>
          <span>{props.hotel?.label}</span>
        </div>

        <div onClick={() => {}} className={style.like}></div>
      </div>
    </>
  );
};

export default FavoutiteHotel;
