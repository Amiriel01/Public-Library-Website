import { useState, FormEvent, ChangeEvent } from "react";
import Form from 'react-bootstrap/Form';
import MyButton from "./MyButton";
import axios from "axios";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomepageLink from "./HomepageLink";
import Alert from 'react-bootstrap/Alert';

export default function CreateEventForm() {

    const [image, setImage] = useState<File | null>(null);
    const [imageURL, setImageURL] = useState(null);
    const [alertImageShow, setAlertImageShow] = useState(false);
    const [alertFormShow, setAlertFormShow] = useState(false);

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setImage(event.target.files[0]);
        } 
    };

    async function submitImage(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData();
        formData.append("image", image as Blob)

        try {
            const result = await axios.post("http://localhost:3000/upload-image", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            setImageURL(result.data)
            setAlertImageShow(true)
        } catch (err) {

        }
    }

    const initialValues = {
        title: "",
        program_type: "",
        age_group: "",
        date: "",
        time: "",
        description1: "",
        description2: "",
        imageURL: "",
    }

    const [eventForm, setEventForm] = useState(initialValues);

    const handleChange = (event: FormEvent) => {
        const { name, value } = event.target as any;
        setEventForm({
            ...eventForm,
            [name]: value
        })
    }

    async function formSubmit(event: FormEvent) {
        event.preventDefault();

        const eventFormData = {
            title: eventForm.title,
            program_type: eventForm.program_type,
            age_group: eventForm.age_group,
            date: eventForm.date,
            time: eventForm.time,
            description1: eventForm.description1,
            description2: eventForm.description2,
            imageURL: imageURL,
        }

        setEventForm(initialValues);

        await axios.post("http://localhost:3000/event/eventDetail", eventFormData).then((response) => {
            setAlertFormShow(true);
        })
    }

    return (
        <Row id="event-form-page-container">
            <HomepageLink />
            <Row>
                <Col>
                    <h1 id="event-form-title">
                        Create New Event
                    </h1>
                </Col>
            </Row>
            <Form onSubmit={submitImage} id="event-form-">
                <Form.Group className="mb-3" >
                    <Form.Control
                        type="file"
                        accept="image/*"
                        onChange={onInputChange}
                    />
                </Form.Group>
                <div>
                    <MyButton className='event-form-submit-button' title='Select Image'></MyButton>
                </div>
            </Form>
            <Row>
                <Col>
                    <Alert hidden={!alertImageShow} variant={"success"}>
                        Image selected. Complete the form to post the event.
                    </Alert>
                </Col>
            </Row>
            <Form onSubmit={formSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label id="event-form-color">Event Name:</Form.Label>
                    <Form.Control
                        id="event-input"
                        required
                        type="text"
                        name='title'
                        placeholder="Type the event name here."
                        value={eventForm.title}
                        onChange={handleChange} />
                </Form.Group>
                <Form.Select aria-label="Default select example"
                    id="event-form-select"
                    required
                    value={eventForm.program_type}
                    name='program_type'
                    onChange={handleChange}
                >
                    <option>Program Type:</option>
                    <option value="Social">Social</option>
                    <option value="Charity">Charity</option>
                    <option value="Sale">Sale</option>
                    <option value="Reading">Reading</option>
                    <option value="Presentation">Presentation</option>
                    <option value="Other">Other</option>
                </Form.Select>
                <Form.Select aria-label="Default select example"
                    required
                    value={eventForm.age_group}
                    name='age_group'
                    onChange={handleChange}
                >
                    <option>Age Group:</option>
                    <option value="All Ages">All Ages</option>
                    <option value="Adults">Adults</option>
                    <option value="Teens and Tweens">Teens and Tweens</option>
                    <option value="Children">Children</option>
                </Form.Select>
                <Form.Group className="mb-3">
                    <Form.Label id="event-form-color">Date:</Form.Label>
                    <Form.Control
                        id="event-input"
                        required
                        type="text"
                        name='date'
                        placeholder="Type the date here."
                        value={eventForm.date}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label id="event-form-color">Time:</Form.Label>
                    <Form.Control
                        id="event-input"
                        required
                        type="text"
                        name='time'
                        placeholder="Type the times here."
                        value={eventForm.time}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label id="event-form-color">Description 1:</Form.Label>
                    <Form.Control
                        id="event-input"
                        required
                        as="textarea"
                        rows={3}
                        name='description1'
                        value={eventForm.description1}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label id="event-form-color">Description 2:</Form.Label>
                    <Form.Control
                        id="event-input"
                        required
                        as="textarea"
                        rows={3}
                        name='description2'
                        value={eventForm.description2}
                        onChange={handleChange}
                    />
                </Form.Group>
                <div>
                    <MyButton className='event-form-submit-button' title='Submit New Event'></MyButton>
                </div>
            </Form>
            <Row>
                <Col>
                    <Alert hidden={!alertFormShow} variant={"success"}>
                        Event submitted.
                    </Alert>
                </Col>
            </Row>
        </Row>

    )

}