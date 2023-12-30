import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomepageLink from './HomepageLink';
import FirstFooter from './FirstFooter';
import LibraryOutside from "./images/libraryoutside.png";
import { Link } from "react-router-dom";
import MyButton from './MyButton';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Logo from './images/logo.png';

export default function HoursLocationPage() {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    return (
        <>
            <div>
                <Helmet>
                    <title>Another Page Public Library Hours & Location</title>
                    <meta name="description" content="The Hours & Location page gives the hours the library is open, the library's address, and a link to the contact page." />
                    <meta name="keywords" content="react, public library, library hours and location" />
                    <meta property="og:title" content="Another Page Public Library Hours & Location" />
                    <meta property="og:description" content="The Hours & Location page gives the hours the library is open, the library's address, and a link to the contact page." />
                    <meta property="og:image" content={Logo} />
                    <meta property="og:url" content="https://example.com/my-page" />
                    <meta name="twitter:title" content="Another Page Public Library Hours & Location" />
                    <meta name="twitter:description" content="The Hours & Location page gives the hours the library is open, the library's address, and a link to the contact page." />
                    <meta name="twitter:image" content={Logo} />
                    <meta name="twitter:card" content={Logo} />
                </Helmet>
                <Row id='hours-location-page-container'>
                    <HomepageLink />
                    <Row>
                        <Col>
                            <h1 id='page-titles'>
                                Hours & Location
                            </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col id='hours-location-library-image-container'>
                            <img id='hours-location-library-image' className="img-fluid" src={LibraryOutside} alt='library building'></img>
                        </Col>
                    </Row>
                    <Row id='map-location-container'>
                        <Col id='address-hours-column'>
                            <div id='address-title-container'>
                                <p id='address-page-title'>
                                    Address:
                                </p>
                                <p id='address-page-text'>
                                    555 West 55th St.
                                </p>
                                <p id='address-page-text'>
                                    Library Town, LT 55555
                                </p>
                                <p id='address-page-title'>
                                    Main Phone:
                                </p>
                                <p id='address-page-text'>
                                    (555) 555-5555
                                </p>
                                <Link to="/ContactPage">
                                    <MyButton className='contact-us-button' title='Contact Us'></MyButton>
                                </Link>
                            </div>
                            <div id='open-hours-container'>
                                <p id='address-page-title'>
                                    Open Hours:
                                </p>
                                <p id='address-page-text'>
                                    Monday-Thursday 9:00am-6:00pm
                                </p>
                                <p id='address-page-text'>
                                    Friday 10:00am-8:00pm
                                </p>
                                <p id='address-page-text'>
                                    Saturday 10:00am-6:00pm
                                </p>
                                <p id='address-page-text'>
                                    Sunday 11:00am-4:00pm
                                </p>
                                <p id='address-page-title'>
                                    Holiday Hours:
                                </p>
                                <p id='address-page-text'>
                                    To Be Announced
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Row>
                <FirstFooter />
            </div>
        </>
    )

}