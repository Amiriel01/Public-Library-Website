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
                        Meeting Rooms
                    </h2>
                </Col>
            </Row>
            <Accordion id='questions-accordion-container'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>How do I apply for a library card?</Accordion.Header>
                    <Accordion.Body>
                        <p>Complete an <Link id='library-card-form-link' to="/LibraryCardForm">application form</Link> online or in-person at the library.</p>
                        <p>You must present a valid photo ID and proof of address when applying for a library card.</p>
                        <p>Driver's license, utility bills, voter ID, and printed checks are common forms of proof of address.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What are the library card age requirements?</Accordion.Header>
                    <Accordion.Body>
                        <p>
                            All ages are eligible for a library card.
                        </p>
                        <p>
                            Minor dependents must have a parent/guardian to sponsor the minor account.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What is my library PIN number?</Accordion.Header>
                    <Accordion.Body>
                        <p>Unless you have specifically asked to change it, your PIN is your six-digit birthdate (two digit month, date, and year)</p>
                        <p>Please contact the library for PIN assistance if your PIN is not working.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Can I get a library card if I live outside the city?</Accordion.Header>
                    <Accordion.Body>
                        <p>Non-residents library cards are available for an annual fee of $25.00 per family residence.</p>
                        <p>A family residence includes up to two adults and any dependents under the age of eighteen in the household.</p>
                        <p>The non-residence fee will be waived if the non-resident is a current city college student or attend one of the local public schools in the city.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Can temporary residents receive a library card?</Accordion.Header>
                    <Accordion.Body>
                        <p>Temporary residents may be issued a temporary card with a deposit of $25.00. The deposit is refunded when the card and items borrowed are returned in good condition.</p>
                        <p>Temporary card holders are limited to two items borrowed at a time.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>Does my library card expire?</Accordion.Header>
                    <Accordion.Body>
                        <p>Library cards expire annually. If your card has expired, please contact the library staff. Once your contact information is verified, your card will be renewed.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>What should I do if my card is lost or damaged?</Accordion.Header>
                    <Accordion.Body>
                        <p>Contact the library staff if you have lost your card so the account can be put on hold. This will ensure no one else can use your card.</p>
                        <p>Lost or damaged cards can be replaced by visiting the front desk at the library. Replacement cards cost $2.00 each.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                    <Accordion.Header>How can I get notifications about my library card account?</Accordion.Header>
                    <Accordion.Body>
                        <p>Library card holders will specify their contact method of choice, text or email, when they receive their library card.</p>
                        <p>If you'd like to change your notification preference please contact the library.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}