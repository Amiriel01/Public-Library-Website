import { useLocation, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import HomepageLink from './HomepageLink';

export default function AllLibraryCardRequests() {

    const { pathname } = useLocation();
    const [libraryCardRequestList, setLibraryCardRequestList] = useState([]);

    async function getLibraryCardRequests() {
        await axios.get('http://localhost:3000/libraryCard/libraryCardSubmissionList').then((response) => {
            setLibraryCardRequestList(response.data);
            console.log(response.status, response.data);
        })
    }

    useEffect(() => {
        getLibraryCardRequests();
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    return (
        <Row id='all-library-card-requests-container'>
            <HomepageLink />
            <Row>
                <Col>
                    <h1 id='bold-text'>
                        Library Card Requests
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 className='all-library-card-subheader'>
                        Card Not Issued:
                    </h2>
                </Col>
            </Row>
            {libraryCardRequestList.filter(value => value.card_issued === false).map((libraryCardRequest) => {
                return <NavLink to={"/libraryCard/libraryCardSubmission/" + libraryCardRequest._id}
                    key={libraryCardRequest._id}
                    id='library-card-request-link'>
                    <Card id='library-card-request-container'>
                        <Card.Body>
                            <Card.Text>
                                <div id='bold-flex-container'>
                                    <p id='bold-text'>Name:</p>
                                    <p>{libraryCardRequest.name}</p>
                                </div>
                            </Card.Text>
                            <Card.Text>
                                <div id='bold-flex-container'>
                                    <p id='bold-text'>Phone:</p>
                                    <p>{libraryCardRequest.phone}</p>
                                </div>
                            </Card.Text>
                            <Card.Text>
                                <div id='bold-flex-container'>
                                    <p id='bold-text'>Email:</p>
                                    <p id='all-library-card-email'>{libraryCardRequest.email}</p>
                                </div>
                            </Card.Text>
                            <Card.Text>
                                <div id='bold-flex-container'>
                                    <p id='bold-text'>Help:</p>
                                    <p>{libraryCardRequest.additional_information}</p>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </NavLink>
            })}
            <Row>
                <Col>
                    <h2 className='all-library-card-subheader'>
                        Card Issued:
                    </h2>
                </Col>
            </Row>
            {libraryCardRequestList.filter(value => value.card_issued === true).map((libraryCardRequest) => {
                return <NavLink to={"/libraryCard/libraryCardSubmission/" + libraryCardRequest._id}
                    key={libraryCardRequest._id}
                    id='library-card-request-link'>
                    <Card id='library-card-request-container'>
                        <Card.Body>
                            <Card.Text>
                                <div id='bold-flex-container'>
                                    <p id='bold-text'>Name:</p>
                                    <p>{libraryCardRequest.name}</p>
                                </div>
                            </Card.Text>
                            <Card.Text>
                                <div id='bold-flex-container'>
                                    <p id='bold-text'>Phone:</p>
                                    <p>{libraryCardRequest.phone}</p>
                                </div>
                            </Card.Text>
                            <Card.Text>
                                <div id='bold-flex-container'>
                                    <p id='bold-text'>Email:</p>
                                    <p id='all-library-card-email'>{libraryCardRequest.email}</p>
                                </div>
                            </Card.Text>
                            <Card.Text>
                                <div id='bold-flex-container'>
                                    <p id='bold-text'>Help:</p>
                                    <p>{libraryCardRequest.additional_information}</p>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </NavLink>
            })}
        </Row>
    )
}
