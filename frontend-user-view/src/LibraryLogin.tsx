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
import { useNavigate } from "react-router";

export default function LibraryLogin({ setLoggedIn, setShowAdmin }) {

    const { pathname } = useLocation();
    const navigate = useNavigate();

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
            if (response.data.username === userLoginData.username && response.data.password === userLoginData.password) {
                setLoggedIn(true);
                setShowAdmin(true);
                navigate("/Homepage");
            } else {
                return
            }
        })
    }

    // const asyncUpdate = () => {
    //     setTimeout(() => {
    //       setCount((currentCount) => currentCount + 1);
    //     }, 2000);
    //   };

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
                    <Form.Group className="mb-3">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name='username'
                            placeholder="Type your username here."
                            value={userLogin.username}
                            onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
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
                        <MyButton id='login-form-submit-button' title='Submit'></MyButton>
                    </div>
                </Form>
            </Row>
            <FirstFooter />
        </>
    );
}