import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import EmailIcon from "@mui/icons-material/Email";
import { useDispatch } from "react-redux";
import { createMessage, getMessage } from "../store/actions/MessActions";

const FormContact = () => {
  const [produit, setProduit] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [adresse, setAdresse] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleForm = async (e) => {
    e.preventDefault();

    if (produit && nom && prenom && email && tel && adresse && content) {
      dispatch(
        createMessage({
          produit,
          nom,
          prenom,
          email,
          tel,
          adresse,
          content,
        })
      );
      setProduit("");
      setNom("");
      setPrenom("");
      setEmail("");
      setTel("");
      setAdresse("");
      setContent("");
      dispatch(getMessage());
      window.alert("Message envoyé ! ");
    }
  };

  return (
    <div>
      <h2 className="text-center ssligne mt-5">Nous contacter</h2>
      <Container>
        <Row>
          <Col md={6}>
            <Row>
              <Col md={8}>
                <a
                  href="https://www.google.fr/maps/place/CHARPENTE+COUVERTURE+DE+LA+SARTHE/@48.0262747,0.3587736,18.56z/data=!4m12!1m6!3m5!1s0x47e2f4eeb66c036f:0x8eb4ba45a2bf2d72!2sEntreprise+David!8m2!3d48.0264294!4d0.3596636!3m4!1s0x0:0xc922eef2da4e970c!8m2!3d48.0262394!4d0.3599685"
                  target="_blank"
                  rel="noreferrer"
                  className="linkb"
                >
                  <AddLocationAltIcon color="success" sx={{ fontSize: 30 }} />{" "}
                  RN23 Le pré de l'étang, 72470 Saint-Mars-la-Brière
                </a>
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
            <Form onSubmit={(e) => handleForm(e)}>
              <FloatingLabel
                controlId="selectproduuits"
                label="Choisissez le produit"
                className="mb-3"
              >
                <Form.Select
                  aria-label="Nos Réalisations"
                  value={produit}
                  onChange={(e) => setProduit(e.target.value)}
                >
                  <option></option>
                  <option>Carport Bois</option>
                  <option>Charpente /Couvertures / Zingueries</option>
                  <option>Pergolas Bois</option>
                  <option>Velux</option>
                  <option disabled>
                    --------------------------
                  </option>
                  <option>Envoyer un message</option>
                </Form.Select>
              </FloatingLabel>
              <Row>
                <Col md={6}>
                  <FloatingLabel
                    controlId="name"
                    label="Votre nom"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Votre nom"
                      value={nom}
                      onChange={(e) => setNom(e.target.value)}
                      required
                    />
                  </FloatingLabel>
                </Col>
                <Col md={6}>
                  <FloatingLabel
                    controlId="name"
                    label="Votre prénom"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Votre prénom"
                      value={prenom}
                      onChange={(e) => setPrenom(e.target.value)}
                      required
                    />
                  </FloatingLabel>
                </Col>
              </Row>
              <FloatingLabel
                controlId="email"
                label="Votre Email"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  placeholder="Votre Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="phone"
                label="Votre n° de téléphone"
                className="mb-3"
              >
                <Form.Control
                  type="phone"
                  placeholder="Votre n° de téléphone"
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
                  required

                />
              </FloatingLabel>
              <FloatingLabel
                controlId="adresse"
                label="Votre adresse"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Votre adresse"
                  value={adresse}
                  onChange={(e) => setAdresse(e.target.value)}
                  required
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput2"
                label="Décrivez nous votre Projet"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </FloatingLabel>
              <div className="text-center">
                <button className="btn-grad" type="submit">
                  Envoyer
                </button>
              </div>
            </Form>
          </Col>
          <Col md={6}>
            <div className="map mb-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1334.1707937057267!2d0.359664!3d48.02642900000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc922eef2da4e970c!2sCHARPENTE%20COUVERTURE%20DE%20LA%20SARTHE!5e0!3m2!1sfr!2sfr!4v1659082730063!5m2!1sfr!2sfr"
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
