import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const ModalEditEvent = (props) => {
  const [Description, setDescription] = useState("");
  const handleChangeDesc = (e) => {
    // Here we are checking if the length is equal to 255
    if (e.target.value.length === 255) {
      window.alert("la description de doit pas dépasser 255 charactères ! ");
    }
    setDescription(e.target.value);
  };
  return (
    <div>
      <Modal {...props} size="md" aria-labelledby="ModalCreate" centered>
        <Modal.Header closeButton>
          <Modal.Title id="ModalCreate">Editer l'évènement {""}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Col sm={12}>
              <FloatingLabel controlId="floatingInputTitle" label="Date">
                <Form.Control type="date" placeholder="Date" className="mb-3" />
              </FloatingLabel>
            </Col>
            <Col sm={12}>
              <FloatingLabel controlId="floatingInputTitle" label="Heure">
                <Form.Control
                  type="time"
                  placeholder="Heure"
                  className="mb-3"
                />
              </FloatingLabel>
            </Col>
            <Col sm={12}>
              <FloatingLabel controlId="floatingInputTitle" label="Titre">
                <Form.Control
                  type="text"
                  placeholder="Titre"
                  className="mb-3"
                />
              </FloatingLabel>
            </Col>
            <Col sm={12}>
              <FloatingLabel controlId="floatingInputDesc" label="Description">
                <Form.Control
                  as="textarea"
                  rows={2}
                  className="mb-3"
                  maxLength={255}
                  value={Description}
                  onChange={handleChangeDesc}
                />
              </FloatingLabel>
            </Col>
            <Col sm={12}>
              <div className="text-center">
                <Button
                  variant="outline-dark"
                  type="submit"
                  onClick={props.onHide}
                >
                  Confirmer
                </Button>
              </div>
            </Col>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalEditEvent;
