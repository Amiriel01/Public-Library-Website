import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from "./images/logo.png";
import logo2 from "./images/logo2.png";
import logo3 from "./images/logo3.png";
import { Link } from "react-router-dom";


export default function Header() {

    function HoursLocationButton({ title }: { title: string }) {
        return (
            <button id="hours-location-button">{title}</button>
        )
    }

    function ContactButton({ title }: { title: string }) {
        return (
            <button id="contact-button">{title}</button>
        )
    }

    function FAQButton({ title }: { title: string }) {
        return (
            <button id="faq-button">{title}</button>
        )
    }
    
    return (
        <>
            <Row id="first-header-container">
                <Row id="first-header-logo-button-container">
                    <Col sm={12}  lg={7} id="logo-container">
                        <img id="logo-image" className="img-fluid" src={logo} alt="library logo"></img>
                    </Col>
                    <Col>
                    <Link to="FAQ">
                            <FAQButton title="FAQs" />
                        </Link>
                        <Link to="/ContactPage">
                            <ContactButton title="Contact Us" />
                        </Link>
                        <Link to="/HoursLocationPage">
                            <HoursLocationButton title="Hours & Location" />
                        </Link>
                    </Col>
                </Row>
            </Row>
        </>
    )
}