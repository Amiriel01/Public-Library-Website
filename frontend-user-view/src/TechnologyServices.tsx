import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function TechnologyServices() {

    return (
        <>
            <Row>
                <Col>
                    <h2 id='faq-subtitles'>
                        Technology Services
                    </h2>
                </Col>
            </Row>
            <Accordion id='questions-accordion-container'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Public Computers</Accordion.Header>
                    <Accordion.Body>
                        <p>Public computers are available for use on a first come, first serve basis. Library patrons can use the public computers up to two hours per day.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Are library cards required for public computer access?</Accordion.Header>
                    <Accordion.Body>
                        <p>
                            A library card is not needed to use the computer. Visit the Information Desk to receive a temporary visitor's login.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>May I use a flash drive on a library computer?</Accordion.Header>
                    <Accordion.Body>
                        <p>Flash drives are allowed. If you do not have one, you can purchase one at the Information Desk.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>WIFI Password</Accordion.Header>
                    <Accordion.Body>
                        <div id='bold-flex-container'>
                            <p id='bold-text'>WIFI Password:</p>
                            <p>123Library</p>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Scanning/Printer/Copies</Accordion.Header>
                    <Accordion.Body>
                        <p>The library has three public printers that are available for printing, scanning, and copying.</p>
                        <p>The printers have the capability of printing from the library computers or a flash drive.</p>
                        <div id='bold-flex-container'>
                            <p id='bold-text'>Black/White Printing:</p>
                            <p>5 cents per page</p>
                        </div>
                        <div id='bold-flex-container'>
                            <p id='bold-text'>Color Printing:</p>
                            <p>15 cents per page</p>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>Technology Assistance</Accordion.Header>
                    <Accordion.Body>
                        <p>Volunteers are available at set times to assist with public computers. Please inquire at the Information Desk for the volunteer schedule.</p>
                        <p>The library offers a variety of  including cell phone and tablet help sessions.</p>
                        <p id='bold-text-underline'>Technology Class Schedule:</p>
                        <div id='bold-flex-container'>
                            <p id='bold-text'>Monthly Cell Phone Help Class:</p>
                            <p>1st and 3rd Tuesday: 4:00pm-5:30pm</p>
                        </div>
                        <div id='bold-flex-container'>
                            <p id='bold-text'>Monthly Tablet Help Class:</p>
                            <p>2nd and 4th Tuesday: 4:00pm-5:30pm</p>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}