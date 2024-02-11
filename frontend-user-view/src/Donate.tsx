import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomepageLink from './HomepageLink';
import FirstFooter from './FirstFooter';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Logo from './images/logo.png';

export default function Donate() {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    return (
        <>
            <div>
                <Helmet>
                    <title>Another Page Public Library Donate Page</title>
                    <meta name="description" content="The Donate page is not set up for online payments at this time. Please visit the library to make your monetary donation." />
                    <meta name="keywords" content="react, public library, library montary donations" />
                    <meta property="og:title" content="Another Page Public Library Donate Page" />
                    <meta property="og:description" content="The Donate page is not set up for online payments at this time. Please visit the library to make your monetary donation." />
                    <meta property="og:image" content={Logo} />
                    <meta property="og:url" content="https://example.com/my-page" />
                </Helmet>
                <Row id='donate-page-container'>
                    <HomepageLink />
                    <Row id='donate-message-container'>
                        <Col>
                            <h1>
                                The online donation page has not been set up yet. Please mail your donation or bring it by the Information Desk at the library.
                            </h1>
                        </Col>
                    </Row>
                </Row>
                <FirstFooter />
            </div>
        </>
    )
}