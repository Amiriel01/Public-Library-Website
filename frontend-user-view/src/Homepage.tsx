import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import EventCarousel from "./EventCarousel";
import HomepageSquares from './HomepageSquares';
import CrystalsGemstones1 from './images/crystalsandgemstones1.png';
import CrystalsGemstones2 from './images/crystalsandgemstones2.png';
import RocsGemsEvent from './images/rockandgemstones.png';

export default function Homepage() {
    return (
        <>
            <Row id='homepage-container'>
                <Row>
                    <Col>
                        <EventCarousel />
                    </Col>
                </Row>
                <Row id='homepage-event-container'>
                    <Col>
                        <h1 id='homepage-event-title'>
                            Traveling Exhibit
                        </h1>
                    </Col>
                </Row>
                <Row id='homepage-event-header'>
                    <Col>
                        <h3 id='homepage-event-title'>
                            The traveling exhibit showcased at the Another Page Library this December will be the Faces to Facets, Crystals to Gemstones exhibit. The exhibit can be viewed anytime during December.
                        </h3>
                    </Col>
                </Row>
                <Row id='homepage-image-container'>
                    <Col>
                        <img id='homepage-event-image' src={CrystalsGemstones1} alt='event image'></img>
                    </Col>
                    <Col>
                        <img id='homepage-event-image' src={RocsGemsEvent} alt='event image'></img>
                    </Col>
                    <Col>
                        <img id='homepage-event-image' src={CrystalsGemstones2} alt='event image'></img>
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