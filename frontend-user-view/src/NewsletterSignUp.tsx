import Form from 'react-bootstrap/Form';
import MyButton from './MyButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomepageLink from './HomepageLink';
import axios from 'axios';
import { useState, FormEvent } from 'react';
import Alert from 'react-bootstrap/Alert';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Logo from './images/logo.png';

export default function NewsletterSignUp() {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    const initialValues = {
        email: "",
    }

    const [newsletterForm, setNewsletterForm] = useState(initialValues);
    const [alertShow, setAlertShow] = useState(false)

    const handleChange = (event: FormEvent) => {
        const { name, value } = event.target as any;
        console.log(event.target)
        setNewsletterForm({
            ...newsletterForm,
            [name]: value
        })
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const newsletterFormData = {
            email: newsletterForm.email,
        }

        setNewsletterForm(initialValues);

        await axios.post("http://localhost:3000/newsletter/newsletterSubscription", newsletterFormData).then((response) => {
            console.log(response.status, response.data)
            setAlertShow(true)
        })

    }

    return (
        <>
            <div>
                <Helmet>
                    <title>Another Page Public Library Newsletter Sign Up</title>
                    <meta name="description" content="The newsletter sign up will sign library patrons up for a monthly newsletter email. The email will contain information about exhibits, events, and new book releases." />
                    <meta name="keywords" content="react, public library, newsletter sign up" />
                    <meta property="og:title" content="Another Page Public Library Newsletter Sign Up" />
                    <meta property="og:description" content="The newsletter sign up will sign library patrons up for a monthly newsletter email. The email will contain information about exhibits, events, and new book releases." />
                    <meta property="og:image" content={Logo} />
                    <meta property="og:url" content="https://example.com/my-page" />
                    <meta name="twitter:title" content="Another Page Public Library Newsletter Sign Up" />
                    <meta name="twitter:description" content="The newsletter sign up will sign library patrons up for a monthly newsletter email. The email will contain information about exhibits, events, and new book releases." />
                    <meta name="twitter:image" content={Logo} />
                    <meta name="twitter:card" content={Logo} />
                </Helmet>
                <Row id='newsletter-sign-up-container'>
                    <HomepageLink />
                    <Row>
                        <Col>
                            <h1 id='bold-text'>
                                Newsletter Sign Up
                            </h1>
                        </Col>
                    </Row>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label id='bold-text'>Email Address:</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                name='email'
                                placeholder="name@example.com"
                                value={newsletterForm.email}
                                onChange={handleChange}
                                id='newsletter-input' />
                        </Form.Group>
                        <div>
                            <MyButton className='newsletter-form-submit-button' title='Sign Up!'></MyButton>
                        </div>
                    </Form>
                    <Row>
                        <Col>
                            <Alert id='newsletter-alert' hidden={!alertShow} variant={"success"}>
                                Your newsletter subscription was submitted successfully! Thank you!
                            </Alert>
                        </Col>
                    </Row>
                </Row>
            </div>
        </>
    )
}
