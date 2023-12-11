import { useLocation, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import HomepageLink from './HomepageLink';

export default function AllVolunteerApplications() {

    const { pathname } = useLocation();

    const [interviewed, setInterviewed] = useState<string>('');
    const [volunteerApplicationsList, setVolunteerApplicationsList] = useState([]);

    async function getVolunteerApplications() {
        await axios.get('http://localhost:3000/volunteer/volunteerFormList').then((response) => {
            setVolunteerApplicationsList(response.data);
            console.log(response.status, response.data);
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
                    id='volunteer-application-link'>
                    <Card id='volunteer-application-container'>
                        <Card.Body id='all-volunteer-flex-availability'>
                            <div>
                                <Card.Text>
                                    <div id='bold-flex-container'>
                                        <p id='bold-text'>Name:</p>
                                        <p>{volunteerApplication.name}</p>
                                    </div>
                                </Card.Text>
                                <Card.Text>
                                    <div id='bold-flex-container'>
                                        <p id='bold-text'>Phone:</p>
                                        <p>{volunteerApplication.phone}</p>
                                    </div>
                                </Card.Text>
                                <Card.Text>
                                    <div id='bold-flex-container'>
                                        <p id='bold-text'>Email:</p>
                                        <p id='all-library-card-email'>{volunteerApplication.email}</p>
                                    </div>
                                </Card.Text>
                            </div>
                            <div>
                                <Card.Text>
                                    <div id='bold-flex-container'>
                                        <p id='bold-text'>Work Experience:</p>
                                        <p>{volunteerApplication.work_experience}</p>
                                    </div>
                                </Card.Text>
                                <Card.Text>
                                    <div id='bold-flex-container'>
                                        <p id='bold-text'>Volunteer Experience:</p>
                                        <p>{volunteerApplication.volunteer_experience}</p>
                                    </div>
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
                    id='volunteer-application-link'>
                    <Card id='volunteer-application-container'>
                        <Card.Body id='all-volunteer-flex-availability'>
                            <div>
                                <Card.Text>
                                    <div id='bold-flex-container'>
                                        <p id='bold-text'>Name:</p>
                                        <p>{volunteerApplication.name}</p>
                                    </div>
                                </Card.Text>
                                <Card.Text>
                                    <div id='bold-flex-container'>
                                        <p id='bold-text'>Phone:</p>
                                        <p>{volunteerApplication.phone}</p>
                                    </div>
                                </Card.Text>
                                <Card.Text>
                                    <div id='bold-flex-container'>
                                        <p id='bold-text'>Email:</p>
                                        <p id='all-library-card-email'>{volunteerApplication.email}</p>
                                    </div>
                                </Card.Text>
                            </div>
                            <div>
                                <Card.Text>
                                    <div id='bold-flex-container'>
                                        <p id='bold-text'>Work Experience:</p>
                                        <p>{volunteerApplication.work_experience}</p>
                                    </div>
                                </Card.Text>
                                <Card.Text>
                                    <div id='bold-flex-container'>
                                        <p id='bold-text'>Volunteer Experience:</p>
                                        <p>{volunteerApplication.volunteer_experience}</p>
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
