import axios from "axios";
import { useEffect, useState, FormEvent } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import HomepageLink from './HomepageLink';
import Form from 'react-bootstrap/Form';
import MyButton from "./MyButton";

export default function LibraryCardRequestDetails() {

    const { pathname } = useLocation();
    const { id } = useParams();
    const [libraryCardRequestDetails, setLibraryCardRequestDetails] = useState({
        name: '',
        phone: '',
        email: '',
        additional_information: '',
    });

    const [libraryCardRequestDetailsUpdate, setLibraryCardRequestDetailsUpdate] = useState({
        name: '',
        phone: '',
        email: '',
        additional_information: '',
    });

    const [issued, setIssued] = useState<boolean>(false);
    const [isCheckedIssued, setIsIssuedCompleted] = useState(false);

    async function getLibraryCardRequestDetails() {
        await axios.get(`http://localhost:3000/libraryCard/libraryCardSubmission/${id}`).then((response) => {
            console.log(response.data);
            setLibraryCardRequestDetails(response.data);
        })
    }

    useEffect(() => {
        getLibraryCardRequestDetails();
    }, []);

    useEffect(() => {
        const formData = {
            name: libraryCardRequestDetails?.name ?? '',
            phone: libraryCardRequestDetails?.phone ?? '',
            email: libraryCardRequestDetails?.email ?? '',
            additional_information: libraryCardRequestDetails?.additional_information ?? '',
        }

        setLibraryCardRequestDetailsUpdate(formData)
    }, [libraryCardRequestDetails])

    const handleChangeCompleted = () => {
        setIssued(!issued);
        setIsIssuedCompleted(true);
    };

    const handleChange = (event: FormEvent) => {
        const { name, value } = event.target as any;
        setLibraryCardRequestDetailsUpdate({
            ...libraryCardRequestDetailsUpdate,
            [name]: value,
        })
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        const libraryCardDataUpdate = {
            name: libraryCardRequestDetailsUpdate.name,
            phone: libraryCardRequestDetailsUpdate.phone,
            email: libraryCardRequestDetailsUpdate.email,
            additional_information: libraryCardRequestDetailsUpdate.additional_information,
            issued: issued,
        }

        axios.put(`http://localhost:3000/libraryCard/libraryCardSubmission/${id}`, libraryCardDataUpdate).then((response) => {
            console.log(libraryCardDataUpdate)
            console.log(response.status, response.data)
        })
    }

    const handleDeleteLibraryCardRequest = () => {

        axios.delete(`http://localhost:3000/libraryCard/libraryCardSubmission/${id}`);
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    return (
        <Row id="library-card-request-container-page">
            <HomepageLink />
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        defaultValue={libraryCardRequestDetails.name}
                        value={libraryCardRequestDetailsUpdate.name}
                        onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Phone: </Form.Label>
                    <Form.Control
                        type="text"
                        name="phone"
                        defaultValue={libraryCardRequestDetails.phone}
                        value={libraryCardRequestDetailsUpdate.phone}
                        onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                        type="text"
                        name="email"
                        defaultValue={libraryCardRequestDetails.email}
                        value={libraryCardRequestDetailsUpdate.email}
                        onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Additional Information:</Form.Label>
                    <Form.Control
                        type="text"
                        name="additional_information"
                        placeholder="Type additional information here."
                        defaultValue={libraryCardRequestDetails.additional_information}
                        value={libraryCardRequestDetailsUpdate.additional_information}
                        onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check
                        inline
                        label="Issued"
                        type='checkbox'
                        id={`inline-checkbox-1`}
                        checked={issued}
                        onChange={handleChangeCompleted}
                    />
                </Form.Group>
                {/* <Link to='/AllLibraryCardRequests'> */}
                    <MyButton id="library-card-request-update-button" title="Update Library Card Request"></MyButton>
                {/* </Link> */}
                <Link to='/AllLibraryCardRequests'>
                    <MyButton onClick={handleDeleteLibraryCardRequest} id="library-card-request-update-button" title="Delete Library Card Request"></MyButton>
                </Link>
                <Link to='/AllLibraryCardRequests'>
                    <MyButton id="library-card-request-update-button" title="View All Library Card Requests"></MyButton>
                </Link>
            </Form>
        </Row>
    )
}