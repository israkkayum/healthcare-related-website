import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banners/banner1.jpg';
import banner2 from '../../../images/banners/banner2.jpg';
import banner3 from '../../../images/banners/banner3.jpg';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                        style={{height: '500px'}}
                    />
                    <Carousel.Caption>
                        <h3>Welcome To MediClinic</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                        style={{height: '500px'}}
                    />

                    <Carousel.Caption>
                        <h3>We have the Finest Physicians</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                        style={{height: '500px'}}
                    />

                    <Carousel.Caption>
                        <h3>An Advanced Medicine Practice</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;