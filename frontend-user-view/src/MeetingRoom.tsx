import Accordion from 'react-bootstrap/Accordion';
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
                            The library offers four types of meeting rooms. The meeting rooms are available during normal business hours only.
                        </p>
                        <p>
                            Click <Link id='meeting-room-information-page-link' to="/MeetingRoomInformation">here</Link> to view the meeting room types, seating arrangements available, and room capacity limits.
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
                        <p>Click <Link id='meeting-room-information-page-link' to="/StudyRoomInformation">here</Link> to view the study room types and capacity limits.</p>
                        <p id='bold-text'>Study room seating cannot be rearranged.</p>
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