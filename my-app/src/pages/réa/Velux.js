import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ListBlog from "../../components/Admin/Blog/ListBlog";
import { getNews } from "../../store/actions/ArticlesActions";
import { Seo } from "../../components/Seo";

const Velux = () => {
  const dispatch = useDispatch();
  const listArticles = useSelector((state) => state.articles.listArticles);
  useEffect(() => {
    dispatch(getNews());
  }, []);

  return (
    <div>
      <MainLayout>
        <Seo
          title="Nos Velux | Charpente Converture de la Sarthe"
          description="Contactez-nous au 02 43 89 64 02 pour vos prochains projets d'installation de Velux. Nous sommes spécialisé dans la charpente,couverture, la zinguerie, les carport bois, les pergolas bois et les velux. Nous intervenons dans un rayon de 20 km autour du Mans et de Saint-Mars-la-Brière."
          type="webapp"
        />
        <Container>
          <h2 className="text-center ssligne">Velux</h2>

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
                Photos intérieur et extérieur de Velux (fenêtre de toit) posé
                chez un particulier.<br></br> Un Velux (fenêtre de toit) sert à
                apporter de la lumière naturelle et de l'air frais à une pièce
                située sous les combles d'un bâtiment. Elle peut également
                améliorer l'esthétique du toit.
              </p>
              <p className="text-center gras">
                Découvrez toute notre gamme de Velux.
              </p>
              <br></br>
              <div className="text-center">
                <a className="btn-grad" href="/Devis">
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
