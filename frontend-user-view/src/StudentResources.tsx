import HomepageLink from './HomepageLink';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InLibraryResources from './InLibraryResources';
import MathDigitalResources from './MathDigitalResources';
import EnglishDigitalResources from './EnglishDigitalResources';

export default function StudentResources() {
    return (
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
    )
}