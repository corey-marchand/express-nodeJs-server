import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import FoodieJournals1 from '../../assets/img/food-journals-1.png';
import FoodieJournals2 from '../../assets/img/foodie-journal-2.png';
import FoodieJournals3 from '../../assets/img/foodie-journal-3.png';

const Carasoul = () => (
    <>
    <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={FoodieJournals1}
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={FoodieJournals2}
            alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={FoodieJournals3}
            alt="Third slide"
            />
        </Carousel.Item>
    </Carousel>
  </>
);

export default Carasoul;
