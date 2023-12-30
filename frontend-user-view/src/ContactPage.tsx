import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomepageLink from './HomepageLink';
import FirstFooter from './FirstFooter';
import { Link } from "react-router-dom";
import ContactForm from './ContactForm';
import Staff from './Staff';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Logo from './images/logo.png';

export default function ContactPage({ showAdmin }: {
    showAdmin: boolean
}) {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    const allContactRequestsLink = () => {
        if (showAdmin === true) {
            return <Row>
                <Col>
                    <Link id='all-contacts-page-link' to='/AllContactRequests'>
                        All Contact Requests
                    </Link>
                </Col>
            </Row>
        }
    }

    return (
        <>
            <div>
                <Helmet>
                    <title>Another Page Public Library Contact Page</title>
                    <meta name="description" content="The contact page lists the department phone numbers, each departments head librarian, and a contact form for patrons to use if they need to contact the library." />
                    <meta name="keywords" content="react, public library, library contact information" />
                    <meta property="og:title" content="Another Page Public Library Contact Page" />
                    <meta property="og:description" content="The contact page lists the department phone numbers, each departments head librarian, and a contact form for patrons to use if they need to contact the library." />
                    <meta property="og:image" content={Logo} />
                    <meta property="og:url" content="https://example.com/my-page" />
                    <meta name="twitter:title" content="Another Page Public Library Contact Page" />
                    <meta name="twitter:description" content="The contact page lists the department phone numbers, each departments head librarian, and a contact form for patrons to use if they need to contact the library." />
                    <meta name="twitter:image" content={Logo} />
                    <meta name="twitter:card" content={Logo} />
                </Helmet>
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
                        <Col id='department-title1'>
                            Adult Library
                            <div>(555) 555-5555</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col id='department-title2'>
                            Children's Library
                            <div>(555) 555-5554</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col id='department-title3'>
                            Teen & Tween Library
                            <div>(555) 555-5553</div>
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
                        <Col id='contact-page-form-instructions'>
                            Your question may easily be answered by accessing the <Link id='faq-page-link' to="/FAQPage">FAQ Page</Link>. If it is not easily answered, please contact us using the form below.
                        </Col>
                    </Row>
                    <ContactForm />
                </Row >
                <FirstFooter />
            </div>
        </>
    )
}
