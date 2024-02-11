import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomepageLink from './HomepageLink';
import FirstFooter from './FirstFooter';
import giveImage from "./images/happybookstack.png";
import Accordion from 'react-bootstrap/Accordion';
import MyButton from './MyButton';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Logo from './images/logo.png';

export default function GivingInfo() {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    return (
        <>
            <div>
                <Helmet>
                    <title>Another Page Public Library Giving Page</title>
                    <meta name="description" content="The Giving page is a place for library patrons and local businesses to learn about monetary donations that help support the library." />
                    <meta name="keywords" content="react, public library, library montary donations" />
                    <meta property="og:title" content="Another Page Public Library Giving Page" />
                    <meta property="og:description" content="The Giving page is a place for library patrons and local businesses to learn about monetary donations that help support the library." />
                    <meta property="og:image" content={Logo} />
                    <meta property="og:url" content="https://example.com/my-page" />
                </Helmet>
                <Row id='giving-info-page-container'>
                    <HomepageLink />
                    <Row>
                        <Col>
                            <h1 id='page-titles'>
                                Give to the Library
                            </h1>
                        </Col>
                    </Row>
                    <div id='give-flex-container'>
                        <div id='give-title-subtitle-container'>
                            <Row>
                                <Col>
                                    <h2 id='page-titles'>
                                        The Gift of Lifetime Learning and Discovery
                                    </h2>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h3 id='give-information'>
                                        Support from our local patrons and businesses is critical. Donations support library resources, programs, and services.
                                    </h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h3 id='give-information'>
                                        Please consider a one-time or reoccuring donation to Another Page library. Your donation is tax deductible.
                                    </h3>
                                </Col>
                            </Row>
                        </div>
                        <Row id="give-image-row">
                            <Col>
                                <img id="give-image" className="img-fluid" src={giveImage} alt="girl holding stack of books" />
                            </Col>
                        </Row>
                    </div>
                    <Row>
                        <Col>
                            <h2 id='faq-subtitles'>
                                Ways to Give
                            </h2>
                        </Col>
                    </Row>
                    <Accordion id='questions-accordion-container'>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Give Now</Accordion.Header>
                            <Accordion.Body>
                                <p>Give an unrestricted gift to the Library. Your support of the Library is crucial to fulfilling our annual funding needs. By making an unrestricted gift to the Library, you show your support of this remarkable community resource. Feel good knowing you helped fund quality programs and services that benefit our entire community.</p>
                                <h4 id='ways-to-give-header'>Ways to Give Now:</h4>
                                <Link to="/Donate">
                                    <MyButton className='donate-button' title='&#10084; Donate'></MyButton>
                                </Link>
                                <div id='bold-flex-container'>
                                    <p id='bold-text'> Online:</p>
                                    <p>Online gifts are quick, easy, and secure. You may donate using your credi card, PayPal, Apple Pay, debit card, or and ACH withdrawal from your banking account using the donate button above.</p>
                                </div>
                                <div id='bold-flex-container'>
                                    <p id='bold-text'> By Mail:</p>
                                    <p>Address your gift to the donations department at the address below.</p>
                                </div>
                                <p id='give-address-formatting'>Another Page Libarary</p>
                                <p id='give-address-formatting'>Donations Department</p>
                                <p id='give-address-formatting'>555 West 55th St.</p>
                                <p id='give-address-bottom-formatting'>Library Town, LT 55555</p>
                                <div id='bold-flex-container'>
                                    <p id='bold-text'> By Phone:</p>
                                    <p>Call <span id='bold-text'>(555) 555-5556</span> to make a phone donation. </p>
                                </div>
                                <div id='bold-flex-container'>
                                    <p id='bold-text'> In-Person:</p>
                                    <p>Drop by the Information Desk to make an in-person donation the next time you visit the library.</p>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Make a Legacy</Accordion.Header>
                            <Accordion.Body>
                                <p>
                                    A legacy gift will keep giving for many generations. By making a legacy gift, you will help ensure that future generations have access to all the programs and more that are enjoyed today at the library.
                                </p>
                                <p>
                                    While the Foundation is not able to give financial or tax advice, we are here to help. You are welcome to call the Foundation office and we will work with your financial advisors to help you carry out your vision for the future.
                                </p>
                                <h4 id='ways-to-give-header'>How the library benefits from your legacy gift:</h4>
                                <div id='bold-flex-container'>
                                    <p id='bold-text'> Planning:</p>
                                    <p>Legacy gift lets us know that resources are in the pipeline to help fund the future of the Library.</p>
                                </div>
                                <div id='bold-flex-container'>
                                    <p id='bold-text'>Investments:</p>
                                    <p>Legacy gifts allow the library to grow its investments to ensure the Library has adequate funding for the future.</p>
                                </div>
                                <div id='bold-flex-container'>
                                    <p id='bold-text'>Special Projects:</p>
                                    <p>Legacy gifts help provide the funding for special projects or purchasing equipment and technology that could not otherwise be afforded.</p>
                                </div>
                                <h4 id='ways-to-give-header'>How you benefit from your legacy gift:</h4>
                                <div id='bold-flex-container'>
                                    <p id='bold-text'> Tax Reduction:</p>
                                    <p>Gift, estate, and capital gain taxes could be reduced or eliminated with your legacy gift.</p>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Make a Monthly Gift</Accordion.Header>
                            <Accordion.Body>
                                <p>If you would like to make a monthly donation, please make the selection on the donation page. Reoccuring donations can be cancelled at any time.</p>
                                <h4 id='ways-to-give-header'>Benefits of Donating Monthly:</h4>
                                <div id='bold-flex-container'>
                                    <p id='bold-text'> Convenience:</p>
                                    <p>You do not have to worry about remembering to go online and donate, or to mail a gift each year.</p>
                                </div>
                                <div id='bold-flex-container'>
                                    <p id='bold-text'> Reliability:</p>
                                    <p>The library depends on donations to support many of the offered programs. With monthly donations, the library can depend on the funds being available when needed.</p>
                                </div>
                                <div id='bold-flex-container'>
                                    <p id='bold-text'>Updates:</p>
                                    <p>As a monthly donator, you will recieve emails throughout the year about exibits and events. Monthly donators will have access to these events and exibits before the general public.</p>
                                </div>
                                <div id='bold-flex-container'>
                                    <p id='bold-text'>Baskets:</p>
                                    <p>As a special thank you, the library will send a gift basket semi-annual to all monthly donators. Expect to receive your basket every June and December. To qualify for the semi-annual basket, you must have contributed monthly for the previous five months with no interuptions.</p>
                                </div>
                                <p id='bold-text'>Click Donate to set up your monthly donation!</p>
                                <Link to="/Donate">
                                    <MyButton className='donate-button' title='&#10084; Donate'></MyButton>
                                </Link>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Become a Program Sponsor</Accordion.Header>
                            <Accordion.Body>
                                <p>We welcome you to support our programming efforts by becoming a program sponsor. Program sponsorship is a fulfilling way to show your support of literacy and the quality Library programming available to our community members.</p>
                                <p>We rely on you as a program sponsor to help fund current planned programs that enrich the lives of our community members. We show our appreciation of program sponsors by acknowledging them in the marketing of the sponsored program and during the sponsored program when possible.</p>
                                <p id='bold-text'>For available sponsorship opportunities, visit the Information Desk at the library or call (555) 555-5555.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Adopt a Magazine</Accordion.Header>
                            <Accordion.Body>
                                <p>Help expand our magazine collection by donating to Adopt a Magazine. You could proudly provide the subscription fee for one or more of the magazines the Library subscribes to.</p>
                                <p>When you adopt a magazine, a label acknowledging your adoption is placed on the shelf where the adopted magazine is housed. (Gifts may also be designated as anonymous.) Most subscriptions range in price from $15 to $30 per year.</p>
                                <p id='bold-text'>To adopt a magazine, visit the Information Desk at the library or call (555) 555-5555.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Row>
                <FirstFooter />
            </div>
        </>
    )
}