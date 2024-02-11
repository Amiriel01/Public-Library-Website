import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomepageLink from './HomepageLink';
import FirstFooter from './FirstFooter';
import LargeMeeting from "./images/largemeeting.png";
import MediumMeeting from "./images/mediummeeting.png";
import SmallMeeting from "./images/smallmeeting.png";
import Banquet from "./images/banquet.png";
import Classroom from "./images/classroom.png";
import Club from "./images/clubmeeting.png";
import Exhibition from "./images/exhibition.png";
import Horseshoe from "./images/horseshoe.png";
import Meeting from "./images/meeting.png";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Logo from './images/logo.png';


export default function MeetingRoomInformation() {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    return (
        <>
            <div>
                <Helmet>
                    <title>Another Page Public Library Meeting Room Information</title>
                    <meta name="description" content="Another page library has meeting rooms that can be reserved. On this page patrons can view the meeting rooms and potential room set ups that are available when reserving a meeting room." />
                    <meta name="keywords" content="react, public library, meeting room information" />
                    <meta property="og:title" content="Another Page Public Library Meeting Room Information" />
                    <meta property="og:description" content="Another page library has meeting rooms that can be reserved. On this page patrons can view the meeting rooms and potential room set ups that are available when reserving a meeting room." />
                    <meta property="og:image" content={Logo} />
                    <meta property="og:url" content="https://example.com/my-page" />
                </Helmet>
                <Row id='meeting-room-info-page-container'>
                    <HomepageLink />
                    <Row>
                        <Col>
                            <h1 id='page-titles'>
                                Meeting Rooms
                            </h1>
                        </Col>
                    </Row>
                    <Row id='meeting-room-container'>
                        <Col>
                            <img id="meeting-room-image" src={LargeMeeting} alt='large meeting room' className='img-fluid'></img>
                        </Col>
                        <Col md={12} lg={6}>
                            <h2 id='meeting-room-information'>
                                Large Meeting Room Setups Available
                            </h2>
                            <Row id='meeting-flex-container'>
                                <Col>
                                    <div id='meeting-image-name-container'>
                                        <img id='meeting-image-size' src={Banquet} alt='banquet seating arrangement' className='img-fluid'></img>
                                        <p id='bold-text'>Banquet Seating</p>
                                    </div>
                                </Col>
                                <Col>
                                    <div id='meeting-image-name-container'>
                                        <img id='meeting-image-size' src={Classroom} alt='classroom seating arrangement' className='img-fluid'></img>
                                        <p id='bold-text'>Classroom Seating</p>
                                    </div>
                                </Col>
                                <Col>
                                    <div id='meeting-image-name-container'>
                                        <img id='meeting-image-size' src={Club} alt='club seating arrangement' className='img-fluid'></img>
                                        <p id='bold-text'>Club Seating</p>
                                    </div>
                                </Col>
                                <Col>
                                    <div id='meeting-image-name-container'>
                                        <img id='meeting-image-size' src={Exhibition} alt='exhibition seating arrangement' className='img-fluid'></img>
                                        <p id='bold-text'>Exhibition Seating</p>
                                    </div>
                                </Col>
                                <Col>
                                    <div id='meeting-image-name-container'>
                                        <img id='meeting-image-size' src={Horseshoe} alt='horseshoe seating arrangement' className='img-fluid'></img>
                                        <p id='bold-text'>Horseshoe Seating</p>
                                    </div>
                                </Col>
                                <Col>
                                    <div id='meeting-image-name-container'>
                                        <img id='meeting-image-size' src={Meeting} alt='meeting seating arrangement' className='img-fluid'></img>
                                        <p id='bold-text'>Meeting Seating</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row id='meeting-room-container'>
                        <Col>
                            <img id="meeting-room-image" src={MediumMeeting} alt='large meeting room' className='img-fluid'></img>
                        </Col>
                        <Col md={12} lg={6}>
                            <h2 id='meeting-room-information'>
                                Medium Meeting Room Setups Available
                            </h2>
                            <Row id='meeting-flex-container'>
                                <Col>
                                    <div id='meeting-image-name-container'>
                                        <img id='meeting-image-size' src={Classroom} alt='classroom seating arrangement' className='img-fluid'></img>
                                        <p id='bold-text'>Classroom Seating</p>
                                    </div>
                                </Col>
                                <Col>
                                    <div id='meeting-image-name-container'>
                                        <img id='meeting-image-size' src={Club} alt='club seating arrangement' className='img-fluid'></img>
                                        <p id='bold-text'>Club Seating</p>
                                    </div>
                                </Col>
                                <Col>
                                    <div id='meeting-image-name-container'>
                                        <img id='meeting-image-size' src={Meeting} alt='meeting seating arrangement' className='img-fluid'></img>
                                        <p id='bold-text'>Meeting Seating</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row id='meeting-room-container'>
                        <Col>
                            <img id="meeting-room-image" src={SmallMeeting} alt='large meeting room' className='img-fluid'></img>
                        </Col>
                        <Col md={12} lg={6}>
                            <h2 id='meeting-room-information'>
                                Small Meeting Room Setups Available
                            </h2>
                            <Row id='meeting-flex-container'>
                                <Col>
                                    <div id='meeting-image-name-container'>
                                        <img id='meeting-image-size' src={Classroom} alt='classroom seating arrangement' className='img-fluid'></img>
                                        <p id='bold-text'>Classroom Seating</p>
                                    </div>
                                </Col>
                                <Col>
                                    <div id='meeting-image-name-container'>
                                        <img id='meeting-image-size' src={Club} alt='club seating arrangement' className='img-fluid'></img>
                                        <p id='bold-text'>Club Seating</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Row>
                <FirstFooter />
            </div>
        </>
    )
}