import { useLocation, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import HomepageLink from './HomepageLink';

interface VolunteerApplication {
    _id: string,
    approved: boolean,
    name: string,
    phone: string,
    email: string,
    work_experience: string,
    volunteer_experience: string,
}

export default function AllVolunteerApplications() {

    const { pathname } = useLocation();

    const [volunteerApplicationsList, setVolunteerApplicationsList] = useState<Array<VolunteerApplication>>([]);

    async function getVolunteerApplications() {
        await axios.get('http://localhost:3000/volunteer/volunteerFormList').then((response) => {
            setVolunteerApplicationsList(response.data);
        })
    }

    useEffect(() => {
        getVolunteerApplications();
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    return (
        <Row id='all-volunteer-applications-container'>
            <HomepageLink />
            <Row>
                <Col>
                    <h1 id='bold-text'>
                        Volunteer Applications
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 className='all-volunteer-applications-subheader'>
                        New Applications:
                    </h2>
                </Col>
            </Row>
            {volunteerApplicationsList.filter(value => value.approved === false).map((volunteerApplication) => {
                return <NavLink to={"/volunteer/volunteerForm/" + volunteerApplication._id}
                    key={volunteerApplication._id}
                    className='volunteer-application-link'>
                    <Card id='volunteer-application-container'>
                        <Card.Body>
                            <div className='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Name:
                                </Card.Text>
                                <Card.Text>
                                    {volunteerApplication.name}
                                </Card.Text>
                            </div>
                            <div className='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Phone:
                                </Card.Text>
                                <Card.Text>
                                    {volunteerApplication.phone}
                                </Card.Text>
                            </div>
                            <div className='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Email:
                                </Card.Text>
                                <Card.Text id="all-contact-email">
                                    {volunteerApplication.email}
                                </Card.Text>
                            </div>
                            <div className='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Work Experience:
                                </Card.Text>
                                <Card.Text>
                                    {volunteerApplication.work_experience}
                                </Card.Text>
                            </div>
                            <div className='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Volunteer Experience:
                                </Card.Text>
                                <Card.Text>
                                    {volunteerApplication.volunteer_experience}
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </NavLink>
            })}
            <Row>
                <Col>
                    <h2 className='all-library-card-subheader'>
                        Approved Applications:
                    </h2>
                </Col>
            </Row>
            {volunteerApplicationsList.filter(value => value.approved === true).map((volunteerApplication) => {
                return <NavLink to={"/volunteer/volunteerForm/" + volunteerApplication._id}
                    key={volunteerApplication._id}
                    className='volunteer-application-link'>
                    <Card id='volunteer-application-container'>
                    <Card.Body>
                            <div className='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Name:
                                </Card.Text>
                                <Card.Text>
                                    {volunteerApplication.name}
                                </Card.Text>
                            </div>
                            <div className='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Phone:
                                </Card.Text>
                                <Card.Text>
                                    {volunteerApplication.phone}
                                </Card.Text>
                            </div>
                            <div className='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Email:
                                </Card.Text>
                                <Card.Text id="all-contact-email">
                                    {volunteerApplication.email}
                                </Card.Text>
                            </div>
                            <div className='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Work Experience:
                                </Card.Text>
                                <Card.Text>
                                    {volunteerApplication.work_experience}
                                </Card.Text>
                            </div>
                            <div className='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Volunteer Experience:
                                </Card.Text>
                                <Card.Text>
                                    {volunteerApplication.volunteer_experience}
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </NavLink>
            })}
        </Row>
    )
}
