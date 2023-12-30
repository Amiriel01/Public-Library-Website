import Form from 'react-bootstrap/Form';
import MyButton from './MyButton';
import axios from 'axios';
import { FormEvent, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

export default function ContactForm() {

    const initialValues = {
        name: "",
        phone: "",
        email: "",
        help: "",
        message: "",
    }

    const [contactForm, setContactForm] = useState(initialValues);
    const [alertShow, setAlertShow] = useState(false);

    const handleChange = (event: FormEvent) => {
        const { name, value } = event.target as any;
        console.log(event.target)
        setContactForm({
            ...contactForm,
            [name]: value
        })
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const contactFormData = {
            name: contactForm.name,
            phone: contactForm.phone,
            email: contactForm.email,
            help: contactForm.help,
            message: contactForm.message,
        }

        setContactForm(initialValues);

        await axios.post("http://localhost:3000/contact/contactForm", contactFormData).then((response) => {
            console.log(response.status, response.data)
            setAlertShow(true)
        })

    }


    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Full Name:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name='name'
                        placeholder="Type your full name here."
                        value={contactForm.name}
                        onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Phone Number:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name='phone'
                        placeholder="Type your phone number here."
                        value={contactForm.phone}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        name='email'
                        placeholder="name@example.com"
                        value={contactForm.email}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Select aria-label="Default select example"
                    required
                    value={contactForm.help}
                    name='help'
                    onChange={handleChange}
                >
                    <option>How can we help?</option>
                    <option value="Questions about library card">Questions about library card</option>
                    <option value="Quesitons about events">Quesitons about events</option>
                    <option value="Questions about programs">Questions about programs</option>
                    <option value="Questions about donations">Questions about donations</option>
                    <option value="Questions about volunteer opportunities<">Questions about volunteer opportunities</option>
                    <option value="Issues with the website">Issues with the website</option>
                    <option value="Other Questions">Other Questions</option>
                </Form.Select>
                <Form.Group className="mb-3">
                    <Form.Label>Message:</Form.Label>
                    <Form.Control
                        required
                        as="textarea"
                        rows={3}
                        name='message'
                        value={contactForm.message}
                        onChange={handleChange}
                        placeholder="Type your message here."
                    />
                </Form.Group>
                <Form.Text id='form-text' className="text-muted">
                    We'll never share your phone number or email with anyone else.
                </Form.Text>
                <div>
                    <MyButton className='contact-form-submit-button' title='Submit'></MyButton>
                </div>
            </Form>
            <Row>
                <Col>
                    <Alert hidden={!alertShow} variant={"success"}>
                        Your contact request was submitted successfully!
                    </Alert>
                </Col>
            </Row>
        </>
    )
}