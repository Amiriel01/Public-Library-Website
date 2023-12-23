import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from './images/logo.png';
import { Link } from 'react-router-dom';

export default function SecondFooter({ showAdmin, setShowAdmin, setLoggedIn }: {
    showAdmin: boolean,
    setLoggedIn: (data: boolean) => void,
    setShowAdmin: (data: boolean) => void,
}) {

    const renderLibraryLogin = () => {
        if (showAdmin === false) {
            return <Link id='second-footer-link' to='/LibraryLogin'>
                <p id='bold-text'>
                    Library Login
                </p>
            </Link>
        }
    }

    const renderLibraryLogout = () => {
        if (showAdmin === true) {
            return <button id='library-logout-button' onClick={() => loggedInAndShowAdminValueReset()}>
                Library Logout
            </button>
        }
    }

    const loggedInAndShowAdminValueReset = () => {
        setLoggedIn(false);
        setShowAdmin(false);
    }

    return (
        <Row id='second-footer-container'>
            <Row id='second-footer-flex-container'>
                <Col md={12} lg={4} id='second-footer-logo-container'>
                    <Link to='/Homepage'>
                        <img className='img-fluid' id='second-footer-logo' src={Logo}
                            alt='library-logo'></img>
                    </Link>
                </Col>
                <Col md={12} lg={4} id='second-footer-connected-info-container'>
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
                <Col md={12} lg={4} id='second-footer-links-container'>
                    <Link id='second-footer-link' to='/FAQPage'>
                        <p id='bold-text'>
                            FAQ
                        </p>
                    </Link>
                    <Link id='second-footer-link' to='/ContactPage'>
                        <p id='bold-text'>
                            Contact
                        </p>
                    </Link>
                    <Link id='second-footer-link' to='/HoursLocationPage'>
                        <p id='bold-text'>
                            Hours & Location
                        </p>
                    </Link>
                    {renderLibraryLogin()}
                    {renderLibraryLogout()}
                </Col>
            </Row>
        </Row>
    )
}