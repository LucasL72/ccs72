import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import Button from "react-bootstrap/Button";
import EmailIcon from "@mui/icons-material/Email";
const FormContact = () => {
  return (
    <div>
      <h2 className="text-center ssligne mt-5">Nous contacter</h2>
      <Container>
        <Row>
          <Col md={6}>
            <Row>
              <Col md={8}>
                <p>
                  <AddLocationAltIcon color="success" sx={{ fontSize: 30 }} />{" "}
                  RN23 Le pré de l'étang, 72470 Saint-Mars-la-Brière
                </p>
              </Col>
              <Col md={4}>
                <p>
                  {" "}
                  <a
                    href="mailto: contact@ccs72.fr"
                    target="_blank"
                    rel="noreferrer"
                    className="linkb"
                  >
                    <EmailIcon color="success" sx={{ fontSize: 30 }} />
                    Nous contacter
                  </a>
                </p>
              </Col>
            </Row>
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
                <Form.Control
                  type="phone"
                  placeholder="Votre n° de téléphone"
                />
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
                <Button variant="outline-dark" type="submit">
                  Envoyer
                </Button>
              </div>
            </Form>
          </Col>
          <Col md={6}>
            <div className="map mb-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1334.1707834132549!2d0.3589225908531597!3d48.02642939761747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e2f4eeb66c036f%3A0x8eb4ba45a2bf2d72!2sEntreprise%20David!5e0!3m2!1sfr!2sfr!4v1657200927011!5m2!1sfr!2sfr"
                width="600"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default FormContact;
