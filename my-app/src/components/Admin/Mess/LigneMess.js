import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ModalDeleteMess from "../../Modals/ModalDeleteMess";
import Moment from "react-moment";
import "moment-timezone";
import "moment/locale/fr";

const LigneMess = (props) => {
  const [modalDelShow, setModalDelShow] = React.useState(false);
  const { item } = props;
  return (
    <tr>
      <td>{item.produit}</td>
      <td>{item.nom}</td>
      <td>{item.prenom}</td>
      <td>
        {" "}
        <a href={"mailto:" + item.email} target="_blank" rel="noreferrer">
          {item.email}
        </a>
      </td>
      <td>
        {" "}
        <a href={"tel:" + item.tel} target="_blank" rel="noreferrer">
          {item.tel}
        </a>
      </td>
      <td>{item.adresse}</td>
      <td>
        <p className="justif text-break">{item.content}</p>
      </td>
      <td>
        <Moment locale="fr" tz="Europe/Paris" format="DD MMMM YYYY à HH:mm">
          {item.datemess}
        </Moment>{" "}
      </td>
      <td>
        <a onClick={() => setModalDelShow(true)}>
          <DeleteForeverIcon />
        </a>
        <ModalDeleteMess
          show={modalDelShow}
          onHide={() => setModalDelShow(false)}
          item={item}
        />
      </td>
    </tr>
  );
};
export default LigneMess;
