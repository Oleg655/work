import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Hotel.module.scss";
import home from '../../../assets/home.png'
import addFavourites from '../../../redux/hotels-reducer'

const Hotel = (props) => {

const dispatch = useDispatch()

  return (
    <>
      <div className={style.hotelBlock}>
        <div className={style.imageBlock} ><img onClick={() => {dispatch(addFavourites(props.hotel.id))}} className={style.image} src={home}/></div>
        <div className={style.description}>
          <span>{props.hotel.name}</span>
        </div>
        
        <div onClick={() => {}} className={style.like}></div>
      </div>
    </>
  );
};

export default Hotel;
