import React from "react";
import s from './Content.module.css'
import ClubsList from "./Clubslist/ClubsList";
const Content =()=>{
    return(
        <div className={s.content}>
            <ClubsList/>
        </div>
    )
}
export default Content