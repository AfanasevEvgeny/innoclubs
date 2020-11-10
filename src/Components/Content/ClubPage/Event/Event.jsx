import {Button, ListGroup} from "react-bootstrap";
import React, {useState} from "react";
import Modal from 'react-modal';
import store from "../../../../Redux/state";
const Event = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    var list;
    var f;

    return (
        <div>
            <ListGroup.Item>
                <p>some event </p>
                <Button variant="success" onClick={() => {
                    setModalIsOpen(true);
                    store.state.get_events("sb_club", 1, (e_list) => {
                        list = e_list;
                        f = list[0].date_begin;
                        console.log(f)
                    });


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
