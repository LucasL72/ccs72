import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const Réalisations = () => {
  return (
    <div>
      <Container>
        <div className="mb-5">
          <Row>
            <Col md={6}>
              <div className="vign-rea text-center">
                <a className="rea-lien" href="/Charpente">
                  <h2 className="ssligne3">Charpente-Couverture-Zinguerie</h2>
                  <img
                    alt="icon toiture ccs72"
                    src="../images/icon-toiture.webp"
                  />{" "}
                </a>
                <p className="text-rea">
                  Pour rénover votre charpente , couverture ou la réalisation de
                  l'entretien de vos gouttières, cheneaux et lucarnes.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="vign-rea text-center">
                <a className="rea-lien" href="/Carport">
                  <h2 className="ssligne3">Carport Bois</h2>{" "}
                  <img
                    alt="icon carport  ccs72"
                    src="../images/icon-carport.webp"
                  />{" "}
                </a>
                <p className="text-rea">
                  {" "}
                  Pour protéger votre voiture, caravane ou votre camping-car.
                  Opter pour nos carport en bois.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className="vign-rea text-center">
                <a className="rea-lien" href="/Pergolas">
                  <h2 className="ssligne3">Pergolas Bois</h2>
                  <img
                    alt="icon pergola ccs72"
                    src="../images/icon-pergola.webp"
                  />{" "}
                </a>
                <p className="text-rea">
                  Pour profiter encore plus de votre jardin l'été. Optez pour
                  nos pergolas en bois.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="vign-rea text-center">
                <a className="rea-lien" href="/Velux">
                  <h2 className="ssligne3">Fenêtre de toit</h2>
                  <img
                    alt="icon velux ccs72"
                    src="../images/icon-velux.webp"
                  />{" "}
                </a>

                <p className="text-rea">
                  Pour profiter de la lumière du jour partout dans votre maison.
                  Optez pour nos fenêtres de toit.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Réalisations;
