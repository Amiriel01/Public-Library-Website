import Carousel from 'react-bootstrap/Carousel';
import AuthorEvent from "./images/authoreventsslider.png";
import ReadingToRescues from "./images/readingtorescuesslider.png";
import SweaterDrive from "./images/sweaterdriveslider.png";
import WinterBookSale from "./images/winterusedbookslider.png";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function EventCarousel() {

  const [indicatorVisible, setIndicatorVisible] = useState(false);

  // useEffect(() => {
  //   if (window.innerWidth <= 1600)
  //     setIndicatorVisible(false)
  // }, [])

  return (
      <Carousel id='event-carousel-container' fade indicators={indicatorVisible}>
        <Carousel.Item>
          <Link to="/AuthorEvents">
            <img className="img-fluid" src={AuthorEvent} alt='author event'></img>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to='/RescueEvent'>
            <img className="img-fluid" src={ReadingToRescues} alt='reading to rescues event'></img>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-fluid" src={SweaterDrive} alt='sweater drive event'></img>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-fluid" src={WinterBookSale} alt='winter book sale event'></img>
        </Carousel.Item>
      </Carousel>
  );
}