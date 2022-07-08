import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="Footer rounded-top rounded-lg">
      <div className="text-center">
        <Nav.Link href="/">
          <img alt="Logo" src="../logo.png" width="125" height="50" />
        </Nav.Link>
      </div>
      <Container fluid>
        <div className="d-flex justify-content-center">
          <Row>
            <Col md={12}>
              {" "}
              <Nav>
                <Nav.Item>
                  <Nav.Link href="/">Accueil</Nav.Link>
                </Nav.Item>
                <NavDropdown
                  title="Nos Réalisations"
                  id="collasible-nav-dropdown"
                  className="text-decoration-none"
                >
                  <NavDropdown.Item href="/#/Carport">
                    Carport Bois
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/#/Charpente">
                    Charpente/Couvertures/Zingueries
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/#/Pergolas">
                    Pergolas Bois
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/#/Velux">Velux</NavDropdown.Item>
                </NavDropdown>
                <Nav.Item>
                  {" "}
                  <Nav.Link href="/#/Photos">Nos Photos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/#/Contact">Contact</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/#/admin">admin</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </div>

        <Col md={12}>
          <p className="text-center">
            Created by ©Lucas Ledoux 2022{" "}
            <a
              href="https://www.linkedin.com/in/lucas-ledoux-244b0a175/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon color="disabled" sx={{ fontSize: 30 }} />
            </a>{" "}
            <a className="link" href="/#/Cgu">
              Mentions légales
            </a>
          </p>
        </Col>
      </Container>
    </div>
  );
};
export default Footer;
