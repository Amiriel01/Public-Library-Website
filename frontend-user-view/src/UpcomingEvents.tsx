import HomepageLink from './HomepageLink';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EveryoneEvents from './EveryoneEvents';
import AdultEvents from './AdultEvents';
import TeenTweenEvents from './TeenTweenEvents';
import ChildrenEvents from './ChildrenEvents';

export default function UpcomingEvents() {
    return (
        <Row id='upcoming-events-page-container'>
            <HomepageLink />
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
    )
}