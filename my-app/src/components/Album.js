import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { ImageViewer } from "react-image-viewer-dv";
import Col from "react-bootstrap/Col";

const Album = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={4}>
            <ImageViewer>
              <img
                src="./image.webp"
                alt="ccs72"
                className="img-border mb-4 scale"
                width="100%"
              />
            </ImageViewer>
          </Col>
          <Col md={4}>
            <ImageViewer>
              <img
                src="./image.webp"
                alt="ccs72"
                className="img-border mb-4 scale"
                width="100%"
              />
            </ImageViewer>
          </Col>
          <Col md={4}>
            <ImageViewer>
              <img
                src="./image.webp"
                alt="ccs72"
                className="img-border mb-4 scale"
                width="100%"
              />
            </ImageViewer>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <ImageViewer>
              <img
                src="./image.webp"
                alt="ccs72"
                className="img-border mb-4 scale"
                width="100%"
              />
            </ImageViewer>
          </Col>
          <Col md={4}>
            <ImageViewer>
              <img
                src="./image.webp"
                alt="ccs72"
                className="img-border mb-4 scale "
                width="100%"
              />
            </ImageViewer>
          </Col>
          <Col md={4}>
            <ImageViewer>
              <img
                src="./image.webp"
                alt="ccs72"
                className="img-border mb-4 scale"
                width="100%"
              />
            </ImageViewer>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Album;
