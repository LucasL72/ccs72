import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Photos from "./Photos";

const Album = (props) => {
  const { list } = props;
  return (
    <div>
      <Container>
        <Row>
        {list.length > 0 &&
            list.map((item) => {
              return <Photos item={item} />;
            })}
        </Row>
      </Container>
    </div>
  );
};
export default Album;
