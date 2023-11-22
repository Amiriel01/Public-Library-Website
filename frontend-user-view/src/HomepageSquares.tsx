import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

export default function HomepageSquares() {
    return (
        <Row id='homepage-squares-container'>
            <Col id='home-page-square'>
                <Link id='square-link' to="/AboutLibrary">
                    <div id='square-container'>
                        <span id='square-icon' className="material-symbols-outlined">
                            local_library
                        </span>
                        <p id='square-title'>
                            About the 
                        </p>
                        <p id='square-title'>
                            Library
                        </p>
                    </div>
                </Link>
            </Col>
            <Col  id='home-page-square'>
                <Link id='square-link' to="/AboutLibrary">
                    <div id='square-container'>
                        <span id='square-icon' className="material-symbols-outlined">
                            calendar_month
                        </span>
                        <p id='square-title'>
                            Upcoming Events
                        </p>
                    </div>
                </Link>
            </Col>
            <Col  id='home-page-square'>
                <Link id='square-link' to="/AboutLibrary">
                    <div id='square-container'>
                        <span id='square-icon' className="material-symbols-outlined">
                            volunteer_activism
                        </span>
                        <p id='square-title'>
                            Give
                        </p>
                    </div>
                </Link>
            </Col>
            <Col  id='home-page-square'>
                <Link id='square-link' to="/AboutLibrary">
                    <div id='square-container'>
                        <span id='square-icon' className="material-symbols-outlined">
                            quiz
                        </span>
                        <p id='square-title'>
                            FAQs
                        </p>
                    </div>
                </Link>
            </Col>
        </Row>
    )
}