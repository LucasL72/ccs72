import React, { useState, useRef } from "react";
import MainLayout from "../layouts/MainLayout";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useDispatch } from "react-redux";
import { createMessage, getMessage } from "../store/actions/MessActions";
import ReCAPTCHA from "react-google-recaptcha";
const Devis = () => {
  const [produit, setProduit] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [adresse, setAdresse] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const captchaRef = useRef(null);

  const handleForm = async (e) => {
    e.preventDefault();
    const token = captchaRef.current.getValue();
    captchaRef.current.reset();

    if (
      produit &&
      nom &&
      prenom &&
      email &&
      tel &&
      adresse &&
      content &&
      token
    ) {
      dispatch(
        createMessage({
          produit,
          nom,
          prenom,
          email,
          tel,
          adresse,
          content,
          token,
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
      <MainLayout>
        <Container>
          <h2 className="text-center ssligne">
            {" "}
            <RequestPageIcon sx={{ fontSize: 50 }} />
            Demande de Devis
          </h2>

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

            <Form.Check
              type="checkbox"
              id="checkbox"
              label="En envoyant ce formulaire, vous consentez à la collecte de vos données personnelles afin que votre demande puisse être traîtée"
              required
            />
            <ReCAPTCHA
              sitekey={process.env.REACT_APP_KEY}
              ref={captchaRef}
              render="explicit"
            ></ReCAPTCHA>

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
