import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { deleteEvent } from "../../store/actions/EventActions";
import { useDispatch } from "react-redux";

const ModalDeleteEvent = (props) => {
  const { item } = props;
  const dispatch = useDispatch();
  const handleDelete = async (id) => {
    dispatch(deleteEvent(id));
  };
  return (
    <div>
      <Modal {...props} size="lg" aria-labelledby="ModalDel" centered>
        <Modal.Header closeButton>
          <Modal.Title id="ModalDel">Supprimer l'évènement ? {""}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Voulez-vous vraiment supprimer ce contenu ? </h4>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-danger"
            type="submit"
            onClick={() => handleDelete(item.id)}
          >
            Supprimer
          </Button>{" "}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalDeleteEvent;
