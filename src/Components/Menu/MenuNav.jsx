import React from 'react';
import s from './menu.module.css'
import {Dropdown} from "react-bootstrap";
import {CgProfile} from 'react-icons/cg';
import {NavLink} from "react-router-dom";


const MenuNav = () => {
    return (
        <div className={s.menuNav}>
            <div className={s.sidenav}>
                <NavLink to="/allClubs"><h3>| All clubs</h3></NavLink>
                <NavLink to="#"><h3>| My Profile</h3></NavLink>
                <NavLink to="#"><h3>| Contacts</h3></NavLink>
                <div className={s.item}>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <h3>My clubs</h3>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="/allClubs"><p>As a Member</p></Dropdown.Item>
                            <Dropdown.Item href="#/action-2"><p>As a Leader</p></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

            </div>

        </div>
    );
}

export default MenuNav;