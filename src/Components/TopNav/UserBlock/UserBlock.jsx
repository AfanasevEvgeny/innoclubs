import React from "react";
import s from './userBlockWrapper.module.css'
import {FaUserAlt} from "react-icons/fa";

const UserBlock = (props) => {

    return (
        <div className={s.userBlockWrapper}>
            <FaUserAlt/> You are...
        </div>
    )
};
export default UserBlock