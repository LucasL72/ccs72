import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const ModalCreateEvent = (props) => {
  return (
    <div>
      <Modal {...props} size="md" aria-labelledby="ModalCreate" centered>
        <Modal.Header closeButton>
          <Modal.Title id="ModalCreate">Ajouter une photo {""}</Modal.Title>
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
                <Form.Control as="textarea" rows={2} className="mb-3" />
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

export default ModalCreateEvent;
