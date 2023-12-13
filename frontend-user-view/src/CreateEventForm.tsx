import { useState, FormEvent } from "react";
import Form from 'react-bootstrap/Form';
import MyButton from "./MyButton";
import axios from "axios";

export default function CreateEventForm() {

    const [imgFile, setImgFile] = useState();
    const [imgDescription, setImgDescription] = useState('');

    async function submitImage(event: FormEvent) {
        event.preventDefault();

        const imgFormData = new imgFormData()
        imgFormData.append("image", imgFile)
        imgFormData.append("description", imgDescription)

        const result = await axios.post('/event/images', imgFormData, { headers: {'Content-Type': 'multipart/form-data'}})
        console.log(result.data)
    }

    const initialValues = {
        title: "",
        program_type: "",
        age_group: "",
        date: "",
        time: "",
        description1: "",
        description2: "",
    }

    const [eventForm, setEventForm] = useState(initialValues);

    const handleChange = (event: FormEvent) => {
        const { name, value } = event.target as any;
        // console.log(event.target)
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
        }

        setEventForm(initialValues);

        await axios.post("http://localhost:3000/event/eventDetail", eventFormData).then((response) => {
            console.log(response.status, response.data)

        })
    }

    // async function handleSubmit() {
    //     submitImage();
    //     formSubmit();
    // }


    return (
        <>
            <Form onSubmit={submitImage}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        filename={imgFile}
                        type="file"
                        placeholder="Upload File Here"
                        onChange={e => setImgFile(e.target.files[0])}
                        accept="image/*"
                    />
                    <Form.Control
                        type="text"
                        onChange={e => setImgDescription(e.target.value)}
                    />
                </Form.Group>
                <MyButton id="image-upload-button" title="Submit">
                </MyButton>
            </Form>
            <Form onSubmit={formSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Event Name:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name='title'
                        placeholder="Type the event name here."
                        value={eventForm.title}
                        onChange={handleChange} />
                </Form.Group>
                <Form.Select aria-label="Default select example"
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
                    <option value="Adult">Adult</option>
                    <option value="Teen Tween">Teen Tween</option>
                    <option value="Children">Children</option>
                </Form.Select>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Date:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name='date'
                        placeholder="Type the date here."
                        value={eventForm.date}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Time:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name='time'
                        placeholder="Type the times here."
                        value={eventForm.time}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description 1:</Form.Label>
                    <Form.Control
                        required
                        as="textarea"
                        rows={3}
                        name='description1'
                        value={eventForm.description1}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description 2:</Form.Label>
                    <Form.Control
                        required
                        as="textarea"
                        rows={3}
                        name='description2'
                        value={eventForm.description2}
                        onChange={handleChange}
                    />
                </Form.Group>
                <div>
                    <MyButton id='contact-form-submit-button' title='Submit'></MyButton>
                </div>
            </Form>
        </>

    )

}