import Carousel from 'react-bootstrap/Carousel';
import AuthorEvent from "./images/authoreventsslider.png";
import ReadingToRescues from "./images/readingtorescuesslider.png";
import SweaterDrive from "./images/sweaterdriveslider.png";
import WinterBookSale from "./images/winterusedbookslider.png";
import {  useState } from 'react';
import { Link } from 'react-router-dom';

export default function EventCarousel() {

  const [indicatorVisible, setIndicatorVisible] = useState(false);

  return (
      <Carousel id='event-carousel-container' fade indicators={indicatorVisible}>
        <Carousel.Item>
          <Link to="/AuthorEvents">
            <img id='carousel-image' className="img-fluid" src={AuthorEvent} alt='author event'></img>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to='/RescueEvent'>
            <img id='carousel-image' className="img-fluid" src={ReadingToRescues} alt='reading to rescues event'></img>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <img id='carousel-image' className="img-fluid" src={SweaterDrive} alt='sweater drive event'></img>
        </Carousel.Item>
        <Carousel.Item>
          <img id='carousel-image' className="img-fluid" src={WinterBookSale} alt='winter book sale event'></img>
        </Carousel.Item>
      </Carousel>
  );
}