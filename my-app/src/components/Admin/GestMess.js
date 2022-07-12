import React from "react";
import Table from "react-bootstrap/Table";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const GestMess = () => {
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
            <td>#</td>
            <td>
              <a href="/">
                <DeleteForeverIcon />
              </a>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default GestMess;
