import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import MyButton from './MyButton';
import axios from './utility/axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function EveryoneEvents() {

    const [eventDetails, setEventDetails] = useState([{
        title: '',
        date: '',
        time: '',
        description1: '',
        description2: '',
        imageURL: '',
        age_group: '',
        _id: '',
    }]);

    async function getEventDetails() {
        await axios.get("event/eventList").then((response) => {
            setEventDetails(response.data);
        })
    }

    useEffect(() => {
        getEventDetails();
    }, []);


    return (
        <Row id='event-section-container'>
            <Col>
                <div id='event-category-container'>
                    <h2 id='page-titles'>
                        For Everyone
                    </h2>
                    <h3 id='event-catagory-description'>
                        These events are geared towards families or individuals of all ages. Events that are for everyone may have limited space. Please be sure to check the event page to see if event registration is needed.
                    </h3>
                </div>
            </Col>
            <Col md={12} lg={9} id='event-cards-container'>
                {eventDetails.filter(value => value.age_group === "All Ages").map((ageEventDetail) => {
                    return <div key={ageEventDetail._id}>
                        <Card id='event-card' style={{ width: '20rem' }}>
                            <Card.Img className="img-fluid" id='event-card-image' variant="top" src={`public/${ageEventDetail.imageURL}`}
                            alt='decorative image'
                            ></Card.Img>
                            <Card.Body>
                                <Card.Title id='bold-text'>
                                    {ageEventDetail.title}
                                </Card.Title>
                                <Card.Text>
                                    {ageEventDetail.date}
                                </Card.Text>
                                <Card.Text>
                                    {ageEventDetail.time}
                                </Card.Text>
                                <Card.Text>
                                    {ageEventDetail.description1}
                                </Card.Text>
                                <Card.Text>
                                    {ageEventDetail.description2}
                                </Card.Text>
                                <div id='event-button-container'>
                                    <NavLink to={"/event/eventDetail/" + ageEventDetail._id}>
                                        <MyButton className='event-button' title='Learn More About the Event'></MyButton>
                                    </NavLink>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                })}
            </Col>
        </Row >
    )
}
