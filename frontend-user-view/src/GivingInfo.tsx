import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomepageLink from './HomepageLink';
import giveImage from "./images/happybookstack.png";
import Accordion from 'react-bootstrap/Accordion';
import MyButton from './MyButton';
import { Link } from 'react-router-dom';

export default function GivingInfo() {
    return (
        <Row id='giving-info-page-container'>
            <HomepageLink />
            <Row>
                <Col>
                    <h1 id='page-titles'>
                        Give to the Library
                    </h1>
                </Col>
            </Row>
            <div id='give-flex-container'>
                <div id='give-title-subtitle-container'>
                    <Row>
                        <Col>
                            <h2 id='page-titles'>
                                The Gift of Lifetime Learning and Discovery
                            </h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 id='give-information'>
                                Support from our local patrons and businesses is critical. Donations support library resources, programs, and services.
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 id='give-information'>
                                Please consider a one-time or reoccuring donation to Another Page library. Your donation is tax deductible.
                            </h3>
                        </Col>
                    </Row>
                </div>
                <Row id="give-image-row">
                    <Col>
                        <img id="give-image" className="img-fluid" src={giveImage} alt="girl holding stack of books" />
                    </Col>
                </Row>
            </div>
            <Row>
                <Col>
                    <h2 id='faq-subtitles'>
                        Ways to Give
                    </h2>
                </Col>
            </Row>
            <Accordion id='questions-accordion-container'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Give Now</Accordion.Header>
                    <Accordion.Body>
                        <p>Give an unrestricted gift to the Library. Your support of the Library is crucial to fulfilling our annual funding needs. By making an unrestricted gift to the Library, you show your support of this remarkable community resource. Feel good knowing you helped fund quality programs and services that benefit our entire community.</p>
                        <h4 id='ways-to-give-header'>Ways to Give Now:</h4>
                        <Link to="/Donate">
                            <MyButton id='donate-button' title='&#10084; Donate'></MyButton>
                        </Link>
                        <div id='bold-flex-container'>
                            <p id='bold-text'> Online:</p>
                            <p>Online gifts are quick, easy, and secure. You may donate using your credi card, PayPal, Apple Pay, debit card, or and ACH withdrawal from your banking account using the donate button above.</p>
                        </div>
                        <div id='bold-flex-container'>
                            <p id='bold-text'> By Mail:</p>
                            <p>Address your gift to the donations department at the address below.</p>
                        </div>
                        <p id='give-address-formatting'>Another Page Libarary</p>
                        <p id='give-address-formatting'>Donations Department</p>
                        <p id='give-address-formatting'>555 West 55th St.</p>
                        <p id='give-address-bottom-formatting'>Library Town, LT 55555</p>
                        <div id='bold-flex-container'>
                            <p id='bold-text'> By Phone:</p>
                            <p>Call <strong>(555) 555-5556</strong> to make a phone donation. </p>
                        </div>
                        <div id='bold-flex-container'>
                            <p id='bold-text'> In-Person:</p>
                            <p>Drop by the Information Desk to make an in-person donation the next time you visit the library.</p>
                        </div>
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
        </Row>
    )
}