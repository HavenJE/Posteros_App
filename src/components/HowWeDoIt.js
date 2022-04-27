import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/HowWe_images/Slide1.jpg';
import img2 from '../assets/HowWe_images/Slide2.jpg';
import img3 from '../assets/HowWe_images/Slide3.jpg';
import img4 from '../assets/HowWe_images/Slide4.jpg';

function HowWeDoIt() {
  return (
    <div className='howWeDoIt'>
      <div className='col-xlg-7 col-lg-7 col-md-7'>
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

          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default HowWeDoIt