import Form from 'react-bootstrap/Form';
import MyButton from './MyButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomepageLink from './HomepageLink';
import FirstFooter from './FirstFooter';
import axios from 'axios';
import { FormEvent, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Logo from './images/logo.png';

export default function LibraryCardForm({ showAdmin }: {
    showAdmin: boolean
}) {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    const initialValues = {
        name: "",
        phone: "",
        email: "",
        additional_information: "",
    }

    const [libraryCardFormInfo, setLibraryCardFormInfo] = useState(initialValues);
    const [alertShow, setAlertShow] = useState(false);

    const handleChange = (event: FormEvent) => {
        const { name, value } = event.target as any;
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
            additional_information: libraryCardFormInfo.additional_information,
        }

        setLibraryCardFormInfo(initialValues);

        await axios.post("http://localhost:3000/libraryCard/libraryCardSubmission", libraryCardFormData).then((response) => {
            setAlertShow(true);
        })
    }

    const allLibraryCardLink = () => {
        if (showAdmin === true) {
            return <Row>
                <Col>
                    <p>
                        <Link id='all-library-card-page-link' to='/AllLibraryCardRequests'>
                            All Library Card Requests
                        </Link>
                    </p>
                </Col>
            </Row>
        }
    }

    return (
        <>
            <div>
                <Helmet>
                    <title>Another Page Public Library Card Application</title>
                    <meta name="description" content="The library card application allows residents to apply for a library card online. Patrons will pick up their library card at the library when it is ready." />
                    <meta name="keywords" content="react, public library, library card application" />
                    <meta property="og:title" content="Another Page Public Library Card Application" />
                    <meta property="og:description" content="The library card application allows residents to apply for a library card online. Patrons will pick up their library card at the library when it is ready." />
                    <meta property="og:image" content={Logo} />
                    <meta property="og:url" content="https://example.com/my-page" />
                </Helmet>
                <Row id='library-card-form-container'>
                    <HomepageLink />
                    {allLibraryCardLink()}
                    <Row>
                        <Col>
                            <h1 id='page-titles'>
                                Library Card Application
                            </h1>
                        </Col>
                    </Row>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Full Name:</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name='name'
                                placeholder="Type your full name here."
                                value={libraryCardFormInfo.name}
                                onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Phone Number:</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name='phone'
                                placeholder="Type your phone number here."
                                value={libraryCardFormInfo.phone}
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
                                value={libraryCardFormInfo.email}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Text id='form-text' className="text-muted">
                            We'll never share your phone number or email with anyone else.
                        </Form.Text>
                        <Form.Group id='library-card-form-spacing' className="mb-3">
                            <Form.Label>Additional Information: (use only if needed) </Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name='additional_information'
                                value={libraryCardFormInfo.additional_information}
                                onChange={handleChange}
                                placeholder="Type additional information here."
                            />
                        </Form.Group>
                        <Form.Text id='form-text' className="text-muted">
                            Please bring your proof of address document when you pick up your library card.
                        </Form.Text>
                        <div>
                            <MyButton className='contact-form-submit-button' title='Submit'></MyButton>
                        </div>
                    </Form>
                    <Row>
                        <Col>
                            <Alert hidden={!alertShow} variant={"success"}>
                                Your library card application was submitted successfully!
                            </Alert>
                        </Col>
                    </Row>
                </Row>
                <FirstFooter />
            </div>
        </>
    );
}