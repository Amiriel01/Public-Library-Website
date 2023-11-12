import { BookAPIProps } from "./BookAPIProps";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function BookSearchResultsPage({ bookData, setBookData }: BookAPIProps) {

    return (
        <>
            <div>
                {bookData.items.map((item) => {
                    return <div key={item.volumeInfo.infoLink}>
                        <Row id="book-info-card-container">
                            <Row id="book-info-card">
                                <div id="book-image-section">
                                    <Col id="book-image">
                                        <img src={item.volumeInfo.imageLinks.thumbnail}></img>
                                    </Col>
                                </div>
                                <div id="book-info-section">
                                <Col id="book-title">
                                    {item.volumeInfo.title}
                                </Col>
                                <Col id="book-author">
                                    {item.volumeInfo.authors}
                                </Col>
                                <Col id="book-description">
                                    {item.volumeInfo.description}
                                </Col>
                                <Col id="book-link">
                                   <a target="_blank" href={item.volumeInfo.infoLink}>Want to know more about this book? Click Here!</a>
                                </Col>
                                </div>
                            </Row>
                        </Row>
                    </div>
                })}
            </div >
        </>
    )

}