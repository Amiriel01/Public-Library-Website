import { useLocation, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from './utility/axios';
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
        await axios.get('crossLibrary/crossLibraryFormList').then((response) => {
            setcrossLibraryLoanRequestsList(response.data);
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
                    className='cross-library-request-link'>
                    <Card id='cross-library-request-container'>
                        <Card.Body>
                            <div className='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Title:
                                </Card.Text>
                                <Card.Text>
                                    {crossLibraryRequest.title}
                                </Card.Text>
                            </div>
                            <div className='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Author:
                                </Card.Text>
                                <Card.Text>
                                    {crossLibraryRequest.author}
                                </Card.Text>
                            </div>
                            <div className='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Material Type:
                                </Card.Text>
                                <Card.Text>
                                    {crossLibraryRequest.material_type}
                                </Card.Text>
                            </div>
                            <div className='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Order Notes:
                                </Card.Text>
                                <Card.Text>
                                    {crossLibraryRequest.order_notes}
                                </Card.Text>
                            </div>
                            <div className='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Name:
                                </Card.Text>
                                <Card.Text>
                                    {crossLibraryRequest.name}
                                </Card.Text>
                            </div>
                            <div className='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Phone Number:
                                </Card.Text>
                                <Card.Text>
                                    {crossLibraryRequest.phone}
                                </Card.Text>
                            </div>
                            <div className='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Email:
                                </Card.Text>
                                <Card.Text id="all-contact-email">
                                    {crossLibraryRequest.email}
                                </Card.Text>
                            </div>
                            <div className='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Library Card Number:
                                </Card.Text>
                                <Card.Text>
                                    {crossLibraryRequest.library_card_number}
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
                    className='cross-library-request-link'>
                    <Card id='cross-library-request-container'>
                        <Card.Body>
                            <div className='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Title:
                                </Card.Text>
                                <Card.Text>
                                    {crossLibraryRequest.title}
                                </Card.Text>
                            </div>
                            <div className='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Author:
                                </Card.Text>
                                <Card.Text>
                                    {crossLibraryRequest.author}
                                </Card.Text>
                            </div>
                            <div className='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Material Type:
                                </Card.Text>
                                <Card.Text>
                                    {crossLibraryRequest.material_type}
                                </Card.Text>
                            </div>
                            <div className='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Order Notes:
                                </Card.Text>
                                <Card.Text>
                                    {crossLibraryRequest.order_notes}
                                </Card.Text>
                            </div>
                            <div className='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Name:
                                </Card.Text>
                                <Card.Text>
                                    {crossLibraryRequest.name}
                                </Card.Text>
                            </div>
                            <div className='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Phone Number:
                                </Card.Text>
                                <Card.Text>
                                    {crossLibraryRequest.phone}
                                </Card.Text>
                            </div>
                            <div className='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Email:
                                </Card.Text>
                                <Card.Text id="all-contact-email">
                                    {crossLibraryRequest.email}
                                </Card.Text>
                            </div>
                            <div className='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Library Card Number:
                                </Card.Text>
                                <Card.Text>
                                    {crossLibraryRequest.library_card_number}
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </NavLink>
            })}
        </Row>
    )
}