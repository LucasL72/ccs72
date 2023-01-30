import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ListBlog from "../../components/Admin/Blog/ListBlog";
import { getNews } from "../../store/actions/ArticlesActions";

const Velux = () => {
  const dispatch = useDispatch();
  const listArticles = useSelector((state) => state.articles.listArticles);
  useEffect(() => {
    dispatch(getNews());
  }, []);

  return (
    <div>
      <MainLayout>
        <Container>
          <h2 className="text-center ssligne">Fenêtre de toit</h2>

          <Row>
            <Col md={6} className="d-flex justify-content-center">
              <img
                alt="carport"
                src="./images/9.webp"
                className=" img-border img-fluid d-flex justify-content-center"
              ></img>
            </Col>
            <Col md={6} className="d-flex justify-content-center">
              <img
                alt="carport"
                src="./images/velux2.webp"
                className=" img-border img-fluid d-flex justify-content-center"
              ></img>
            </Col>
            <Col md={12} className="mt-3">
              <p className="text-center">
                Photos intérieur et extérieur de fenêtre de toit posé chez un
                particulier.<br></br> Une fenêtre de toit sert à apporter de la lumière
                naturelle et de l'air frais à une pièce située sous les combles
                d'un bâtiment. Elle peut également améliorer l'esthétique du
                toit.
              </p>
              <p className="text-center gras">
                Découvrez toute notre gamme de fenêtre de toit.
              </p>
              <br></br>
              <div className="text-center">
                <a className="btn-grad" href="/#/Devis">
                  Avoir son devis
                </a>
              </div>
            </Col>
          </Row>

          <br></br>
        </Container>

        <h3 className="text-center ssligne mt-2">Récents</h3>
        <ListBlog list={listArticles} />
      </MainLayout>
    </div>
  );
};

export default Velux;
