import { useLocation, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import HomepageLink from './HomepageLink';

interface LibraryCardRequest {
    _id: string,
    card_issued: boolean,
    name: string,
    phone: string,
    email: string,
    additional_information: string,
}

export default function AllLibraryCardRequests() {

    const { pathname } = useLocation();
    const [libraryCardRequestList, setLibraryCardRequestList] = useState<Array<LibraryCardRequest>>([]);

    async function getLibraryCardRequests() {
        await axios.get('http://localhost:3000/libraryCard/libraryCardSubmissionList').then((response) => {
            setLibraryCardRequestList(response.data);
            // console.log(response.status, response.data);
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
                    className='library-card-request-link'>
                    <Card className='library-card-request-container'>
                    <Card.Body>
                            <div className='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Name:
                                </Card.Text>
                                <Card.Text>
                                    {libraryCardRequest.name}
                                </Card.Text>
                            </div>
                            <div className='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Phone:
                                </Card.Text>
                                <Card.Text>
                                    {libraryCardRequest.phone}
                                </Card.Text>
                            </div>
                            <div className='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Email:
                                </Card.Text>
                                <Card.Text id="all-contact-email">
                                    {libraryCardRequest.email}
                                </Card.Text>
                            </div>
                            <div className='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Additional Information:
                                </Card.Text>
                                <Card.Text>
                                    {libraryCardRequest.additional_information}
                                </Card.Text>
                            </div>
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
                    className='library-card-request-link'>
                    <Card id='library-card-request-container'>
                    <Card.Body>
                            <div className='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Name:
                                </Card.Text>
                                <Card.Text>
                                    {libraryCardRequest.name}
                                </Card.Text>
                            </div>
                            <div className='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Phone:
                                </Card.Text>
                                <Card.Text>
                                    {libraryCardRequest.phone}
                                </Card.Text>
                            </div>
                            <div className='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Email:
                                </Card.Text>
                                <Card.Text id="all-contact-email">
                                    {libraryCardRequest.email}
                                </Card.Text>
                            </div>
                            <div className='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Additional Information:
                                </Card.Text>
                                <Card.Text>
                                    {libraryCardRequest.additional_information}
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </NavLink>
            })}
        </Row>
    )
}
