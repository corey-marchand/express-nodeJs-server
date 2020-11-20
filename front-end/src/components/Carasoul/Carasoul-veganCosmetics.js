import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import VeganCosmetics from '../../assets/img/vegan-cosmetics.png';
import VeganCosmetics2 from '../../assets/img/vegan-cosmetics-2.png';
import VeganCosmetics3 from '../../assets/img/vegan-cosmetics-3.png';

const CarasoulVeganCosmetics = () => (
    <>
    <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={VeganCosmetics}
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={VeganCosmetics2}
            alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={VeganCosmetics3}
            alt="Third slide"
            />
        </Carousel.Item>
    </Carousel>
  </>
);

export default CarasoulVeganCosmetics;
