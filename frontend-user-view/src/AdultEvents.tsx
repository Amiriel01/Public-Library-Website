import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import MyButton from './MyButton';
import AuthorEventSmall from "./images/authoreventsmall.png";
import WaterColorClass from "./images/watercolorclass.png";
import GiftWrapping from "./images/giftwrappingevent.png";

export default function AdultEvents() {
    return (
        <Row id='event-section-container'>
            <Col>
                <div id='event-category-container'>
                    <h2 id='page-titles'>
                        For Adults
                    </h2>
                    <h3 id='event-catagory-description'>
                        These events are geared towards adults Events that are for adults may have limited space. Please be sure to check the event page to see if event registration is needed.
                    </h3>
                </div>
            </Col>
            <Col md={12} lg={9} id='event-cards-container'>
                <Card id='event-card' style={{ width: '20rem' }}>
                    <Card.Img className="img-fluid" id='event-card-image' variant="top" src={AuthorEventSmall} alt='decorative hot cocoa mug'></Card.Img>
                    <Card.Body>
                        <Card.Title id='bold-text'>Arthur Conan Doyle:</Card.Title>
                        <Card.Text>
                            December 9th
                        </Card.Text>
                        <Card.Text>
                            6:00pm-7:30pm
                        </Card.Text>
                        <Card.Text>
                            Join us for this fantastic presentation by local historian, Dr. Thompson. The showcase will explore the authors novels and lifetime.
                        </Card.Text>
                        <Card.Text>
                            Space for this event is limited. Contact the library to reserve your seat today! This is a free event, a library card is required for registration.
                        </Card.Text>
                        <div id='event-button-container'>
                            <MyButton id='event-button' title='Learn More About the Event'></MyButton>
                        </div>
                    </Card.Body>
                </Card>
                <Card id='event-card' style={{ width: '20rem' }}>
                    <Card.Img className="img-fluid" variant="top" id='event-card-image' src={WaterColorClass} />
                    <Card.Body>
                        <Card.Title id='bold-text'>Watercolor Class</Card.Title>
                        <Card.Text>
                            December 15th
                        </Card.Text>
                        <Card.Text>
                            5:00pm-7:30pm
                        </Card.Text>
                        <Card.Text>
                            The watercolor class, participants will create a beautiful snowy scene. Participants will be able to choose from two designs, one will feature a cardinal and the other a red barn.
                        </Card.Text>
                        <Card.Text>
                            Space for this event is limited. Contact the Information Desk to reserve your seat! All supplies are included
                        </Card.Text>
                        <div id='event-button-container'>
                            <MyButton id='event-button' title='Learn More About the Event'></MyButton>
                        </div>
                    </Card.Body>
                </Card>
                <Card id='event-card' style={{ width: '20rem' }}>
                    <Card.Img className="img-fluid" id='event-card-image' variant="top" src={GiftWrapping} />
                    <Card.Body>
                        <Card.Title id='bold-text'>Gift Wrapping Get Together</Card.Title>
                        <Card.Text>
                            December 8th
                        </Card.Text>
                        <Card.Text>
                            2:00pm-6:00pm
                        </Card.Text>
                        <Card.Text>
                            Bring your wrapping paper, scissors, tape, and gifts to the annual Gift Wrapping Get Together!
                        </Card.Text>
                        <Card.Text>
                            This is a free event, where participants can socialize, enjoy refreshments, and swap wrapping paper if they choose. Drop in anytime during the event.
                        </Card.Text>
                        <div id='event-button-container'>
                            <MyButton id='event-button' title='Learn More About the Event'></MyButton>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}