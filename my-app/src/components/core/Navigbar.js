import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import PhoneIcon from "@mui/icons-material/Phone";
import AssignmentIcon from "@mui/icons-material/Assignment";
import React from "react";
import ModalCon from "../Modals/ModalCon";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CancelIcon from "@mui/icons-material/Cancel";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import FacebookIcon from "@mui/icons-material/Facebook";

const Navigbar = () => {
  const CheckLoggedIn = () => {
    const [modalconShow, setModalconShow] = React.useState(false);
    const navigate = useNavigate();
    const logout = () => {
      localStorage.setItem("user_token", "visitor");
      navigate("/");
      window.location.reload();
    };
    const userToken = localStorage.getItem("user_token");

    if (!userToken)
      return (
        <>
          <Nav>
            <Nav.Item>
              <Nav.Link className="mx-auto" href="/">
                Accueil
              </Nav.Link>
            </Nav.Item>
            <NavDropdown
              className="mx-auto"
              title="Nos Réalisations"
              id="collasible-nav-dropdown"
              href="/Réalisations"
            >
              <NavDropdown.Item href="/Carport">Carport Bois</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Charpente">
                Charpente-Couvertures-Zingueries
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Pergolas">
                Pergolas Bois
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Velux">Velux</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
              <Nav.Link href="/Blog">Blog</Nav.Link>
            </Nav.Item>{" "}
            <Nav.Item className="mx-auto">
              <Nav.Link href="/Photos">Galerie</Nav.Link>
            </Nav.Item>
            <Nav.Item className="mx-auto">
              <Nav.Link href="/Contact">Contact</Nav.Link>
            </Nav.Item>{" "}
          </Nav>
          <Nav className="mx-auto">
            <a
              className="linko"
              href="https://www.facebook.com/CharpenteCouvertureSarthe72"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon sx={{ fontSize: 50 }} />
            </a>
          </Nav>
          <Nav className="mx-auto">
            <a className="btn-grad" href="tel: 02 43 89 64 02">
              <PhoneIcon />
              0243896402
            </a>{" "}
          </Nav>
          <Nav className="mx-auto">
            <a className="btn-grad" href="/Devis">
              <AssignmentIcon />
              Devis
            </a>
          </Nav>
          <Nav>
            <button className="btn-grad" onClick={() => setModalconShow(true)}>
              {" "}
              <AccountBoxIcon sx={{ fontSize: 30 }} />{" "}
            </button>
            <ModalCon
              show={modalconShow}
              onHide={() => setModalconShow(false)}
            />
          </Nav>
        </>
      );
    else if (userToken == "visitor")
      return (
        <>
          <Nav>
            <Nav.Item className="mx-auto">
              <Nav.Link href="/">Accueil</Nav.Link>
            </Nav.Item>
            <NavDropdown
              className="mx-auto"
              title="Nos Réalisations"
              id="collasible-nav-dropdown"
              href="/Réalisations"
            >
              <NavDropdown.Item href="/Carport">Carport Bois</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Charpente">
                Charpente-Couvertures-Zingueries
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Pergolas">
                Pergolas Bois
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Velux">Velux</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item className="mx-auto">
              <Nav.Link href="/Blog">Blog</Nav.Link>
            </Nav.Item>{" "}
            <Nav.Item className="mx-auto">
              <Nav.Link href="/Photos">Galerie</Nav.Link>
            </Nav.Item>
            <Nav.Item className="mx-auto">
              <Nav.Link href="/Contact"> Contact</Nav.Link>
            </Nav.Item>{" "}
          </Nav>
          <Nav className="mx-auto">
            <a
              className="linko"
              href="https://www.facebook.com/CharpenteCouvertureSarthe72"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon sx={{ fontSize: 50 }} />
            </a>
          </Nav>
          <Nav className="mx-auto">
            <a className="btn-grad" href="tel: 02 43 89 64 02">
              <PhoneIcon />
              0243896402
            </a>{" "}
          </Nav>
          <Nav className="mx-auto">
            <a className="btn-grad" href="/Devis">
              <AssignmentIcon />
              Devis
            </a>
          </Nav>
          <Nav>
            <button className="btn-grad" onClick={() => setModalconShow(true)}>
              {" "}
              <AccountBoxIcon sx={{ fontSize: 30 }} />{" "}
            </button>
            <ModalCon
              show={modalconShow}
              onHide={() => setModalconShow(false)}
            />
          </Nav>
        </>
      );
    else if (
      jwt_decode(userToken).isVerified === 1 &&
      jwt_decode(userToken).isAdmin === 1
    )
      return (
        <>
          <Nav>
            <Nav.Item className="mx-auto">
              <Nav.Link href="/">Accueil</Nav.Link>
            </Nav.Item>
            <NavDropdown
              className="mx-auto"
              title="Nos Réalisations"
              id="collasible-nav-dropdown"
              href="/Réalisations"
            >
              <NavDropdown.Item href="/Carport">Carport Bois</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Charpente">
                Charpente-Couvertures-Zingueries
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Pergolas">
                Pergolas Bois
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Velux">Velux</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item className="mx-auto">
              <Nav.Link href="/Blog">Blog</Nav.Link>
            </Nav.Item>{" "}
            <Nav.Item className="mx-auto">
              <Nav.Link href="/Photos">Galerie</Nav.Link>
            </Nav.Item>
            <Nav.Item className="mx-auto">
              <Nav.Link href="/Contact">Contact</Nav.Link>
            </Nav.Item>{" "}
            <Nav.Item className="mx-auto">
              <Nav.Link href="/admin">admin</Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="mx-auto">
            <p className="text-center user">{jwt_decode(userToken).email}</p>
          </Nav>
          <Nav className="mx-auto">
            <a className="btn-grad" href="/Devis">
              <AssignmentIcon />
              Devis
            </a>
          </Nav>
          <Nav>
            <button className="btn-grad" onClick={logout}>
              {" "}
              <CancelIcon />{" "}
            </button>
          </Nav>
        </>
      );
    else
      return (
        <>
          <Nav>
            <Nav.Item>
              <Nav.Link href="/">Accueil</Nav.Link>
            </Nav.Item>
            <NavDropdown title="Nos Réalisations" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/Carport">Carport Bois</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Charpente">
                Charpente-Couvertures-Zingueries
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Pergolas">
                Pergolas Bois
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Velux">Velux</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
              <Nav.Link href="/Blog">Blog</Nav.Link>
            </Nav.Item>{" "}
            <Nav.Item>
              <Nav.Link href="/Photos">Galerie</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/Contact">Contact</Nav.Link>
            </Nav.Item>{" "}
          </Nav>
          <Nav className="mx-auto">
            <a
              className="linko"
              href="https://www.facebook.com/CharpenteCouvertureSarthe72"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon sx={{ fontSize: 50 }} />
            </a>
          </Nav>
          <Nav className="mx-auto">
            <a className="btn-grad" href="tel: 02 43 89 64 02">
              <PhoneIcon /> 0243896402
            </a>{" "}
          </Nav>
          <Nav className="mx-auto">
            <a className="btn-grad" href="/Devis">
              <AssignmentIcon />
              Devis
            </a>
          </Nav>
          <Nav>
            <button className="btn-grad" onClick={() => setModalconShow(true)}>
              {" "}
              <AccountBoxIcon sx={{ fontSize: 30 }} />{" "}
            </button>
            <ModalCon
              show={modalconShow}
              onHide={() => setModalconShow(false)}
            />
          </Nav>
        </>
      );
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="Green bg-white"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="Logo ccs72"
              src="../logo1.png"
              width="180"
              height="60"
              className="d-inline-block"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <CheckLoggedIn />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Navigbar;
