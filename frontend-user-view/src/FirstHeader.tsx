import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo2 from "./images/logo2.png";


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
                    <Col md={12} id="logo-container">
                        <img id="logo-image" src={logo2} alt="library logo"></img>
                    </Col>
                    <Col md={12}>
                        <MyButton title="Hours & Location" />
                        <MyButton title="Contact Us" />
                        <MyButton title="FAQs" />
                    </Col>
                </Row>
            </Row>
        </>
    )
}