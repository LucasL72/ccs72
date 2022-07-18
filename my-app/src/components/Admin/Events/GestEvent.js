import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import ModalCreateEvent from "../../Modals/ModalCreateEvent";
import LigneEvents from "./LigneEvents";

const GestEvent = (props) => {
  const [modalCreateShow, setModalCreateShow] = React.useState(false);
  const { list } = props;
  return (
    <div>
      <Container className="mt-3">
        <Col md={12} className="mb-2">
          <div className="text-center">
            <Button
              type="button"
              className="mt-3"
              onClick={() => setModalCreateShow(true)}
            >
              Créer un événement
            </Button>
            <ModalCreateEvent
              show={modalCreateShow}
              onHide={() => setModalCreateShow(false)}
            />
          </div>
        </Col>
        <Table striped bordered hover variant="success" responsive>
          <thead>
            <tr>
              <th>Date</th>
              <th>Heure</th>
              <th>Titre</th>
              <th>Description</th>
              <th>Gérer</th>
            </tr>
          </thead>
          <tbody>
            {list.length > 0 &&
              list.map((item) => {
                return <LigneEvents item={item} />;
              })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};
export default GestEvent;
