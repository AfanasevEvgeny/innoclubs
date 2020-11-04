import {Button, ListGroup} from "react-bootstrap";
import React, {useState} from "react";
import Modal from 'react-modal';

const Event = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div>
            <ListGroup.Item>
                <p>Weekly training 1</p>
                <Button variant="success" onClick={() => setModalIsOpen(true)}>Available</Button>
                <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                    <h1>ебать открылось</h1>
                    <Button variant="success" onClick={() => setModalIsOpen(false)}>Close</Button>
                </Modal>
            </ListGroup.Item>
        </div>
    )
}
export default Event
