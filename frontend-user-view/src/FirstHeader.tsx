import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from "./images/logo.png";
import { Link } from "react-router-dom";

export default function Header() {

    function MyButton({ title }: { title: string }) {
        return (
            <button id="first-header-button">{title}</button>
        )
    }

    return (
        <>
            <Row id="first-header-container">
                <Row id="first-header-logo-button-container">
                    <Col sm={12} lg={7} id="logo-container">
                        <Link to='/Homepage'>
                            <img id="logo-image" className="img-fluid" src={logo} alt="library logo"></img>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="FAQPage">
                            <MyButton title="FAQs" />
                        </Link>
                        <Link to="/ContactPage">
                            <MyButton title="Contact Us" />
                        </Link>
                        <Link to="/HoursLocationPage">
                            <MyButton title="Hours & Location" />
                        </Link>
                    </Col>
                </Row>
            </Row>
        </>
    )
}