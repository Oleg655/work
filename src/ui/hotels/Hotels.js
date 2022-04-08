import React from "react";
import { useSelector } from "react-redux";
import style from "./Hotels.module.scss";

const Hotels = () => {
  const dataOfSearch = useSelector((state) => state.searchData);
  const dataOfHotels = useSelector((state) => state.hotels);

  return (
    <>
      <div className={style.hotelBlock}>
        <div className={style.header}>
          <div className={style.description}>
            <h2>Отели</h2>
            <h2>{dataOfSearch.location}</h2>
          </div>
          <div className={style.date}>
            <h5>Date</h5>
          </div>
        </div>

        <div className={style.slider}>
          {dataOfHotels.images.map((i) => <div>{i}</div>)}
        </div>
        <div className={style.favourites}>Добавлено в избранное {dataOfHotels.favourites} отеля</div>
      </div>
    </>
  );
};

export default Hotels;
