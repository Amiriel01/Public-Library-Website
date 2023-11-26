import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomepageLink from './HomepageLink';
import FirstFooter from './FirstFooter';

export default function Donate() {
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