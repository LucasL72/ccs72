import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Carou from "./Admin/Events/Carou";

const Events = (props) => {
  const { list } = props;
  return (
    <Carousel fade className="mt-4">
      {list.length > 0 &&
        list.map((item) => {
          return (
            <Carousel.Item interal={10000}>
              <div className="event"> </div>
              <Carou item={item} />;
            </Carousel.Item>
          );
        })}
    </Carousel>
  );
};
export default Events;
