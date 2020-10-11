import React from "react";
import s from './NavBarLeft.module.css'

const NavBarLeft = () => {
    return (
        <div className={s.navbarleft}>
            <div className={s.sidenav}>
                <div className={s.header}>
                    <h1>
                        Menu
                    </h1>
                </div>
                <div className={s.items}>
                    <div className={s.item_wrapper}><a href="#">About</a></div>
                    <div className={s.item_wrapper}><a href="#">Services</a></div>
                    <div className={s.item_wrapper}><a href="#">Clients</a></div>
                    <div className={s.item_wrapper}><a href="#">Contact</a></div>
                </div>
            </div>
        </div>
    )
}
export default NavBarLeft