import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
const Intro = () => {
  return (
    <div>
      <Container>
        <Col md={12}>
          <br></br>
          <p className=" text-center txt-intro">
            Bienvenue sur le site de l'entreprise{" "}
            <span className="gras-intro">
              {" "}
              Charpente Couverture de la Sarthe
            </span>{" "}
            à <span className="gras-intro">Saint-Mars-la-Brière</span>. Nous
            sommes spécialisés dans la{" "}
            <span className="gras-intro">charpente</span>,{" "}
            <span className="gras-intro">couverture</span>,
            <span className="gras-intro">zinguerie</span>,{" "}
            <span className="gras-intro">carport et pergolas bois</span> ainsi
            que les <span className="gras-intro">Velux</span>. Avec nos 18
            années d'expérience et une équipe de professionnels qualifié, nous
            vous offrons des solutions durables et esthétiques pour tous vos
            besoins en construction.
          </p>
          <div className="text-center mb-5">
            <span className="gras-intro">Notre savoir faire :</span>
          </div>
        </Col>
      </Container>
    </div>
  );
};

export default Intro;
