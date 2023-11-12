import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyButton from './MyButton';
import axios from 'axios';
import { useState } from 'react';

export default function SecondHeader() {

    const [searchInput, setSearchInput] = useState("");

    async function handleSubmit() {
        event.preventDefault();
        await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchInput}`).then((response) => {
            console.log(response.data)
            setSearchInput('')
        })
    }
    

    return (
        <>
            <Row id='second-header-container'>
                <Row >
                    <Col id='search-container'>
                        <form id='search-form-container' onSubmit={handleSubmit}>
                            <p id='search-text'>
                                Search:
                            </p>
                            <div>
                                <input id='search-input'
                                    type='text'
                                    name='search-text'
                                    value={searchInput}
                                    placeholder='Title, Author, or Genre'
                                    onChange={(e) => setSearchInput(e.target.value)}>
                                </input>
                                <MyButton id='submit-search-button' title='Submit'/>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Row>
        </>
    )
}