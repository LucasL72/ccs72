import Button from "react-bootstrap/Button";
import React from "react";
import ModalCreateArt from "../Modals/ModalCreateArt";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

const GestBlog = () => {
  const [modalCreateShow, setModalCreateShow] = React.useState(false);
  return (
    <>
      <Container>
        <Col md={12}>
          <div className="text-center">
            <Button
              type="button"
              className="mt-3"
              onClick={() => setModalCreateShow(true)}
            >
              Créer Article
            </Button>
          </div>
        </Col>
      </Container>

      <ModalCreateArt
        show={modalCreateShow}
        onHide={() => setModalCreateShow(false)}
      />
    </>
  );
};

export default GestBlog;
