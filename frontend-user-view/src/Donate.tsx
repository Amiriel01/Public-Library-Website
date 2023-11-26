import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomepageLink from './HomepageLink';
import FirstFooter from './FirstFooter';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function Donate() {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);
    
    return (
        <>
            <Row id='donate-page-container'>
                <HomepageLink />
                <Col>
                    <h1>
                        The online donation page has not been set up yet. Please mail your donation or bring it by the Information Desk at the library.
                    </h1>
                </Col>
            </Row>
            <FirstFooter />
        </>
    )
}