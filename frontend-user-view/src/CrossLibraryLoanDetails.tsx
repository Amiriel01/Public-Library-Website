import axios from "axios";
import { useEffect, useState, FormEvent } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import HomepageLink from './HomepageLink';
import Form from 'react-bootstrap/Form';
import MyButton from "./MyButton";

export default function CrossLibraryLoanDetails() {

    const { pathname } = useLocation();
    const { id } = useParams();
    const [crossLibraryLoanDetails, setCrossLibraryLoanDetails] = useState({
        title: '',
        author: '',
        material_type: '',
        order_notes: '',
        name: '',
        phone: '',
        email: '',
        library_card_number: '',
    });

    const [crossLibraryLoanDetailsUpdate, setCrossLibraryLoanDetailsUpdate] = useState({
        order_notes: '',
    });

    const [ordered, setOrdered] = useState<boolean>(false);
    const [isCheckedCompleted, setIsCheckedCompleted] = useState(false);

    async function getCrossLibraryLoanDetails() {
        await axios.get(`http://localhost:3000/crossLibrary/crossLibraryForm/${id}`).then((response) => {
            console.log(response.data);
            setCrossLibraryLoanDetails(response.data);
        })
    }

    useEffect(() => {
        getCrossLibraryLoanDetails();
    }, []);

    useEffect(() => {
        const formData = {
            order_notes: crossLibraryLoanDetails?.order_notes ?? ""
        }
        setCrossLibraryLoanDetailsUpdate(formData)
    }, [crossLibraryLoanDetails])

    const handleChangeCompleted = () => {
        setOrdered(!ordered);
        setIsCheckedCompleted(true);
    };

    const handleChange = (event: FormEvent) => {
        const { name, value } = event.target as any;
        setCrossLibraryLoanDetailsUpdate({
            ...crossLibraryLoanDetailsUpdate,
            [name]: value,
        })
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        const crossLibraryDataUpdate = {
            title: crossLibraryLoanDetails.title,
            author: crossLibraryLoanDetails.author,
            material_type: crossLibraryLoanDetails.material_type,
            name: crossLibraryLoanDetails.name,
            phone: crossLibraryLoanDetails.phone,
            email: crossLibraryLoanDetails.email,
            library_card_number: crossLibraryLoanDetails.library_card_number,
            order_notes: crossLibraryLoanDetailsUpdate.order_notes,
            ordered: ordered,
        }

        axios.put(`http://localhost:3000/crossLibrary/crossLibraryForm/${id}`, crossLibraryDataUpdate).then((response) => {
            console.log(crossLibraryDataUpdate)
            console.log(response.status, response.data)
        })
    }

    const handleDeleteCrossLibraryRequest = () => {

        axios.delete(`http://localhost:3000/crossLibrary/crossLibraryForm/${id}`);
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    return (
        <Row id="contact-request-container-page">
            <HomepageLink />
            <Card id='contact-request-container'>
                <Card.Body id='card-flex-container'>
                    <div>
                        <Card.Text>
                            <div id='bold-flex-container'>
                                <p id='bold-text'>Title:</p>
                                <p>{crossLibraryLoanDetails.title}</p>
                            </div>
                        </Card.Text>
                        <Card.Text>
                            <div id='bold-flex-container'>
                                <p id='bold-text'>Author:</p>
                                <p>{crossLibraryLoanDetails.author}</p>
                            </div>
                        </Card.Text>
                        <Card.Text>
                            <div id='bold-flex-container'>
                                <p id='bold-text'>Material Type:</p>
                                <p>{crossLibraryLoanDetails.material_type}</p>
                            </div>
                        </Card.Text>
                        <Card.Text>
                            <div id='bold-flex-container'>
                                <p id='bold-text'>Library Card Number:</p>
                                <p>{crossLibraryLoanDetails.library_card_number}</p>
                            </div>
                        </Card.Text>
                    </div>
                    <div>
                        <Card.Text>
                            <div id='bold-flex-container'>
                                <p id='bold-text'>Name:</p>
                                <p>{crossLibraryLoanDetails.name}</p>
                            </div>
                        </Card.Text>
                        <Card.Text>
                            <div id='bold-flex-container'>
                                <p id='bold-text'>Phone:</p>
                                <p>{crossLibraryLoanDetails.phone}</p>
                            </div>
                        </Card.Text>
                        <Card.Text>
                            <div id='bold-flex-container'>
                                <p id='bold-text'>Email:</p>
                                <p>{crossLibraryLoanDetails.email}</p>
                            </div>
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Order Notes</Form.Label>
                    <Form.Control
                        type="text"
                        name="order_notes"
                        placeholder="Type notes here."
                        // defaultValue={crossLibraryLoanDetails.order_notes}
                        value={crossLibraryLoanDetailsUpdate.order_notes}
                        onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Check
                        inline
                        label="Ordered"
                        type='checkbox'
                        id={`inline-checkbox-1`}
                        checked={ordered}
                        onChange={handleChangeCompleted}
                    />
                </Form.Group>
                {/* <Link to='/AllContactRequests'> */}
                <MyButton id="contact-request-update-button" title="Update Cross Library Loan Request"></MyButton>
                {/* </Link> */}
                <Link to='/AllCrossLibraryLoanRequests'>
                    <MyButton onClick={handleDeleteCrossLibraryRequest} id="contact-request-update-button" title="Delete Cross Library Loan Request"></MyButton>
                </Link>
                <Link to='/AllCrossLibraryLoanRequests'>
                    <MyButton id="contact-request-update-button" title="View All Cross Library Loan Requests"></MyButton>
                </Link>
            </Form>
        </Row>
    )
}