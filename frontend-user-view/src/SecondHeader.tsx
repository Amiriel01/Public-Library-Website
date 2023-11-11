import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

export default function SecondHeader() {

    function MyButton({ title }: { title: string }) {
        return (
            <button id="submit-search-button">{title}</button>
        )
    }

    return (
        <>
            <Row id='second-header-container'>
                <Row >
                    <Col id='search-container'>
                        <form id='search-form-container'>
                            <p id='search-text'>
                                Search:
                            </p>
                            <div>
                                <input id='search-input'
                                    type='text'
                                    placeholder='Title, Author, or Genre'>
                                </input>
                                <MyButton title='Submit' />
                            </div>
                        </form>
                    </Col>
                </Row>
            </Row>
        </>
    )
}