import {Button, ListGroup} from "react-bootstrap";
import React, {useState} from "react";
import Modal from 'react-modal';

const Event = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div>
            <ListGroup.Item>
                <p>some event </p>
                <Button variant="success" onClick={() => {
                    setModalIsOpen(true);
                }}>Available</Button>
                <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                    <h1>Here will be information about event, attendance tracking interface</h1>
                    <Button variant="success" onClick={() => setModalIsOpen(false)}>Close</Button>
                </Modal>
            </ListGroup.Item>
        </div>
    )
}
export default Event
