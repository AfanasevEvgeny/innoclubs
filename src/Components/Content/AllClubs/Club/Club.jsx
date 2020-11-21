import React from "react";
import s from './club.module.css'
import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Club = (props) => {
    let clubLink = "/main/" + props.nameOfClub;
    let logo = props.logo;
    return (
        <div className={s.clubWrapper}>
            <Card style={{width: '15rem'}}>
                <Card.Img variant="top"
                          src={logo}/>
                <Card.Body>
                    <Card.Title>{props.nameOfClub}</Card.Title>
                    <Card.Text>
                        {props.brief}
                    </Card.Text>
                    <NavLink to={clubLink}><Button variant="success">Open</Button></NavLink>
                </Card.Body>
            </Card>
        </div>
    )
};
export default Club