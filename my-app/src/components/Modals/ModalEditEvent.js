import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useDispatch } from "react-redux";
import { editEvent } from "../../store/actions/EventActions";

const ModalEditEvent = (props) => {
  const { item } = props;
  const [title, setTitle] = useState(item.title);
  const [content, setContent] = useState(item.content);
  const [date, setDate] = useState(item.date);
  const [heure, setHeure] = useState(item.heure);
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();

    //important il faut remettre tout les champs de la data autrement il serait ecraser par un champ vide
    const editData = {
      title: title,
      date: date,
      heure: heure,
      content: content,
      id: item.id,
    };

    dispatch(editEvent(editData));
  };

  return (
    <div>
      <Modal {...props} size="md" aria-labelledby="ModalCreate" centered>
        <Modal.Header closeButton>
          <Modal.Title id="ModalCreate">Editer l'évènement {""}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => handleEdit(e)}>
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
                label="Description ( limité à 255 caractères) "
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

export default ModalEditEvent;
