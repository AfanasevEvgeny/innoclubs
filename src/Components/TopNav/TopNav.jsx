import React from 'react';
import s from './topnav.module.css'
import UserBlock from "./UserBlock/UserBlock";
import {GrTechnology} from "react-icons/gr";
import uiLogo from "./innou-logo.svg"
import logoTesseract from "./logo_48.png"

const TopNav = () => {
    return (
        <div className={s.topnav}>
            <div className={s.logoInnopolisWrapper}>
                <img src={uiLogo} width="55%"/>
            </div>
            <div className={s.title_and_logo_Wrapper}>
                <div class={s.title}>
                    <h1 className={s.title_ic}>Inno<h1 className={s.bracket}>Clubs</h1></h1>
                </div>

            </div>
            <div className={s.userWrapper}>
                <UserBlock/>
            </div>
        </div>
    );
}

export default TopNav;