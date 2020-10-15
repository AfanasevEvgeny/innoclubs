import React from "react";
import s from './myClubsWrapper.module.css'
import Club from "./Club/Club";

const MyClubs = (props) =>
{
    let ClubList = props.MyClubsData.map(clubInfo => <Club nameOfClub={clubInfo.name}
                                                           briefDescription={clubInfo.brief_description}/>);
    return (
        <div className={s.myClubsWrapper}>
            {ClubList}
        </div>
    )
};
export default MyClubs