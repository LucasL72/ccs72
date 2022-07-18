import React from "react";
import Table from "react-bootstrap/Table";
import LigneMess from "./LigneMess";

const GestMess = (props) => {
  const { list } = props;
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
            <th>Reçu le </th>
            <th>Gérer</th>
          </tr>
        </thead>
        <tbody>
          {list.length > 0 &&
            list.map((item) => {
              return <LigneMess item={item} />;
            })}
        </tbody>
      </Table>
    </div>
  );
};
export default GestMess;
