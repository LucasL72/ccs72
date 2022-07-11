import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Header = () => {
  return (
    <div>
      <Carousel fade>
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
    </div>
  );
};
export default Header;
