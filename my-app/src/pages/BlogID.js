import React from "react";
import MainLayout from "../layouts/MainLayout";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { urlImgArt } from "../utils/url";
import Moment from "react-moment";
import "moment-timezone";
import "moment/locale/fr";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BlogID = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) navigate("/Blog");
  }, [navigate, state]);

  return (
    <div>
      <MainLayout>
        <Container>
          <h1 className="text-center ssligne text-break">{state && state.item.title}</h1>
          <Row>
            <Col md={12} className="d-flex justify-content-center mb-4">
              <img
                src={`${urlImgArt + state.item.imgarticle}`}
                alt={state && state.item.title}
                width="700"
                height="550"
                className=" img-boder img-fluid d-flex justify-content-center"
              ></img>
            </Col>

            <Col md={12}>
              <p className="justif">{state && state.item.contenu}</p>
              <p className="justif text-light">
                Publié par {state && state.item.auteur} le{" "}
                <Moment
                  locale="fr"
                  tz="Europe/Paris"
                  format="DD MMMM YYYY à HH:mm"
                >
                  {state && state.item.dateart}
                </Moment>{" "}
              </p>
            </Col>
          </Row>
        </Container>
      </MainLayout>
    </div>
  );
};

export default BlogID;
