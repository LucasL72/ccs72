import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { ImageViewer } from "react-image-viewer-dv";
import Col from "react-bootstrap/Col";
import ModalDeletePic from "./Modals/ModalDeletePic";
import Button from "react-bootstrap/Button";
const Album = () => {
  const [modalDelShow, setModalDelShow] = React.useState(false);
  return (
    <div>
      <Container>
        <Row>
          <Col md={4}>
            <ImageViewer>
              <img
                src="./image.webp"
                alt="ccs72"
                className="img-border"
                width="100%"
              />
            </ImageViewer>
            <div className="text-center">
              <Button
                variant="outline-danger"
                type="submit"
                onClick={() => setModalDelShow(true)}
              >
                Supprimer
              </Button>
              <ModalDeletePic
                show={modalDelShow}
                onHide={() => setModalDelShow(false)}
              />
            </div>
          </Col>
          <Col md={4}>
            <ImageViewer>
              <img
                src="./image.webp"
                alt="ccs72"
                className="img-border"
                width="100%"
              />
            </ImageViewer>
          </Col>
          <Col md={4}>
            <ImageViewer>
              <img
                src="./image.webp"
                alt="ccs72"
                className="img-border"
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
                className="img-border"
                width="100%"
              />
            </ImageViewer>
          </Col>
          <Col md={4}>
            <ImageViewer>
              <img
                src="./image.webp"
                alt="ccs72"
                className="img-border"
                width="100%"
              />
            </ImageViewer>
          </Col>
          <Col md={4}>
            <ImageViewer>
              <img
                src="./image.webp"
                alt="ccs72"
                className="img-border"
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
