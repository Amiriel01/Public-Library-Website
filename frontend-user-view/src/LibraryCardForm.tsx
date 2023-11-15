import Form from 'react-bootstrap/Form';
import MyButton from './MyButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomepageLink from './HomepageLink';
import axios from 'axios';
import { FormEvent, useState } from 'react';

export default function LibraryCardForm() {

    const initialValues = {
        name: "",
        phone: "",
        email: "",
        additional_information: "",
    }

    const [libraryCardFormInfo, setLibraryCardFormInfo] = useState(initialValues);

    const handleChange = (event: FormEvent) => {
        const { name, value } = event.target;
        setLibraryCardFormInfo({
            ...libraryCardFormInfo,
            [name]: value
        })
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const libraryCardFormData = {
            name: libraryCardFormInfo.name,
            phone: libraryCardFormInfo.phone,
            email: libraryCardFormInfo.email,
            additional_information: libraryCardFormInfo.help,
        }

        setLibraryCardFormInfo(initialValues);

        // await axios.post("http://localhost:3000/contact/contactForm", libraryCardFormData).then((response) => {
        //     console.log(response.status, response.data)
        // })

    }

    return (
        <>
            <Row id='library-card-form-container'>
                <HomepageLink />
                <Row>
                    <Col>
                        <h1 id='page-titles'>
                            Library Card Application
                        </h1>
                    </Col>
                </Row>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Full Name:</Form.Label>
                        <Form.Control
                            type="text"
                            name='name'
                            placeholder="Type your full name here."
                            value={libraryCardFormInfo.name}
                            onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Phone Number:</Form.Label>
                        <Form.Control
                            type="text"
                            name='phone'
                            placeholder="Type your phone number here."
                            value={libraryCardFormInfo.phone}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            name='email'
                            placeholder="name@example.com"
                            value={libraryCardFormInfo.email}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Text id='form-text' className="text-muted">
                        We'll never share your phone number or email with anyone else.
                    </Form.Text>
                    <Form.Group id='library-card-form-spacing' className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Additional Information: (use only if needed) </Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name='message'
                            value={libraryCardFormInfo.additional_information}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Text id='form-text' className="text-muted">
                        Please bring your proof of address document when you pick up your library card.
                    </Form.Text>
                    <div>
                        <MyButton id='contact-form-submit-button' title='Submit'></MyButton>
                    </div>
                </Form>
            </Row>
        </>
    );
}