import React from 'react';
import AllClubs from "./AllClubs/AllClubs";
import MyClubs from "./MyClubs/MyClubs";
import s from './content.module.scss'
import Route from "react-router-dom/es/Route";
import ClubPage from "./ClubPage/ClubPage";
import MyLeaderClubs from "./MyLeaderClubs/MyleaderClubs";
import Particles from "react-particles-js";

const Content = (props) => {
    console.log(props.ClubsData)
    let ClubPageList = props.ClubsData.map(clubInfo => <Route path={'/' + clubInfo.name}
                                                              render={() => <ClubPage nameOfClub={clubInfo.name}
                                                                                      clubsMemberForCheck={props.MyMemberClubsData}
                                                                                      clubsLeaderCheck={props.MyLeaderClubsData}
                                                                                      description={clubInfo.description}
                                                                                      logo={clubInfo.logo_b64}
                                                                                      brief={clubInfo.brief}
                                                                                      events={clubInfo.events}


                                                              />}/>);

    return (
        <div className={s.content}>
            <Route path='/allClubs' render={() => <AllClubs ClubsData={props.ClubsData}/>}/>
            <Route path='/myMemberClubs' render={() => <MyClubs MyMemberClubsData={props.MyMemberClubsData}/>}/>
            <Route path='/myLeaderClubs' render={() => <MyLeaderClubs MyLeaderClubsData={props.MyLeaderClubsData}/>}/>
            {/*here we need to map all club pages <Route path='/sb_club' render={()=><ClubPage/>}/>*/}
            {ClubPageList}
        </div>
    );
};

export default Content;