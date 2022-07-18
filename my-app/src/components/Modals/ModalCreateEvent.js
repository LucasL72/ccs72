import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useDispatch } from "react-redux";
import { createEvent, getEvent } from "../../store/actions/EventActions";

const ModalCreateEvent = (props) => {
  const [date, setDate] = useState("");
  const [heure, setHeure] = useState("");
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleForm = async (e) => {
    e.preventDefault();
    if (title && content && date && heure) {
      dispatch(createEvent({ title, content, date, heure }));
      setTitle("");
      setContent("");
      setDate("");
      setHeure("");
      dispatch(getEvent());
      window.alert("Evenement ajouté !");
      window.location.reload();
    }
  };

  return (
    <div>
      <Modal {...props} size="md" aria-labelledby="ModalCreate" centered>
        <Modal.Header closeButton>
          <Modal.Title id="ModalCreate">Ajouter un évènement {""}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => handleForm(e)}>
            <Col sm={12}>
              <FloatingLabel controlId="floatingInputTitle" label="Date">
                <Form.Control
                  type="date"
                  placeholder="Date"
                  className="mb-3"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Col sm={12}>
              <FloatingLabel controlId="floatingInputTitle" label="Heure">
                <Form.Control
                  type="time"
                  placeholder="Heure"
                  className="mb-3"
                  value={heure}
                  onChange={(e) => setHeure(e.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Col sm={12}>
              <FloatingLabel controlId="floatingInputTitle" label="Titre">
                <Form.Control
                  type="text"
                  placeholder="Titre"
                  className="mb-3"
                  value={title}
                  maxLength={255}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Col sm={12}>
              <FloatingLabel
                controlId="floatingInputDesc"
                label="Descriptionn (limité à 250 caractères)"
              >
                <Form.Control
                  as="textarea"
                  rows={2}
                  className="mb-3"
                  maxLength={255}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
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

export default ModalCreateEvent;
