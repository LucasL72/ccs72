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
import jwt_decode from "jwt-decode";

const Blog = (props) => {
  const { item } = props;
  const navigate = useNavigate();
  const toArticleID = async (id) => {
    navigate("/Blog/" + item.id, { state: { id, item } });
  };
  const [modalDelShow, setModalDelShow] = React.useState(false);

  const CheckLog = () => {
    const userToken = localStorage.getItem("user_token");

    if (
      userToken === "visitor" ||
      (jwt_decode(userToken).isVerified === 1 &&
        jwt_decode(userToken).isAdmin === 0)
    )
      return <>
      {" "}
          <Card.Img
            variant="top"
            src={`${urlImgArt + item.imgarticle}`}
            alt={item.title}
          />
          <Card.Body>
            <Card.Title className="text-center ssligne">
              <strong>{item.title}</strong>
            </Card.Title>
            <Card.Text className="justif">{item.description}</Card.Text>
            <Card.Footer>
              <Button
                type="button"
                onClick={() => toArticleID()}
                variant="outline-light"
              >
                Voir plus...
              </Button>{" "}
              <p className="text-light">
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
          </Card.Body></>;
    else if (
      jwt_decode(userToken).isVerified === 1 &&
      jwt_decode(userToken).isAdmin === 1
    )
      return (
        <>
          {" "}
          <Card.Img
            variant="top"
            src={`${urlImgArt + item.imgarticle}`}
            alt={item.title}
          />
          <Card.Body>
            <Card.Title className="text-center ssligne">
              <strong>{item.title}</strong>
            </Card.Title>
            <Card.Text className="justif">{item.description}</Card.Text>
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
                item={item}
              />
              <p className="text-light">
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
        </>
      );
  };

  return (
    <>
      <Col md={4} className="mb-2">
        <Card
          border="success"
          className="rounded scale"
          text="light"
          key={item.id}
        >
          <CheckLog />
        </Card>
      </Col>
    </>
  );
};
export default Blog;
