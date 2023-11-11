import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomepageLink from './HomepageLink';
import LibraryOutside from "./images/libraryoutside.png";
import GlobeBook from "./images/globebook.png";
import { Link } from "react-router-dom";

export default function HoursLocationPage() {

    function MyButton({ title }: { title: string }) {
        return (
            <button id="contact-us-button">{title}</button>
        )
    }

    return (
        <>
            <Row id='hours-location-page-container'>
                <HomepageLink />
                <Row>
                    <Col>
                        <h1 id='hours-location-page-title'>
                            Hours & Location
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col id='hours-location-library-image-container'>
                        <img id='hours-location-library-image' className="img-fluid" src={LibraryOutside}></img>
                    </Col>
                </Row>
                <Row id='map-location-container'>
                    <Col id='address-hours-column'>
                        {/* <img id='globe-book-image' className='img-fluid' src={GlobeBook}></img> */}
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
                                <MyButton title='Contact Us'></MyButton>
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
        </>
    )

}