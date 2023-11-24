import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomepageLink from './HomepageLink';
import { Link } from "react-router-dom";
import ContactForm from './ContactForm';
import Card from 'react-bootstrap/Card';
import StaffImage from "./images/director.png"
import axios from 'axios';

export default function ContactPage() {

    function TextExample() {
        return (
            <Card id='staff-card'>
                <Card.Body id='staff-card-flex-container'>
                    <img id='staff-image' className='img-fluid' src={StaffImage}></img>
                    <div>
                        <Card.Title id='card-title'>Library Director</Card.Title>
                        <Card.Subtitle id='card-subtitle' className="mb-2 text-muted">Sally Wright</Card.Subtitle>
                        <Card.Text id='card-text'>
                            <p>Phone: (555) 555-5552</p>
                            <p>Email: director@page.com</p>
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        );
    }

    return (
        <>
            <Row id='contact-page-container'>
                <HomepageLink />
                <Row>
                    <Col >
                        <h1 id='page-titles'>
                            Departments
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
                            Staff
                        </h1>
                    </Col>
                </Row>
                <TextExample />
                <TextExample />
                <TextExample />
                <TextExample />
                <TextExample />
                <TextExample />
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
        </>
    )
}
