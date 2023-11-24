import Accordion from 'react-bootstrap/Accordion';
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function BorrowingServices() {

    return (
        <>
            <Row>
                <Col>
                    <h2 id='faq-subtitles'>
                        Borrowing Services
                    </h2>
                </Col>
            </Row>
            <Accordion id='questions-accordion-container'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Item Limits and Renewals</Accordion.Header>
                    <Accordion.Body>
                        <div id='bold-flex-container'>
                            <p id='bold-text'>Books, Audiobooks, and Magazines:</p>
                            <p>2 Weeks</p>
                        </div>
                        <div id='bold-flex-container'>
                            <p id='bold-text'>DVDs:</p>
                            <p>1 Weeks</p>
                        </div>
                        <div id='bold-flex-container'>
                            <p id='bold-text'>Special Collections:</p>
                            <p>1 Weeks</p>
                        </div>
                        <div id='bold-flex-container'>
                            <p id='bold-text'>Total item limit per card:</p>
                            <p>10 items</p>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Item Holds</Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Up to five items can be put on hold at a time. You will be notified when your hold are available. Contact the library main desk to place items on hold.
                        </p>
                        <p id='bold-text'>Held items must be picked up within 3 days. </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Cross Library Loans</Accordion.Header>
                    <Accordion.Body>
                        <p>Cross library loans is a service that allows patrons to request non-fiction print books that are not available in our collection to be borrowed from other libraries willing to send the books.</p>
                        <p id='bold-text'>A fee of $5.00 per book is required to handle processing and two-way shipping.</p>
                        <p>To request a book, fill out the form <Link id='library-card-form-link' to="/CrossLibraryForm">here</Link>.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Overdue Fines</Accordion.Header>
                    <Accordion.Body>
                        <p>Fines on overdue items are ten cents per day. Fines are computed beginning the day after the items were due till the items are returned.</p>
                        <p>Fines can be paid in person with cash, check, debit card, or credit card.</p>
                        <p id='bold-text'>Fines are capped at the items replacement cost.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Lost of Damaged Items</Accordion.Header>
                    <Accordion.Body>
                        <p>If an item has been lost or damaged, please contact a staff member to resolve the issue.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}