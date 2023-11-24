import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyButton from './MyButton';
import { Link } from 'react-router-dom';

export default function FirstFooter() {
    return (
        <Row id='first-footer-container'>
            <Row id='first-footer-left-right'>
                <Col id='first-footer-left'>
                    <h2 id='bold-text'>
                        Sign up for our monthly newsletter.
                    </h2>
                    <p id='bold-text'>
                        Hear about all of our upcoming events, programs, and more!
                    </p>
                </Col>
                <Col id='first-footer-right'>
                    <Link to='/NewsletterSignUp'>
                        <MyButton id='newsletter-button' title='Sign Up Now!'></MyButton>
                    </Link>
                </Col>
            </Row>
        </Row>
    )
}