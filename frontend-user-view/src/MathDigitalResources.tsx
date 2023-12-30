import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import MyButton from './MyButton';
import Khan from './images/khan.png';
import Prodigy from './images/prodigy.png';
import Xtra from './images/xtra.png';

export default function MathDigitalResources() {
    return (
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
                    <Card.Img className="img-fluid" id='event-card-image' variant="top" src={Khan} alt='Khan Academy'></Card.Img>
                    <Card.Body>
                        <Card.Title id='bold-text'>Khan Academy</Card.Title>
                        <Card.Text>
                            Free Math Resource
                        </Card.Text>
                        <Card.Text>
                            Students can use this free Math resource for videos, written explanations, and practice questions. Khan Academy covers topics from pre-school through college.
                        </Card.Text>
                        <a className='resource-link' href="https://www.khanacademy.org/" target='_blank'>
                            <div id='event-button-container'>
                                <MyButton className='resource-button' title='Visit the Khan Academy Website'></MyButton>
                            </div>
                        </a>
                    </Card.Body>
                </Card>
                <Card id='event-card' style={{ width: '20rem' }}>
                    <Card.Img className="img-fluid" variant="top" id='event-card-image' src={Prodigy} alt='prodigy'/>
                    <Card.Body>
                        <Card.Title id='bold-text'>Prodigy</Card.Title>
                        <Card.Text>
                            Free Math Resource
                        </Card.Text>
                        <Card.Text>
                        Students can use this free Math resource to play a game while completing math questions. Prodigy is typically used for students kindergarten through middle school.
                        </Card.Text>
                        <a className='resource-link' href="https://www.prodigygame.com/main-en/prodigy/" target='_blank'>
                            <div id='event-button-container'>
                                <MyButton className='resource-button' title='Visit the Prodigy Game Website'></MyButton>
                            </div>
                        </a>
                    </Card.Body>
                </Card>
                <Card id='event-card' style={{ width: '20rem' }}>
                    <Card.Img className="img-fluid" id='event-card-image' variant="top" src={Xtra} alt='XtraMath'/>
                    <Card.Body>
                        <Card.Title id='bold-text'>XtraMath</Card.Title>
                        <Card.Text>
                            Free Math Resource
                        </Card.Text>
                        <Card.Text>
                        Students can use this free Math resource for practicing their operations and fact fluency. XtraMath is great for students learn their math facts.
                        </Card.Text>
                        <a className='resource-link' href="https://home.xtramath.org/" target='_blank'>
                            <div id='event-button-container'>
                                <MyButton className='resource-button' title='Visit the XtraMath Website'></MyButton>
                            </div>
                        </a>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}