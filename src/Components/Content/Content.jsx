import React from 'react';
import AllClubs from "./AllClubs/AllClubs";
import s from './content.module.css'
import Route from "react-router-dom/es/Route";

const Content = (props) => {
    return (
        <div className={s.content}>
            <Route path='/allClubs' render={() => <AllClubs ClubsData={props.ClubsData}/>}/>
        </div>
    );
}

export default Content;