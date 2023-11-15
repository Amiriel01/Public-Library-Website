import { BookAPIProps } from "./BookAPIProps";
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import HomepageLink from "./HomepageLink";

export default function BookSearchResultsPage({ bookData, setBookData }: BookAPIProps) {

    return (
        <>
            <div id="book-search-result-page-container">
                <HomepageLink />
                <Row>
                    <Col>
                        <h1 id="book-search-result-page-title">
                            Top 10 Results
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 id="book-search-result-page-directions">
                            If you do not see the book you were looking for, try a more specific search.
                        </h2>
                    </Col>
                </Row>
                {bookData.items.map((item) => {
                    return <div key={item.volumeInfo.infoLink}>
                        <Card id="book-info-card-container">
                            <Card.Body id="book-info-card">
                                <div id='book-image'>
                                    <img src={item.volumeInfo.imageLinks.thumbnail}></img>
                                </div>
                                <div>
                                    <Card.Title id="book-title">{item.volumeInfo.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{item.volumeInfo.authors}</Card.Subtitle>
                                    <Card.Text>
                                        {item.volumeInfo.description}
                                    </Card.Text>
                                    <Card.Text id="book-question">Want to know more about this book? </Card.Text>
                                    <Card.Link target="_blank" id="book-info-link" href={item.volumeInfo.infoLink}>Click here to view the Google Books book profile!</Card.Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                })}
            </div >
        </>
    )

}