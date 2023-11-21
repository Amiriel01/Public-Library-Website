import Carousel from 'react-bootstrap/Carousel';
import AuthorEvent from "./images/authoreventsslider.png";
import ReadingToRescues from "./images/readingtorescuesslider.png";
import SweaterDrive from "./images/sweaterdriveslider.png";
import WinterBookSale from "./images/winterusedbookslider.png";
import { useEffect, useState } from 'react';

export default function EventCarousel() {

  const [indicatorVisible, setIndicatorVisible] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 1600)
    setIndicatorVisible(false)
  }, [])

  return (
    <div id='event-carousel-container'>
      <Carousel fade id='event-carousel-container' indicators={indicatorVisible}>
        <Carousel.Item>
          <img  className="img-fluid" src={AuthorEvent} alt='author event'></img>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-fluid" src={ReadingToRescues} alt='reading to rescues event'></img>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-fluid" src={SweaterDrive} alt='sweater drive event'></img>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-fluid" src={WinterBookSale} alt='winter book sale event'></img>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}