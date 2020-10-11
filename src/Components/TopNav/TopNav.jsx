import React from "react";
import s from './TopNav.module.css'


const TopNav = () => {
    return (
        <div className={s.topnav}>
            <div className={s.wrapper}>
                <div className={s.item}>
                    <div className={s.logo}>
                        <h2>icon</h2>
                    </div>
                </div>
                <div className={s.itemCenter}>
                    <div className={s.headcontent}>
                        <div className={s.searchBox}>

                            <input type="text" className={s.myInput} onKeyUp="myFunction()" placeholder="Search for clubs.."/>
                        </div>

                    </div>
                </div>
                <div className={s.item}>
                    <div className={s.account}>
                        <h2>User</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TopNav