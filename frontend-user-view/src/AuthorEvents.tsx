import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomepageLink from './HomepageLink';
import FirstFooter from './FirstFooter';
import Card from 'react-bootstrap/Card';
import MaryShelley from "./images/maryshelley.png";
import ArthurConanDoyle from "./images/arthurconandoyle.png";
import AgathaChristie from "./images/agathachristie.png";
import CSLewis from "./images/cslewis.png";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function AuthorEvents() {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    return (
        <>
            <Row id='visiting-author-page-container'>
                <HomepageLink />
                <Row>
                    <Col id='h1-page-titles'>
                        Author Events
                    </Col>
                </Row>
                <Card id="author-event-card-container">
                    <Card.Body id="author-event-info-card">
                        <div id='author-name-image'>
                            <img src={ArthurConanDoyle} id='author-image'></img>
                            <Card.Title id="author-title">
                                Arthur Conan Doyle
                            </Card.Title>
                        </div>
                        <div>
                            <div id='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Date:
                                </Card.Text>
                                <Card.Text>
                                    December 9th
                                </Card.Text>
                            </div>
                            <div id='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Time:
                                </Card.Text>
                                <Card.Text>
                                    6:00pm-7:30pm
                                </Card.Text>
                            </div>
                            <div id='bold-flex-container'>
                                <Card.Text id="bold-text">
                                    Event:
                                </Card.Text>
                                <Card.Text>
                                    This exciting event will focus on the author Arthur Conan Doyle and his over 300 works of fiction. Hear about the author's life during this presentation. Time will be allotted for questions & answers.
                                </Card.Text>
                            </div>
                            <div id='margin-top'>
                                <Card.Text id="book-question">Want to know more about this author? </Card.Text>
                                <Card.Link target="_blank" id="book-info-link" href="https://www.arthur-conan-doyle.com/index.php/Main_Page">Click here to visit the The Arthur Conan Doyle Encyclopedia website.</Card.Link>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <Card id="author-event-card-container">
                    <Card.Body id="author-event-info-card">
                        <div id='author-name-image'>
                            <img src={AgathaChristie} id='author-image'></img>
                            <Card.Title id="author-title">
                                Agatha Christie
                            </Card.Title>
                        </div>
                        <div>
                            <div id='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Date:
                                </Card.Text>
                                <Card.Text>
                                    To Be Announced
                                </Card.Text>
                            </div>
                            <div id='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Time:
                                </Card.Text>
                                <Card.Text>
                                    To Be Announced
                                </Card.Text>
                            </div>
                            <div id='bold-flex-container'>
                                <Card.Text id="bold-text">
                                    Event:
                                </Card.Text>
                                <Card.Text>
                                    This exciting event will focus on the author Agatha Christie and her seventy-five novels. Hear about the author's life during this presentation. Time will be allotted for questions & answers.
                                </Card.Text>
                            </div>
                            <div id='margin-top'>
                                <Card.Text id="book-question">Want to know more about this author? </Card.Text>
                                <Card.Link target="_blank" id="book-info-link" href="https://www.agathachristie.com/">Click here to visit The Home of Agatha Christie webpage.</Card.Link>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <Card id="author-event-card-container">
                    <Card.Body id="author-event-info-card">
                        <div id='author-name-image'>
                            <img src={CSLewis} id='author-image'></img>
                            <Card.Title id="author-title">
                                CS Lewis
                            </Card.Title>
                        </div>
                        <div>
                            <div id='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Date:
                                </Card.Text>
                                <Card.Text>
                                    To Be Announced
                                </Card.Text>
                            </div>
                            <div id='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Time:
                                </Card.Text>
                                <Card.Text>
                                    To Be Announced
                                </Card.Text>
                            </div>
                            <div id='bold-flex-container'>
                                <Card.Text id="bold-text">
                                    Event:
                                </Card.Text>
                                <Card.Text>
                                    This exciting event will focus on the author CS Lewis and his almost 40 books. Hear about the author's life during this presentation. Time will be allotted for questions & answers.
                                </Card.Text>
                            </div>
                            <div id='margin-top'>
                                <Card.Text id="book-question">Want to know more about this author? </Card.Text>
                                <Card.Link target="_blank" id="book-info-link" href="https://www.cslewis.com/us/">Click here to visit the official CS Lewis webpage.</Card.Link>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <Card id="author-event-card-container">
                    <Card.Body id="author-event-info-card">
                        <div id='author-name-image'>
                            <img src={MaryShelley} id='author-image'></img>
                            <Card.Title id="author-title">
                            Mary Shelley
                            </Card.Title>
                        </div>
                        <div>
                            <div id='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Date:
                                </Card.Text>
                                <Card.Text>
                                    To Be Announced
                                </Card.Text>
                            </div>
                            <div id='bold-flex-container'>
                                <Card.Text id='bold-text'>
                                    Time:
                                </Card.Text>
                                <Card.Text>
                                    To Be Announced
                                </Card.Text>
                            </div>
                            <div id='bold-flex-container'>
                                <Card.Text id="bold-text">
                                    Event:
                                </Card.Text>
                                <Card.Text>
                                This exciting event will focus on the author Mary Shelley and her eight published works. Hear about the author's life during this presentation. Time will be allotted for questions & answers.
                                </Card.Text>
                            </div>
                            <div id='margin-top'>
                                <Card.Text id="book-question">Want to know more about this author? </Card.Text>
                                <Card.Link target="_blank" id="book-info-link" href="https://www.biography.com/authors-writers/mary-shelley">Click here to visit the author's Biography page.</Card.Link>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Row >
            <FirstFooter />
        </>
    )
}