import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from './images/logo.png';
import { Link } from 'react-router-dom';

export default function SecondFooter() {
    return (
        <Row id='second-footer-container'>
            <Row id='second-footer-flex-container'>
                <Col md={12} lg={4} id='second-footer-logo-container'>
                    <img className='img-fluid'  id='second-footer-logo' src={Logo} alt='library-logo'></img>
                </Col>
                <Col md={12} lg={4}  id='second-footer-connected-info-container'>
                    <h3 id='bold-text' className='connected-title'>
                        Stay Connected
                    </h3>
                    <div id='social-icon-text-container'>
                        <img id='social-media-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-plain.svg" />
                        <p id='social-media-text'>
                            Like us on Facebook!
                        </p>
                    </div>
                </Col>
                <Col md={12} lg={4}  id='second-footer-links-container'>
                    <Link id='second-footer-link' to='/FAQPage'>
                        <p id='bold-text'>
                            FAQ Page
                        </p>
                    </Link>
                    <Link id='second-footer-link' to='/ContactPage'>
                        <p id='bold-text'>
                            Contact Page
                        </p>
                    </Link>
                    <Link id='second-footer-link' to='/HoursLocationPage'>
                        <p id='bold-text'>
                            Hours & Location Page
                        </p>
                    </Link>
                </Col>
            </Row>
        </Row>
    )
}