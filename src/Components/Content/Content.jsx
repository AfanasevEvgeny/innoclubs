import React from 'react';
import AllClubs from "./AllClubs/AllClubs";
import MyClubs from "./MyClubs/MyClubs";
import s from './content.module.scss'
import Route from "react-router-dom/es/Route";
import ClubPage from "./ClubPage/ClubPage";
import Particles from "react-particles-js";

const Content = (props) => {
    let ClubPageList = props.ClubsData.map(clubInfo => <Route path={'/' + clubInfo.name}
                                                              render={() => <ClubPage nameOfClub={clubInfo.name}
                                                                                      clubsForCheck={props.MyClubsData}/>}/>);
    return (
        <div className={s.content}>
            <Route path='/allClubs' render={() => <AllClubs ClubsData={props.ClubsData}/>}/>
            <Route path='/myMemberClubs' render={() => <MyClubs MyClubsData={props.MyClubsData}/>}/>
            {/*here we need to map all club pages <Route path='/sb_club' render={()=><ClubPage/>}/>*/}
            {ClubPageList}
        </div>
    );
};

export default Content;