import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
     import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item interval={1000}>
        <img
          className="d-block mx-auto"
          src="./Untitled design -17-.png"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item interval={800}>
        <img
          className="d-block mx-auto"
          src="./Untitled_design__11_-removebg-preview.png"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item interval={600}>
        <img
          className="d-block mx-auto"
          src="./Untitled_design__14_-removebg-preview.png"
          alt="Third slide"
        />

      </Carousel.Item>
      <Carousel.Item interval={400}>
        <img
          className="d-block mx-auto"
          src="./Untitled_design__15_-removebg-preview.png"
          alt="Third slide"
        />
        </Carousel.Item>
        <Carousel.Item>
        <img
          className="d-block mx-auto"
          src="./Untitled_design__16_-removebg-preview.png"
          alt="Third slide"
        />
        </Carousel.Item>
        <Carousel.Item>
        <img
          className="d-block mx-auto"
          src="./Zoho-Products-Circle-removebg-preview.png"
          alt="Third slide"
        />
        </Carousel.Item>
        
    </Carousel>
  );
}

export default CarouselFadeExample;