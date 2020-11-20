import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Ecommerce1 from '../../assets/img/e-commerce-1.png';
import Ecommerce2 from '../../assets/img/e-commerce-2.png';
import Ecommerce3 from '../../assets/img/e-commerce-3.png';
import Ecommerce4 from '../../assets/img/e-commerce-4.png';

const CarasoulEcommerce = () => (
    <>
     <Carousel>
       <Carousel.Item>
           <img
           className="d-block w-100"
           src={Ecommerce1}
           alt="First slide"
           />
       </Carousel.Item>
       <Carousel.Item>
           <img
           className="d-block w-100"
           src={Ecommerce2}
           alt="Second slide"
           />
       </Carousel.Item>
       <Carousel.Item>
           <img
           className="d-block w-100"
           src={Ecommerce3}
           alt="Third slide"
           />
       </Carousel.Item>
       <Carousel.Item>
           <img
           className="d-block w-100"
           src={Ecommerce4}
           alt="Third slide"
           />
       </Carousel.Item>
    </Carousel>
  </>
);

export default CarasoulEcommerce;
