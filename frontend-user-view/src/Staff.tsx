import Card from 'react-bootstrap/Card';
import StaffImage from "./images/director.png";
import StaffImage2 from './images/director2.png';
import StaffImage3 from './images/director3.png';

export default function Staff() {
    return (
        <>
            <Card id='staff-card'>
                <Card.Body id='staff-card-flex-container'>
                    <img id='staff-image' className='img-fluid' src={StaffImage} alt='adult librarian'></img>
                    <div>
                        <Card.Title id='card-title'>Adult Library</Card.Title>
                        <Card.Subtitle id='card-subtitle' className="mb-2 text-muted">Sally Right</Card.Subtitle>
                        <Card.Text id='bold-card-text'>
                            Phone:
                        </Card.Text>
                        <Card.Text id='card-text'>
                            (555) 555-5552
                        </Card.Text>
                        <Card.Text id='bold-card-text'>
                            Email:
                        </Card.Text>
                        <Card.Text id='card-text'>
                            sright@page.com
                        </Card.Text>
                    </div>
                </Card.Body >
            </Card >
            <Card id='staff-card'>
                <Card.Body id='staff-card-flex-container'>
                    <img id='staff-image' className='img-fluid' src={StaffImage3} alt='teen and tween librarian'></img>
                    <div>
                        <Card.Title id='card-title'>Teen/Tween Library</Card.Title>
                        <Card.Subtitle id='card-subtitle' className="mb-2 text-muted">Seth Smith</Card.Subtitle>
                        <Card.Text id='bold-card-text'>
                            Phone:
                        </Card.Text>
                        <Card.Text id='card-text'>
                            (555) 555-5553
                        </Card.Text>
                        <Card.Text id='bold-card-text'>
                            Email:
                        </Card.Text>
                        <Card.Text id='card-text'>
                            ssmith@page.com
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
            <Card id='staff-card'>
                <Card.Body id='staff-card-flex-container'>
                    <img id='staff-image' className='img-fluid' src={StaffImage2} alt='children librarian'></img>
                    <div>
                        <Card.Title id='card-title'>Child Library</Card.Title>
                        <Card.Subtitle id='card-subtitle' className="mb-2 text-muted">Samantha Cart</Card.Subtitle>
                        <Card.Text id='bold-card-text'>
                            Phone:
                        </Card.Text>
                        <Card.Text id='card-text'>
                            (555) 555-5554
                        </Card.Text>
                        <Card.Text id='bold-card-text'>
                            Email:
                        </Card.Text>
                        <Card.Text id='card-text'>
                            scart@page.com
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
}