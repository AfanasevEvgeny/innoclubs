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
                    <h1>Here will be information about event, attendance tracking interface</h1>
                    <Button variant="success" onClick={() => setModalIsOpen(false)}>{f}</Button>
                </Modal>
            </ListGroup.Item>
        </div>
    )
}
export default Event
