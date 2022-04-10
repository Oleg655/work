import React from "react";
import FavoutiteHotel from "./favouriteHotel/FavouriteHotel";
import style from "./Favourites.module.scss";
import { useSelector } from "react-redux";

const Favourites = () => {
  const favourites = useSelector((state) => state.hotelsPage.favourites);
  console.log(favourites);
  return (
    <>
      <div className={style.favoutitesBlock}>
        <h1>Избранное</h1>

        <div>
          <input className={style.input} placeholder="Рейтинг" type="number" />
          <input className={style.input} placeholder="Цена" type="number" />
        </div>
        <div className={style.favourite}>
          {favourites.map((i) => (
            <FavoutiteHotel key={i.id} hotel={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Favourites;
