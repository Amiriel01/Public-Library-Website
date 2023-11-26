import { FormEvent, useEffect, useState } from "react";
import axios from 'axios'
import { useParams, useLocation } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomepageLink from "./HomepageLink";
import HotCocoa from "./images/hotcocoa.png";
import FirstFooter from "./FirstFooter";

export default function EventPage() {
    const { id } = useParams();
    const { pathname } = useLocation();
    const [event, setEvent] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    // async function getEvent() {
    //     await axios.get(`http://localhost:3000/event/eventDetail/${id}`).then((response) => {
    //         console.log(response)
    //         setEvent(response.data)
    //     });
    // };

    async function getEvent() {
        await axios.get(`http://localhost:3000/event/eventDetail/65636ea6c975a4744fada3e9`).then((response) => {
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
                        <img className="img-fluid" id='event-page-image' src={HotCocoa} alt="hot cocoa picture"></img>
                    </Col>
                    <Col id="details-container">
                        <Col id="event-date">
                            <div id='bold-flex-container'>
                                <p className='page-detail-bold'>Date:</p>
                                <p className="page-detail">{event.date}</p>
                            </div>
                        </Col>
                        <Col id="event-time">
                            <div id='bold-flex-container'>
                                <p className='page-detail-bold'>Time:</p>
                                <p className="page-detail">{event.time}</p>
                            </div>
                        </Col>
                        <Col id="event-program-type">
                            <div id='bold-flex-container'>
                                <p className='page-detail-bold'>Program Type:</p>
                                <p className="page-detail">{event.program_type} Event</p>
                            </div>
                        </Col>
                        <Col id="event-age-group">
                            <div id='bold-flex-container'>
                                <p className='page-detail-bold'>Age Group:</p>
                                <p className="page-detail">{event.age_group}</p>
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