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
import MyButton from './MyButton';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function MeetingRoomInformation() {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);
    
    return (
        <>
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
                        <h3 id='meeting-room-information'>
                            Large Meeting Room Setups Available
                        </h3>
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
                        <h3 id='meeting-room-information'>
                            Medium Meeting Room Setups Available
                        </h3>
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
                        <h3 id='meeting-room-information'>
                            Small Meeting Room Setups Available
                        </h3>
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
        </>
    )
}