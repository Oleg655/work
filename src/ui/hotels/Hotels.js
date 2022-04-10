import React from "react";
import { useSelector } from "react-redux";
import Hotel from "./hotel/Hotel";
import style from "./Hotels.module.scss";
import arrow from '../../assets/next.png'

const Hotels = () => {
  const dataOfSearch = useSelector((state) => state.searchData);
  const dataOfHotels = useSelector((state) => state.hotelsPage);
  const date = useSelector((state) => state.searchData.date);

  return (
    <>
      <div className={style.hotelBlock}>
        <div className={style.header}>
          <div className={style.description}>
            <h2>Отели</h2>
            <div className={style.arrowBlock}><img className={style.arrow} src={arrow} /></div>
            <h2>Москва</h2>
          </div>
          <div className={style.date}>
            <h5>{date}</h5>
          </div>
        </div>

        <div className={style.slider}>
          {dataOfHotels.images.map((i) => <div><img src={i}/></div>)}
        </div>
        <div className={style.favourites}>Добавлено в избранное {dataOfHotels.favourites.length} отеля</div>
        <div className={style.hotels}>
          {dataOfHotels.hotels.map((i) => <Hotel key={i.id} hotel={i}/>)}
        </div>
      </div>
    </>
  );
};

export default Hotels;
