import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import ModalDeleteArt from "./Modals/ModalDeleteArt";

const Blog = () => {
  const navigate = useNavigate();
  const toArticleID = async (id) => {
    navigate("/Blog/:id" /*+ item.id, { state: { id, item } })*/);
  };
  const [modalDelShow, setModalDelShow] = React.useState(false);
  return (
    <div>
      <Container>
        <Row>
          <Col md={4} className="card-wrapper">
            <Card className="rounded scale mb-3" text="light">
              <Card.Img variant="top" src="./image.webp" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
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
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="rounded scale" text="light">
              <Card.Img variant="top" src="./image.webp" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="outline-light">Voir plus...</Button>
                <Button variant="danger">Supprimer</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="rounded scale" text="light">
              <Card.Img variant="top" src="./image.webp" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="outline-light">Voir plus...</Button>{" "}
                <Button variant="danger">Supprimer</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Blog;
