import Form from 'react-bootstrap/Form';
import MyButton from './MyButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomepageLink from './HomepageLink';
import axios from 'axios';
import { FormEvent, useState } from 'react';
import FirstFooter from './FirstFooter';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function LibraryLogin({ loggedIn, setLoggedIn, showAdmin, setShowAdmin }) {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    const initialValues = {
        username: "",
        password: "",
    }

    const [userLogin, setUserLogin] = useState(initialValues);

    const handleChange = (event: FormEvent) => {
        const { name, value } = event.target as any;
        setUserLogin({
            ...userLogin,
            [name]: value
        })
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const userLoginData = {
            username: userLogin.username,
            password: userLogin.password,
        }

        setUserLogin(initialValues);

        await axios.get("http://localhost:3000/users/user/656d2207092df7c8443fd310").then((response) => {
            console.log(response.status, response.data)
            console.log(userLoginData.username)
            console.log(userLoginData.password)
            console.log(response.data.username)
            console.log(response.data.password)
            if (response.data.username === userLoginData.username && response.data.password === userLoginData.password) {
                setLoggedIn(true);
                setShowAdmin(true);
                // console.log(loggedIn)
                // console.log(showAdmin)
            } else {
                return
            }
        })
    }

    return (
        <>
            <Row id='login-form-container'>
                <HomepageLink />
                <Row>
                    <Col>
                        <h1 id='page-titles'>
                            Library Login
                        </h1>
                    </Col>
                </Row>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name='username'
                            placeholder="Type your username here."
                            value={userLogin.username}
                            onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name='password'
                            placeholder="Type your password here."
                            value={userLogin.password}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <div>
                        <MyButton id='lgoin-form-submit-button' title='Submit'></MyButton>
                    </div>
                </Form>
            </Row>
            <FirstFooter />
        </>
    );
}