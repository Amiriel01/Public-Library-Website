import HomepageLink from './HomepageLink';
import FirstFooter from './FirstFooter';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EveryoneEvents from './EveryoneEvents';
import AdultEvents from './AdultEvents';
import TeenTweenEvents from './TeenTweenEvents';
import ChildrenEvents from './ChildrenEvents';
import { useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function UpcomingEvents({showAdmin}: {
    showAdmin: boolean
}) {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    const createEventLink = () => {
        if (showAdmin === true) {
            return <Row>
                <Col>
                    <p>
                        <Link id='create-event-link' to='/CreateEventForm'>
                            Create New Event
                        </Link>
                    </p>
                </Col>
            </Row>
        }
    }
    
    return (
        <>
            <Row id='upcoming-events-page-container'>
                <HomepageLink />
                {createEventLink()}
                <Row>
                    <Col>
                        <h1 id='page-titles'>
                            Upcoming Events
                        </h1>
                    </Col>
                </Row>
                <EveryoneEvents />
                <AdultEvents />
                <TeenTweenEvents />
                <ChildrenEvents />
            </Row>
            <FirstFooter />
        </>
    )
}