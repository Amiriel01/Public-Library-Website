import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomepageLink from './HomepageLink';
import FirstFooter from './FirstFooter';
import LibraryCardQuestions from './LibraryCardQuestions';
import BorrowingServices from './BorrowingServices';
import TechnologyServices from './TechnologyServices';
import Giving from './Giving';
import MeetingRoom from './MeetingRoom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Logo from './images/logo.png';

export default function FAQPage() {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    return (
        <>
            <div>
                <Helmet>
                    <title>Another Page Public Library Frequently Asked Questions</title>
                    <meta name="description" content="The faq page answers many common questions the library receives. The page has sections that help patrons learn about library cards, the library's borrowing and technology services, donations, volunteering, and meeting/study rooms available at the library." />
                    <meta name="keywords" content="react, public library, frequently asked questions" />
                    <meta property="og:title" content="Another Page Public Library Frequently Asked Questions" />
                    <meta property="og:description" content="The faq page answers many common questions the library receives. The page has sections that help patrons learn about library cards, the library's borrowing and technology services, donations, volunteering, and meeting/study rooms available at the library." />
                    <meta property="og:image" content={Logo} />
                    <meta property="og:url" content="https://example.com/my-page" />
                    <meta name="twitter:title" content="Another Page Public Library Frequently Asked Questions" />
                    <meta name="twitter:description" content="The faq page answers many common questions the library receives. The page has sections that help patrons learn about library cards, the library's borrowing and technology services, donations, volunteering, and meeting/study rooms available at the library." />
                    <meta name="twitter:image" content={Logo} />
                    <meta name="twitter:card" content={Logo} />
                </Helmet>
                <Row id='faq-page-container'>
                    <HomepageLink />
                    <Row>
                        <Col>
                            <h1 id='page-titles'>
                                Frequently Asked Questions
                            </h1>
                        </Col>
                    </Row>
                    <LibraryCardQuestions />
                    <BorrowingServices />
                    <TechnologyServices />
                    <Giving />
                    <MeetingRoom />
                </Row>
                <FirstFooter />
            </div>
        </>
    )
}
