import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img from '../../img/background-home.jpg'
import './Carousel.css'

const CarouselComponent = (largura) => {
    return (
        <Carousel autoPlay infiniteLoop interval='2000' width={largura}>
            <div>
                <img src={img} />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={img} />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={img} />
                <p className="legend">Legend 1</p>
            </div>
        </Carousel>
    );
}


export default CarouselComponent;
