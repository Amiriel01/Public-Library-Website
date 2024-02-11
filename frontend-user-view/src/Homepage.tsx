import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FirstFooter from './FirstFooter';
import EventCarousel from "./EventCarousel";
import HomepageSquares from './HomepageSquares';
import CrystalsGemstones1 from './images/crystalsandgemstones1.png';
import CrystalsGemstones2 from './images/crystalsandgemstones2.png';
import Logo from './images/logo.png'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

export default function Homepage() {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    return (
        <>
            <div>
                <Helmet>
                    <title>Another Page Public Library Homepage</title>
                    <meta name="description" content="The homepage for Another Page Public Library contains the upcoming events carousel, the current traveling exhibit, and links to other pages." />
                    <meta name="keywords" content="react, public library, upcoming events" />
                    <meta property="og:title" content="Another Page Public Library Homepage" />
                    <meta property="og:description" content="The homepage for Another Page Public Library contains the upcoming events carousel, the current traveling exhibit, and links to other pages." />
                    <meta property="og:image" content={Logo} />
                    <meta property="og:url" content="https://example.com/my-page" />
                </Helmet>
                <Row id='homepage-container'>
                    <Row id='carousel-container'>
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
                            <p id='homepage-event-title2'>
                                The traveling exhibit showcased at the Another Page Library this December will be the Faces to Facets, Crystals to Gemstones exhibit. The exhibit can be viewed anytime during December.
                            </p>
                        </Col>
                    </Row>
                    <Row id='homepage-image-container'>
                        <Col xs={12} sm={6} md={4}>
                            <img className='img-fluid' id='homepage-event-image' src={CrystalsGemstones1} alt='event image'></img>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <img className='img-fluid' id='homepage-event-image' src={CrystalsGemstones2} alt='event image'></img>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <HomepageSquares />
                        </Col>
                    </Row>
                </Row>
                <FirstFooter />
            </div>
        </>
    )
}