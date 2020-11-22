import {Button, ListGroup} from "react-bootstrap";
import React, {useState} from "react";
import Modal from 'react-modal';
import store from "../../../../Redux/state";
const Event = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    var list;
    var f;
    var brief = props.brief;
    return (
        <div>
            <ListGroup.Item>
                <p>{brief}</p>
                <Button variant="success" onClick={() =>
                {
                    setModalIsOpen(true);
                }}>Available</Button>
                <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
            <h1>{props.name}</h1>
            <p1>{props.description}</p1>
                    <br/>
            <Button variant="success">Apply for attendance</Button>

                    <Button variant="primary" onClick={() => setModalIsOpen(false)}>Close</Button>
                </Modal>
            </ListGroup.Item>
        </div>
    )
}
export default Event
