import React from "react";
import Favourites from "../favourites/Favourites";
import Hotels from "../hotels/Hotels";
import Location from "../location/Location";
import style from './DesctopTwo.module.scss'

const DesctopTwo = () => {
    return <>
    
   <div className={style.mainBlock}>
       <div className={style.sideBar}>
            <Location/>
            <Favourites/>
       </div>
       <div>
           <Hotels/>
       </div>

   </div>
    </>
}

export default DesctopTwo;