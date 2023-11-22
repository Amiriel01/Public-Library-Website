import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomepageLink from './HomepageLink';
import Card from 'react-bootstrap/Card';
import MaryShelley from "./images/maryshelley.png";
import ArthurConanDoyle from "./images/arthurconandoyle.png";
import AgathaChristie from "./images/agathachristie.png";
import CSLewis from "./images/cslewis.png";

export default function AuthorEvents() {
    return (
        <Row id='visiting-author-page-container'>
            <HomepageLink />
            <Row>
                <Col>
                    <h1 id='page-titles'>
                        Author Events
                    </h1>
                </Col>
            </Row>
            <Card id="author-event-card-container">
                <Card.Body id="author-event-info-card">
                    <div id='author-name-image'>
                        <img src={ArthurConanDoyle} id='author-image'></img>
                        <Card.Title>
                            <div id="author-title">
                                <p>
                                    Arthur Conan Doyle
                                </p>
                            </div>
                        </Card.Title>
                    </div>
                    <div>
                        <Card.Text>
                            <div id='bold-flex-container'>
                                <p id='bold-text'>Date:</p>
                                <p>To Be Announced</p>
                            </div>
                        </Card.Text>
                        <Card.Text>
                            <div id='bold-flex-container'>
                                <p id='bold-text'>Time:</p>
                                <p>To Be Announced</p>
                            </div>
                        </Card.Text>
                        <Card.Text>
                            <div id='bold-flex-container'>
                                <p id='bold-text'>Event:</p>
                                <p>This exciting event will focus on the author Arthur Conan Doyle and his over 300 works of fiction. Hear about the author's life during this presentation. Time will be allotted for questions & answers.</p>
                            </div>
                        </Card.Text>
                        <Card.Text id="book-question">Want to know more about this author? </Card.Text>
                        <Card.Link target="_blank" id="book-info-link" href="https://www.arthur-conan-doyle.com/index.php/Main_Page">Click here to visit the The Arthur Conan Doyle Encyclopedia website.</Card.Link>
                    </div>
                </Card.Body>
            </Card>
            <Card id="author-event-card-container">
                <Card.Body id="author-event-info-card">
                    <div id='author-name-image'>
                        <img src={AgathaChristie} id='author-image'></img>
                        <Card.Title>
                            <div id="author-title">
                                <p>Agatha Christie</p>
                            </div>
                        </Card.Title>
                    </div>
                    <div>
                        <Card.Text>
                            <div id='bold-flex-container'>
                                <p id='bold-text'>Date:</p>
                                <p>To Be Announced</p>
                            </div>
                        </Card.Text>
                        <Card.Text>
                            <div id='bold-flex-container'>
                                <p id='bold-text'>Time:</p>
                                <p>To Be Announced</p>
                            </div>
                        </Card.Text>
                        <Card.Text>
                            <div id='bold-flex-container'>
                                <p id='bold-text'>Event:</p>
                                <p>This exciting event will focus on the author Agatha Christie and her seventy-five novels. Hear about the author's life during this presentation. Time will be allotted for questions & answers.</p>
                            </div>
                        </Card.Text>
                        <Card.Text id="book-question">Want to know more about this author? </Card.Text>
                        <Card.Link target="_blank" id="book-info-link" href="https://www.agathachristie.com/">Click here to visit The Home of Agatha Christie webpage.</Card.Link>
                    </div>
                </Card.Body>
            </Card>
            <Card id="author-event-card-container">
                <Card.Body id="author-event-info-card">
                    <div id='author-name-image'>
                        <img src={CSLewis} id='author-image'></img>
                        <Card.Title>
                            <div id="author-title">
                                <p>CS Lewis</p>
                            </div>
                        </Card.Title>
                    </div>
                    <div>
                        <Card.Text>
                            <div id='bold-flex-container'>
                                <p id='bold-text'>Date:</p>
                                <p>To Be Announced</p>
                            </div>
                        </Card.Text>
                        <Card.Text>
                            <div id='bold-flex-container'>
                                <p id='bold-text'>Time:</p>
                                <p>To Be Announced</p>
                            </div>
                        </Card.Text>
                        <Card.Text>
                            <div id='bold-flex-container'>
                                <p id='bold-text'>Event:</p>
                                <p>This exciting event will focus on the author CS Lewis and his almost 40 books. Hear about the author's life during this presentation. Time will be allotted for questions & answers.</p>
                            </div>
                        </Card.Text>
                        <Card.Text id="book-question">Want to know more about this author? </Card.Text>
                        <Card.Link target="_blank" id="book-info-link" href="https://www.cslewis.com/us/">Click here to visit the official CS Lewis webpage.</Card.Link>
                    </div>
                </Card.Body>
            </Card>
            <Card id="author-event-card-container">
                <Card.Body id="author-event-info-card">
                    <div id='author-name-image'>
                        <img src={MaryShelley} id='author-image'></img>
                        <Card.Title>
                            <div id="author-title">
                                <p>Mary Shelley</p>
                            </div>
                        </Card.Title>
                    </div>
                    <div>
                        <Card.Text>
                            <div id='bold-flex-container'>
                                <p id='bold-text'>Date:</p>
                                <p>To Be Announced</p>
                            </div>
                        </Card.Text>
                        <Card.Text>
                            <div id='bold-flex-container'>
                                <p id='bold-text'>Time:</p>
                                <p>To Be Announced</p>
                            </div>
                        </Card.Text>
                        <Card.Text>
                            <div id='bold-flex-container'>
                                <p id='bold-text'>Event:</p>
                                <p>This exciting event will focus on the author Mary Shelley and her eight published works. Hear about the author's life during this presentation. Time will be allotted for questions & answers.</p>
                            </div>
                        </Card.Text>
                        <Card.Text id="book-question">Want to know more about this author? </Card.Text>
                        <Card.Link target="_blank" id="book-info-link" href="https://www.biography.com/authors-writers/mary-shelley">Click here to visit the author's Biography page.</Card.Link>
                    </div>
                </Card.Body>
            </Card>
        </Row>
    )
}