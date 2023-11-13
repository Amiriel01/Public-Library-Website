import Form from 'react-bootstrap/Form';
import MyButton from './MyButton';
import axios from 'axios';

export default function ContactForm() {

    async function handleSubmit(){
        
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Full Name:</Form.Label>
                    <Form.Control type="text" placeholder="Type your full name here." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Phone Number:</Form.Label>
                    <Form.Control type="number" placeholder="Type your phone number here." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Select aria-label="Default select example">
                    <option>How can we help?</option>
                    <option value="Questions about library card">Questions about library card</option>
                    <option value="Quesitons about events">Quesitons about events</option>
                    <option value="Questions about programs">Questions about programs</option>
                    <option value="Questions about donations">Questions about donations</option>
                    <option value="Questions about volunteer opportunities<">Questions about volunteer opportunities</option>
                    <option value="Issues with the website">Issues with the website</option>
                    <option value="Other Questions">Other Questions</option>
                </Form.Select>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message:</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Text className="text-muted">
                    We'll never share your phone number or email with anyone else.
                </Form.Text>
                <div>
                    <MyButton id='contact-form-submit' title='Submit'></MyButton>
                </div>
            </Form>
        </>
    )
}