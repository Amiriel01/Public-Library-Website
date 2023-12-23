import axios from "axios";
import { useEffect, useState, FormEvent } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import HomepageLink from './HomepageLink';
import Form from 'react-bootstrap/Form';
import MyButton from "./MyButton";

export default function ContactRequestDetails() {

    const { pathname } = useLocation();
    const { id } = useParams();
    const [contactRequestDetail, setContactRequestDetail] = useState({
        name: '',
        phone: '',
        email: '',
        help: '',
        message: '',
        admin_notes: '',
    });

    const [contactRequestDetailUpdate, setContactRequestDetailUpdate] = useState({
        admin_notes: '',
    });

    const [completed, setCompleted] = useState<boolean>(false);
    const [isCheckedCompleted, setIsCheckedCompleted] = useState(false);

    async function getContactRequestDetails() {
        await axios.get(`http://localhost:3000/contact/contactForm/${id}`).then((response) => {
            console.log(response.data);
            setContactRequestDetail(response.data);
        })
    }

    useEffect(() => {
        getContactRequestDetails();
    }, []);

    useEffect(() => {
        const formData = {
            admin_notes: contactRequestDetail?.admin_notes ?? ""
        }
        setContactRequestDetailUpdate(formData)
    }, [contactRequestDetail])

    const handleChangeCompleted = () => {
        setCompleted(!completed);
        setIsCheckedCompleted(true);
    };

    const handleChange = (event: FormEvent) => {
        const { name, value } = event.target as any;
        setContactRequestDetailUpdate({
            ...contactRequestDetailUpdate,
            [name]: value,
        })
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        const contactDataUpdate = {
            name: contactRequestDetail.name,
            phone: contactRequestDetail.phone,
            email: contactRequestDetail.email,
            help: contactRequestDetail.help,
            message: contactRequestDetail.message,
            admin_notes: contactRequestDetailUpdate.admin_notes,
            completed: completed
        }

        axios.put(`http://localhost:3000/contact/contactForm/${id}`, contactDataUpdate).then((response) => {
            console.log(contactDataUpdate)
            console.log(response.status, response.data)
        })
    }

    const handleDeleteContactRequest = () => {

        axios.delete(`http://localhost:3000/contact/contactForm/${id}`);
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    return (
        <Row id="contact-request-container-page">
            <HomepageLink />
            <Card id='contact-request-container'>
                <Card.Body>
                    <Card.Text>
                        <div id='bold-flex-container'>
                            <p id='bold-text'>Name:</p>
                            <p>{contactRequestDetail.name}</p>
                        </div>
                    </Card.Text>
                    <Card.Text>
                        <div id='bold-flex-container'>
                            <p id='bold-text'>Phone:</p>
                            <p>{contactRequestDetail.phone}</p>
                        </div>
                    </Card.Text>
                    <Card.Text>
                        <div id='bold-flex-container'>
                            <p id='bold-text'>Email:</p>
                            <p>{contactRequestDetail.email}</p>
                        </div>
                    </Card.Text>
                    <Card.Text>
                        <div id='bold-flex-container'>
                            <p id='bold-text'>Help:</p>
                            <p>{contactRequestDetail.help}</p>
                        </div>
                    </Card.Text>
                    <Card.Text>
                        <div id='bold-flex-container'>
                            <p id='bold-text'>Message:</p>
                            <p>{contactRequestDetail.message}</p>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Admin Notes</Form.Label>
                    <Form.Control
                        type="text"
                        name="admin_notes"
                        placeholder="Type notes here."
                        defaultValue={contactRequestDetail.admin_notes}
                        value={contactRequestDetailUpdate.admin_notes}
                        onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check
                        inline
                        label="Completed"
                        type='checkbox'
                        id={`inline-checkbox-1`}
                        checked={isCheckedCompleted}
                        onChange={handleChangeCompleted}
                    />
                </Form.Group>
                {/* <Link to='/AllContactRequests'> */}
                    <MyButton id="contact-request-update-button" title="Update Contact Request"></MyButton>
                {/* </Link> */}
                <Link to='/AllContactRequests'>
                    <MyButton onClick={handleDeleteContactRequest} id="contact-request-update-button" title="Delete Contact Request"></MyButton>
                </Link>
                <Link to='/AllContactRequests'>
                    <MyButton id="contact-request-update-button" title="View All Contact Requests"></MyButton>
                </Link>
            </Form>
        </Row>
    )
}