import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

export default function HomepageSquares() {
    return (
        <Row id='homepage-squares-container'>
            <Col id='home-page-square'>
                <Link id='square-link1' to="/AboutLibrary">
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
            <Col id='home-page-square'>
                <Link id='square-link2' to="/UpcomingEvents">
                    <div id='square-container'>
                        <span id='square-icon' className="material-symbols-outlined">
                            calendar_month
                        </span>
                        <p id='square-title'>
                            Upcoming
                        </p>
                        <p id='square-title'>
                            Events
                        </p>
                    </div>
                </Link>
            </Col>
            <Col id='home-page-square'>
                <Link id='square-link3' to="/GivingInfo">
                    <div id='square-container'>
                        <span id='square-icon' className="material-symbols-outlined">
                            volunteer_activism
                        </span>
                        <p id='square-title'>
                            Give to
                        </p>
                        <p id='square-title'>
                           the Library
                        </p>
                    </div>
                </Link>
            </Col>
            <Col id='home-page-square'>
                <Link id='square-link4' to="/StudentResources">
                    <div id='square-container'>
                        <span id='square-icon' className="material-symbols-outlined">
                            school
                        </span>
                        <p id='square-title'>
                            Student
                        </p>
                        <p id='square-title'>
                            Resources
                        </p>
                    </div>
                </Link>
            </Col>
        </Row>
    )
}