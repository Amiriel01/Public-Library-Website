import HomepageLink from './HomepageLink';
import FirstFooter from './FirstFooter';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InLibraryResources from './InLibraryResources';
import MathDigitalResources from './MathDigitalResources';
import EnglishDigitalResources from './EnglishDigitalResources';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function StudentResources() {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);
    
    return (
        <>
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
        </>
    )
}