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

const Pergolas = () => {
  const dispatch = useDispatch();
  const listArticles = useSelector((state) => state.articles.listArticles);
  useEffect(() => {
    dispatch(getNews());
  }, []);
  return (
    <div>
      <MainLayout>
        <Seo
          title="Nos Pergolas Bois | Charpente Converture de la Sarthe"
          description="Contactez-nous au 02 43 89 64 02 pour vos prochains projets de Pergolas en Bois. Nous sommes spécialisé dans la charpente,couverture, la zinguerie, les carport bois, les pergolas bois et les velux. Nous intervenons dans un rayon de 20 km autour du Mans et de Saint-Mars-la-Brière."
          type="webapp"
        />
        <Container>
          <h2 className="text-center ssligne">Pergolas Bois</h2>

          <Row>
            <Col md={6} className="d-flex justify-content-center">
              <img
                alt="pergolas"
                src="./images/pergolas.webp"
                className=" img-border img-fluid d-flex justify-content-center"
              ></img>
            </Col>

            <Col md={6} className="mt-5">
              <p className="justif">
                Si vous voulez profiter de votre jardin toute l’année,
                l’installation d’une pergola est très intéressante. Cet espace
                vous permettra de déstresser et de vous protéger du soleil, de
                la chaleur, de la pluie, etc. Grâce à une pergola, vous pouvez
                créer un espace ombragé sur votre terrasse ou encore dans votre
                jardin. Cette construction vous permet ainsi de profiter plus
                longtemps de l’extérieur.
              </p>
              <p className="text-center gras">
                Découvrez toute notre gamme de Pergolas bois.
              </p>
              <br></br>
              <div className="text-center">
                <a className="btn-grad" href="/Devis">
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

export default Pergolas;
