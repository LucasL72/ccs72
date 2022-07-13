import React from "react";
import Table from "react-bootstrap/Table";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ModalDeleteMess from "../Modals/ModalDeleteMess";
const GestMess = () => {
  const [modalDelShow, setModalDelShow] = React.useState(false);
  return (
    <div>
      <Table striped bordered hover variant="success" responsive>
        <thead>
          <tr>
            <th>Produits</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Adresse</th>
            <th>Message</th>
            <th>Gérer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#</td>
            <td>#</td>
            <td>#</td>
            <td>
              {" "}
              <a href="/" target="_blank" rel="noreferrer">
                #
              </a>
            </td>
            <td>
              {" "}
              <a href="/" target="_blank" rel="noreferrer">
                #
              </a>
            </td>
            <td>#</td>
            <td>
              <p className="justif text-break">#</p>
            </td>
            <td>
              <a onClick={() => setModalDelShow(true)}>
                <DeleteForeverIcon />
              </a>
              <ModalDeleteMess
                show={modalDelShow}
                onHide={() => setModalDelShow(false)}
              />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default GestMess;
