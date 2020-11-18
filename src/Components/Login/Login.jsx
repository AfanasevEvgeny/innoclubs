import React, {Fragment, useState} from "react";
import Particles from 'react-particles-js';
import s from "./login.module.css"
import {Button, Form} from "react-bootstrap";
import {Card} from "react-bootstrap";
import logo from "./logo_48.png"
import {authenticate} from "../../index";
import {useHistory} from "react-router-dom";

const Login = () =>
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    function validateForm()
    {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event)
    {
        event.preventDefault();

        console.log({email, password}, 'starting login');

        authenticate(email, password);

        let listener = setInterval(_ =>
        {
            if (window.loggedIn)
            {
                history.push("/main");
                clearInterval(listener);

            }
            // todo сделать в начале любой страницы проверку на loggedIn и если false то отправлять на /login
        }, 50);
    }

    return (
        <div className={s.logWrapper}>
            <Particles/>
            <div className={s.logWrapper2}>
                <div className={s.Login}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group size="lg" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                autoFocus
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                        </Form.Group>
                        <Form.Group size="lg" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Button block size="lg" type="submit" disabled={!validateForm()}>
                            Let me in
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}
export default Login;