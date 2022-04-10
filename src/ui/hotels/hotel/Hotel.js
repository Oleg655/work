import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Hotel.module.scss";
import home from "../../../assets/home.png";
import { addFavourites } from "../../../redux/hotels-reducer";
import star from "../../../assets/likeStar.png";
import heart from "../../../assets/heart.svg";

const Hotel = (props) => {
  const dispatch = useDispatch();
  const searchData = useSelector((state) => state.searchData)

  return (
    <>
      <div className={style.hotelBlock}>
        <div className={style.label}>
          <div className={style.imageBlock}>
            <img className={style.styleHome} src={home} />
          </div>

          <div className={style.descriptionBlock}>
            <span>{props.hotel?.label}</span>
            <span>{`${searchData.date} - ${searchData.days} день`}</span>
            <img className={style.styleStar} src={star} />
          </div>
        </div>

        <div className={style.price}>
          <img
            onClick={() => {
              dispatch(addFavourites(props.hotel));
            }}
            src={heart}
          />
        </div>

      </div>
    </>
  );
};

export default Hotel;
