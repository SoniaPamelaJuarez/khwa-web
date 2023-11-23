import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './disenoGrafico.css';
import frase1 from '../../assets/frase1.png';
import frase2 from '../../assets/frase2.png';
import frase3 from '../../assets/frase3.png';
import frase4 from '../../assets/frase4.png';

function CarouselComponent() {
const [index, setIndex] = useState(0);

const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
};

return (
    <Carousel fade activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item>
        <img
            className=" w-50"
            src={frase1}
            alt="Imagen 1"
        />
    </Carousel.Item>
    <Carousel.Item>
        <img
            className=" w-50"
            src={frase2}
            alt="Imagen 2"
        />
    </Carousel.Item>
    <Carousel.Item>
        <img
            className=" w-50"
            src={frase4}
            alt="Imagen 3"
        />
    </Carousel.Item>
    <Carousel.Item>
        <img
            className="w-50"
            src={frase3}
            alt="Imagen 4"
        />
    </Carousel.Item>
    </Carousel>
);
}

export default CarouselComponent;