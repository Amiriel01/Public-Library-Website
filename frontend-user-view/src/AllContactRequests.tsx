import { useLocation, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import HomepageLink from './HomepageLink';

export default function AllContactRequests() {

    const { pathname } = useLocation();
    const [contactRequestsList, setContactRequestsList] = useState([]);

    async function getContactRequests() {
        await axios.get('http://localhost:3000/contact/contactFormList').then((response) => {
            setContactRequestsList(response.data);
            console.log(response.status, response.data);
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
            {contactRequestsList.map((contactRequest) => {
                return <NavLink to={"/contact/contactForm/" + contactRequest._id}
                    key={contactRequest._id}
                    id='contact-request-link'>
                    <Card id='contact-request-container'>
                        <Card.Body>
                            <Card.Text>
                                <div id='bold-flex-container'>
                                    <p id='bold-text'>Name:</p>
                                    <p>{contactRequest.name}</p>
                                </div>
                            </Card.Text>
                            <Card.Text>
                                <div id='bold-flex-container'>
                                    <p id='bold-text'>Phone:</p>
                                    <p>{contactRequest.phone}</p>
                                </div>
                            </Card.Text>
                            <Card.Text>
                                <div id='bold-flex-container'>
                                    <p id='bold-text'>Email:</p>
                                    <p>{contactRequest.email}</p>
                                </div>
                            </Card.Text>
                            <Card.Text>
                                <div id='bold-flex-container'>
                                    <p id='bold-text'>Help:</p>
                                    <p>{contactRequest.help}</p>
                                </div>
                            </Card.Text>
                            <Card.Text>
                                <div id='bold-flex-container'>
                                    <p id='bold-text'>Message:</p>
                                    <p>{contactRequest.message}</p>
                                </div>
                            </Card.Text>
                            <Card.Text>
                                <div id='bold-flex-container'>
                                    <p id='bold-text'>Admin Notes:</p>
                                    <p>{contactRequest.admin_notes}</p>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </NavLink>
            })}
        </Row>
    )
}