import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const ModalCreateArt = (props) => {
  return (
    <div>
      <Modal {...props} size="md" aria-labelledby="ModalCreate" centered>
        <Modal.Header closeButton>
          <Modal.Title id="ModalCreate">Créer un article {""}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Col md={12}>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Choisir votre image</Form.Label>
                <Form.Control type="file" className="mb-3" accept="image/*" />
                <p className="text-danger">Limité à moins de 1mo SVP</p>
              </Form.Group>
            </Col>{" "}
            <Col sm={12}>
              <FloatingLabel
                controlId="selectproduuits"
                label="Choisissez le produit"
                className="mb-3"
              >
                <Form.Select aria-label="Produits">
                  <option>Choisir un produit</option>
                  <option>Carport Bois</option>
                  <option>Charpente</option>
                  <option>Pergolas Bois</option>
                  <option>Velux</option>
                  <option>Autres</option>
                </Form.Select>
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
                <Form.Control as="textarea" rows={4} className="mb-3" />
              </FloatingLabel>
            </Col>
            <Col sm={12}>
              <FloatingLabel controlId="floatingInputDesc" label="Contenu">
                <Form.Control as="textarea" rows={4} className="mb-3" />
              </FloatingLabel>
            </Col>
            <Col sm={12}>
              <FloatingLabel controlId="floatingInputTitle" label="Auteur">
                <Form.Control
                  type="text"
                  placeholder="Auteur"
                  className="mb-3"
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

export default ModalCreateArt;
