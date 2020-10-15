import React from 'react';
import AllClubs from "./AllClubs/AllClubs";
import MyClubs from "./MyClubs/MyClubs";
import s from './content.module.css'
import Route from "react-router-dom/es/Route";


const Content = (props) =>
{
    return (
        <div className={s.content}>
            <Route path='/allClubs' render={() => <AllClubs ClubsData={props.ClubsData}/>}/>
            <Route path='/myMemberClubs' render={() => <MyClubs MyClubsData={props.MyClubsData}/>}/>
        </div>
    );
};

export default Content;