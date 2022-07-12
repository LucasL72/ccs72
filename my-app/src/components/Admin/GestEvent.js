import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import EditIcon from "@mui/icons-material/Edit";
import DangerousIcon from "@mui/icons-material/Dangerous";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import ModalCreateEvent from "../Modals/ModalCreateEvent";

const GestEvent = () => {
  const [modalCreateShow, setModalCreateShow] = React.useState(false);
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
            <tr>
              <td>#</td>
              <td>#</td>
              <td>#</td>
              <td>#</td>
              <td>
                <a href="/">
                  <EditIcon sx={{ fontSize: 25 }} />
                </a>{" "}
                <a href="/">
                  <DangerousIcon sx={{ fontSize: 25 }} color="danger" />
                </a>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};
export default GestEvent;
