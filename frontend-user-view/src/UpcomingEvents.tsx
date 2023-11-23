import HomepageLink from './HomepageLink';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import MyButton from './MyButton';
import HotCocoa from "./images/hotcocoa.png";
import SmallWinterBookSale from "./images/winterusedbooksmall.png";
import SnowBook from "./images/snowbook.png";
import AuthorEventSmall from "./images/authoreventsmall.png";
import WaterColorClass from "./images/watercolorclass.png";
import GiftWrapping from "./images/giftwrappingevent.png";
import ReadingRescuesSmall from "./images/readingtorescuessmall.png";
import WinterHatCraft from "./images/winterhatcraft.png";
import WinterPhotographyContest from "./images/winterphotographycontest.png";
import WinterStoryTime from "./images/winterstorytime.png";
import SnowFlakeCraft from "./images/snowflakecraft.png";
import FrozenMovieEvent from "./images/frozenmovieevent.png";

export default function UpcomingEvents() {
    return (
        <Row id='upcoming-events-page-container'>
            <HomepageLink />
            <Row>
                <Col>
                    <h1 id='page-titles'>
                        Upcoming Events
                    </h1>
                </Col>
            </Row>
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
                        <Card.Img className="img-fluid"  id='event-card-image' variant="top" src={HotCocoa} alt='decorative hot cocoa mug'></Card.Img>
                        <Card.Body>
                            <Card.Title id='bold-text'>Hot Cocoa Social</Card.Title>
                            <Card.Text>
                                December 2nd
                            </Card.Text>
                            <Card.Text>
                                2pm-6pm
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
                        <Card.Img className="img-fluid"  variant="top" id='event-card-image' src={SmallWinterBookSale} />
                        <Card.Body>
                            <Card.Title id='bold-text'>Annual Winter Book Sale</Card.Title>
                            <Card.Text>
                                December 10th
                            </Card.Text>
                            <Card.Text>
                                10am-4pm
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
                        <Card.Img className="img-fluid"  id='event-card-image' variant="top" src={SnowBook} />
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
                        <Card.Img className="img-fluid"  id='event-card-image' variant="top" src={AuthorEventSmall} alt='decorative hot cocoa mug'></Card.Img>
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
                        <Card.Img className="img-fluid"  variant="top" id='event-card-image' src={WaterColorClass} />
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
                        <Card.Img className="img-fluid"  id='event-card-image' variant="top" src={GiftWrapping} />
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
                        <Card.Img className="img-fluid"  id='event-card-image' variant="top" src={ReadingRescuesSmall} alt='decorative hot cocoa mug'></Card.Img>
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
                        <Card.Img className="img-fluid"  variant="top" id='event-card-image' src={WinterHatCraft} />
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
                        <Card.Img className="img-fluid"  id='event-card-image' variant="top" src={WinterPhotographyContest} />
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
                        <Card.Img className="img-fluid"  id='event-card-image' variant="top" src={WinterStoryTime} alt='decorative hot cocoa mug'></Card.Img>
                        <Card.Body>
                            <Card.Title id='bold-text'>Winter Story Time</Card.Title>
                            <Card.Text>
                                Every Saturday in December
                            </Card.Text>
                            <Card.Text>
                                10:00am-11:00am
                            </Card.Text>
                            <Card.Text>
                                Winter storytime will feature a different winter storybook every Saturday! Stories will be read by our Children's Librarian. 
                            </Card.Text>
                            <Card.Text>
                                Each Saturday will also feature a different winter craft for children to make. Children will also recive a winter themed snack! 
                            </Card.Text>
                            <div id='event-button-container'>
                                <MyButton id='event-button' title='Learn More About the Event'></MyButton>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card id='event-card' style={{ width: '20rem' }}>
                        <Card.Img className="img-fluid"  variant="top" id='event-card-image' src={SnowFlakeCraft} />
                        <Card.Body>
                            <Card.Title id='bold-text'>Make a SnowFlake</Card.Title>
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
                        <Card.Img className="img-fluid"  id='event-card-image' variant="top" src={FrozenMovieEvent} />
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
        </Row>
    )
}