import React from "react";
import s from './ClubPageMember.module.css'
import {DropdownButton, Dropdown, OverlayTrigger, Button, ListGroupItem, ListGroup, Card, Image} from "react-bootstrap";
import {Popover} from "bootstrap";
import Event from "../Event/Event";
import store from "../../../../Redux/state"
import {leave_club} from "../../../../index"

const ClubPageMember = (props) =>
{
    let clubLink = "/" + props.nameOfClub;
    let logo = props.logo;
    let nameOfClub = props.nameOfClub;
    let description = props.description;
    let brief = props.brief;
    let eventList = props.events.map(event => <Event brief={event.brief} description={event.description} name={event.name}/>)
    console.log(props.events)

    let LeaveClub = () => {
        leave_club(nameOfClub)
        store._callSubscriber(store.state)
        console.log(store);
    }
    return (
        <div className={s.ClubPageMemberWrapper}>
            <div className={s.eventsWrapper}>
                <Card style={{width: '18rem'}}>
                    <Card.Header>Events</Card.Header>
                    <ListGroup variant="flush">
                        {eventList}
                    </ListGroup>
                </Card>
            </div>
            <div className={s.clubWrapper}>
                <img src={logo} height="200px" width="200px" className={s.logo}/>
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
                            <Button variant="danger" onClick={LeaveClub}>Leave</Button>
                        </Card.Footer>
                    </Card></ListGroupItem>
                </ListGroup>
            </div>
            <div className={s.optionsWrapper}>
                <h1>Contacts</h1>
                <p>Telegram chat: undefined</p>
                <p>Leader alias: undefined</p>
            </div>
        </div>
    );
}
export default ClubPageMember
