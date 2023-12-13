import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import MyButton from './MyButton';
import WinterStoryTime from "./images/winterstorytime.png";
import SnowFlakeCraft from "./images/snowflakecraft.png";
import FrozenMovieEvent from "./images/frozenmovieevent.png";

export default function ChildrenEvents() {
    return (
        <Row id='event-section-container'>
            <Col>
                <div id='event-category-container'>
                    <h2 id='page-titles'>
                        For Children
                    </h2>
                    <h3 id='event-catagory-description'>
                        These events are geared towards children. Events that are for everyone may have limited space. Please be sure to check the event page to see if event registration is needed.
                    </h3>
                </div>
            </Col>
            <Col md={12} lg={9} id='event-cards-container'>
                <Card id='event-card' style={{ width: '20rem' }}>
                    <Card.Img className="img-fluid" id='event-card-image' variant="top" src={WinterStoryTime} alt='decorative hot cocoa mug'></Card.Img>
                    <Card.Body>
                        <Card.Title id='bold-text'>Winter Story Time</Card.Title>
                        <Card.Text>
                            Every Saturday in December
                        </Card.Text>
                        <Card.Text>
                            10:00am-11:00am
                        </Card.Text>
                        <Card.Text>
                            Winter story time will feature a different winter storybook every Saturday! Stories will be read by our Children's Librarian.
                        </Card.Text>
                        <Card.Text>
                            Each Saturday will also feature a different winter craft for children to make. Children will also receive a winter themed snack!
                        </Card.Text>
                        <div id='event-button-container'>
                            <MyButton id='event-button' title='Learn More About the Event'></MyButton>
                        </div>
                    </Card.Body>
                </Card>
                <Card id='event-card' style={{ width: '20rem' }}>
                    <Card.Img className="img-fluid" variant="top" id='event-card-image' src={SnowFlakeCraft} />
                    <Card.Body>
                        <Card.Title id='bold-text'>Make a Snow Flake</Card.Title>
                        <Card.Text>
                            December 16th
                        </Card.Text>
                        <Card.Text>
                            4:00pm-6:00pm
                        </Card.Text>
                        <Card.Text>
                            During this event children will be making paper snowflakes. These snowflakes make great decorations for the winter season.
                        </Card.Text>
                        <Card.Text>
                            Children should register for this event. Space is limited. When registering please specify a color of paper. All supplies will be provided.
                        </Card.Text>
                        <div id='event-button-container'>
                            <MyButton id='event-button' title='Learn More About the Event'></MyButton>
                        </div>
                    </Card.Body>
                </Card>
                <Card id='event-card' style={{ width: '20rem' }}>
                    <Card.Img className="img-fluid" id='event-card-image' variant="top" src={FrozenMovieEvent} />
                    <Card.Body>
                        <Card.Title id='bold-text'>Frozen Movie Event</Card.Title>
                        <Card.Text>
                            December 21st
                        </Card.Text>
                        <Card.Text>
                            2:00pm-5:00pm
                        </Card.Text>
                        <Card.Text>
                            The Frozen Movie Event will be a blast! Bring your favorite blanket and stuffed animal to the event. Cushions will be provided.
                        </Card.Text>
                        <Card.Text>
                            Children will watch the movie, have snacks, play games, and create Frozen themed crafts. Space is limited, register today!
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