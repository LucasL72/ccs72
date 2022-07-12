import React from "react";
import MainLayout from "../layouts/MainLayout";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const Devis = () => {
  return (
    <div>
      <MainLayout>
        <Container>
          <h1 className="text-center ssligne">
            {" "}
            <RequestPageIcon sx={{ fontSize: 50 }} />
            Demande de Devis
          </h1>
          <Form>
            <FloatingLabel
              controlId="selectproduuits"
              label="Choisissez le produit"
              className="mb-3"
            >
              <Form.Select aria-label="Nos Réalisations">
                <option></option>
                <option>Carport Bois</option>
                <option>Charpente /Couvertures / Zingueries</option>
                <option>Pergolas Bois</option>
                <option>Velux</option>
              </Form.Select>
            </FloatingLabel>
            <Row>
              <Col md={6}>
                <FloatingLabel
                  controlId="name"
                  label="Votre nom"
                  className="mb-3"
                >
                  <Form.Control type="text" placeholder="Votre nom" />
                </FloatingLabel>
              </Col>
              <Col md={6}>
                <FloatingLabel
                  controlId="name"
                  label="Votre prénom"
                  className="mb-3"
                >
                  <Form.Control type="text" placeholder="Votre prénom" />
                </FloatingLabel>
              </Col>
            </Row>
            <FloatingLabel
              controlId="email"
              label="Votre Email"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="Votre Email" />
            </FloatingLabel>
            <FloatingLabel
              controlId="phone"
              label="Votre n° de téléphone"
              className="mb-3"
            >
              <Form.Control type="phone" placeholder="Votre n° de téléphone" />
            </FloatingLabel>
            <FloatingLabel
              controlId="adresse"
              label="Votre adresse"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Votre adresse" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput2"
              label="Votre message"
              className="mb-3"
            >
              <Form.Control as="textarea" rows={3} />
            </FloatingLabel>
            <div className="text-center">
              <button className="btn-grad mb-4" type="submit">
                Envoyer
              </button>
            </div>
          </Form>
        </Container>
      </MainLayout>
    </div>
  );
};

export default Devis;
