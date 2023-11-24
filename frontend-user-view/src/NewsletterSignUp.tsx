import Form from 'react-bootstrap/Form';
import MyButton from './MyButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomepageLink from './HomepageLink';
import axios from 'axios';
import { useState, FormEvent } from 'react';
import Alert from 'react-bootstrap/Alert';

export default function NewsletterSignUp() {

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
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
                    <MyButton id='newsletter-form-submit-button' title='Sign Up!'></MyButton>
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
    )
}
