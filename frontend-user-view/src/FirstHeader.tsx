import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo2 from "./images/logo2.png";
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
                    <Col sm={12}  lg={6} id="logo-container">
                        <img id="logo-image" className="img-fluid" src={logo2} alt="library logo"></img>
                    </Col>
                    <Col id='header-buttons-container'>
                        <Link to="/HoursLocationPage">
                            <MyButton title="Hours & Location" />
                        </Link>
                        <Link to="/ContactPage">
                            <MyButton title="Contact Us" />
                        </Link>
                        <Link to="FAQ">
                            <MyButton title="FAQs" />
                        </Link>
                    </Col>
                </Row>
            </Row>
        </>
    )
}