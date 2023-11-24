import Form from 'react-bootstrap/Form';
import MyButton from './MyButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomepageLink from './HomepageLink';
import axios from 'axios';

export default function NewsletterSignUp() {
    return (
        <Row id='newsletter-sign-up-container'>
            <HomepageLink />
            <Row>
                <Col>
                <h1 id='bold-text'>
                    Newsletter Sign Up
                </h1>
                </Col>
            </Row>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email Address:</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <div>
                    <MyButton id='newsletter-form-submit-button' title='Sign Up!'></MyButton>
                </div>
            </Form>
        </Row>   
    )
}
