import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { urlImgArt } from "../utils/url";
import { useNavigate } from "react-router-dom";
import ModalDeleteArt from "./Modals/ModalDeleteArt";
import Moment from "react-moment";
import "moment-timezone";
import "moment/locale/fr";

const Blog = (props) => {
  const { item } = props;
  const navigate = useNavigate();
  const toArticleID = async (id) => {
    navigate("/Blog/:id" /*+ item.id, { state: { id, item } })*/);
  };
  const [modalDelShow, setModalDelShow] = React.useState(false);
  return (
    <div>
      <Col md={4} className="card-wrapper">
        <Card
          border="success"
          className="rounded scale mb-3"
          text="light"
          key={item.id}
        >
          <Card.Img
            variant="top"
            src={`${urlImgArt + item.imgarticle}`}
            alt={item.title}
          />
          <Card.Body>
            <Card.Title>
              <strong>{item.title}</strong>
            </Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Card.Footer>
              <Button
                type="button"
                onClick={() => toArticleID()}
                variant="outline-light"
              >
                Voir plus...
              </Button>{" "}
              <Button
                variant="danger"
                onClick={() => setModalDelShow(true)}
                className="mx-auto"
              >
                Supprimer
              </Button>
              <ModalDeleteArt
                show={modalDelShow}
                onHide={() => setModalDelShow(false)}
              />
              <p className="text-muted">
                {" "}
                Posté le{" "}
                <Moment
                  locale="fr"
                  tz="Europe/Paris"
                  format="DD MMMM YYYY à HH:mm"
                >
                  {item.dateart}
                </Moment>{" "}
              </p>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};
export default Blog;
