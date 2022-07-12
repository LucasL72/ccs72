import Button from "react-bootstrap/Button";
import React from "react";
import ModalCreatePic from "../Modals/ModalCreatePic";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

const GestPhotos = () => {
  const [modalCreateShow, setModalCreateShow] = React.useState(false);
  return (
    <>
      <Container>
        <Col md={12}>
          <div className="text-center">
            <Button type="button" className="mt-3" onClick={() => setModalCreateShow(true)}>
              Ajouter une Photo
            </Button>
          </div>
        </Col>
      </Container>

      <ModalCreatePic
        show={modalCreateShow}
        onHide={() => setModalCreateShow(false)}
      />
    </>
  );
};

export default GestPhotos;