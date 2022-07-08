import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Events = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="event"> </div>
        <Carousel.Caption>
          <h3 className="text-center ssligne">Prochains évènements</h3>
          <p>Date</p>
          <p>titre</p>
          <p>petite description</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default Events;
