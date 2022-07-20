import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import EmailIcon from "@mui/icons-material/Email";
import jwt_decode from "jwt-decode";

const Footer = () => {
  const CheckLoggedInFooter = () => {
    const userToken = localStorage.getItem("user_token");
    if (!userToken)
      return (
        <>
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
              <Nav.Link href="/#/Blog">Notre Blog</Nav.Link>
            </Nav.Item>{" "}
            <Nav.Item>
              <Nav.Link href="/#/Photos">Nos Photos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/#/Contact">À propos de Nous</Nav.Link>
            </Nav.Item>
          </Nav>
        </>
      );
    else if (userToken === "visitor")
      return (
        <>
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
              <Nav.Link href="/#/Blog">Notre Blog</Nav.Link>
            </Nav.Item>{" "}
            <Nav.Item>
              <Nav.Link href="/#/Photos">Nos Photos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/#/Contact">À propos de Nous</Nav.Link>
            </Nav.Item>
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
              <Nav.Link href="/#/Blog">Notre Blog</Nav.Link>
            </Nav.Item>{" "}
            <Nav.Item>
              <Nav.Link href="/#/Photos">Nos Photos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/#/Contact">À propos de Nous</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/#/admin">admin</Nav.Link>
            </Nav.Item>
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
              <Nav.Link href="/#/Blog">Notre Blog</Nav.Link>
            </Nav.Item>{" "}
            <Nav.Item>
              <Nav.Link href="/#/Photos">Nos Photos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/#/Contact">À propos de Nous</Nav.Link>
            </Nav.Item>
          </Nav>
        </>
      );
  };

  return (
    <div className="Footer rounded-top">
      <Container fluid>
        <div className="text-center">
          <Nav.Link href="/">
            <img alt="Logo" src="../logo.png" width="125" height="50" />
          </Nav.Link>
        </div>
        <Row>
          <Col md={6}>
            <div className="d-flex justify-content-center">
              <Row>
                <Col md={12}>
                  {" "}
                  <CheckLoggedInFooter />
                </Col>
              </Row>
            </div>
            <Row>
              <Col md={2} className="text-center">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.groupe-sma.fr/SGM/jcms/ji2_56854/fr/decouvrez-smabtp"
                >
                  <img
                    src="./images/smabtp.webp"
                    alt="logo smabtp"
                    className="rounded-circle img-fluid"
                  ></img>
                </a>
              </Col>
              <Col md={5} className="text-center">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.orcab.coop/cooperatives/cobat"
                >
                  <img
                    src="./images/cobat.jpg"
                    alt="logo cobat"
                    className="img-fluid"
                  ></img>
                </a>
              </Col>
              <Col md={3} className="text-center">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.artipole.fr/"
                >
                  <img
                    src="./images/Artipole.webp"
                    alt="logo artipole"
                    className="img-fluid"
                  ></img>
                </a>
              </Col>
              <Col md={2} className="text-center">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.ffbatiment.fr/"
                >
                  <img
                    src="./images/ffb.png"
                    alt="logo ffb"
                    className="img-fluid"
                  ></img>
                </a>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <h4 className="text-center ssligne2"> Contact</h4>

            <div className="text-center">
              <a className="linkw" href="tel: 02 43 89 64 02">
                <PhoneIcon /> 02 43 89 64 02
              </a>{" "}
              <a
                href="mailto: contact@ccs72.fr"
                target="_blank"
                rel="noreferrer"
                className="linkw"
              >
                <EmailIcon sx={{ fontSize: 30 }} />
                Nous contacter
              </a>
            </div>
            <Col md={12} className="d-flex justify-content-center">
              <a
                href="https://www.google.fr/maps/place/CHARPENTE+COUVERTURE+DE+LA+SARTHE/@48.0262747,0.3587736,18.56z/data=!4m12!1m6!3m5!1s0x47e2f4eeb66c036f:0x8eb4ba45a2bf2d72!2sEntreprise+David!8m2!3d48.0264294!4d0.3596636!3m4!1s0x0:0xc922eef2da4e970c!8m2!3d48.0262394!4d0.3599685"
                target="_blank"
                rel="noreferrer"
                className="linkw"
              >
                <AddLocationAltIcon sx={{ fontSize: 30 }} /> RN23 Le pré de
                l'étang, 72470 Saint-Mars-la-Brière
              </a>
            </Col>
          </Col>
        </Row>

        <Col md={12}>
          <div className="text-center">
            Created by ©Lucas Ledoux 2022{" "}
            <a
              href="https://www.linkedin.com/in/lucas-ledoux-244b0a175/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon color="disabled" sx={{ fontSize: 30 }} />
            </a>{" "}
            <a className="linkw" href="/#/Cgu">
              Mentions légales
            </a>
          </div>
        </Col>
      </Container>
    </div>
  );
};
export default Footer;
