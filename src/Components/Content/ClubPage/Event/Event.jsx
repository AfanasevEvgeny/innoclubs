import {Button, ListGroup} from "react-bootstrap";
import React, {useState} from "react";
import Modal from 'react-modal';

const Event = (props) =>
{
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div>
            <ListGroup.Item>
                <p>Weekly training 1</p>
                <Button variant="success" onClick={() =>
                {
                    setModalIsOpen(true);
                    window.state.get_events("sb_club", 1, (e_list) =>
                    {
                        console.log('HELLO FROM GET EVENTS', {e_list});
                    });
                }}>Available</Button>
                <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                    <h1>открылось</h1>
                    <Button variant="success" onClick={() => setModalIsOpen(false)}>Close</Button>
                </Modal>
            </ListGroup.Item>
        </div>
    )
}
export default Event
