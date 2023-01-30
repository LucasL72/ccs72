import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const Réalisations = () => {
  return (
    <div>
      <Container>
        <h3 className="text-center ssligne"> Nos réalisations</h3>
        <Row>
          <Col md={6}>
            <div className="vign-rea text-center">
              <h3 className="ssligne3">Carport Bois</h3>{" "}
              <a href="/Carport">
                <img
                  alt="icon carport  ccs72"
                  src="../images/icon-carport.webp"
                />{" "}
              </a>
              <p>
                {" "}
                Pour protéger votre voiture, caravane ou votre camping-car.
              </p>
            </div>
          </Col>

          <Col md={6}>
            <div className="vign-rea text-center">
              <h3 className="ssligne3">Charpente-Couverture-Zinguerie</h3>
              <a href="/Charpente">
                <img
                  alt="icon toiture ccs72"
                  src="../images/icon-toiture.webp"
                />{" "}
              </a>
              <p>
                Pour rénover votre charpente ou votre couverture ou la
                réalisation ou l'entretien de vos gouttières, cheneaux, lucarne,
                etc...
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div className="vign-rea text-center">
              <h3 className="ssligne3">Pergolas Bois</h3>
              <a href="/Pergolas">
                <img
                  alt="icon pergola ccs72"
                  src="../images/icon-pergola.webp"
                />{" "}
              </a>
              <p>Pour profiter encore plus de votre jardin l'été.</p>
            </div>
          </Col>
          <Col md={6}>
            <div className="vign-rea text-center">
              <h3 className="ssligne3">Fenêtre de toit</h3>
              <div className="text-center">
                <a href="/Velux">
                  <img alt="icon velux ccs72" src="../images/icon-velux.webp" />{" "}
                </a>
              </div>
              <p>
                Pour profiter de la lumière du jour partout dans votre maison.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Réalisations;
