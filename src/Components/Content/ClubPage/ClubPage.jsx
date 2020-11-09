import React from "react";
import s from './ClubPageWrapper.module.css'
import ClubPageMember from "./ForMember/ClubPageMember";
import ClubPageLeader from "./ForLeader/ClubPageLeader";
import ClubPageUser from "./ForUser/ClubPageUSer";
const ClubPage = (props) => {
    const myMemberClubs = props.clubsMemberForCheck;
    let isMyMemberClub = false
    for (let i = 0; i < myMemberClubs.length; i++) {
        if (myMemberClubs[i].name === props.nameOfClub) {
            isMyMemberClub = true
            break
        }
    }
    const myLeaderClubs = props.clubsLeaderCheck;
    let isMyLeaderClub = false

    for (let i = 0; i < myLeaderClubs.length; i++) {
        if (myLeaderClubs[i].name === props.nameOfClub) {
            isMyLeaderClub = true
            break
        }
    }


    if (isMyMemberClub) {
        return (
            <ClubPageMember nameOfClub={props.nameOfClub} description={props.description} logo={props.logo}
                            brief={props.brief}/>
        );
    } else if (isMyLeaderClub) {
        return <ClubPageLeader nameOfClub={props.nameOfClub} description={props.description} logo={props.logo}
                               brief={props.brief}
                               events={props.events}
        />
    } else {
        return <ClubPageUser nameOfClub={props.nameOfClub} description={props.description} logo={props.logo}
                             brief={props.brief}/>
    }
}
export default ClubPage
