import React, {Fragment} from "react";
import Particles from 'react-particles-js';
import s from "./login.module.css"
import {Button, Form} from "react-bootstrap";
import {Card} from "react-bootstrap";
import logo from "./logo_48.png"

const Login = () => {
    return (

        <div className={s.logWrapper}>
            <div className={s.Login}>
                <Form>
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            //value={email}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                        />
                    </Form.Group>
                    <Button block size="lg" type="submit" variant="success">
                        Login
                    </Button>
                </Form>
            </div>
            <div className={s.logWrapper2}>
                <Particles/>
            </div>
        </div>
    )
}
export default Login
