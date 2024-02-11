import axios from "axios";
import { useEffect, useState, FormEvent } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
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
        await axios.get(`crossLibrary/crossLibraryForm/${id}`).then((response) => {
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

        axios.put(`crossLibrary/crossLibraryForm/${id}`, crossLibraryDataUpdate).then((response) => {

        })
    }

    const handleDeleteCrossLibraryRequest = () => {

        axios.delete(`crossLibrary/crossLibraryForm/${id}`);
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    return (
        <Row id="contact-request-container-page">
            <HomepageLink />
            <Card id='contact-request-container'>
                <Card.Body>
                    <div className='bold-flex-container'>
                        <Card.Text id='bold-text'>
                            Title:
                        </Card.Text>
                        <Card.Text>
                            {crossLibraryLoanDetails.title}
                        </Card.Text>
                    </div>
                    <div className='bold-flex-container'>
                        <Card.Text id='bold-text'>
                            Author:
                        </Card.Text>
                        <Card.Text>
                            {crossLibraryLoanDetails.author}
                        </Card.Text>
                    </div>
                    <div className='bold-flex-container'>
                        <Card.Text id='bold-text'>
                            Material Type:
                        </Card.Text>
                        <Card.Text>
                            {crossLibraryLoanDetails.material_type}
                        </Card.Text>
                    </div>
                    <div className='bold-flex-container'>
                        <Card.Text id='bold-text'>
                            Order Notes:
                        </Card.Text>
                        <Card.Text>
                            {crossLibraryLoanDetails.order_notes}
                        </Card.Text>
                    </div>
                    <div className='bold-flex-container'>
                        <Card.Text id='bold-text'>
                            Name:
                        </Card.Text>
                        <Card.Text>
                            {crossLibraryLoanDetails.name}
                        </Card.Text>
                    </div>
                    <div className='bold-flex-container'>
                        <Card.Text id='bold-text'>
                            Phone Number:
                        </Card.Text>
                        <Card.Text>
                            {crossLibraryLoanDetails.phone}
                        </Card.Text>
                    </div>
                    <div className='bold-flex-container'>
                        <Card.Text id='bold-text'>
                            Email:
                        </Card.Text>
                        <Card.Text id="all-contact-email">
                            {crossLibraryLoanDetails.email}
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Order Notes</Form.Label>
                    <Form.Control
                        type="text"
                        name="order_notes"
                        placeholder="Type notes here."
                        value={crossLibraryLoanDetailsUpdate.order_notes}
                        onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check
                        inline
                        label="Ordered"
                        type='checkbox'
                        id={`inline-checkbox-1`}
                        checked={ordered}
                        onChange={handleChangeCompleted}
                    />
                </Form.Group>
                <MyButton className="contact-request-update-button" title="Update Cross Library Loan Request"></MyButton>
                <Link to='/AllCrossLibraryLoanRequests'>
                    <MyButton onClick={handleDeleteCrossLibraryRequest} className="contact-request-update-button" title="Delete Cross Library Loan Request"></MyButton>
                </Link>
                <Link to='/AllCrossLibraryLoanRequests'>
                    <MyButton className="contact-request-update-button" title="View All Cross Library Loan Requests"></MyButton>
                </Link>
            </Form>
        </Row>
    )
}