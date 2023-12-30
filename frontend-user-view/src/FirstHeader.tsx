import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from "./images/logo.png";
import { Link } from "react-router-dom";
import MyButton from './MyButton';

export default function Header() {

    return (
        <>
            <Row id="first-header-container">
                <Row id="first-header-logo-button-container">
                    <Col sm={12} lg={7} id="logo-container">
                        <Link to='/Homepage'>
                            <img id="logo-image" src={logo} alt="library logo"></img>
                        </Link>
                    </Col>
                    <Col id='first-header-buttons-container'>
                        <Link to="FAQPage">
                            <MyButton className="first-header-button" title="FAQs"></MyButton>
                        </Link>
                        <Link to="/ContactPage">
                            <MyButton className="first-header-button" title="Contact Us" />
                        </Link>
                        <Link to="/HoursLocationPage">
                            <MyButton className="first-header-button" title="Hours & Location" />
                        </Link>
                    </Col>
                </Row>
            </Row>
        </>
    )
}