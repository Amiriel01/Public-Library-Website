import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import EventCarousel from "./EventCarousel";

export default function Homepage() {
    return (
        <>
            <Row id='homepage-container'>
                <Col>
                    <EventCarousel />
                </Col>
            </Row>
        </>
    )

}