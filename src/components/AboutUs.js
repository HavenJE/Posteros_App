import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/Ab_images/Slide1m.jpg';
import img2 from '../assets/Ab_images/Slide2m.jpg';
import img3 from '../assets/Ab_images/Slide3m.jpg';
import img4 from '../assets/Ab_images/Slide4m.jpg';
import img5 from '../assets/Ab_images/Slide5m.jpg';
import img6 from '../assets/Ab_images/Slide6m.jpg';
import img7 from '../assets/Ab_images/Slide7m.jpg';

function AboutUs() {
    return (
        <div className='aboutUsSlides'>

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

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img6}
                                alt="Third slide"
                                width={800}
                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img7}
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

export default AboutUs