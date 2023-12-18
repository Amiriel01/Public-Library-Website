import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyButton from './MyButton';
import axios from 'axios';
import { FormEvent, useState } from 'react';
import { BookAPIProps } from './BookAPIProps';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

export default function SecondHeader({ bookData, setBookData }: BookAPIProps) {

    const [searchInput, setSearchInput] = useState<string>("");
    const nav = useNavigate();

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchInput}`).then((response) => {
            // console.log(response)
            setBookData(response.data)
            setSearchInput('')
            nav("/BookSearchResultsPage")
        })
    }

    return (
        <>
            <Row id='second-header-container'>
                {/* <Row > */}
                    {/* <Col id='search-container'> */}
                    <Form  onSubmit={handleSubmit}>
                        <Form.Group id='search-container' className="mb-3">
                            <Form.Label id='search-title'>Search:</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name='search-text'
                                placeholder="Title or Author"
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                                id='search-input' />
                            <div>
                                <MyButton id='submit-search-button' title='Submit'></MyButton>
                            </div>
                        </Form.Group>
                    </Form>
                    {/* <form id='search-form-container' onSubmit={handleSubmit}>
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
                        </form> */}
                    {/* </Col> */}
                </Row>
            {/* </Row> */}
        </>
    )
}