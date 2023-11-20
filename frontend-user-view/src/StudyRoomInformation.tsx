import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomepageLink from './HomepageLink';
import MyButton from './MyButton';
import { Link } from 'react-router-dom';

export default function StudyRoomInformation() {
    return (
        <Row id='study-room-info-page-container'>
            <HomepageLink />
            <Row>
                <Col>
                    <h1 id='page-titles'>
                        Study Rooms
                    </h1>
                </Col>
            </Row>
        </Row>
    )
}