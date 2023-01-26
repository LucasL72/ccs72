import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ListBlog from "../../components/Admin/Blog/ListBlog";
import { getNews } from "../../store/actions/ArticlesActions";

const Carport = () => {
  const dispatch = useDispatch();
  const listArticles = useSelector((state) => state.articles.listArticles);
  useEffect(() => {
    dispatch(getNews());
  }, []);

  return (
    <div>
      <MainLayout>
        <Container>
          <h1 className="text-center ssligne">Carport Bois</h1>

          <Row>
            <Col md={6} className="d-flex justify-content-center">
              <img
                alt="carport"
                src="./images/carport.webp"
                className=" img-border img-fluid d-flex justify-content-center"
              ></img>
            </Col>

            <Col md={6} className="mt-5">
              <p className="justif">
                Un carport est une installation permettant de protéger la
                voiture des aléas climatiques et des éventuelles chutes de
                branches. En y mettant votre véhicule dessous, vous n’aurez pas
                à déblayer la neige tombée dessus chaque matin. Par ailleurs, en
                plus d’être en retard, vous risquez de rayer la peinture de
                votre carrosserie au cours de cette tâche. Les jours de pluie,
                votre voiture sera également à l’abri. Le carport se caractérise
                par des piliers porteurs fixés dans un sol bétonné et une
                toiture plate, en pente ou triangulaire.
              </p>
              <p className="gras text-center">
                {" "}
                Découvrez toute notre gamme de Carport bois.
              </p>
              <br></br>
              <div className="text-center">
                <a className="btn-grad" href="/#/Devis">
                  Avoir son devis
                </a>
              </div>
            </Col>
          </Row>

          <h1 className="text-center ssligne mt-3">Découvrez notre actualité</h1>
          <ListBlog list={listArticles} />
        </Container>
      </MainLayout>
    </div>
  );
};

export default Carport;
