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
import { Helmet } from 'react-helmet-async';
import Logo from './images/logo.png';

export default function UpcomingEvents({ showAdmin }: {
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
            <div>
                <Helmet>
                    <title>Another Page Public Library Upcoming Events</title>
                    <meta name="description" content="The Another Page Public Library upcoming events page, tells lists all upcoming events for all ages on one page. Visit this page to plan for upcoming events." />
                    <meta name="keywords" content="react, public library, library upcoming events" />
                    <meta property="og:title" content="Another Page Public Library Upcoming Events" />
                    <meta property="og:description" content="The Another Page Public Library upcoming events page, tells lists all upcoming events for all ages on one page. Visit this page to plan for upcoming events." />
                    <meta property="og:image" content={Logo} />
                    <meta property="og:url" content="https://example.com/my-page" />
                </Helmet>
                <Row id='upcoming-events-page-container'>
                    <HomepageLink />
                    {/* {createEventLink()} */}
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
            </div>
        </>
    )
}