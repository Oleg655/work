import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Search.module.scss";
import axios from "axios";
import changeCity from '../../redux/search-reducer'

const Search = () => {
  const dispatch = useDispatch();
  const searchData = useSelector((state) => state.searchData);

  // const autocomplete = () => {
  //   return axios.get(
  //     "http://autocomplete.travelpayouts.com/places2?term=Mos&locale=ru&types[]=country&callback=function"
  //   );
  // };

  //http://engine.hotellook.com/api/v2/lookup.json?query=moscow&lang=ru&lookFor=both&limit=1

  return (
    <>
      <div className={style.locationBlock}>
        Локация
        <input
          value={searchData.location}
          onChange={(e) => {dispatch(changeCity(e.currentTarget.value))}}
          className={style.input}
        />
        Дата заселения
        <input className={style.input} type="date" />
        Количество дней
        <input value={searchData.days} className={style.input} type="number" />
        <div>
          <button className={style.button}>Найти</button>
        </div>
      </div>
    </>
  );
};

export default Search;
