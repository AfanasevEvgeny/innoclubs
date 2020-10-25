import React from "react";
import s from './ClubPageWrapper.module.css'
import ClubPageMember from "./ForMember/ClubPageMember";
import ClubPageLeader from "./ForLeader/ClubPageLeader";
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
            <ClubPageMember/>
        );
    } else if (isMyLeaderClub) {
        return <ClubPageLeader/>
    }
}
export default ClubPage
