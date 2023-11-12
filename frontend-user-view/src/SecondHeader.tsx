import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyButton from './MyButton';
import axios from 'axios';
import { FormEvent, useState } from 'react';
import { BookAPIProps } from './BookAPIProps';
import { useNavigate } from 'react-router-dom';

export default function SecondHeader({ bookData, setBookData }: BookAPIProps) {

    const [searchInput, setSearchInput] = useState<string>("");
    const nav = useNavigate();

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchInput}`).then((response) => {
            console.log(response)
            setBookData(response.data)
            setSearchInput('')
            nav("/SearchBookPage")
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
                                    placeholder='Title or Author'
                                    onChange={(e) => setSearchInput(e.target.value)}>
                                </input>

                                <MyButton id='submit-search-button' title='Submit' />

                            </div>
                        </form>
                    </Col>
                </Row>
            </Row>
        </>
    )
}