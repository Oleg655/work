import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./FavouriteHotel.module.scss";
import { deleteFromFavourites } from "../../../redux/hotels-reducer";
import star from "../../../assets/likeStar.png";
import redHeart from "../../../assets/redHeart.png";

const FavoutiteHotel = (props) => {
  const dispatch = useDispatch();
  const searchData = useSelector((state) => state.searchData);

  //const correctDate = searchData.split('').reverse().join()
  return (
    <div className={style.hotelBlock}>
      <div className={style.descriptionBlock}>
        <span>{props.hotel?.label}</span>
        <span>{`${searchData.date} - ${searchData.days} день`}</span>
        <img className={style.styleStar} src={star} />
      </div>

      <div className={style.price}>
        <img
          className={style.styleHeart}
          onClick={() => {
            dispatch(deleteFromFavourites(props.hotel));
          }}
          src={redHeart}
        />
      </div>
    </div>
  );
};

export default FavoutiteHotel;
