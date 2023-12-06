import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomepageLink from './HomepageLink';
import FirstFooter from './FirstFooter';
import { Link } from "react-router-dom";
import ContactForm from './ContactForm';
import Staff from './Staff';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function ContactPage({ showAdmin }) {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    const allContactRequestsLink = () => {
        if (showAdmin === true) {
            return <Row>
                <Col>
                    <p>
                        <Link id='all-contacts-page-link' to='/AllContactRequests'>
                            All Contact Requests
                        </Link>
                    </p>
                </Col>
            </Row>
        }
    }

    return (
        <>
            <Row id='contact-page-container'>
                <HomepageLink />
                {allContactRequestsLink()}
                <Row>
                    <Col >
                        <h1 id='page-titles'>
                            Library Departments
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p id='department-title'>
                            Adult Library: (555) 555-5555
                        </p>
                        <p id='department-title'>
                            Children Library: (555) 555-5554
                        </p>
                        <p id='department-title'>
                            Teen Library: (555) 555-5553
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <h1 id='page-titles'>
                            Department Librarians
                        </h1>
                    </Col>
                </Row>
                <Staff />
                <Row>
                    <Col>
                        <h1 id='page-titles'>
                            Contact Us
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p id='contact-page-form-instructions'>
                            Your question may easily be answered by accessing the <Link id='faq-page-link' to="/FAQPage">FAQ Page</Link>. If it is not easily answered, please contact us using the form below.
                        </p>
                    </Col>
                </Row>
                <ContactForm />
            </Row>
            <FirstFooter />
        </>
    )
}
