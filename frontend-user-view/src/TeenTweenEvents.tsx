import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import MyButton from './MyButton';
import ReadingRescuesSmall from "./images/readingtorescuessmall.png";
import WinterHatCraft from "./images/winterhatcraft.png";
import WinterPhotographyContest from "./images/winterphotographycontest.png";

export default function TeenTweenEvents() {
    return (
        <Row id='event-section-container'>
            <Col>
                <div id='event-category-container'>
                    <h2 id='page-titles'>
                        For Tweens and Teens
                    </h2>
                    <h3 id='event-catagory-description'>
                        These events are geared towards tweens and teens. Events that are for everyone may have limited space. Please be sure to check the event page to see if event registration is needed.
                    </h3>
                </div>
            </Col>
            <Col md={12} lg={9} id='event-cards-container'>
                <Card id='event-card' style={{ width: '20rem' }}>
                    <Card.Img className="img-fluid" id='event-card-image' variant="top" src={ReadingRescuesSmall} alt='decorative hot cocoa mug'></Card.Img>
                    <Card.Body>
                        <Card.Title id='bold-text'>Reading to Rescues</Card.Title>
                        <Card.Text>
                            December 22nd
                        </Card.Text>
                        <Card.Text>
                            10:00am-2:00pm
                        </Card.Text>
                        <Card.Text>
                            Tweens and Teens will have a chance to volunteer at our seasonal Reading to Rescues event. During this event several local rescue dogs and cats will be visiting the library.
                        </Card.Text>
                        <Card.Text>
                            All area residents are welcome to come to this event an adopt these well-mannered pets!
                        </Card.Text>
                        <div id='event-button-container'>
                            <MyButton id='event-button' title='Learn More About the Event'></MyButton>
                        </div>
                    </Card.Body>
                </Card>
                <Card id='event-card' style={{ width: '20rem' }}>
                    <Card.Img className="img-fluid" variant="top" id='event-card-image' src={WinterHatCraft} />
                    <Card.Body>
                        <Card.Title id='bold-text'>Make a Winter Hat</Card.Title>
                        <Card.Text>
                            December 6th
                        </Card.Text>
                        <Card.Text>
                            4:00pm-7:00pm
                        </Card.Text>
                        <Card.Text>
                            Create a warm winter hat at this December crafting event! This is a great time to learn a new skill.
                        </Card.Text>
                        <Card.Text>
                            Tweens and Teens should register for this event. Space is limited. When registering please specify a color of yarn. All supplies and snacks will be provided.
                        </Card.Text>
                        <div id='event-button-container'>
                            <MyButton id='event-button' title='Learn More About the Event'></MyButton>
                        </div>
                    </Card.Body>
                </Card>
                <Card id='event-card' style={{ width: '20rem' }}>
                    <Card.Img className="img-fluid" id='event-card-image' variant="top" src={WinterPhotographyContest} />
                    <Card.Body>
                        <Card.Title id='bold-text'>Winter Art Contest</Card.Title>
                        <Card.Text>
                            Begins: December 1st
                        </Card.Text>
                        <Card.Text>
                            Ends: December: 21st
                        </Card.Text>
                        <Card.Text>
                            Join the library for our first ever Winter Art Contest!
                        </Card.Text>
                        <Card.Text>
                            Participants are allowed to choose whichever art medium they would like. The art piece must be dropped off at the library no later than 6pm on December 21st. Art will be displayed in the gallery through January.
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