import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/Ab_images/img1.jpg';
import img2 from '../assets/Ab_images/AboutUs1.jpg';
import img3 from '../assets/Ab_images/AboutUs2.jpg';
import img4 from '../assets/Ab_images/AboutUs3.jpg';
import img5 from '../assets/Ab_images/AboutUs4.jpg';
import img6 from '../assets/Ab_images/AboutUs5.jpg';
import img7 from '../assets/Ab_images/AboutUs6.jpg';

function FirstCarousel() {
    return (
        <div className='carousel1-contaier'>
            <span className='carousel1'>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img src={img1} alt='first slide' width={500} height={300} />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={img2} alt='second slide' width={500} height={300} />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={img3} alt='third slide' width={500} height={300}/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={img4} alt='forth slide' width={500} height={300}/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={img5} alt='fifth slide' width={500} height={300}/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={img6} alt='sixth slide' width={500} height={300} />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={img7} alt='seventh slide' width={500} height={300} />
                    </Carousel.Item>
                </Carousel>
            </span>

            <span className='carousel1'>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img src={img1} alt='first slide' width={500} height={300} />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={img2} alt='second slide' width={500} height={300} />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={img3} alt='third slide' width={500} height={300}/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={img4} alt='forth slide' width={500} height={300}/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={img5} alt='fifth slide' width={500} height={300}/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={img6} alt='sixth slide' width={500} height={300} />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={img7} alt='seventh slide' width={500} height={300} />
                    </Carousel.Item>
                </Carousel>
            </span>

            <span className='carousel1'>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img src={img1} alt='first slide' width={500} height={300} />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={img2} alt='second slide' width={500} height={300} />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={img3} alt='third slide' width={500} height={300}/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={img4} alt='forth slide' width={500} height={300}/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={img5} alt='fifth slide' width={500} height={300}/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={img6} alt='sixth slide' width={500} height={300} />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src={img7} alt='seventh slide' width={500} height={300} />
                    </Carousel.Item>
                </Carousel>
            </span>

        </div>
    )
}

export default FirstCarousel    