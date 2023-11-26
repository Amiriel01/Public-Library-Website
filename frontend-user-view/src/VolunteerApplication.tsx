import Form from 'react-bootstrap/Form';
import MyButton from './MyButton';
import axios from 'axios';
import { FormEvent, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import HomepageLink from './HomepageLink';
import FirstFooter from './FirstFooter';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function VolunteerApplication() {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    const [monday, setMonday] = useState<Boolean>(false);
    const [tuesday, setTuesday] = useState<Boolean>(false);
    const [wednesday, setWednesday] = useState<Boolean>(false);
    const [thursday, setThursday] = useState<Boolean>(false);
    const [friday, setFriday] = useState<Boolean>(false);
    const [saturday, setSaturday] = useState<Boolean>(false);
    const [sunday, setSunday] = useState<Boolean>(false);

    const [morning, setMorning] = useState<Boolean>(false);
    const [afternoon, setAfternoon] = useState<Boolean>(false);
    const [evening, setEvening] = useState<Boolean>(false);

    const [isCheckedMonday, setIsCheckedMonday] = useState(false);
    const [isCheckedTuesday, setIsCheckedTuesday] = useState(false);
    const [isCheckedWednesday, setIsCheckedWednesday] = useState(false);
    const [isCheckedThursday, setIsCheckedThursday] = useState(false);
    const [isCheckedFriday, setIsCheckedFriday] = useState(false);
    const [isCheckedSaturday, setIsCheckedSaturday] = useState(false);
    const [isCheckedSunday, setIsCheckedSunday] = useState(false);
    const [isCheckedMorning, setIsCheckedMorning] = useState(false);
    const [isCheckedAfternoon, setIsCheckedAfternoon] = useState(false);
    const [isCheckedEvening, setIsCheckedEvening] = useState(false);

    const initialValues = {
        name: "",
        phone: "",
        address: "",
        email: "",
        education: "",
        work_experience: "",
        volunteer_experience: "",
    }

    const [volunteerApplicationInfo, setVolunteerApplicationInfo] = useState(initialValues);
    const [alertShow, setAlertShow] = useState(false)

    const handleChange = (event: FormEvent) => {
        const { name, value } = event.target as any;
        setVolunteerApplicationInfo({
            ...volunteerApplicationInfo,
            [name]: value
        })
    }

    const handleChangeMonday = () => {
        setMonday(!monday);
        setIsCheckedMonday(true);
    };

    const handleChangeTuesday = () => {
        setTuesday(!tuesday);
        setIsCheckedTuesday(true);
    };

    const handleChangeWednesday = () => {
        setWednesday(!wednesday);
        setIsCheckedWednesday(true);
    };

    const handleChangeThursday = () => {
        setThursday(!thursday);
        setIsCheckedThursday(true);
    };

    const handleChangeFriday = () => {
        setFriday(!friday);
        setIsCheckedFriday(true);
    };

    const handleChangeSaturday = () => {
        setSaturday(!saturday);
        setIsCheckedSaturday(true);
    };

    const handleChangeSunday = () => {
        setSunday(!sunday);
        setIsCheckedSunday(true);
    };

    const handleChangeMorning = () => {
        setMorning(!morning);
        setIsCheckedMorning(true);
    };

    const handleChangeAfternoon = () => {
        setAfternoon(!afternoon);
        setIsCheckedAfternoon(true);
    };

    const handleChangeEvening = () => {
        setEvening(!evening)
        setIsCheckedEvening(true);
    };

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const volunteerApplicationData = {
            name: volunteerApplicationInfo.name,
            phone: volunteerApplicationInfo.phone,
            email: volunteerApplicationInfo.email,
            education: volunteerApplicationInfo.education,
            work_experience: volunteerApplicationInfo.work_experience,
            volunteer_experience: volunteerApplicationInfo.volunteer_experience,
            monday: monday,
            tuesday: tuesday,
            wednesday: wednesday,
            thursday: thursday,
            friday: friday,
            saturday: saturday,
            sunday: sunday,
            morning: morning,
            afternoon: afternoon,
            evening: evening,
        }

        setVolunteerApplicationInfo(initialValues);

        await axios.post("http://localhost:3000/volunteer/volunteerForm", volunteerApplicationData).then((response) => {
            console.log(response.status, response.data);
            setIsCheckedMonday(false);
            setIsCheckedTuesday(false);
            setIsCheckedWednesday(false);
            setIsCheckedThursday(false);
            setIsCheckedFriday(false);
            setIsCheckedSaturday(false);
            setIsCheckedSunday(false);
            setIsCheckedMorning(false);
            setIsCheckedAfternoon(false);
            setIsCheckedEvening(false);
            setAlertShow(true);
        })
    }

    return (
        <>
            <Row id='library-card-form-container'>
                <HomepageLink />
                <Row>
                    <Col>
                        <h1 id='page-titles'>
                            Volunteer Application Form
                        </h1>
                    </Col>
                </Row>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Full Name:</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name='name'
                            placeholder="Type your full name here."
                            value={volunteerApplicationInfo.name}
                            onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Phone Number:</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name='phone'
                            placeholder="Type your phone number here."
                            value={volunteerApplicationInfo.phone}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Address:</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name='address'
                            placeholder="Type your phone number here."
                            value={volunteerApplicationInfo.address}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            name='email'
                            placeholder="name@example.com"
                            value={volunteerApplicationInfo.email}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Text id='form-text' className="text-muted">
                        We'll never share your contact information with anyone else.
                    </Form.Text>
                    <Form.Select aria-label="Default select example"
                        required
                        value={volunteerApplicationInfo.education}
                        name='education'
                        onChange={handleChange}
                    >
                        <option>Education Level</option>
                        <option value="High School/GED">High School/GED</option>
                        <option value="Some College/No Degree">Some College/No Degree</option>
                        <option value="Associates Degree">Associates Degree</option>
                        <option value="Bachelors Degree">Bachelors Degree</option>
                        <option value="Masters Degree">Masters Degree</option>
                        <option value="PHD">PHD</option>
                        <option value="Other">Other</option>
                    </Form.Select>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Work Experience:</Form.Label>
                        <Form.Control
                            required
                            as="textarea"
                            rows={3}
                            name='work_experience'
                            value={volunteerApplicationInfo.work_experience}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Volunteer Experience:</Form.Label>
                        <Form.Control
                            required
                            as="textarea"
                            rows={3}
                            name='volunteer_experience'
                            value={volunteerApplicationInfo.volunteer_experience}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Label>Prefferred Workdays: (check all that apply) </Form.Label>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Check
                            inline
                            label="Monday"
                            type='checkbox'
                            id={`inline-checkbox-1`}
                            checked={isCheckedMonday}
                            onChange={handleChangeMonday}
                        />
                        <Form.Check
                            inline
                            label="Tuesday"
                            type='checkbox'
                            id={`inline-checkbox-1`}
                            checked={isCheckedTuesday}
                            onChange={handleChangeTuesday}
                        />
                        <Form.Check
                            inline
                            label="Wednesday"
                            type='checkbox'
                            id={`inline-checkbox-1`}
                            checked={isCheckedWednesday}
                            onChange={handleChangeWednesday}
                        />
                        <Form.Check
                            inline
                            label="Thursday"
                            type='checkbox'
                            id={`inline-checkbox-1`}
                            checked={isCheckedThursday}
                            onChange={handleChangeThursday}
                        />
                        <Form.Check
                            inline
                            label="Friday"
                            type='checkbox'
                            id={`inline-checkbox-1`}
                            checked={isCheckedFriday}
                            onChange={handleChangeFriday}
                        />
                        <Form.Check
                            inline
                            label="Saturday"
                            type='checkbox'
                            id={`inline-checkbox-1`}
                            checked={isCheckedSaturday}
                            onChange={handleChangeSaturday}
                        />
                        <Form.Check
                            inline
                            label="Sunday"
                            type='checkbox'
                            id={`inline-checkbox-1`}
                            checked={isCheckedSunday}
                            onChange={handleChangeSunday}
                        />
                    </Form.Group>
                    <Form.Label>Prefferred Workdays: (check all that apply) </Form.Label>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Check
                            inline
                            label="Open-Noon"
                            type='checkbox'
                            id={`inline-checkbox-1`}
                            checked={isCheckedMorning}
                            onChange={handleChangeMorning}
                        />
                        <Form.Check
                            inline
                            label="Noon-Four"
                            type='checkbox'
                            id={`inline-checkbox-1`}
                            checked={isCheckedAfternoon}
                            onChange={handleChangeAfternoon}
                        />
                        <Form.Check
                            inline
                            label="Four-Close"
                            type='checkbox'
                            id={`inline-checkbox-1`}
                            checked={isCheckedEvening}
                            onChange={handleChangeEvening}
                        />
                    </Form.Group>
                    <div>
                        <MyButton id='contact-form-submit-button' title='Submit'></MyButton>
                    </div>
                </Form>
                <Row>
                    <Col>
                        <Alert hidden={!alertShow} variant={"success"}>
                            Your volunteer application was submitted successfully! Someone from our volunteer department will be in contact within two weeks.
                        </Alert>
                    </Col>
                </Row>
            </Row>
            <FirstFooter />
        </>
    )
}
