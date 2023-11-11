import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

export default function HomepageLink() {
    return (
        <Row id='homepage-link-container'>
            <Col>
                <p >
                    <Link id='homepage-link' to="/Homepage">
                        Home
                    </Link>
                </p>
            </Col>
        </Row>
    )
}