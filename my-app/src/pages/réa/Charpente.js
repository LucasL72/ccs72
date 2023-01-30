import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ListBlog from "../../components/Admin/Blog/ListBlog";
import { getNews } from "../../store/actions/ArticlesActions";

const Charpente = () => {
  const dispatch = useDispatch();
  const listArticles = useSelector((state) => state.articles.listArticles);
  useEffect(() => {
    dispatch(getNews());
  }, []);

  return (
    <div>
      <MainLayout>
        <Container>
          <h2 className="text-center ssligne">
            Charpente-Couverture-Zinguerie
          </h2>

          <Row>
            <Col md={6} className="d-flex justify-content-center">
              <img
                alt="carport"
                src="./images/charpentefix.webp"
                height="300"
                className=" img-border img-fluid d-flex justify-content-center"
              ></img>
            </Col>

            <Col md={6} className="mt-5">
              <p className="justif">
                <b className="gras">Notre métier de charpentier bois :</b> Nous
                intervenons sur les charpentes traditionnelles et/ou fermette,
                pour des réparations, renforcement, surélévations, création de
                lucarnes, transformation de surface de combles non aménagés en
                combles aménageables, etc... <br></br>
                <b className="gras">Notre métier de couvreur :</b> Que vous ayez
                une couverture en ardoise, tuiles plate, tuiles mécaniques,
                toiture zinc, ou encore toit plat, nous pouvons vous accompagner
                pour sa réalisation. Entretien: Nous pouvons réaliser le
                démoussage de votre toiture et effectuer diverses réparations.
                Vous pouvez nous confiez la pose de femêtre de toit (velux).
                <br></br> <b className="gras">Notre métier de zingueur :</b>{" "}
                Pour la réalisation ou l'entretien de vos gouttières, cheneaux,
                lucarne, etc...
              </p>
              <br></br>
              <div className="text-center">
                <a className="btn-grad" href="/#/Devis">
                  Avoir son devis
                </a>
              </div>
            </Col>
          </Row>
        </Container>

        <h3 className="text-center ssligne mt-3">Découvrez notre actualité</h3>
        <ListBlog list={listArticles} />
      </MainLayout>
    </div>
  );
};

export default Charpente;
