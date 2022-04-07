import React from "react";
import style from './Favourites.module.scss'

const Favourites = () => {
    return <>
    
    <div className={style.favoutitesBlock}>
        <h1>Избранное</h1>

        <div>
            <input placeholder="Рейтинг" type='number' />
            <input placeholder="Цена" type='number' />
        </div>
    </div>
    
    </>
}

export default Favourites;