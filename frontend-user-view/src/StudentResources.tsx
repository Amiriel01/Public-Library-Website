import HomepageLink from './HomepageLink';
import FirstFooter from './FirstFooter';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InLibraryResources from './InLibraryResources';
import MathDigitalResources from './MathDigitalResources';
import EnglishDigitalResources from './EnglishDigitalResources';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Logo from './images/logo.png';


export default function StudentResources() {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    return (
        <>
            <div>
                <Helmet>
                    <title>Another Page Public Library Student Resources</title>
                    <meta name="description" content="The student resources page is split into three catagories. Resources offered at the library, free online math resources, and free online english resources." />
                    <meta name="keywords" content="react, public library, student resources" />
                    <meta property="og:title" content="Another Page Public Library Student Resources" />
                    <meta property="og:description" content="The student resources page is split into three catagories. Resources offered at the library, free online math resources, and free online english resources." />
                    <meta property="og:image" content={Logo} />
                    <meta property="og:url" content="https://example.com/my-page" />
                </Helmet>
                <Row id='upcoming-events-page-container'>
                    <HomepageLink />
                    <Row>
                        <Col>
                            <h1 id='page-titles'>
                                Student Resources
                            </h1>
                        </Col>
                    </Row>
                    <InLibraryResources />
                    <MathDigitalResources />
                    <EnglishDigitalResources />
                </Row>
                <FirstFooter />
            </div>
        </>
    )
}