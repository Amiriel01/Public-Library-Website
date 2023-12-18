import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import MyButton from './MyButton';
import HotCocoa from "./images/hotcocoa.png";
import SmallWinterBookSale from "./images/winterusedbooksmall.png";
import SnowBook from "./images/snowbook.png";

export default function EveryoneEvents() {
    return (
        <Row id='event-section-container'>
            <Col>
                <div id='event-category-container'>
                    <h2 id='page-titles'>
                        For Everyone
                    </h2>
                    <h3 id='event-catagory-description'>
                        These events are geared towards families or individuals of all ages. Events that are for everyone may have limited space. Please be sure to check the event page to see if event registration is needed.
                    </h3>
                </div>
            </Col>
            <Col md={12} lg={9} id='event-cards-container'>
                <Card id='event-card' style={{ width: '20rem' }}>
                    <Card.Img className="img-fluid" id='event-card-image' variant="top" src={HotCocoa} alt='decorative hot cocoa mug'></Card.Img>
                    <Card.Body>
                        <Card.Title id='bold-text'>Hot Cocoa Social</Card.Title>
                        <Card.Text>
                            December 2nd
                        </Card.Text>
                        <Card.Text>
                            2:00pm-6:00pm
                        </Card.Text>
                        <Card.Text>
                            Join the community for a Hot Cocoa Social. Hot cocoa, apple cider, coffee, and baked goods will be provided.
                        </Card.Text>
                        <Card.Text>
                            This event will have fun for all ages! Story times, crafts, and games will be scheduled throught the event. Click the link below to see the event schedule!
                        </Card.Text>
                        <div id='event-button-container'>
                            <MyButton id='event-button' title='Learn More About the Event'></MyButton>
                        </div>
                    </Card.Body>
                </Card>
                <Card id='event-card' style={{ width: '20rem' }}>
                    <Card.Img className="img-fluid" variant="top" id='event-card-image' src={SmallWinterBookSale} />
                    <Card.Body>
                        <Card.Title id='bold-text'>Annual Winter Book Sale</Card.Title>
                        <Card.Text>
                            December 10th
                        </Card.Text>
                        <Card.Text>
                            10:00am-4:00pm
                        </Card.Text>
                        <Card.Text>
                            The annual Winter Used Book Sale is a favorite of all library patrons. During this event families and individuals can purchase a paper bag for $5 to fill with used books. The library sale is open to the public.
                        </Card.Text>
                        <Card.Text>
                            Individuals of all ages can find books in their reading level at the book sale!
                        </Card.Text>
                        <div id='event-button-container'>
                            <MyButton id='event-button' title='Learn More About the Event'></MyButton>
                        </div>
                    </Card.Body>
                </Card>
                <Card id='event-card' style={{ width: '20rem' }}>
                    <Card.Img className="img-fluid" id='event-card-image' variant="top" src={SnowBook} />
                    <Card.Body>
                        <Card.Title id='bold-text'>Winter Reading Event</Card.Title>
                        <Card.Text>
                            Begins: November 15th
                        </Card.Text>
                        <Card.Text>
                            Ends: January 15th
                        </Card.Text>
                        <Card.Text>
                            Sign up for the Winter Reading Event! Each age division, children, tweens, teens, and adults, will have their own reading challenges to complete.
                        </Card.Text>
                        <Card.Text>
                            Participants will earn prizes for meeting challenges. Grand prizes and the event after party dates will be announced by November 15th.
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
