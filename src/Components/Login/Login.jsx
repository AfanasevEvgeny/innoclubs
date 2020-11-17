import React, {Fragment} from "react";
import Particles from 'react-particles-js';
import s from "./login.module.css"
import {Button, Form} from "react-bootstrap";
import {Card} from "react-bootstrap";
import logo from "./logo_48.png"

const Login = () => {
    return (

        <div className={s.logWrapper}>
            <Particles/>
            <div className={s.logWrapper2}>
                <div className={s.Login}>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"/>
                            <Form.Text className="text-muted">
                                Your Innopolis University email
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"/>
                        </Form.Group>
                        <Button variant="success">
                            Sign in
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}
export default Login
