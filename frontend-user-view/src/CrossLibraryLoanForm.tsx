import Form from 'react-bootstrap/Form';
import MyButton from './MyButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomepageLink from './HomepageLink';
import FirstFooter from './FirstFooter';
import axios from './utility/axios';
import { FormEvent, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Logo from './images/logo.png';

export default function CrossLibraryLoanForm({ showAdmin }: {
    showAdmin: boolean
}) {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    const initialValues = {
        title: "",
        author: "",
        material_type: "",
        name: "",
        phone: "",
        email: "",
        library_card_number: "",
    }

    const [crossLibraryFormInfo, setCrossLibraryFormInfo] = useState(initialValues);
    const [alertShow, setAlertShow] = useState(false);

    const handleChange = (event: FormEvent) => {
        const { name, value } = event.target as any;
        setCrossLibraryFormInfo({
            ...crossLibraryFormInfo,
            [name]: value
        })
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const crossLibraryFormData = {
            title: crossLibraryFormInfo.title,
            author: crossLibraryFormInfo.author,
            material_type: crossLibraryFormInfo.material_type,
            name: crossLibraryFormInfo.name,
            library_card_number: crossLibraryFormInfo.library_card_number,
            phone: crossLibraryFormInfo.phone,
            email: crossLibraryFormInfo.email,
        }

        setCrossLibraryFormInfo(initialValues);

        await axios.post("crossLibrary/crossLibraryForm", crossLibraryFormData).then((response) => {
            setAlertShow(true);
        })
    }

    const allCrossLibraryLoanLink = () => {
        if (showAdmin === true) {
            return <Row>
                <Col>
                    <p>
                        <Link id='all-cross-library-page-link' to='/AllCrossLibraryLoanRequests'>
                            All Cross Library Loan Requests
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
                    <title>Another Page Public Library Cross Library Loans</title>
                    <meta name="description" content="The cross library loan form allows library card holders to request materials that our local library does not have. Patrons will fill out the form and pay a $5.00 fee when picking up their requested item." />
                    <meta name="keywords" content="react, public library, cross library loans" />
                    <meta property="og:title" content="nother Page Public Library Cross Library Loans" />
                    <meta property="og:description" content="The cross library loan form allows library card holders to request materials that our local library does not have. Patrons will fill out the form and pay a $5.00 fee when picking up their requested item." />
                    <meta property="og:image" content={Logo} />
                    <meta property="og:url" content="https://example.com/my-page" />
                </Helmet>
                <Row id='library-card-form-container'>
                    <HomepageLink />
                    {allCrossLibraryLoanLink()}
                    <Row>
                        <Col>
                            <h1 id='page-titles'>
                                Cross Library Loan Form
                            </h1>
                        </Col>
                    </Row>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Title:</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name='title'
                                placeholder="Type the title requested here."
                                value={crossLibraryFormInfo.title}
                                onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Author Name:</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name='author'
                                placeholder="Type the author name here."
                                value={crossLibraryFormInfo.author}
                                onChange={handleChange} />
                        </Form.Group>
                        <Form.Select aria-label="Default select example"
                            value={crossLibraryFormInfo.material_type}
                            name='material_type'
                            onChange={handleChange}
                        >
                            <option>Material Type Requested?</option>
                            <option value="Book">Book</option>
                            <option value="Audio_Book">Audio Book</option>
                            <option value="DVD">DVD</option>
                        </Form.Select>
                        <Form.Group className="mb-3">
                            <Form.Label>Full Name:</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name='name'
                                placeholder="Type your full name here."
                                value={crossLibraryFormInfo.name}
                                onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Library Card Number:</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name='library_card_number'
                                placeholder="Type your library card number here."
                                value={crossLibraryFormInfo.library_card_number}
                                onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Phone Number:</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name='phone'
                                placeholder="Type your phone number here."
                                value={crossLibraryFormInfo.phone}
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
                                value={crossLibraryFormInfo.email}
                                onChange={handleChange}
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
                                Your cross library request form was submitted successfully! You will be notified when your item arrives. Please bring the $5.00 fee when you pick up your item.
                            </Alert>
                        </Col>
                    </Row>
                </Row>
                <FirstFooter />
            </div>
        </>
    );
}