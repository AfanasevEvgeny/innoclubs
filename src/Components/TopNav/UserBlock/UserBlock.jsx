import React from "react";
import s from './userBlockWrapper.module.css'
import {FaUserAlt} from "react-icons/fa";
import {Button} from "react-bootstrap";

const UserBlock = (props) => {

    return (
        <div className={s.userBlockWrapper}>

            <div className={s.u_areWrapper}><FaUserAlt/> You are: Alladynich
                <Button variant="outline-danger">Logout</Button>
            </div>

        </div>
    )
};
export default UserBlock