import React from "react";
import s from './allClubsWrapper.module.css'
import Club from "./Club/Club";

const AllClubs = (props) => {
    let ClubList = props.ClubsData.map(clubInfo => <Club nameOfClub={clubInfo.name}
                                                         briefDescription={clubInfo.brief_description}/>);
    return (
        <div className={s.allClubsWrapper}>
            {ClubList}
        </div>
    )
}
export default AllClubs