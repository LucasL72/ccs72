import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import PhoneIcon from "@mui/icons-material/Phone";
import React from "react";
import ModalCon from "../Modals/ModalCon";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
const Navigbar = () => {
  
  const [modalconShow, setModalconShow] = React.useState(false);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="Green rounded-bottom shadow p-3 bg-white"
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
                <Nav.Link href="/#/Blog">Notre Blog</Nav.Link>
              </Nav.Item>{" "}
              <Nav.Item>
                <Nav.Link href="/#/Photos">Nos Photos</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/#/Contact"> À propos de Nous</Nav.Link>
              </Nav.Item>{" "}
              <Nav.Item>
                <Nav.Link href="/#/admin">admin</Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav className="mx-auto">
              <a className="btn-grad" href="tel: 02 43 89 64 02">
                <PhoneIcon /> 02 43 89 64 02
              </a>{" "}
            </Nav>
            <Nav>
              <a className="btn-grad" href="/#/Devis">
                Avoir son devis
              </a>
            </Nav>
            <Nav>
              <button
                className="btn-grad"
                onClick={() => setModalconShow(true)}
              >
                {" "}
                <AccountBoxIcon sx={{ fontSize: 30 }} />{" "}
              </button>
              <ModalCon
                show={modalconShow}
                onHide={() => setModalconShow(false)}
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Navigbar;
