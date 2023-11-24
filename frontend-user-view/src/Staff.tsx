import Card from 'react-bootstrap/Card';
import StaffImage from "./images/director.png";
import StaffImage2 from './images/director2.png';
import StaffImage3 from './images/director3.png';
import axios from 'axios';

export default function Staff() {
    return (
        <>
            <Card id='staff-card'>
                <Card.Body id='staff-card-flex-container'>
                    <img id='staff-image' className='img-fluid' src={StaffImage}></img>
                    <div>
                        <Card.Title id='card-title'>Adult Library</Card.Title>
                        <Card.Subtitle id='card-subtitle' className="mb-2 text-muted">Sally Right</Card.Subtitle>
                        <Card.Text id='card-text'>
                            <div>
                                <p id='bold-text'>
                                    Phone:
                                </p>
                                <p>
                                    (555) 555-5552
                                </p>
                            </div>
                            <div>
                                <p id='bold-text'>
                                    Email:
                                </p>
                                <p>
                                    sright@page.com
                                </p>
                            </div>
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
            <Card id='staff-card'>
                <Card.Body id='staff-card-flex-container'>
                    <img id='staff-image' className='img-fluid' src={StaffImage3}></img>
                    <div>
                        <Card.Title id='card-title'>Teen/Tween Library</Card.Title>
                        <Card.Subtitle id='card-subtitle' className="mb-2 text-muted">Seth Smith</Card.Subtitle>
                        <Card.Text id='card-text'>
                            <div>
                                <p id='bold-text'>
                                    Phone:
                                </p>
                                <p>
                                    (555) 555-5553
                                </p>
                            </div>
                            <div>
                                <p id='bold-text'>
                                    Email:
                                </p>
                                <p>
                                    ssmith@page.com
                                </p>
                            </div>
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
            <Card id='staff-card'>
                <Card.Body id='staff-card-flex-container'>
                    <img id='staff-image' className='img-fluid' src={StaffImage2}></img>
                    <div>
                        <Card.Title id='card-title'>Child Library</Card.Title>
                        <Card.Subtitle id='card-subtitle' className="mb-2 text-muted">Samantha Cart</Card.Subtitle>
                        <Card.Text id='card-text'>
                            <div>
                                <p id='bold-text'>
                                    Phone:
                                </p>
                                <p>
                                    (555) 555-5554
                                </p>
                            </div>
                            <div>
                                <p id='bold-text'>
                                    Email:
                                </p>
                                <p>
                                    scart@page.com
                                </p>
                            </div>
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
}