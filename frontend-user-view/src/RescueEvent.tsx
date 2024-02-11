import { useEffect, useState } from "react";
import axios from 'axios'
import { useLocation } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomepageLink from "./HomepageLink";
import FirstFooter from "./FirstFooter";
import { Helmet } from 'react-helmet-async';
import Logo from './images/logo.png';

interface EventInterface {
    title: string,
    date: string,
    time: string,
    program_type: string,
    age_group: string,
    description1: string,
    description2: string,
    imageURL: string,
}

export default function RescueEvent() {
    const { pathname } = useLocation();
    const [event, setEvent] = useState<EventInterface>({
        title: "",
        date: "",
        time: "",
        program_type: "",
        age_group: "",
        description1: "",
        description2: "",
        imageURL: "",
    });

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    async function getEvent() {
        await axios.get(`http://localhost:3000/event/eventDetail/657f9525e1f010728bdeb78b`).then((response) => {
            setEvent(response.data)
        });
    };

    useEffect(() => {
        getEvent();
    }, []);

    return (
        <>
            <div>
                <Helmet>
                    <title>Another Page Public Library Reading to Rescues Event`</title>
                    <meta name="description" content="The Another Page Public Library Reading to Rescues event is open to tweens and teens in the community. By volunteering at the event tweens and teens are increasing awareness for the shelters, completing volunteer tasks, and enjoying the company of the shelter pets." />
                    <meta name="keywords" content="react, public library, volunteer events" />
                    <meta property="og:title" content="Page Public Library Reading to Rescues Event" />
                    <meta property="og:description" content="The Another Page Public Library Reading to Rescues event is open to tweens and teens in the community. By volunteering at the event tweens and teens are increasing awareness for the shelters, completing volunteer tasks, and enjoying the company of the shelter pets." />
                    <meta property="og:image" content={Logo} />
                    <meta property="og:url" content="https://example.com/my-page" />
                </Helmet>
                <Row id="event-page-container">
                    <HomepageLink />
                    <Row id="event-page-details-container">
                        <Col id="event-page-title">
                            <h1 id="bold-text">
                                {event.title}
                            </h1>
                        </Col>
                    </Row>
                    <Row id="image-details-container">
                        <Col id="event-image">
                            <img className="img-fluid" id='event-page-image' src={`http://localhost:3000/public/${event.imageURL}`} alt="hot cocoa picture"></img>
                        </Col>
                        <Col id="details-container">
                            <Col id="event-date">
                                <div id='bold-flex-container'>
                                    <p className="page-detail">{event.date}</p>
                                </div>
                            </Col>
                            <Col id="event-time">
                                <div id='bold-flex-container'>
                                    <p className="page-detail">{event.time}</p>
                                </div>
                            </Col>
                            <Col id="event-program-type">
                                <div id='bold-flex-container'>
                                    <p className="page-detail">{event.program_type} Event</p>
                                </div>
                            </Col>
                            <Col id="event-age-group">
                                <div id='bold-flex-container'>
                                    <p className="page-detail">{event.age_group} Welcome</p>
                                </div>
                            </Col>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="event-description">
                            <p>
                                {event.description1}
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="event-description">
                            <p>
                                {event.description2}
                            </p>
                        </Col>
                    </Row>
                </Row>
                <FirstFooter />
            </div>
        </>
    )
}