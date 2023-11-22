import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import EventCarousel from "./EventCarousel";
import HomepageSquares from './HomepageSquares';

export default function Homepage() {
    return (
        <>
            <Row id='homepage-container'>
                <Row>
                    <Col>
                        <EventCarousel />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <HomepageSquares />
                    </Col>
                </Row>
            </Row>
        </>
    )
}