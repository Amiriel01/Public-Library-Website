import { useEffect, useState } from "react";
import axios from 'axios'
import { backendURL } from "./utility/backendSettings";
import { useParams, useLocation } from "react-router-dom";
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

export default function EventPage() {
    const { id } = useParams();
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

    async function getEvent() {
        await axios.get(`event/eventDetail/${id}`).then((response) => {
            setEvent(response.data)
        });
    };

    useEffect(() => {
        getEvent();
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    return (
        <>
            <div>
                <Helmet>
                    <title>Another Page Public Library Event Details Page</title>
                    <meta name="description" content="The event page gives details about a specific event that the library patron has requested to view via the event button on the upcoming events page." />
                    <meta name="keywords" content="react, public library, library event details" />
                    <meta property="og:title" content="Another Page Public Library Event Details Page" />
                    <meta property="og:description" content="The event page gives details about a specific event that the library patron has requested to view via the event button on the upcoming events page." />
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
                            <img className="img-fluid" id='event-page-image' src={`${backendURL}public/${event.imageURL}`} alt="hot cocoa picture"></img>
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