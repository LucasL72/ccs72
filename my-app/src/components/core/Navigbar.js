import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";

const Navigbar = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="Green rounded-bottom shadow p-3 mb-3 bg-white"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="Logo ccs72"
              src="../logo.png"
              width="150"
              height="50"
              className="d-inline-block"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Item>
                <Nav.Link href="/">Accueil</Nav.Link>
              </Nav.Item>
              <NavDropdown
                title="Nos Réalisations"
                id="collasible-nav-dropdown"
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
                <Nav.Link href="/#/Photos">Nos Photos</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/#/Contact">Contact</Nav.Link>
              </Nav.Item>{" "}
              <Nav.Item>
                <Nav.Link href="/#/admin">admin</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Navigbar;
