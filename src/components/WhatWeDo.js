import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/WeDo_Images/Slide1.jpg';
import img2 from '../assets/WeDo_Images/Slide2.jpg';
import img3 from '../assets/WeDo_Images/Slide3.jpg';
import img4 from '../assets/WeDo_Images/Slide4.jpg';
import img5 from '../assets/WeDo_Images/Slide5.jpg';

function WhatWeDo() {
  return (
    <div className='whatWeDoSlides'>
      <div className='col-xlg-8 col-lg-8 col-md-8'>
        <div className='container-fluid'>

          <Carousel fade>
            <Carousel.Item >
              <img
                className="d-block w-100"
                src={img1}
                alt="First slide"
                width={800}

              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img2}
                alt="Second slide"
                width={800}
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
                width={800}
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img4}
                alt="Third slide"
                width={800}
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img5}
                alt="Third slide"
                width={800}
              />
            </Carousel.Item>

          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo