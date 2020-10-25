import React from "react";
import s from './club.module.css'
import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Club = (props) => {
    let clubLink = "/" + props.nameOfClub;
    return (
        <div className={s.clubWrapper}>
            <Card style={{width: '15rem'}}>
                <Card.Img variant="top"
                          src="https://previews.123rf.com/images/zoaarts/zoaarts1811/zoaarts181100002/111833062-vector-illustration-of-cool-classic-skateboarding-logo-in-old-school-style-skateboard-with-ribbon-ba.jpg"/>
                <Card.Body>
                    <Card.Title>{props.nameOfClub}</Card.Title>
                    <Card.Text>
                        {props.briefDescription}
                    </Card.Text>
                    <NavLink to={clubLink}><Button variant="success">Open</Button></NavLink>
                </Card.Body>
            </Card>
        </div>
    )
};
export default Club