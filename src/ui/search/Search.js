import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Search.module.scss";
import axios from "axios";
import {changeCity} from "../../redux/search-reducer";
import {getHotel} from "../../redux/hotels-reducer";

const Search = () => {
  const dispatch = useDispatch();
  const searchData = useSelector((state) => state.searchData);

  const onChanges = (e) => {
    dispatch(changeCity(e.target.value));
  };

  // const autocomplete = () => {
  //   return axios.get(
  //     "http://autocomplete.travelpayouts.com/places2?term=Mos&locale=ru&types[]=country&callback=function"
  //   );
  // };

  //http://engine.hotellook.com/api/v2/lookup.json?query=moscow&lang=ru&lookFor=both&limit=1

  return (
    <>
      <div className={style.locationBlock}>
        <div className={style.data}>Локация</div>
        <input value={searchData.location} onChange={onChanges} className={style.input} />
        <div>Дата заселения</div>
        <input
          className={style.input}
          type="date"
          value="${searchData.date.day}-${searchData.date.month}-${searchData.date.year}"
        />
        <div>Количество дней</div>
        <input value={searchData.days} className={style.input} type="number" />
        <div>
          <button
            onClick={() => {
              axios
                .get(
                  "http://engine.hotellook.com/api/v2/lookup.json?query=moscow&lang=ru&lookFor=both&limit=3"
                )
                .then((response) => {
                  dispatch(getHotel(response.data.results.hotels));
                });
            }}
            className={style.button}
          >
            Найти
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
