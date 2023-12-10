import { useLocation, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import HomepageLink from './HomepageLink';
import VolunteerApplication from './VolunteerApplication';

export default function AllVolunteerApplications() {

    const { pathname } = useLocation();
    const [volunteerApplicationsList, setVolunteerApplicationsList] = useState([]);

    const [monday, setMonday] = useState<string>('');
    const [tuesday, setTuesday] = useState<string>('');
    const [wednesday, setWednesday] = useState<string>('');
    const [thursday, setThursday] = useState<string>('');
    const [friday, setFriday] = useState<string>('');
    const [saturday, setSaturday] = useState<string>('');
    const [sunday, setSunday] = useState<string>('');

    const [morning, setMorning] = useState<string>('');
    const [afternoon, setAfternoon] = useState<string>('');
    const [evening, setEvening] = useState<string>('');

    const [interviewed, setInterviewed] = useState<string>('');
    // const [insterviewNotes, setInterviewNotes] = useState<string>('');


    async function getVolunteerApplications() {
        await axios.get('http://localhost:3000/volunteer/volunteerFormList').then((response) => {
            setVolunteerApplicationsList(response.data);
            console.log(response.status, response.data);
        })

        volunteerApplicationsList.map((volunteerApplication) => {
            if (volunteerApplication.monday === true) {
                setMonday("Monday")
                console.log(monday)
            }

            if (volunteerApplication.tuesday === true) {
                setTuesday("Tuesday")
            }

            if (volunteerApplication.wednesday === true) {
                setWednesday("Wednesday")
            }

            if (volunteerApplication.thursday === true) {
                setThursday("Thursday")
            }

            if (volunteerApplication.friday === true) {
                setFriday("Friday")
            }

            if (volunteerApplication.saturday === true) {
                setSaturday("Saturday")
            }

            if (volunteerApplication.sunday === true) {
                setSunday("Sunday")
            }

            if (volunteerApplication.morning === true) {
                setMorning("Open to Noon")
            }

            if (volunteerApplication.afternoon === true) {
                setAfternoon("Noon to Four")
            }

            if (volunteerApplication.evening === true) {
                setEvening("Four to Close")
            }

            if (volunteerApplication.interviewed === true) {
                setInterviewed("Interviewed")
            }
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
                            <div>
                                <Card.Text>
                                    <p id='bold-text'>Dates Available:</p>
                                </Card.Text>
                                <Card.Text>
                                    <p>{monday}</p>
                                    <p>{tuesday}</p>
                                    <p>{wednesday}</p>
                                    <p>{thursday}</p>
                                    <p>{friday}</p>
                                    <p>{saturday}</p>
                                    <p>{sunday}</p>
                                </Card.Text>
                                <Card.Text>
                                    <p id='bold-text'>Times Available:</p>
                                </Card.Text>
                                <Card.Text>
                                    <p>{morning}</p>
                                    <p>{afternoon}</p>
                                    <p>{evening}</p>
                                </Card.Text>
                            </div>
                        </Card.Body>
                        <Card.Text id='interview-notes-container'>
                                    <div id='bold-flex-container'>
                                        <p id='bold-text'>Interview Notes:</p>
                                        <p>{volunteerApplication.interview_notes}</p>
                                    </div>
                                </Card.Text>
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
                            <div>
                                <Card.Text>
                                    <p id='bold-text'>Dates Available:</p>
                                </Card.Text>
                                <Card.Text>
                                    <p>{monday}</p>
                                    <p>{tuesday}</p>
                                    <p>{wednesday}</p>
                                    <p>{thursday}</p>
                                    <p>{friday}</p>
                                    <p>{saturday}</p>
                                    <p>{sunday}</p>
                                </Card.Text>
                                <Card.Text>
                                    <p id='bold-text'>Times Available:</p>
                                </Card.Text>
                                <Card.Text>
                                    <p>{morning}</p>
                                    <p>{afternoon}</p>
                                    <p>{evening}</p>
                                </Card.Text>
                            </div>
                            <Card.Text id='interview-notes-container'>
                                    <div id='bold-flex-container'>
                                        <p id='bold-text'>Interview Notes:</p>
                                        <p>{volunteerApplication.interview_notes}</p>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </NavLink>
            })}
        </Row>
    )
}
