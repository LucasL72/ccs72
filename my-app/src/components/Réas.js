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
            <p className="text-center">carport bois</p>
          </Col>
          <Col md={6}>
            <p className="text-center">charpente -couverture - zinguerie</p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <p className="text-center">pergolas bois</p>
          </Col>
          <Col md={6}>
            <p className="text-center">Velux</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Réalisations;
