import React from "react";
import MainLayout from "../layouts/MainLayout";
import FormContact from "../components/FormContact";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Events from "../components/Events";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEvent } from "../store/actions/EventActions";

const Contact = () => {
  const dispatch = useDispatch();
  const listEvents = useSelector((state) => state.events.listEvents);
  useEffect(() => {
    dispatch(getEvent());
  }, []);

  return (
    <div>
      <MainLayout>
        <div>
          <Container>
            <h1 className="text-center ssligne">
              Charpente Couverture de la Sarthe
            </h1>

            <Row>
              <Col md={6} className="d-flex justify-content-center mb-3 mt-3">
                <img
                  alt="carport"
                  src="./images/devanture.webp"
                  className=" img-boder img-fluid d-flex justify-content-center scale rounded"
                  width="500"
                ></img>
              </Col>

              <Col md={6} className="mb-4 mt-4">
                <h2 className="gras text-center">
                  Présentation de l'entreprise{" "}
                </h2>
                <p className="justif">
                  Le siège social{" "}
                  <b className="gras">
                    ,situé à Saint-Mars La Brière dans la Sarthe (72),
                  </b>{" "}
                  est visible et accessible facilement depuis la RN 23 axe Le
                  Mans / La Ferté Bernard.
                  <br></br> <br></br>Nous disposons également d’un bureau quai
                  Ledru Rollin au Mans (entre le tunnel et la rue Voltaire) où
                  nous recevons uniquement sur rendez-vous.
                  <br></br>
                  <br></br>
                  <b className="gras">
                    L' entreprise Charpente Couverture de la Sarthe
                  </b>{" "}
                  est une reprise de la SARL BOULAY Pascal située à Soulitré
                  (72370) depuis 18 ans.
                  <br></br> <br></br>L'équipe est composée de{" "}
                  <b className="gras">
                    {" "}
                    salariés qualifiés dont 1 chef d'équipe - formation
                    compagnon du devoir - 30 ans d'expérience, 2 ouvriers
                    qualifiés 13 ans et 9 ans d'expérience.
                  </b>
                  <br></br>
                  <br></br>
                  <b className="gras">Notre savoir faire : </b>{" "}
                  Charpente-Couverture-Zinguerie-Carport bois-Pergolas
                  bois-Velux
                </p>
                <h3 className="gras text-center">Ils nous soutiennent :</h3>
                <Row>
                  <Col md={2} className="text-center mb-3">
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
                        src="./images/cobat.webp"
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
                        src="./images/ffb.webp"
                        alt="logo ffb"
                        className="img-fluid"
                      ></img>
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>

        <Events list={listEvents} />

        <FormContact />
      </MainLayout>
    </div>
  );
};

export default Contact;
