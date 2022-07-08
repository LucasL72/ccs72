import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const Header = () => {
    return (
        <Carousel className="rounded" fade>
        <Carousel.Item>
            <div className="banner1"></div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="banner2"></div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="banner3"></div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="banner4"></div>
        </Carousel.Item>
      </Carousel>
    )

}
export default Header;