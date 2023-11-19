import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

export default function Giving() {

    return (
        <>
            <Row>
                <Col>
                    <h2 id='faq-subtitles'>
                        Giving to the Library
                    </h2>
                </Col>
            </Row>
            <Accordion id='questions-accordion-container'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Monetary Donations</Accordion.Header>
                    <Accordion.Body>
                        <p>Another Page Library depends on donations from the generous businesses and individuals in the community.</p>
                        <p>Thank you for considering making a montetary donation!</p>
                        <p>Visit the <Link id='giving-page-link' to="/GivingInfo">Giving</Link> page for more information.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Book Donations</Accordion.Header>
                    <Accordion.Body>
                        <p>The libray accepts donations of gently used books and DVDs. Donations should be brought to the Information Desk during regular business hours.</p>
                        <p>The library does not accept magazines, VHS tapes, textbooks, or damaged books.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Volunteer Opportunities</Accordion.Header>
                    <Accordion.Body>
                        <p>Volunteers are the cornerstone of the library. They are retirees, students, working professionals, parents and grandparents. All share a love of the library and a desire to serve. We offer many volunteer opportunities, from shelving books, to helping patrons with computers, to hosting special events.</p>
                        <p>Our goal is to match a volunteer's skills, interest and schedule with the library's needs. We want you to enjoy your volunteer experience. Please complete the <Link id='volunteer-page-link' to="/VolunteerApplication">volunteer application</Link> if you are interested in joining our wonderful volunteer team.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}