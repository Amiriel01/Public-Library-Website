import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomepageLink from './HomepageLink';
import { Link } from "react-router-dom";
import LibraryCardQuestions from './libraryCardQuestions';
import BorrowingServices from './BorrowingServices';

export default function FAQPage() {
    return (
        <>
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
            </Row>
        </>
    )
}
