import React from 'react';
import s from '../MyClubs/myClubsWrapper.module.css'
import Club from "../AllClubs/Club/Club";

const MyLeaderClubs = (props) => {
    let MyClubsList = props.MyLeaderClubsData.map(c => <Club nameOfClub={c.name}
                                                             brief={c.brief}
                                                             logo={c.logo_b64}
    />)
    return (
        <div className={s.myClubsWrapper}>
            {MyClubsList}
        </div>
    );
};

export default MyLeaderClubs;