import React from 'react';
import s from './topnav.module.css'
import UserBlock from "./UserBlock/UserBlock";
import {GrTechnology} from "react-icons/gr";

const TopNav = () => {
    return (
        <div className={s.topnav}>
            <div class={s.logo}>
                <div class={s.logoImg}>
                </div>
            </div>
            <div class={s.title}>
                <h1>InnoClubs</h1>
                <h5>Innopolis University</h5>
            </div>
            <div class={s.userWrapper}>
                <UserBlock/>
            </div>
        </div>
    );
}

export default TopNav;