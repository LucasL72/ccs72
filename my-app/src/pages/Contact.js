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
            <br></br>
            <h2 className="text-center ssligne">
              Charpente Couverture de la Sarthe
            </h2>

            <Row>
              <Col md={6} className="d-flex justify-content-center mb-3 mt-3">
                <img
                  alt="carport"
                  src="./images/devanture.webp"
                  className=" img-boder img-fluid d-flex justify-content-center rounded"
                  width="500"
                ></img>
              </Col>

              <Col md={6} className="mb-4 mt-4">
                <h3 className=" text-center ssligne3">
                  Présentation de l'entreprise{" "}
                </h3>
                <p className="justif">
                  Le siège social ,situé à{" "}
                  <span className="gras">Saint-Mars-La-Brière,</span> dans la{" "}
                  <span className="gras">Sarthe (72)</span>, est visible et
                  accessible facilement depuis la RN 23 axe Le Mans / La Ferté
                  Bernard.
                  <br></br> <br></br>Nous disposons également d’un bureau quai
                  Ledru Rollin au Mans (entre le tunnel et la rue Voltaire) où
                  nous recevons uniquement sur rendez-vous.
                  <br></br>
                  <br></br>
                  L' entreprise {""}
                  <span className="gras">
                    Charpente Couverture de la Sarthe
                  </span>{" "}
                  est une reprise de la SARL BOULAY Pascal située à Soulitré
                  (72370) depuis 18 ans.
                  <br></br> <br></br>L'équipe est composée de{" "}
                  <span className="gras">
                    {" "}
                    salariés qualifiés dont 1 chef d'équipe (formation compagnon
                    du devoir avec 30 ans d'expérience), 2 ouvriers qualifiés
                    (13 ans et 9 ans d'expérience).
                  </span>
                  <br></br>
                  <br></br>
                  <span className="gras">Notre savoir faire : </span>{" "}
                  Charpente-Couverture-Zinguerie-Carport bois-Pergolas
                  bois- fenêtre de toit.
                </p>
                <p className=" gras text-center">Ils nous soutiennent :</p>
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
        <h4 className="text-center ssligne mt-5 mb-3">Nous contacter</h4>
        <FormContact />
      </MainLayout>
    </div>
  );
};

export default Contact;
