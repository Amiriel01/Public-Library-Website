import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomepageLink from './HomepageLink';
import OldLibrary from "./images/oldlibrary.png";
import MidLibrary from "./images/midlibrary.png";
import NewLibrary from "./images/newlibrary.png";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import FirstFooter from './FirstFooter';
import { Helmet } from 'react-helmet-async';
import Logo from './images/logo.png';

export default function AboutLibrary() {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    return (
        <>
            <div>
                <Helmet>
                    <title>Another Page Public Library History</title>
                    <meta name="description" content="The Another Page Public Library about page, tells the libraries history. It discusses locations and employee counts, along with some other interesting facts." />
                    <meta name="keywords" content="react, public library, library history" />
                    <meta property="og:title" content="Another Page Public Library History" />
                    <meta property="og:description" content="The Another Page Public Library about page, tells the libraries history. It discusses locations and employee counts, along with some other interesting facts." />
                    <meta property="og:image" content={Logo} />
                    <meta property="og:url" content="https://example.com/my-page" />
                </Helmet>
                <Row id='about-page-container'>
                    <HomepageLink />
                    <Row>
                        <Col>
                            <h1 id='page-titles'>
                                Another Page Library
                            </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h2 id='page-titles'>
                                1950s - Today
                            </h2>
                        </Col>
                    </Row>
                    <Row id='about-section-container'>
                        <Col id='about-paragraph'>
                            <p>
                                Another Page Library was founded in the 1950s. When the library was first built it was a 1,200ft with parking for ten cars. The original library had two employees, a librarian and a secretary. The original building, staff, and location exhibit can be seen year round in the founders area of the library.
                            </p>
                            <p>
                                If you'd like to learn more about the library's beginning years, in addition to the exhibit, the library historian is available by appointment for presentations. To schedule a presentation please contact the Information Desk.
                            </p>
                        </Col>
                        <img id='about-image' src={OldLibrary} alt='original library image' ></img>
                    </Row>
                    <Row id='about-section-container'>
                        <img id='about-image' src={MidLibrary} alt='original library image' ></img>
                        <Col id='about-paragraph'>
                            <p>
                                Another Page Library outgrew the original building in the 1970s. The new building increased the sq. footage to 2,000 and had additional spaces for the newly needed offices. The library by this time had increased to having seven employees.
                            </p>
                            <p>
                                The seven employees included two librarians, two information desk workers, an accountant, two general employees. The library also started offering programs for children and teens at this location.
                            </p>
                        </Col>
                    </Row>
                    <Row id='about-section-container'>
                        <Col id='about-paragraph'>
                            <p>
                                The current library location was chosen in 2001. The library was in need of more space and a larger parking lot. The new library location offered many options for study rooms, offices, and exhibit areas.
                            </p>
                            <p>
                                The library currently employees around thirty employees and has at least twenty volunteers on average during the year. The library offers many programs for families, adults, teens, tweens, and children. Many exhibits annually can be seen at Another Page Library too. Be sure to check the monthly newsletter for programs and exhibits!
                            </p>
                        </Col>
                        <img id='about-image' src={NewLibrary} alt='original library image' ></img>
                    </Row>
                </Row>
                <FirstFooter />
            </div>
        </>
    )
}