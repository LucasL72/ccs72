import React from "react";
import MainLayout from "../layouts/MainLayout";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { urlImgArt } from "../utils/url";
import Moment from "react-moment";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "moment-timezone";
import "moment/locale/fr";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BlogID = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const toBlog = async (id) => {
    navigate("/Blog");
  };

  useEffect(() => {
    if (!state) navigate("/Blog");
  }, [navigate, state]);

  return (
    <div>
      <MainLayout>
        <Container>
          <h1 className="text-center ssligne text-break">
            {state && state.item.title}
          </h1>
          <Row>
            <Col md={12} className="d-flex img-border justify-content-center mb-4">
              <img
                src={`${urlImgArt + state.item.imgarticle}`}
                alt={state && state.item.title}
                width="600"
                height="400"
                className=" img-border img-fluid d-flex justify-content-center"
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
          <div className="text-start">
            <Button variant="dark" className="mb-3"   onClick={() => toBlog()}>
             <ArrowBackIcon sx={{ fontSize: 30 }} />
            </Button>
          </div>
        </Container>
      </MainLayout>
    </div>
  );
};

export default BlogID;
