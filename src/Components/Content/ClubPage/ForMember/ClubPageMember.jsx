import React from "react";
import s from './ClubPageMember.module.css'
import {DropdownButton, Dropdown, OverlayTrigger, Button, ListGroupItem, ListGroup, Card, Image} from "react-bootstrap";
import {Popover} from "bootstrap";

const ClubPageMember = (props) => {
    let clubLink = "/" + props.nameOfClub;
    let logo = props.logo;
    let nameOfClub = props.nameOfClub;
    let description = props.description;
    let brief = props.brief;

    return (
        <div className={s.ClubPageMemberWrapper}>
            <div className={s.eventsWrapper}>
                <h1>events:</h1>
            </div>
            <div className={s.clubWrapper}>
                <img src={logo} height="200px" width="200px"/>
                <ListGroup style={{width: '25rem'}}>
                    <ListGroupItem><Card className="text-center">
                        <Card.Header>{brief}</Card.Header>
                        <Card.Body>
                            <Card.Title>About:</Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                        </Card.Body>

                        <Card.Footer className="text-muted">

                        </Card.Footer>
                    </Card></ListGroupItem>
                </ListGroup>
            </div>
            <div className={s.optionsWrapper}>
                <h1>options</h1>
            </div>
        </div>
    );
}
export default ClubPageMember