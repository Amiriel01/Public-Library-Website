import axios from "axios";
import { useEffect, useState, FormEvent } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import HomepageLink from './HomepageLink';
import Form from 'react-bootstrap/Form';
import MyButton from "./MyButton";

export default function VolunteerApplicationDetails() {

    const { pathname } = useLocation();
    const { id } = useParams();
    const [volunteerApplicationDetails, setVolunteerApplicationDetails] = useState({
        name: '',
        phone: '',
        email: '',
        work_experience: '',
        volunteer_experience: '',
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false,
        morning: false,
        afternoon: false,
        evening: false,
        interview_notes: '',
    });

    const [monday, setMonday] = useState<string>('');
    const [tuesday, setTuesday] = useState<string>('');
    const [wednesday, setWednesday] = useState<string>('');
    const [thursday, setThursday] = useState<string>('');
    const [friday, setFriday] = useState<string>('');
    const [saturday, setSaturday] = useState<string>('');
    const [sunday, setSunday] = useState<string>('');

    const [morning, setMorning] = useState<string>('');
    const [afternoon, setAfternoon] = useState<string>('');
    const [evening, setEvening] = useState<string>('');

    const [volunteerApplicationDetailsUpdate, setVolunteerApplicationDetailsUpdate] = useState({
        interview_notes: '',
    });

    const [approved, setApproved] = useState<boolean>(false);
    const [isCheckedApproved, setIsCheckedApproved] = useState(false);

    async function getVolunteerApplicationDetails() {
        await axios.get(`http://localhost:3000/volunteer/volunteerForm/${id}`).then((response) => {
            setVolunteerApplicationDetails(response.data);
            // console.log(response.status, response.data);
        })
    }

    useEffect(() => {
        getVolunteerApplicationDetails();
    }, []);

    const getScheduleInformation = () => {
        if (volunteerApplicationDetails.monday === true) {
            setMonday("Monday")
        }

        if (volunteerApplicationDetails.tuesday === true) {
            setTuesday("Tuesday")
        }

        if (volunteerApplicationDetails.wednesday === true) {
            setWednesday("Wednesday")
        }

        if (volunteerApplicationDetails.thursday === true) {
            setThursday("Thursday")
        }

        if (volunteerApplicationDetails.friday === true) {
            setFriday("Friday")
        }

        if (volunteerApplicationDetails.saturday === true) {
            setSaturday("Saturday")
        }

        if (volunteerApplicationDetails.sunday === true) {
            setSunday("Sunday")
        }

        if (volunteerApplicationDetails.morning === true) {
            setMorning("Open to Noon")
        }

        if (volunteerApplicationDetails.afternoon === true) {
            setAfternoon("Noon to Four")
        }

        if (volunteerApplicationDetails.evening === true) {
            setEvening("Four to Close")
        }
    }

    useEffect(() => {
        getScheduleInformation();
    }, [volunteerApplicationDetails])

    useEffect(() => {
        const formData = {
            interview_notes: volunteerApplicationDetails?.interview_notes ?? ""
        }
        setVolunteerApplicationDetailsUpdate(formData)
    }, [volunteerApplicationDetails])

    const handleChangeCompleted = () => {
        setApproved(!approved);
        setIsCheckedApproved(true);
    };

    const handleChange = (event: FormEvent) => {
        const { name, value } = event.target as any;
        setVolunteerApplicationDetailsUpdate({
            ...volunteerApplicationDetailsUpdate,
            [name]: value,
        })
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        const volunteerApplicationUpdate = {
            name: volunteerApplicationDetails.name,
            phone: volunteerApplicationDetails.phone,
            email: volunteerApplicationDetails.email,
            work_experience: volunteerApplicationDetails.work_experience,
            volunteer_experience: volunteerApplicationDetails.volunteer_experience,
            monday: volunteerApplicationDetails.monday,
            tuesday: volunteerApplicationDetails.tuesday,
            wednesday: volunteerApplicationDetails.wednesday,
            thursday: volunteerApplicationDetails.thursday,
            friday: volunteerApplicationDetails.friday,
            saturday: volunteerApplicationDetails.saturday,
            sunday: volunteerApplicationDetails.sunday,
            morning: volunteerApplicationDetails.morning,
            afternoon: volunteerApplicationDetails.afternoon,
            evening: volunteerApplicationDetails.evening,
            interview_notes: volunteerApplicationDetailsUpdate.interview_notes,
            approved: approved,
        }

        axios.put(`http://localhost:3000/volunteer/volunteerForm/${id}`, volunteerApplicationUpdate).then((response) => {
            // console.log(volunteerApplicationUpdate)
            // console.log(response.status, response.data)
        })
    }

    const handleDeleteVolunteerApplication = () => {

        axios.delete(`http://localhost:3000/volunteer/volunteerForm/${id}`);
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    return (
        <Row id="volunteer-details-container-page">
            <HomepageLink />
            <Card id='contact-request-container'>
                <Card.Body>
                    <div className='bold-flex-container'>
                        <Card.Text id='bold-text'>
                            Name:
                        </Card.Text>
                        <Card.Text>
                            {volunteerApplicationDetails.name}
                        </Card.Text>
                    </div>
                    <div className='bold-flex-container'>
                        <Card.Text id='bold-text'>
                            Phone:
                        </Card.Text>
                        <Card.Text>
                            {volunteerApplicationDetails.phone}
                        </Card.Text>
                    </div>
                    <div className='bold-flex-container'>
                        <Card.Text id='bold-text'>
                            Email:
                        </Card.Text>
                        <Card.Text id="all-contact-email">
                            {volunteerApplicationDetails.email}
                        </Card.Text>
                    </div>
                    <div className='bold-flex-container'>
                        <Card.Text id='bold-text'>
                            Work Experience:
                        </Card.Text>
                        <Card.Text>
                            {volunteerApplicationDetails.work_experience}
                        </Card.Text>
                    </div>
                    <div className='bold-flex-container'>
                        <Card.Text id='bold-text'>
                            Volunteer Experience:
                        </Card.Text>
                        <Card.Text>
                            {volunteerApplicationDetails.volunteer_experience}
                        </Card.Text>
                    </div>
                    <div>
                        <Card.Text id='bold-text'>
                            Dates Available:
                        </Card.Text>
                        <Card.Text>
                            {monday}
                        </Card.Text>
                        <Card.Text>
                            {tuesday}
                        </Card.Text>
                        <Card.Text>
                            {wednesday}
                        </Card.Text>
                        <Card.Text>
                            {thursday}
                        </Card.Text>
                        <Card.Text>
                            {friday}
                        </Card.Text>
                        <Card.Text>
                            {saturday}
                        </Card.Text>
                        <Card.Text>
                            {sunday}
                        </Card.Text>
                        <Card.Text id='bold-text'>
                            Times Available:
                        </Card.Text>
                        <Card.Text>
                            {morning}
                        </Card.Text>
                        <Card.Text>
                            {afternoon}
                        </Card.Text>
                        <Card.Text>
                            {evening}
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Interview Notes:</Form.Label>
                    <Form.Control
                        type="text"
                        name="interview_notes"
                        placeholder="Type notes here."
                        // defaultValue={volunteerApplicationDetails.interview_notes}
                        value={volunteerApplicationDetailsUpdate.interview_notes}
                        onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check
                        inline
                        label="Approved"
                        type='checkbox'
                        id={`inline-checkbox-1`}
                        checked={approved}
                        onChange={handleChangeCompleted}
                    />
                </Form.Group>
                <MyButton className="contact-request-update-button" title="Update Volunteer Application"></MyButton>
                <Link to='/AllVolunteerApplications'>
                    <MyButton onClick={handleDeleteVolunteerApplication} className="contact-request-update-button" title="Delete Volunteer Application"></MyButton>
                </Link>
                <Link to='/AllVolunteerApplications'>
                    <MyButton className="contact-request-update-button" title="View All Volunteer Applications"></MyButton>
                </Link>
            </Form>
        </Row >
    )
}