import React from 'react';
import s from './myClubsWrapper.module.css'
import Club from "../AllClubs/Club/Club";

const MyClubs = (props) => {
    let MyClubsList = props.MyClubsData.map(c => <Club nameOfClub={c.name}
                                                       briefDescription={c.brief_description}/>)
    return (
        <div className={s.myClubsWrapper}>
            {MyClubsList}
        </div>
    );
};

export default MyClubs;