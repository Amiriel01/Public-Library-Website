import { useLocation, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import HomepageLink from './HomepageLink';

interface ContactForm {
    _id: string,
    completed: boolean,
    name: string,
    phone: string,
    email: string,
    help: string,
    message: string,
    admin_notes: string,
}

export default function AllContactRequests() {

    const { pathname } = useLocation();
    const [contactRequestsList, setContactRequestsList] = useState<Array<ContactForm>>([]);

    async function getContactRequests() {
        await axios.get('http://localhost:3000/contact/contactFormList').then((response) => {
            setContactRequestsList(response.data);
        })
    }

    useEffect(() => {
        getContactRequests();
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    return (
        <Row id='all-contact-requests-container'>
            <HomepageLink />
            <Row>
                <Col>
                    <h1 id='bold-text'>
                        Contact Requests
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 className='all-contact-subheader'>
                        Not Completed:
                    </h2>
                </Col>
            </Row>
            {contactRequestsList.filter(value => value.completed === false).map((contactRequest) => {
                return <NavLink to={"/contact/contactForm/" + contactRequest._id}
                    key={contactRequest._id}
                    className='contact-request-link'>
                    <Card id='contact-request-container'>
                        <Card.Body>
                            <div className='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Name:
                                </Card.Text>
                                <Card.Text>
                                    {contactRequest.name}
                                </Card.Text>
                            </div>
                            <div className='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Phone:
                                </Card.Text>
                                <Card.Text>
                                    {contactRequest.phone}
                                </Card.Text>
                            </div>
                            <div className='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Email:
                                </Card.Text>
                                <Card.Text id="all-contact-email">
                                    {contactRequest.email}
                                </Card.Text>
                            </div>
                            <div className='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Help:
                                </Card.Text>
                                <Card.Text>
                                    {contactRequest.help}
                                </Card.Text>
                            </div>
                            <div className='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Message:
                                </Card.Text>
                                <Card.Text>
                                    {contactRequest.message}
                                </Card.Text>
                            </div>
                            <div className='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Admin Notes:
                                </Card.Text>
                                <Card.Text>
                                    {contactRequest.admin_notes}
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </NavLink>
            })}
            <Row>
                <Col>
                    <h2 className='all-contact-subheader'>
                        Completed:
                    </h2>
                </Col>
            </Row>
            {contactRequestsList.filter(value => value.completed === true).map((contactRequest) => {
                return <NavLink to={"/contact/contactForm/" + contactRequest._id}
                    key={contactRequest._id}
                    className='contact-request-link'>
                    <Card id='contact-request-container'>
                        <Card.Body>
                            <div className='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Name:
                                </Card.Text>
                                <Card.Text>
                                    {contactRequest.name}
                                </Card.Text>
                            </div>
                            <div className='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Phone:
                                </Card.Text>
                                <Card.Text>
                                    {contactRequest.phone}
                                </Card.Text>
                            </div>
                            <div className='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Email:
                                </Card.Text>
                                <Card.Text id="all-contact-email">
                                    {contactRequest.email}
                                </Card.Text>
                            </div>
                            <div className='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Help:
                                </Card.Text>
                                <Card.Text>
                                    {contactRequest.help}
                                </Card.Text>
                            </div>
                            <div className='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Message:
                                </Card.Text>
                                <Card.Text>
                                    {contactRequest.message}
                                </Card.Text>
                            </div>
                            <div className='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Admin Notes:
                                </Card.Text>
                                <Card.Text>
                                    {contactRequest.admin_notes}
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </NavLink>
            })}
        </Row>
    )
}