import React from "react";
import Hotel from "../hotels/hotel/Hotel";
import style from "./Favourites.module.scss";
import { useSelector } from "react-redux";

const Favourites = () => {
  const favourites = useSelector((state) => state.hotels.favourites);

  return (
    <>
      <div className={style.favoutitesBlock}>
        <h1>Избранное</h1>

        <div>
          <input className={style.input} placeholder="Рейтинг" type="number" />
          <input className={style.input} placeholder="Цена" type="number" />
        </div>
        {/* {favourites.map((i) => <Hotel/>)} */}
      </div>
    </>
  );
};

export default Favourites;
