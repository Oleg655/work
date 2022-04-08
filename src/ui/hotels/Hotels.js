import React from "react";
import { useSelector } from "react-redux";
import style from "./Hotels.module.scss";

const Hotels = () => {
  const data = useSelector((state) => state.searchData);
  const favourites = useSelector((state) => state.hotels.favourites);

  return (
    <>
      <div className={style.hotelBlock}>
        <div className={style.header}>
          <div className={style.description}>
            <h2>Отели</h2>
            <h2>{data.location}</h2>
          </div>
          <div className={style.date}>
            <h5>Date</h5>
          </div>
        </div>

        <div className={style.slider}>

        </div>
        <div className={style.favourites}>Добавлено в избранное {favourites} отеля</div>
      </div>
    </>
  );
};

export default Hotels;
