import Accordion from 'react-bootstrap/Accordion';
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LargeStudy from "./images/largestudy.png";
import MediumStudy from "./images/mediumstudy.png";
import SmallStudy from "./images/smallstudy.png";

export default function MeetingRoom() {

    return (
        <>
            <Row>
                <Col>
                    <h2 id='faq-subtitles'>
                        Meeting and Study Rooms
                    </h2>
                </Col>
            </Row>
            <Accordion id='questions-accordion-container'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Meeting and Study Room Reservations</Accordion.Header>
                    <Accordion.Body>
                        <p>Meeting rooms are available to reserve on a first come basis for library patrons. A current library card account is needed to reserve a meeting room.</p>
                        <p id='bold-text'>Contact the Information Desk to reserve a meeting room.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What meeting rooms are available?</Accordion.Header>
                    <Accordion.Body>
                        <p>
                            The library offers three meeting rooms. The meeting rooms are available during normal business hours only.
                        </p>
                        <p id='meeting-faq-bold-text'>Large Meeting Room:</p>
                        <div id="bold-flex-container">
                            <p id='bold-text'>Maximum Capacity:</p>
                            <p>100</p>
                        </div>
                        <div id="bold-flex-container">
                            <p id='bold-text'>Room Dimensions:</p>
                            <p>30ft x 50ft</p>
                        </div>
                        <p id='meeting-faq-bold-text'>Medium Meeting Room:</p>
                        <div id="bold-flex-container">
                            <p id='bold-text'>Maximum Capacity:</p>
                            <p>50</p>
                        </div>
                        <div id="bold-flex-container">
                            <p id='bold-text'>Room Dimensions:</p>
                            <p>20ft x 35ft</p>
                        </div>
                        <p id='meeting-faq-bold-text'>Small Meeting Room:</p>
                        <div id="bold-flex-container">
                            <p id='bold-text'>Maximum Capacity:</p>
                            <p>20</p>
                        </div>
                        <div id="bold-flex-container">
                            <p id='bold-text'>Room Dimensions:</p>
                            <p>20ft x 25ft</p>
                        </div>
                        <p>
                            <Link id='meeting-room-information-page-link' to="/MeetingRoomInformation">Click  here</Link> to view meeting room pictures and available seating arrangements.
                        </p>
                        <p id='bold-text'>When making a room reservation please specify the seating arrangement if needed.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Are refreshments allowed in the meeting rooms?</Accordion.Header>
                    <Accordion.Body>
                        <p>Food and drinks are allowed in the meeting rooms. A deposit of $50 will be required if refreshments will be served. The deposit will be refunded after the event if their are no incidents with spills.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What study rooms are available?</Accordion.Header>
                    <Accordion.Body>
                        <p>
                            The library offers three study/conference rooms. The study rooms are available during normal business hours only.
                        </p>
                        <div id='img-study-flex-container'>
                            <img id="study-room-image" src={LargeStudy} alt='large study room' className='img-fluid'></img>
                            <div>
                                <p id='meeting-faq-bold-text'>Large Study Room:</p>
                                <div id="bold-flex-container">
                                    <p id='bold-text'>Maximum Capacity:</p>
                                    <p>8</p>
                                </div>
                                <div id="bold-flex-container">
                                    <p id='bold-text'>Room Dimensions:</p>
                                    <p>15ft x 15ft</p>
                                </div>
                            </div>
                        </div>
                        <div id='img-study-flex-container'>
                            <img id="study-room-image" src={MediumStudy} alt='medium study room' className='img-fluid'></img>
                            <div>
                                <p id='meeting-faq-bold-text'>Medium Study Room:</p>
                                <div id="bold-flex-container">
                                    <p id='bold-text'>Maximum Capacity:</p>
                                    <p>4</p>
                                </div>
                                <div id="bold-flex-container">
                                    <p id='bold-text'>Room Dimensions:</p>
                                    <p>10ft x 12ft</p>
                                </div>
                            </div>
                        </div>
                        <div id='img-study-flex-container'>
                            <img id="study-room-image" src={SmallStudy} alt='small study room' className='img-fluid'></img>
                            <div>
                                <p id='meeting-faq-bold-text'>Small Study Room:</p>
                                <div id="bold-flex-container">
                                    <p id='bold-text'>Maximum Capacity:</p>
                                    <p>2</p>
                                </div>
                                <div id="bold-flex-container">
                                    <p id='bold-text'>Room Dimensions:</p>
                                    <p>8ft x 10ft</p>
                                </div>
                            </div>
                        </div>
                        <p id='bold-text'>Study/Conference room seating cannot be rearranged. Contact the Information Desk to reserve a study/conference room.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Are refreshments allowed in the study rooms?</Accordion.Header>
                    <Accordion.Body>
                        <p>Food and drink is not permitted in any of the library study rooms.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}