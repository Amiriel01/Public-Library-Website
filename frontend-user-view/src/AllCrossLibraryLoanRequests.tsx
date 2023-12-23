import { useLocation, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import HomepageLink from './HomepageLink';

interface CrossLibraryLoan {
    _id: string,
    ordered: boolean,
    title: string,
    author: string,
    material_type: string,
    order_notes: string,
    name: string,
    phone: string,
    email: string,
    library_card_number: string,
}

export default function AllCrossLibraryLoanRequests() {

    const { pathname } = useLocation();
    const [crossLibraryLoanRequestsList, setcrossLibraryLoanRequestsList] = useState<Array<CrossLibraryLoan>>([]);

    async function getCrossLibraryLoanRequestsList() {
        await axios.get('http://localhost:3000/crossLibrary/crossLibraryFormList').then((response) => {
            setcrossLibraryLoanRequestsList(response.data);
            console.log(response.status, response.data);
        })
    }

    useEffect(() => {
        getCrossLibraryLoanRequestsList();
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    return (
        <Row id='all-cross-library-loan-requests-container'>
            <HomepageLink />
            <Row>
                <Col>
                    <h1 id='bold-text'>
                        Cross Library Loan Requests
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 className='all-cross-library-loan-requests-subheader'>
                        Not Ordered:
                    </h2>
                </Col>
            </Row>
            {crossLibraryLoanRequestsList.filter(value => value.ordered === false).map((crossLibraryRequest) => {
                return <NavLink to={"/crossLibrary/crossLibraryForm/" + crossLibraryRequest._id}
                    key={crossLibraryRequest._id}
                    id='cross-library-request-link'>
                    <Card id='cross-library-request-container'>
                        <Card.Body id='card-flex-container'>
                            <div>
                                <Card.Text>
                                    <div id='bold-flex-container'>
                                        <p id='bold-text'>Title:</p>
                                        <p>{crossLibraryRequest.title}</p>
                                    </div>
                                </Card.Text>
                                <Card.Text>
                                    <div id='bold-flex-container'>
                                        <p id='bold-text'>Author:</p>
                                        <p>{crossLibraryRequest.author}</p>
                                    </div>
                                </Card.Text>
                                <Card.Text>
                                    <div id='bold-flex-container'>
                                        <p id='bold-text'>Material Type:</p>
                                        <p id='all-contact-email'>{crossLibraryRequest.material_type}</p>
                                    </div>
                                </Card.Text>
                                <Card.Text>
                                    <div id='bold-flex-container'>
                                        <p id='bold-text'>Order Notes:</p>
                                        <p>{crossLibraryRequest.order_notes}</p>
                                    </div>
                                </Card.Text>
                            </div>
                            <div>
                                <Card.Text>
                                    <div id='bold-flex-container'>
                                        <p id='bold-text'>Name:</p>
                                        <p>{crossLibraryRequest.name}</p>
                                    </div>
                                </Card.Text>
                                <Card.Text>
                                    <div id='bold-flex-container'>
                                        <p id='bold-text'>Phone:</p>
                                        <p>{crossLibraryRequest.phone}</p>
                                    </div>
                                </Card.Text>
                                <Card.Text>
                                    <div id='bold-flex-container'>
                                        <p id='bold-text'>Email:</p>
                                        <p>{crossLibraryRequest.email}</p>
                                    </div>
                                </Card.Text>
                                <Card.Text>
                                    <div id='bold-flex-container'>
                                        <p id='bold-text'>Library Card Number:</p>
                                        <p>{crossLibraryRequest.library_card_number}</p>
                                    </div>
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </NavLink>
            })}
            <Row>
                <Col>
                    <h2 className='all-contact-subheader'>
                        Ordered:
                    </h2>
                </Col>
            </Row>
            {crossLibraryLoanRequestsList.filter(value => value.ordered === true).map((crossLibraryRequest) => {
                return <NavLink to={"/crossLibrary/crossLibraryForm/" + crossLibraryRequest._id}
                    key={crossLibraryRequest._id}
                    id='contact-request-link'>
                    <Card id='cross-library-request-container'>
                        <Card.Body id='card-flex-container'>
                            <div>
                                <Card.Text>
                                    <div id='bold-flex-container'>
                                        <p id='bold-text'>Title:</p>
                                        <p>{crossLibraryRequest.title}</p>
                                    </div>
                                </Card.Text>
                                <Card.Text>
                                    <div id='bold-flex-container'>
                                        <p id='bold-text'>Author:</p>
                                        <p>{crossLibraryRequest.author}</p>
                                    </div>
                                </Card.Text>
                                <Card.Text>
                                    <div id='bold-flex-container'>
                                        <p id='bold-text'>Material Type:</p>
                                        <p id='all-contact-email'>{crossLibraryRequest.material_type}</p>
                                    </div>
                                </Card.Text>
                                <Card.Text>
                                    <div id='bold-flex-container'>
                                        <p id='bold-text'>Order Notes:</p>
                                        <p>{crossLibraryRequest.order_notes}</p>
                                    </div>
                                </Card.Text>
                            </div>
                            <div>
                                <Card.Text>
                                    <div id='bold-flex-container'>
                                        <p id='bold-text'>Name:</p>
                                        <p>{crossLibraryRequest.name}</p>
                                    </div>
                                </Card.Text>
                                <Card.Text>
                                    <div id='bold-flex-container'>
                                        <p id='bold-text'>Phone:</p>
                                        <p>{crossLibraryRequest.phone}</p>
                                    </div>
                                </Card.Text>
                                <Card.Text>
                                    <div id='bold-flex-container'>
                                        <p id='bold-text'>Email:</p>
                                        <p>{crossLibraryRequest.email}</p>
                                    </div>
                                </Card.Text>
                                <Card.Text>
                                    <div id='bold-flex-container'>
                                        <p id='bold-text'>Library Card Number:</p>
                                        <p>{crossLibraryRequest.library_card_number}</p>
                                    </div>
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </NavLink>
            })}
        </Row>
    )
}