import React from "react";
import s from './ClubsList.module.css'

const ClubsList =()=>{
    return(
        <div className={s.clubsList}>
            <div className={s.container}>
                <div className={s.item}>SB Club <br/> some description</div>
                <div className={s.item}>Other club <br/> description</div>
                <div className={s.item}>Not interesting <br/> no description</div>
                <div className={s.item}>club+description</div>
                <div className={s.item}>club+description</div>
                <div className={s.item}>club+description</div>
                <div className={s.item}>club+description</div>
                <div className={s.item}>club+description</div>

            </div>
        </div>
    )
}
export default ClubsList