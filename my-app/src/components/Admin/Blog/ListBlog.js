import React from "react";
import Blog from "../../Blog";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";


const ListBlog = (props) => {
  const { list } = props;
  return (
    <div className="mt-3 mb-3">
      <Container>
        <Row md={4} className="g-4">
          {list.length > 0 &&
            list.map((item) => {
              return <Blog item={item} />;
            })}
        </Row>
      </Container>
    </div>
  );
};

export default ListBlog;