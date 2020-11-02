import {Button, ListGroup} from "react-bootstrap";
import React from "react";

const Event = (props) => {
    return (
        <div>
            <ListGroup.Item>
                <p>Weekly training 1</p>
                <Button variant="success">Available</Button>
            </ListGroup.Item>
        </div>
    )
}
export default Event
