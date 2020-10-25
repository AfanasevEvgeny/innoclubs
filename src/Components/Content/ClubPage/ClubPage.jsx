import React from "react";
import s from './ClubPageWrapper.module.css'
import ClubPageMember from "./ForMember/ClubPageMember";

const ClubPage = (props) => {
    const myClubs = props.clubsForCheck;
    let isMyClub = false
    console.log(props.nameOfClub)

    for (let i = 0; i < myClubs.length; i++) {
        if (myClubs[i].name === props.nameOfClub) {
            isMyClub = true
            break
        }
    }


    if (isMyClub) {
        return (
            <ClubPageMember/>
        );
    } else {
        return <h1>I am not member of this club</h1>
    }
}
export default ClubPage
