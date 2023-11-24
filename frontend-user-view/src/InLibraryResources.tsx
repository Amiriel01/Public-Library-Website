import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import MathTutoring from './images/mathtutoring.png';
import EnglishTutoring from './images/englishtutoring.png';
import MediumStudyRoom from './images/mediumstudy.png';

export default function InLibraryResources() {
    return (
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
    )
}
