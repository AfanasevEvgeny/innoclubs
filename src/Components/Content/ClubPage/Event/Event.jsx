import {Button, ListGroup} from "react-bootstrap";
import React, {useState} from "react";
import Modal from 'react-modal';

const Event = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    var list;
    return (
        <div>
            <ListGroup.Item>
                <p>some event </p>
                <Button variant="success" onClick={() => {
                    setModalIsOpen(true);
                    window.state.get_events("sb_club", 1, (e_list) => {
                        list = e_list;
                        list[0].date_
                    });
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
