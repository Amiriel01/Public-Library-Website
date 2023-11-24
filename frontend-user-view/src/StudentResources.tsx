import HomepageLink from './HomepageLink';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import MyButton from './MyButton';
import MathTutoring from './images/mathtutoring.png';
import EnglishTutoring from './images/englishtutoring.png';
import MediumStudyRoom from './images/mediumstudy.png';
import Khan from './images/khan.png';
import Prodigy from './images/prodigy.png';
import Xtra from './images/xtra.png';
import { Link } from 'react-router-dom';

export default function StudentResources() {
    return (
        <Row id='upcoming-events-page-container'>
            <HomepageLink />
            <Row>
                <Col>
                    <h1 id='page-titles'>
                        Student Resources
                    </h1>
                </Col>
            </Row>
            <Row id='event-section-container'>
                <Col>
                    <div id='event-category-container'>
                        <h2 id='page-titles'>
                            In-Person Resources
                        </h2>
                        <h3 id='event-catagory-description'>
                            Local college students and retired teachers are available to help student in grades K-12 during scheduled tutoring times.
                        </h3>
                    </div>
                </Col>
                <Col md={12} lg={9} id='event-cards-container'>
                    <Card id='event-card' style={{ width: '20rem' }}>
                        <Card.Img className="img-fluid" id='event-card-image' variant="top" src={MathTutoring} alt='decorative hot cocoa mug'></Card.Img>
                        <Card.Body>
                            <Card.Title id='bold-text'>Math Tutoring</Card.Title>
                            <Card.Text>
                                Every Tuesday and Thursday
                            </Card.Text>
                            <Card.Text>
                                3:30pm-5:30pm
                            </Card.Text>
                            <Card.Text>
                                Tutoring is available for Math during the school year. Tutoring will not be offered during school closures.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card id='event-card' style={{ width: '20rem' }}>
                        <Card.Img className="img-fluid" variant="top" id='event-card-image' src={EnglishTutoring} />
                        <Card.Body>
                            <Card.Title id='bold-text'>English Tutoring</Card.Title>
                            <Card.Text>
                                Every Tuesday and Thursday
                            </Card.Text>
                            <Card.Text>
                                3:30pm-5:30pm
                            </Card.Text>
                            <Card.Text>
                                Tutoring is available for English during the school year. Tutoring will not be offered during school closures.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card id='event-card' style={{ width: '20rem' }}>
                        <Card.Img className="img-fluid" id='event-card-image' variant="top" src={MediumStudyRoom} />
                        <Card.Body>
                            <Card.Title id='bold-text'>Study Rooms</Card.Title>
                            <Card.Text>
                                Monday-Friday
                            </Card.Text>
                            <Card.Text>
                                3:30pm-5:30pm
                            </Card.Text>
                            <Card.Text>
                                Study rooms are available for group project work during the school year. Study rooms are first come first serve.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row id='event-section-container'>
                <Col>
                    <div id='event-category-container'>
                        <h2 id='page-titles'>
                            Digital Math Resources
                        </h2>
                        <h3 id='event-catagory-description'>
                            Students can access these free resources on the public library computers or from their own devices.
                        </h3>
                    </div>
                </Col>
                <Col md={12} lg={9} id='event-cards-container'>
                    <Card id='event-card' style={{ width: '20rem' }}>
                        <Card.Img className="img-fluid" id='event-card-image' variant="top" src={Khan} alt='decorative hot cocoa mug'></Card.Img>
                        <Card.Body>
                            <Card.Title id='bold-text'>Khan Academy</Card.Title>
                            <Card.Text>
                                Free Math Resource
                            </Card.Text>
                            <Card.Text>
                                Students can use this free Math resource for videos, written explanations, and practice questions. Khan Academy covers topics from pre-school through college.
                            </Card.Text>
                            <a href="https://www.khanacademy.org/" target='_blank'>
                                <div id='event-button-container'>
                                    <MyButton id='resource-button' title='Visit the Khan Academy Website'></MyButton>
                                </div>
                            </a>
                        </Card.Body>
                    </Card>
                    <Card id='event-card' style={{ width: '20rem' }}>
                        <Card.Img className="img-fluid" variant="top" id='event-card-image' src={Prodigy} />
                        <Card.Body>
                            <Card.Title id='bold-text'>English Tutoring</Card.Title>
                            <Card.Text>
                                Every Tuesday and Thursday
                            </Card.Text>
                            <Card.Text>
                                3:30pm-5:30pm
                            </Card.Text>
                            <Card.Text>
                                Tutoring is available for English during the school year. Tutoring will not be offered during school closures.
                            </Card.Text>
                            <div id='event-button-container'>
                                <MyButton id='resource-button' title='Learn More About the Event'></MyButton>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card id='event-card' style={{ width: '20rem' }}>
                        <Card.Img className="img-fluid" id='event-card-image' variant="top" src={Xtra} />
                        <Card.Body>
                            <Card.Title id='bold-text'>Study Rooms</Card.Title>
                            <Card.Text>
                                Monday-Friday
                            </Card.Text>
                            <Card.Text>
                                3:30pm-5:30pm
                            </Card.Text>
                            <Card.Text>
                                Study rooms are available for group project work during the school year. Study rooms are first come first serve.
                            </Card.Text>
                            <div id='event-button-container'>
                                <MyButton id='resource-button' title='Learn More About the Event'></MyButton>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Row>
    )
}