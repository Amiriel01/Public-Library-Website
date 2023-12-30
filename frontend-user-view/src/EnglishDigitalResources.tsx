import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import MyButton from './MyButton';
import ABCya from './images/abcya.png';
import Quill from './images/quill.png';
import SplashLearn from './images/splashlearn.png';


export default function EnglishDigitalResources() {
    return (
        <Row id='event-section-container'>
            <Col>
                <div id='event-category-container'>
                    <h2 id='page-titles'>
                        Digital English Resources
                    </h2>
                    <h3 id='event-catagory-description'>
                        Students can access these free resources on the public library computers or from their own devices.
                    </h3>
                </div>
            </Col>
            <Col md={12} lg={9} id='event-cards-container'>
                <Card id='event-card' style={{ width: '20rem' }}>
                    <Card.Img className="img-fluid" id='event-card-image' variant="top" src={ABCya} alt='ABCYa'></Card.Img>
                    <Card.Body>
                        <Card.Title id='bold-text'>ABCya</Card.Title>
                        <Card.Text>
                            Free English Resource
                        </Card.Text>
                        <Card.Text>
                            Students can use this free English resource games to practice English skills. ABCya covers topics from pre-school through 6th grade.
                        </Card.Text>
                        <a className='resource-link' href="https://www.abcya.com/" target='_blank'>
                            <div id='event-button-container'>
                                <MyButton className='resource-button' title='Visit the ABCya Website'></MyButton>
                            </div>
                        </a>
                    </Card.Body>
                </Card>
                <Card id='event-card' style={{ width: '20rem' }}>
                    <Card.Img className="img-fluid" variant="top" id='event-card-image' src={Quill} alt='Quill'/>
                    <Card.Body>
                        <Card.Title id='bold-text'>Prodigy</Card.Title>
                        <Card.Text>
                            Free English Resource
                        </Card.Text>
                        <Card.Text>
                        Students can use this free English resource to practice writing and grammar skills. Quill is typically used for students 4th-12th grades.
                        </Card.Text>
                        <a className='resource-link' href="https://www.quill.org/session/new" target='_blank'>
                            <div id='event-button-container'>
                                <MyButton className='resource-button' title='Visit the Quill Website'></MyButton>
                            </div>
                        </a>
                    </Card.Body>
                </Card>
                <Card id='event-card' style={{ width: '20rem' }}>
                    <Card.Img className="img-fluid" id='event-card-image' variant="top" src={SplashLearn} alt='Splash Learn'/>
                    <Card.Body>
                        <Card.Title id='bold-text'>Splash Learn</Card.Title>
                        <Card.Text>
                            Free English Resource
                        </Card.Text>
                        <Card.Text>
                        Students can use this free English resource to find games for English skills. Splash Learn also has math resources!
                        </Card.Text>
                        <a className='resource-link' href="https://www.splashlearn.com/" target='_blank'>
                            <div id='event-button-container'>
                                <MyButton className='resource-button' title='Visit the Splash Learn Website'></MyButton>
                            </div>
                        </a>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}