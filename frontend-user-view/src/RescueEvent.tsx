import { FormEvent, useEffect, useState } from "react";
import axios from 'axios'
import { useParams, useLocation } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomepageLink from "./HomepageLink";
import FirstFooter from "./FirstFooter";

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
        imageURL:"",
    });

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    async function getEvent() {
        await axios.get(`http://localhost:3000/event/eventDetail/657f9525e1f010728bdeb78b`).then((response) => {
            console.log(response)
            setEvent(response.data)
        });
    };

    useEffect(() => {
        getEvent();
    }, []);

    return (
        <>
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
                                {/* <p className='page-detail-bold'>Date & Time:</p> */}
                                <p className="page-detail">{event.date}</p>
                            </div>
                        </Col>
                        <Col id="event-time">
                            <div id='bold-flex-container'>
                                {/* <p className='page-detail-bold'>Time:</p> */}
                                <p className="page-detail">{event.time}</p>
                            </div>
                        </Col>
                        <Col id="event-program-type">
                            <div id='bold-flex-container'>
                                {/* <p className='page-detail-bold'>Program Type:</p> */}
                                <p className="page-detail">{event.program_type} Event</p>
                            </div>
                        </Col>
                        <Col id="event-age-group">
                            <div id='bold-flex-container'>
                                {/* <p className='page-detail-bold'>Age Group:</p> */}
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
        </>
    )
}