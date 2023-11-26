import HomepageLink from './HomepageLink';
import FirstFooter from './FirstFooter';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EveryoneEvents from './EveryoneEvents';
import AdultEvents from './AdultEvents';
import TeenTweenEvents from './TeenTweenEvents';
import ChildrenEvents from './ChildrenEvents';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function UpcomingEvents() {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);
    
    return (
        <>
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
            <FirstFooter />
        </>
    )
}