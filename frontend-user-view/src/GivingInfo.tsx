import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomepageLink from './HomepageLink';
import giveImage from "./images/happybookstack.png";

export default function GivingInfo() {
    return (
        <Row id='giving-info-page-container'>
            <HomepageLink />
            <Row>
                <Col>
                    <h1 id='page-titles'>
                        Give to the Library
                    </h1>
                </Col>
            </Row>
            <div id='give-flex-container'>
                <div id='give-title-subtitle-container'>
                    <Row>
                        <Col>
                            <h2 id='page-titles'>
                                The Gift of Lifetime Learning and Discovery
                            </h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 id='give-information'>
                                Support from our local patrons and businesses is critical. Donations support library resources, programs, and services.
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 id='give-information'>
                                Please consider a one-time or reoccuring donation to Another Page library. Your donation is tax deductible.
                            </h3>
                        </Col>
                    </Row>
                </div>
                <Row id="give-image-row">
                    <Col>
                        <img id="give-image" className="img-fluid" src={giveImage} alt="girl holding stack of books" />
                    </Col>
                </Row>
            </div>
        </Row>
    )
}